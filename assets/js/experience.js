/* ============================================================
   experience.js, professional experience data + timeline rendering.
   ------------------------------------------------------------
   HOW TO EDIT
   Update the `experienceData.roles` array below. Each entry supports:
   organization, title, location, start, end, description,
   responsibilities[], accomplishments[], tools[], skills[],
   preview (true = also shown on the home page).
   Empty fields are simply not displayed.
   The data must stay embedded here, do not load it with fetch().
   ============================================================ */

var experienceData = {
  roles: [
    {
      organization: 'University of Kansas, Applied Portfolio Management',
      title: 'Investment Analyst',
      location: 'Lawrence, Kansas',
      start: 'January 2026',
      end: 'May 2026',
      description:
        'Analyst in a student-managed investment program responsible for research and recommendations on a real public equity portfolio of approximately $559,000.',
      responsibilities: [
        'Built discounted cash flow and adjusted present value models for portfolio holdings and candidates',
        'Reconciled model drivers to Bloomberg Terminal actuals',
        'Presented buy and sell recommendations and defended assumptions in group review'
      ],
      accomplishments: [
        'Completed a multi-version DCF for Cheniere Energy built on Bloomberg actuals',
        'Co-delivered the final group pitch recommending the sale of Pool Corp and a new position in Micron Technology'
      ],
      tools: ['Bloomberg Terminal', 'Excel', 'Financial modeling'],
      skills: ['Equity valuation', 'Investment analysis', 'Presentation'],
      preview: true
    },
    {
      organization: 'University Venture Fund Crossroads',
      title: 'Venture Capital Intern',
      location: 'Kansas City, Kansas',
      start: 'August 2025',
      end: 'May 2026',
      description:
        'Sourced and evaluated early-stage startups for a university venture fund, delivering analysis that shaped investment decisions.',
      responsibilities: [
        'Sourced and evaluated early-stage startups across technology, healthcare, and consumer sectors, delivering financial models, market research, and due diligence that directly shaped investment decisions',
        'Drafted and presented investment memos to partners, contributing insights on founder-market fit, growth potential, and sector trends that influenced portfolio strategy and investment committee outcomes'
      ],
      accomplishments: [],
      tools: ['Excel', 'Financial modeling', 'Market research'],
      skills: ['Venture analysis', 'Due diligence', 'Investment memos'],
      preview: false
    },
    {
      organization: 'Seaboard Overseas and Trading Group',
      title: 'International Procurement Intern',
      location: 'Mission, Kansas',
      start: 'June 2025',
      end: 'August 2025',
      description:
        'Supported global procurement operations for an international agribusiness, spanning ERP systems, supplier analytics, and business intelligence.',
      responsibilities: [
        'Managed global procurement by processing high volumes of vouchers and material requests in Microsoft Dynamics AX and IPS, ensuring compliance and coordinating fulfillment across vendors in Africa, South America, and Europe',
        'Led a supplier consolidation initiative by analyzing purchasing data, costs, and dependencies to streamline the vendor base, enhance sourcing efficiency, and implement an evaluation framework that improved decision-making and supplier performance',
        'Collaborated with Treasury and Business Intelligence to drive ERP transition insights and build Power BI dashboards and Excel models that optimized procurement KPIs, identified inefficiencies, and shaped strategic decisions'
      ],
      accomplishments: [],
      tools: ['Microsoft Dynamics AX', 'IPS', 'SAP', 'Power BI', 'Excel'],
      skills: ['Procurement', 'Supplier analytics', 'ERP systems', 'KPI reporting'],
      preview: true
    },
    {
      organization: 'CASACOR Bolivia',
      title: 'Business Analytics & Strategy Intern',
      location: 'Remote',
      start: 'April 2025',
      end: 'June 2025',
      description:
        'Delivered competitive intelligence and growth strategy work for a leading architecture and design exhibition brand.',
      responsibilities: [
        'Developed a competitive intelligence study across 3 Latin American markets to benchmark positioning, identify regional whitespace, and deliver insights that shaped the go-to-market and audience segmentation strategy for Bolivia',
        'Designed a University Ambassadors Program using demographic modeling, institutional targeting, and KPI forecasting, presenting to senior leadership with a projected 15 to 20% lift in engagement among 18 to 25 year olds and potential for national rollout'
      ],
      accomplishments: [],
      tools: ['Excel', 'KPI forecasting', 'Market research'],
      skills: ['Competitive intelligence', 'Business strategy', 'Executive presentation'],
      preview: false
    },
    {
      organization: 'Jayhawk Consulting',
      title: 'Consultant',
      location: 'Lawrence, Kansas',
      start: 'January 2025',
      end: 'May 2025',
      description:
        'Student consultant delivering strategy engagements for local businesses through the University of Kansas consulting program.',
      responsibilities: [
        'Drove strategic consulting engagements for local businesses, applying market research and financial analysis to resolve operational inefficiencies, sharpen competitive positioning, and deliver measurable revenue growth'
      ],
      accomplishments: [],
      tools: ['Excel', 'PowerPoint'],
      skills: ['Consulting', 'Strategic analysis', 'Client communication'],
      preview: false
    },
    {
      organization: 'Banco Mercantil Santa Cruz S.A.',
      title: 'Financial Risk Analyst Intern',
      location: 'Santa Cruz de la Sierra, Bolivia',
      start: 'December 2024',
      end: 'January 2025',
      description:
        'Internship in the financial risk function of one of Bolivia\u2019s largest banks, working on liquidity analysis and risk dashboards.',
      responsibilities: [
        'Executed an autonomous liquidity analysis that improved visibility into funding flows by 40%, revealed structural vulnerabilities, and informed executive decisions that strengthened financial resilience in volatile markets',
        'Partnered with the Business Intelligence team to build dashboards in Tableau and Power BI and analyze credit, market, and operational risks, enabling proactive mitigation strategies and data-driven adjustments to the bank\u2019s enterprise risk frameworks'
      ],
      accomplishments: [],
      tools: ['Tableau', 'Power BI', 'Excel'],
      skills: ['Financial risk analysis', 'Liquidity analysis', 'Dashboard development'],
      preview: true
    },
    {
      organization: 'El Faro Real Estate',
      title: 'Marketing Analytics Intern',
      location: 'Santa Cruz de la Sierra, Bolivia',
      start: 'May 2024',
      end: 'August 2024',
      description:
        'Customer data analysis and content strategy for a real estate firm.',
      responsibilities: [
        'Conducted in-depth quantitative customer data analysis using Excel to identify key markets and prospective clients, fueling targeted marketing campaigns that drove a 44% surge in customer engagement and a 26% increase in house sales',
        'Crafted 15+ articles and visual reports, edited videos, and created social media content for Instagram and Facebook, boosting engagement and driving sales growth'
      ],
      accomplishments: [],
      tools: ['Excel'],
      skills: ['Marketing analytics', 'Customer segmentation', 'Content creation'],
      preview: false
    },
    {
      organization: 'El Faro Real Estate',
      title: 'Sales and Process Improvement Intern',
      location: 'Santa Cruz de la Sierra, Bolivia',
      start: 'May 2023',
      end: 'August 2023',
      description:
        'First professional experience, combining client-facing sales work with process automation.',
      responsibilities: [
        'Hosted personalized property tours and open houses, matching families with homes based on their needs and local market trends',
        'Implemented an automated inquiry system, cutting manual responses by 55% and boosting efficiency and customer engagement'
      ],
      accomplishments: [],
      tools: ['Excel'],
      skills: ['Sales', 'Process improvement', 'Client relations'],
      preview: false
    }
  ]
};

