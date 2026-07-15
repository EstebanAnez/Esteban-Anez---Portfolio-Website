/* ============================================================
   main.js, global behavior: theme, navigation, reveal-on-scroll,
   FAQ accordion, contact form (Formspree or mailto fallback).
   No dependencies. Works over file:// and GitHub Pages.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Theme (persisted in localStorage) ---------- */
  var THEME_KEY = 'eav-theme';

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f3f1e9' : '#0c0d11');
  }

  function storedTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }

  // Apply saved theme as early as possible (script is loaded with defer,
  // and an inline snippet in <head> also applies it to avoid flashes).
  applyTheme(storedTheme() || 'dark');

  function initThemeToggle() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isLight = document.documentElement.getAttribute('data-theme') === 'light';
      var next = isLight ? 'dark' : 'light';
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* private mode */ }
      btn.setAttribute('aria-pressed', String(next === 'light'));
    });
  }

  /* ---------- Mobile navigation ---------- */
  function initNav() {
    var burger = document.querySelector('.nav-burger');
    var links = document.getElementById('nav-links');
    if (!burger || !links) return;
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  /* ---------- Reveal on scroll (respects reduced motion) ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    var buttons = document.querySelectorAll('.faq-q');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        var panel = document.getElementById(btn.getAttribute('aria-controls'));
        btn.setAttribute('aria-expanded', String(!expanded));
        if (panel) panel.hidden = expanded;
      });
    });
  }

  /* ---------- Contact form ----------
     CONFIGURATION:
     1. Recommended, Formspree: create a free form at https://formspree.io,
        then paste your endpoint below, e.g.
        var FORMSPREE_ENDPOINT = 'https://formspree.io/f/yourFormId';
     2. If the endpoint is left empty, the form falls back to opening the
        visitor's email client via mailto: using CONTACT_EMAIL.
     Do not put secrets or API keys in this file.                     */
  var FORMSPREE_ENDPOINT = ''; // <-- paste your Formspree endpoint here
  var CONTACT_EMAIL = 'estebana.velarde@gmail.com';

  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    var status = document.getElementById('form-status');

    function setStatus(msg, state) {
      if (!status) return;
      status.textContent = msg;
      status.setAttribute('data-state', state || '');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get('name') || '').toString().trim();
      var email = (data.get('email') || '').toString().trim();
      var org = (data.get('organization') || '').toString().trim();
      var reason = (data.get('reason') || '').toString();
      var message = (data.get('message') || '').toString().trim();

      if (!name || !email || !message) {
        setStatus('Please complete the name, email, and message fields.', 'error');
        return;
      }

      if (FORMSPREE_ENDPOINT) {
        setStatus('Sending…', '');
        fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data
        })
          .then(function (res) {
            if (res.ok) {
              form.reset();
              setStatus('Message sent. Thank you, I will reply soon.', 'ok');
            } else {
              setStatus('The form service returned an error. Please email me directly instead.', 'error');
            }
          })
          .catch(function () {
            setStatus('Could not reach the form service. Please email me directly instead.', 'error');
          });
      } else {
        // mailto: fallback, opens the visitor's email client with the
        // message pre-filled. Works with no backend and no form service.
        var subject = '[Portfolio] ' + (reason || 'Message') + ', ' + name;
        var bodyLines = [
          'Name: ' + name,
          'Email: ' + email,
          org ? 'Organization: ' + org : '',
          reason ? 'Reason: ' + reason : '',
          '',
          message
        ].filter(Boolean);
        var href =
          'mailto:' + encodeURIComponent(CONTACT_EMAIL) +
          '?subject=' + encodeURIComponent(subject) +
          '&body=' + encodeURIComponent(bodyLines.join('\n'));
        window.location.href = href;
        setStatus('Your email client should open with the message pre-filled. If it does not, email me directly.', 'ok');
      }
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = document.getElementById('copyright-year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initNav();
    initReveal();
    initFaq();
    initContactForm();
    initYear();
  });
})();
