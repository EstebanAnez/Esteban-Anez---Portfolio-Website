/* ============================================================
   projects.js, project data + rendering.
   ------------------------------------------------------------
   HOW TO EDIT YOUR PROJECTS
   All project content lives in the `portfolioData.projects` array
   below. Edit, add, or remove objects to update the site, no other
   file needs to change. Every field is optional except `id` and
   `title`; empty fields are simply not displayed.

   IMPORTANT: the data must stay embedded in this file. Do not move
   it to a JSON file loaded with fetch(), fetch() is blocked when
   the site is opened directly from the file system (file://).
   ============================================================ */

var portfolioData = {
  projects: [
    {
      id: 'equityiq',
      title: 'EquityIQ: AI Equity Research Assistant',
      summary:
        'A conversational AI agent that answers equity research questions using live market data, news, and document retrieval.',
      description:
        'EquityIQ is a deployed AI application that lets a user ask natural-language questions about public companies and receive grounded answers. A LangGraph agent orchestrates a set of purpose-built tools: market data through yfinance, current headlines through NewsAPI, and retrieval-augmented answers over reference documents indexed in a FAISS vector store. The app is served through a Streamlit interface with persistent conversation history.',
      image: 'assets/projects/project-placeholder-03.png',
      imageAlt: 'Stylized data pipeline graphic representing the EquityIQ agent architecture',
      category: 'Business Analytics',
      date: '2026',
      organization: 'Independent project',
      context: 'Personal portfolio project, designed, built, and deployed end to end',
      problem:
        'Basic equity research requires jumping between separate sources for prices, fundamentals, filings context, and news, which slows down early-stage analysis.',
      objective:
        'Build a single conversational interface that consolidates market data, news, and document knowledge into direct, sourced answers.',
      process: [
        'Defined the research questions the agent should handle and mapped each to a dedicated tool',
        'Built LangChain tools for market data (yfinance), news retrieval (NewsAPI), and document Q&A',
        'Indexed reference documents in a FAISS vector store with OpenAI embeddings for retrieval-augmented answers',
        'Orchestrated the tools with a LangGraph ReAct agent and managed conversation state across turns',
        'Deployed the application publicly on Streamlit Community Cloud with secrets managed outside the codebase'
      ],
      tools: ['Python', 'LangGraph', 'LangChain', 'OpenAI API', 'FAISS', 'yfinance', 'NewsAPI', 'Streamlit'],
      skills: ['AI application development', 'Financial data analysis', 'Retrieval-augmented generation', 'Product thinking'],
      results: [
        'Working application deployed publicly and available as a live demo',
        'Reusable agent architecture later extended into a second finance agent (Finley)'
      ],
      lessons:
        'Grounding an AI agent in verifiable data sources matters more than model sophistication. Tool design is where the analytical value is created.',
      githubUrl: 'https://github.com/EstebanAnez/EquityIQ',
      liveUrl: 'https://equityiq.streamlit.app',
      dashboardUrl: '',
      reportUrl: '',
      tags: ['AI', 'Python', 'Finance', 'Agents'],
      featured: true
    },
    {
      id: 'apm-portfolio',
      title: 'Applied Portfolio Management: Investment Analyst',
      summary:
        'Equity analysis and valuation work for a student-managed portfolio of roughly $559K, including a full DCF for Cheniere Energy.',
      description:
        'As an Investment Analyst in the University of Kansas Applied Portfolio Management program, I analyzed public equities for a real student-managed portfolio of approximately $559,000. Work included building discounted cash flow models reconciled to Bloomberg actuals, evaluating sector positioning, and presenting buy and sell recommendations. My deepest coverage was Cheniere Energy (LNG), where I built and iterated a full DCF, alongside comparative analysis across holdings such as Pool Corp and a final group pitch recommending Micron Technology.',
      image: 'assets/projects/project-placeholder-01.png',
      imageAlt: 'Stylized valuation line chart representing portfolio analysis work',
      category: 'Investment Analysis',
      date: 'Jan 2026 – May 2026',
      organization: 'University of Kansas School of Business',
      context: 'Academic program managing real assets',
      problem:
        'The portfolio required ongoing coverage decisions, which holdings to keep, trim, or replace, supported by defensible valuation work rather than opinion.',
      objective:
        'Deliver institutional-style equity research and clear buy/sell recommendations for portfolio decisions.',
      process: [
        'Built a multi-version DCF for Cheniere Energy, reconciling drivers and financials to Bloomberg actuals',
        'Analyzed weekly case companies across sectors, from Chipotle and ServiceNow to Quanta Services and Pool Corp',
        'Evaluated exit-multiple frameworks (including EV/Revenue) for pre-profit growth companies',
        'Presented recommendations to classmates and faculty, defending assumptions under questioning'
      ],
      tools: ['Bloomberg Terminal', 'Excel', 'Financial modeling', 'DCF / APV valuation'],
      skills: ['Equity valuation', 'Investment analysis', 'Stakeholder presentations', 'Financial statement analysis'],
      results: [
        'Contributed research to live portfolio decisions, including the group recommendation to sell Pool Corp and initiate a position in Micron Technology',
        'Completed a full Cheniere Energy DCF built on Bloomberg actuals through multiple review cycles'
      ],
      lessons:
        'A valuation is only as strong as its most questionable assumption, and presenting to a skeptical audience is the fastest way to find it.',
      githubUrl: '',
      liveUrl: '',
      dashboardUrl: '',
      reportUrl: '',
      tags: ['Valuation', 'Equities', 'Bloomberg', 'Finance'],
      featured: true
    },
    {
      id: 'debt-forecasting',
      title: 'Public Debt Forecasting Model',
      summary:
        'Time-series forecasting of public debt using NeuralProphet, ARIMA, and LASSO, awarded Best Poster at an international analytics competition.',
      description:
        'For the Manhattan University International Business Analytics Competition, I built and compared forecasting models for public debt trajectories. The work benchmarked a modern neural forecasting approach (NeuralProphet) against classical ARIMA models and LASSO-regularized regression, evaluating fit and interpretability, and communicated the findings through a research poster. The project was advised by Professor Karthik Srinivasan.',
      image: 'assets/projects/project-placeholder-02.png',
      imageAlt: 'Stylized bar chart representing forecasting model comparison',
      category: 'Research',
      date: '2025',
      organization: 'Manhattan University International Business Analytics Competition',
      context: 'International student analytics competition',
      problem:
        'Public debt forecasts inform fiscal decisions, but different modeling families can produce meaningfully different trajectories from the same data.',
      objective:
        'Compare classical and modern forecasting approaches on public debt data and present the trade-offs clearly to a non-technical audience.',
      process: [
        'Prepared and explored historical public debt time-series data',
        'Fit and tuned NeuralProphet, ARIMA, and LASSO models',
        'Compared model behavior, fit, and interpretability across approaches',
        'Designed a research poster translating the methodology and findings for a general audience'
      ],
      tools: ['Python', 'NeuralProphet', 'ARIMA', 'LASSO', 'Data visualization'],
      skills: ['Time-series forecasting', 'Statistical modeling', 'Research communication'],
      results: ['Awarded Best Poster at the 2025 competition'],
      lessons:
        'Sophisticated models win attention, but a clear explanation of why a model behaves the way it does is what wins an audience.',
      githubUrl: '',
      liveUrl: '',
      dashboardUrl: '',
      reportUrl: '',
      tags: ['Forecasting', 'Python', 'Data Visualization', 'Economics'],
      featured: true
    },
    {
      id: 'finley',
      title: 'Finley: AI Finance Analyst Agent',
      summary:
        'A finance analyst agent that queries transaction data, computes expenses and profit, and answers questions conversationally.',
      description:
        'Finley is an AI finance analyst built on the same agent architecture as EquityIQ, focused on structured financial data instead of market research. A LangGraph ReAct agent uses custom tools, expense lookups, expense aggregation, SQLite transaction queries, and profit calculation, with a FAISS-backed retrieval layer for reference knowledge, all wrapped in a Streamlit chat interface with conversation history.',
      image: 'assets/projects/project-placeholder-02.png',
      imageAlt: 'Stylized KPI dashboard graphic representing the Finley finance agent',
      category: 'Business Analytics',
      date: '2026',
      organization: 'Independent project',
      context: 'Personal portfolio project',
      problem:
        'Answering routine financial questions from transaction data usually means writing ad-hoc queries or spreadsheet formulas for every question.',
      objective:
        'Let a user ask financial questions in plain language and get computed, data-backed answers from an underlying transactions database.',
      process: [
        'Modeled transaction data in SQLite and defined the analytical questions to support',
        'Wrote LangChain tools for expense retrieval, aggregation, transaction queries, and profit calculation',
        'Added a FAISS vector store so the agent can ground answers in reference documentation',
        'Built the Streamlit front end with multi-turn conversation history'
      ],
      tools: ['Python', 'LangGraph', 'LangChain', 'SQLite', 'FAISS', 'OpenAI API', 'Streamlit'],
      skills: ['AI application development', 'SQL and data modeling', 'Financial analysis automation'],
      results: [
        'Working agent that translates natural-language questions into computed answers over a transactions database'
      ],
      lessons:
        'Deterministic calculation tools plus a language model beat a language model alone: let the model decide what to compute, not how to do arithmetic.',
      githubUrl: '',
      liveUrl: '',
      dashboardUrl: '',
      reportUrl: '',
      tags: ['AI', 'Python', 'SQL', 'Agents'],
      featured: false
    },
    {
      id: 'united-rentals',
      title: 'United Rentals Equity Research Report',
      summary:
        'A full equity research report on United Rentals (URI) with DCF and APV valuations, prepared for an advanced corporate finance course.',
      description:
        'For FIN 448 at the University of Kansas, I produced an institutional-style equity research report on United Rentals, the equipment rental company. The analysis covered business model and industry dynamics, historical financial performance, and intrinsic valuation through both a discounted cash flow model and an adjusted present value model, concluding in an investment recommendation.',
      image: 'assets/projects/project-placeholder-01.png',
      imageAlt: 'Stylized valuation line chart representing the equity research report',
      category: 'Finance',
      date: '2025',
      organization: 'University of Kansas, FIN 448',
      context: 'Advanced corporate finance coursework',
      problem:
        'Valuing a capital-intensive, cyclical rental business requires reconciling leverage effects with operating performance, a single valuation method is not enough.',
      objective:
        'Value United Rentals through complementary DCF and APV frameworks and support a clear investment recommendation.',
      process: [
        'Analyzed the equipment rental industry, cycle exposure, and United Rentals\u2019 competitive position',
        'Built revenue, margin, and capital expenditure forecasts from historical financials',
        'Constructed DCF and APV models and reconciled the differences between the two approaches',
        'Wrote the full research report and investment recommendation'
      ],
      tools: ['Excel', 'Financial modeling', 'DCF / APV valuation'],
      skills: ['Equity research', 'Corporate finance', 'Report writing'],
      results: ['Complete equity research report with dual-method valuation and recommendation'],
      lessons:
        'APV makes the value of financing decisions visible, separating operating value from leverage effects sharpens the story a DCF alone can blur.',
      githubUrl: '',
      liveUrl: '',
      dashboardUrl: '',
      reportUrl: '',
      tags: ['Valuation', 'Equities', 'Finance'],
      featured: false
    },
    {
      id: 'amprius-pitch',
      title: 'Amprius Technologies Equity Pitch',
      summary:
        'A group equity pitch on a pre-profit battery technology company, valued through an EV/Revenue exit-multiple framework.',
      description:
        'As part of the Applied Portfolio Management program, my group pitched Amprius Technologies, a silicon-anode battery maker with no current profitability. Because standard earnings-based valuation breaks down for pre-profit growth companies, we built the case around an EV/Revenue exit-multiple framework, scenario-based revenue trajectories, and an honest treatment of dilution and execution risk, then defended the pitch in front of the class.',
      image: 'assets/projects/project-placeholder-01.png',
      imageAlt: 'Stylized valuation chart representing the Amprius equity pitch',
      category: 'Investment Analysis',
      date: '2026',
      organization: 'University of Kansas School of Business',
      context: 'Group pitch, Applied Portfolio Management',
      problem:
        'Earnings-based valuation methods produce meaningless answers for a company that has revenue growth but no profits, yet the investment decision still has to be made.',
      objective:
        'Build a defensible valuation and recommendation for a pre-profit growth company using revenue-based frameworks.',
      process: [
        'Analyzed the silicon-anode battery market and Amprius\u2019 technology position',
        'Built scenario-based revenue trajectories with explicit assumptions',
        'Applied an EV/Revenue exit-multiple framework to translate scenarios into valuation ranges',
        'Presented and defended the pitch as a group in front of the class'
      ],
      tools: ['Excel', 'Financial modeling', 'Comparable company analysis'],
      skills: ['Growth-company valuation', 'Teamwork', 'Presentation and defense'],
      results: ['Group pitch delivered and defended, with a valuation framework suited to pre-profit companies'],
      lessons:
        'When the standard toolkit fails, the discipline is in making every replacement assumption explicit rather than hiding it inside a multiple.',
      githubUrl: '',
      liveUrl: '',
      dashboardUrl: '',
      reportUrl: '',
      tags: ['Valuation', 'Strategy', 'Equities'],
      featured: false
    }
  ]
};