/* ============================================================
   Rendering
   ============================================================ */
(function () {
  'use strict';

  var roles = (experienceData && experienceData.roles) || [];

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function list(items) {
    if (!items || !items.length) return '';
    return '<ul>' + items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
  }

  function chips(items) {
    if (!items || !items.length) return '';
    return (
      '<ul class="chips" aria-label="Tools">' +
      items.map(function (t) { return '<li class="chip">' + esc(t) + '</li>'; }).join('') +
      '</ul>'
    );
  }

  function itemHtml(r, detailed) {
    var when = [r.start, r.end].filter(Boolean).join(' to ');
    var details = '';
    if (detailed) {
      var inner = '';
      if (r.responsibilities && r.responsibilities.length) {
        inner += '<p class="case-label">Responsibilities</p>' + list(r.responsibilities);
      }
      if (r.accomplishments && r.accomplishments.length) {
        inner += '<p class="case-label">Selected accomplishments</p>' + list(r.accomplishments);
      }
      if (r.skills && r.skills.length) {
        inner += '<p class="case-label">Skills</p>' + list(r.skills);
      }
      if (inner) {
        details =
          '<details class="xp-more"><summary>Responsibilities & details</summary>' +
          '<div class="stack-sm mt-1">' + inner + '</div></details>';
      }
    }
    return (
      '<li class="timeline-item reveal">' +
      '<p class="timeline-date">' + esc(when) + (r.location ? ' · ' + esc(r.location) : '') + '</p>' +
      '<h3>' + esc(r.title) + '</h3>' +
      '<p class="timeline-org">' + esc(r.organization) + '</p>' +
      (r.description ? '<p>' + esc(r.description) + '</p>' : '') +
      chips(r.tools) +
      details +
      '</li>'
    );
  }

  function renderInto(id, items, detailed) {
    var host = document.getElementById(id);
    if (!host) return;
    host.innerHTML = items.map(function (r) { return itemHtml(r, detailed); }).join('');
    if (document.readyState !== 'loading') {
      host.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderInto('experience-preview', roles.filter(function (r) { return r.preview; }), false);
    renderInto('experience-full', roles, true);
    // Make sure timeline items injected after main.js's observer setup are visible.
    document.querySelectorAll('#experience-preview .reveal, #experience-full .reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  });
})();