/* ============================================================
   Rendering, featured cards (home), full library with search,
   category + tag filters, and an accessible case-study modal.
   ============================================================ */
(function () {
  'use strict';

  var projects = (portfolioData && portfolioData.projects) || [];

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function linkButtons(p, small) {
    var cls = 'btn btn-outline' + (small ? ' btn-sm' : '');
    var out = [];
    if (p.liveUrl) out.push('<a class="' + cls + '" href="' + esc(p.liveUrl) + '" target="_blank" rel="noopener">Live demo</a>');
    if (p.githubUrl) out.push('<a class="' + cls + '" href="' + esc(p.githubUrl) + '" target="_blank" rel="noopener">GitHub</a>');
    if (p.dashboardUrl) out.push('<a class="' + cls + '" href="' + esc(p.dashboardUrl) + '" target="_blank" rel="noopener">Dashboard</a>');
    if (p.reportUrl) out.push('<a class="' + cls + '" href="' + esc(p.reportUrl) + '" target="_blank" rel="noopener">Report</a>');
    return out.join('');
  }

  function cardHtml(p) {
    var meta = [];
    if (p.category) meta.push('<span>' + esc(p.category) + '</span>');
    if (p.date) meta.push('<span class="dot" aria-hidden="true">·</span><span>' + esc(p.date) + '</span>');
    var chips = (p.tools || [])
      .slice(0, 5)
      .map(function (t) { return '<li class="chip">' + esc(t) + '</li>'; })
      .join('');
    return (
      '<article class="project-card reveal" data-id="' + esc(p.id) + '">' +
      '<img src="' + esc(p.image || 'assets/projects/project-placeholder-01.png') + '" alt="' + esc(p.imageAlt || '') + '" loading="lazy" width="1200" height="675">' +
      '<div class="project-card-body">' +
      '<p class="project-card-meta">' + meta.join('') + '</p>' +
      '<h3>' + esc(p.title) + '</h3>' +
      (p.summary ? '<p class="summary">' + esc(p.summary) + '</p>' : '') +
      (p.problem ? '<p class="problem"><strong>Problem:</strong> ' + esc(p.problem) + '</p>' : '') +
      (chips ? '<ul class="chips" aria-label="Tools used">' + chips + '</ul>' : '') +
      '<div class="project-card-footer">' +
      '<button type="button" class="btn btn-primary btn-sm view-case" data-id="' + esc(p.id) + '">View case study</button>' +
      linkButtons(p, true) +
      '</div></div></article>'
    );
  }

  function caseSection(label, bodyHtml) {
    if (!bodyHtml) return '';
    return '<div class="case-section"><p class="case-label">' + label + '</p>' + bodyHtml + '</div>';
  }

  function list(items) {
    if (!items || !items.length) return '';
    return '<ul>' + items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
  }

  function chipList(items, cls) {
    if (!items || !items.length) return '';
    return (
      '<ul class="chips">' +
      items.map(function (i) { return '<li class="chip ' + (cls || '') + '">' + esc(i) + '</li>'; }).join('') +
      '</ul>'
    );
  }

  function caseHtml(p) {
    var metaBits = [p.organization, p.context, p.date].filter(Boolean).map(esc).join(' · ');
    return (
      (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.imageAlt || '') + '" loading="lazy" width="1200" height="675">' : '') +
      (metaBits ? '<p class="mono muted" style="font-size:.8rem">' + metaBits + '</p>' : '') +
      caseSection('Overview', p.description ? '<p>' + esc(p.description) + '</p>' : '') +
      caseSection('Business problem', p.problem ? '<p>' + esc(p.problem) + '</p>' : '') +
      caseSection('Objective', p.objective ? '<p>' + esc(p.objective) + '</p>' : '') +
      caseSection('Process', list(p.process)) +
      caseSection('Tools & technologies', chipList(p.tools)) +
      caseSection('Key skills', chipList(p.skills, 'chip-accent')) +
      caseSection('Results', list(p.results)) +
      caseSection('Lessons learned', p.lessons ? '<p>' + esc(p.lessons) + '</p>' : '') +
      (linkButtons(p) ? '<div class="case-links">' + linkButtons(p) + '</div>' : '')
    );
  }

  /* ---------- Modal ---------- */
  var dialog = null;
  var lastFocus = null;

  function ensureDialog() {
    if (dialog) return dialog;
    dialog = document.createElement('dialog');
    dialog.className = 'modal';
    dialog.setAttribute('aria-labelledby', 'modal-title');
    dialog.innerHTML =
      '<div class="modal-head">' +
      '<div><p class="case-label" id="modal-kicker"></p><h2 id="modal-title"></h2></div>' +
      '<button type="button" class="modal-close" aria-label="Close case study">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>' +
      '</button></div><div class="modal-body" id="modal-body"></div>';
    document.body.appendChild(dialog);
    dialog.querySelector('.modal-close').addEventListener('click', closeModal);
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeModal(); // click on backdrop
    });
    dialog.addEventListener('close', function () {
      if (lastFocus) lastFocus.focus();
    });
    return dialog;
  }

  function openModal(p, trigger) {
    var d = ensureDialog();
    lastFocus = trigger || document.activeElement;
    d.querySelector('#modal-kicker').textContent = p.category || 'Case study';
    d.querySelector('#modal-title').textContent = p.title || '';
    d.querySelector('#modal-body').innerHTML = caseHtml(p);
    if (typeof d.showModal === 'function') {
      d.showModal(); // native focus trap + Escape handling
      d.querySelector('.modal-close').focus();
    } else {
      d.setAttribute('open', '');
    }
    d.querySelector('.modal-body').scrollTop = 0;
  }

  function closeModal() {
    if (!dialog) return;
    if (typeof dialog.close === 'function' && dialog.open) dialog.close();
    else dialog.removeAttribute('open');
  }

  function bindCaseButtons(root) {
    root.addEventListener('click', function (e) {
      var btn = e.target.closest('.view-case');
      if (!btn) return;
      var p = projects.find(function (x) { return x.id === btn.getAttribute('data-id'); });
      if (p) openModal(p, btn);
    });
  }

  /* ---------- Featured grid (home page) ---------- */
  function renderFeatured() {
    var host = document.getElementById('featured-projects');
    if (!host) return;
    var featured = projects.filter(function (p) { return p.featured; });
    if (!featured.length) featured = projects.slice(0, 3);
    host.innerHTML = featured.map(cardHtml).join('');
    bindCaseButtons(host);
  }

  /* ---------- Full library (projects page) ---------- */
  function renderLibrary() {
    var host = document.getElementById('projects-grid');
    if (!host) return;

    var searchInput = document.getElementById('project-search');
    var catHost = document.getElementById('category-filters');
    var tagHost = document.getElementById('tag-filters');
    var statusEl = document.getElementById('filter-status');
    var emptyEl = document.getElementById('projects-empty');

    var state = { q: '', category: 'All Projects', tag: null };

    var categories = ['All Projects'].concat(
      projects
        .map(function (p) { return p.category; })
        .filter(function (c, i, a) { return c && a.indexOf(c) === i; })
        .sort()
    );
    var tags = projects
      .reduce(function (acc, p) { return acc.concat(p.tags || []); }, [])
      .filter(function (t, i, a) { return a.indexOf(t) === i; })
      .sort();

    function filterBtn(label, group) {
      return (
        '<button type="button" class="filter-btn" data-group="' + group + '" data-value="' + esc(label) + '" aria-pressed="false">' +
        esc(label) + '</button>'
      );
    }

    if (catHost) catHost.innerHTML = categories.map(function (c) { return filterBtn(c, 'category'); }).join('');
    if (tagHost) tagHost.innerHTML = tags.map(function (t) { return filterBtn(t, 'tag'); }).join('');

    function haystack(p) {
      return [
        p.title, p.summary, p.description, p.category, p.organization, p.context,
        (p.tools || []).join(' '), (p.skills || []).join(' '), (p.tags || []).join(' ')
      ].join(' ').toLowerCase();
    }

    function matches(p) {
      if (state.category !== 'All Projects' && p.category !== state.category) return false;
      if (state.tag && (p.tags || []).indexOf(state.tag) === -1) return false;
      if (state.q && haystack(p).indexOf(state.q) === -1) return false;
      return true;
    }

    function syncButtons() {
      document.querySelectorAll('.filter-btn[data-group="category"]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-value') === state.category));
      });
      document.querySelectorAll('.filter-btn[data-group="tag"]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-value') === state.tag));
      });
    }

    function render() {
      var visible = projects.filter(matches);
      host.innerHTML = visible.map(cardHtml).join('');
      host.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
      if (emptyEl) emptyEl.hidden = visible.length > 0;
      if (statusEl) {
        statusEl.textContent =
          'Showing ' + visible.length + ' of ' + projects.length + ' projects' +
          (state.category !== 'All Projects' ? ' in ' + state.category : '') +
          (state.tag ? ', tagged ' + state.tag : '') +
          (state.q ? ', matching "' + state.q + '"' : '') + '.';
      }
      syncButtons();
    }

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        state.q = searchInput.value.trim().toLowerCase();
        render();
      });
    }

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      var group = btn.getAttribute('data-group');
      var value = btn.getAttribute('data-value');
      if (group === 'category') {
        state.category = value;
      } else if (group === 'tag') {
        state.tag = state.tag === value ? null : value; // toggle
      }
      render();
    });

    bindCaseButtons(host);
    render();
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderFeatured();
    renderLibrary();
  });
})();
