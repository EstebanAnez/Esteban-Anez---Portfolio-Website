You are a senior front-end developer and professional portfolio designer. Build a complete, production-ready STATIC personal portfolio website designed to showcase my projects, experience, skills, and qualifications to recruiters and hiring managers.

## Delivery Format

Output MUST be a single ZIP archive containing the entire website.

The website must be fully static and compatible with GitHub Pages.

Requirements:

* No backend, server, or database
* Use HTML, CSS, and vanilla JavaScript
* Do not require Node.js, npm, or build steps
* Everything must work by opening `index.html` locally
* Everything must also work when uploaded to GitHub Pages
* All required files, fonts, icons, images, and scripts must be included locally unless a reliable external link is necessary

## Website Objective

The website should help me:

* Present my professional background clearly
* Showcase my strongest projects
* Demonstrate my technical and business skills
* Communicate the value I could bring to an employer
* Make it easy for recruiters to review my qualifications
* Encourage recruiters and hiring managers to contact me
* Support applications in finance, business analytics, risk, consulting, banking, procurement, supply chain, strategy, and business operations

The website should feel modern, polished, credible, and recruiter-friendly.

Avoid making it look like a generic student portfolio or an overly artistic personal website. It should resemble a high-quality professional portfolio for an ambitious early-career analyst.

## My Professional Profile

Use the following information throughout the website:

**Name:** Esteban Añez Velarde

**Professional headline:**

Finance and Business Analytics Professional

**Alternative positioning statement:**

Finance, Analytics, Risk, and Business Strategy Professional

**Education:**

* Bachelor of Science in Finance and Business Analytics from the University of Kansas
* Minor in Supply Chain Management
* University of Kansas Honors Program graduate
* GPA: 3.76

**Professional focus areas:**

* Financial analysis
* Business analytics
* Risk analysis
* Data visualization
* Business strategy
* Investment analysis
* Procurement
* Supply chain analytics
* Banking
* Business operations

**Technical skills:**

* Advanced Microsoft Excel
* Power BI
* Tableau
* SQL
* SAP S/4HANA
* Microsoft Dynamics AX
* Financial modeling
* Dashboard development
* KPI reporting
* Data analysis
* Python fundamentals
* R fundamentals

**Professional strengths:**

* Converting complex data into actionable recommendations
* Communicating findings to senior stakeholders
* Financial and operational problem solving
* Cross-functional collaboration
* International business perspective
* Strong written and verbal communication
* Research and strategic analysis

Do not invent employers, accomplishments, certifications, numbers, awards, or project outcomes that are not provided through the project data.

## Design Direction

Create a sophisticated business and technology design.

The website should have:

* A clean, modern visual identity
* A dark theme by default
* An optional light-mode toggle
* Professional typography
* Strong visual hierarchy
* Subtle gradients and modern data-inspired visual elements
* Restrained animations
* Generous spacing
* Clear calls to action
* Excellent readability
* A polished appearance on desktop and mobile devices

The visual style should combine:

* Business analytics
* Financial intelligence
* Technology
* Strategy consulting
* Modern corporate design

Avoid:

* Excessive neon effects
* Distracting animations
* Cartoonish graphics
* Skill percentage bars
* Unverifiable proficiency scores
* Generic stock photos of office workers
* Overly casual copy
* Large blocks of unnecessary text

## Pages Required

### 1. Home Page — `index.html`

Create a compelling homepage that quickly explains who I am, what I can do, and why an employer should consider me.

#### Hero Section

Include:

* My name
* Professional headline
* A concise value proposition
* Current professional focus
* A professional headshot or customizable profile-image placeholder
* Primary CTA: “View My Projects”
* Secondary CTA: “Download Resume”
* Additional CTA: “Contact Me”
* Location displayed as configurable text
* A concise availability statement that can be edited later

Suggested value proposition:

“I combine finance, analytics, and business strategy to transform complex information into clear, practical decisions.”

Do not use exaggerated claims such as “world-class,” “industry-leading,” or “top expert.”

#### Professional Summary

Add a concise section summarizing:

* My finance and business analytics background
* My experience working with risk, investments, procurement, business strategy, and data
* My ability to communicate analytical findings to decision-makers
* The types of problems I am prepared to solve

#### Featured Projects

Display selected projects as polished cards.

Each featured project should include:

* Project image or visual
* Project title
* Short summary
* Business problem
* Tools used
* Key skills demonstrated
* Project category
* Button to view the complete project details
* Optional link to GitHub, dashboard, PDF, presentation, or live demo

#### Experience Preview

Show a short timeline or list of selected professional experiences.

Each entry should support:

* Organization
* Position
* Location
* Start and end dates
* Short description
* Main responsibilities
* Tools used
* Selected accomplishments

Include a button linking to the full experience section on the About page.

#### Skills Overview

Organize skills into meaningful categories:

* Finance and Risk
* Data and Analytics
* Business and Strategy
* Procurement and Supply Chain
* Technology and Systems
* Communication and Leadership

Use clean badges, icons, or categorized lists.

Do not use arbitrary percentage ratings.

#### Highlights Section

Add 3–6 professional highlight cards, such as:

* Financial Risk Analysis
* Business Intelligence Dashboards
* Investment Evaluation
* Procurement Analytics
* Strategic Research
* Stakeholder Presentations

Each highlight should explain the type of value or capability demonstrated.

#### Call to Action

End the homepage with a strong recruiter-focused section.

Suggested copy:

“Looking for an analyst who can connect financial, operational, and data-driven perspectives?”

Include buttons for:

* Contact Me
* Download Resume
* View LinkedIn

---

### 2. Projects Page — `projects.html`

Build a complete project library that displays ALL projects.

## Project Layout

Projects should appear in a responsive card layout or a polished vertical case-study layout.

Every project entry must display all available information from the embedded project data.

Each project should support:

* Project ID
* Project title
* Short summary
* Full description
* Project image
* Project category
* Date
* Client, course, organization, or context
* Business problem
* Objective
* Process or methodology
* Tools and technologies
* Key skills
* Results or outcomes
* Lessons learned
* GitHub URL
* Live demo URL
* Dashboard URL
* Report or presentation URL
* Tags

Only display links and fields that contain data.

Do not show empty buttons or blank sections.

## Project Filtering

Add clickable filter buttons for all unique project categories and tags.

Possible categories include:

* Finance
* Business Analytics
* Risk
* Data Visualization
* Investment Analysis
* Consulting
* Procurement
* Supply Chain
* Strategy
* Marketing Analytics
* Research

Users must be able to filter projects by category or tag.

Include an “All Projects” option.

## Search Functionality

Add a search input that filters projects by matching against:

* Title
* Summary
* Full description
* Tools
* Skills
* Categories
* Tags
* Organization or project context

Search should update the visible projects immediately without reloading the page.

## Project Detail Experience

Each project card should include a “View Case Study” button.

The case study may be displayed through:

* An accessible modal
* An expandable section
* A dedicated static HTML page generated for each project

The complete project information should be easy for a recruiter to scan.

If using modals:

* Support keyboard navigation
* Include a clear close button
* Trap focus appropriately
* Allow closing with the Escape key
* Maintain accessibility

## Project Data Handling

The user will provide a JSON file containing project details.

Project data MUST be embedded directly inside `projects.js`.

Do not use `fetch()` to load project data.

The project system must work when the website is opened through the `file://` protocol.

Use a structure similar to:

```javascript
const portfolioData = {
  projects: [
    {
      id: "project-01",
      title: "Project Title",
      summary: "Concise project summary",
      description: "Complete project description",
      image: "assets/projects/project-01.png",
      category: "Business Analytics",
      date: "2026",
      organization: "University of Kansas",
      context: "Academic, professional, consulting, or personal project",
      problem: "The business problem addressed",
      objective: "The project objective",
      process: [
        "Step one",
        "Step two",
        "Step three"
      ],
      tools: ["Excel", "Power BI", "SQL"],
      skills: ["Data analysis", "Financial modeling"],
      results: [
        "Result or deliverable",
        "Business implication"
      ],
      lessons: "Key lesson or professional takeaway",
      githubUrl: "",
      liveUrl: "",
      dashboardUrl: "",
      reportUrl: "",
      tags: ["analytics", "finance", "dashboard"],
      featured: true
    }
  ]
};
```

Include 4–6 clearly labeled sample projects as placeholders if final project data has not yet been provided.

The placeholders must be easy to replace and must not falsely claim that I completed them. Label them clearly in the code and visible content as sample content requiring customization.

---

### 3. About and Experience Page — `about.html`

Create a professional About page with the following sections.

#### Professional Introduction

Explain my combination of:

* Finance
* Business analytics
* Risk analysis
* Strategy
* Procurement and supply chain
* International business experience

Keep the tone confident, professional, and grounded.

#### Education

Include:

* University of Kansas
* B.S. in Finance and Business Analytics
* Minor in Supply Chain Management
* University Honors Program
* GPA: 3.76
* Relevant coursework placeholders that can be customized

#### Professional Experience

Create a detailed responsive timeline.

Each experience entry should support:

* Employer
* Job title
* Location
* Dates
* Description
* Responsibilities
* Accomplishments
* Tools
* Skills
* Optional employer logo

Use embedded JavaScript data or structured HTML.

#### Leadership and Involvement

Include a flexible section for:

* Teaching assistant positions
* Student leadership
* Consulting experience
* Research
* Professional organizations
* Volunteer involvement
* Awards and recognition

Do not invent specific claims when information is unavailable.

#### Skills

Create a complete, categorized skills section.

Use cards, badges, or lists rather than percentage bars.

#### Career Interests

Include a section explaining interest in roles such as:

* Financial Analyst
* Business Analyst
* Risk Analyst
* Data Analyst
* Business Intelligence Analyst
* Investment Analyst
* Commercial Banking Analyst
* Procurement Analyst
* Supply Chain Analyst
* Strategy Analyst
* Business Operations Analyst

Keep the list editable through JavaScript or clearly marked HTML.

#### Professional Timeline

Add a clean visual timeline showing major academic and professional milestones.

---

### 4. Resume Page — `resume.html`

Create a recruiter-friendly online resume.

Include:

* Contact information
* Professional summary
* Education
* Experience
* Projects
* Skills
* Leadership
* Awards
* Languages
* Certifications placeholder

Add:

* “Download Resume” button
* “Print Resume” button using `window.print()`
* Print-specific CSS that produces a clean, professional resume
* A placeholder PDF file path at `/assets/documents/Esteban-Anez-Resume.pdf`

Clearly explain in the README how to replace the placeholder resume.

Do not embed private information such as a home address.

---

### 5. Contact Page — `contact.html`

Create a professional contact page designed for recruiters, hiring managers, collaborators, and professional contacts.

#### Contact Form

Include:

* Name
* Email
* Organization
* Reason for contacting
* Message
* Submit button

Because the website is static, support either:

* A configurable Formspree endpoint
* A `mailto:` fallback

Do not include secrets or private API keys.

Add clear comments showing where the Formspree endpoint should be inserted.

#### Professional Links

Include editable placeholders for:

* LinkedIn
* GitHub
* Email
* Resume
* Portfolio website
* Optional phone number
* Optional Calendly or scheduling link

#### Contact Reasons

Include options such as:

* Employment Opportunity
* Interview Request
* Networking
* Project Collaboration
* Speaking or Student Organization Opportunity
* Other

#### FAQ Accordion

Include 3–5 questions, such as:

* What types of roles are you interested in?
* Are you open to relocation?
* Can I request additional project materials?
* Are references available?
* What is the best way to contact you?

Keep answers professional and easily editable.

---

## Global Navigation

Add a consistent top navigation bar on every page.

Navigation links:

* Home
* Projects
* About
* Resume
* Contact

Include:

* My name or logo
* Dark/light theme toggle
* “Download Resume” button
* Responsive mobile navigation
* Visible focus states
* Keyboard accessibility

The current page should be clearly indicated.

## Footer

Include:

* Copyright
* My name
* Quick links
* LinkedIn
* GitHub
* Email
* Resume
* “Built with HTML, CSS, and JavaScript”
* Back-to-top link

Use inline or local SVG icons.

Do not use an external icon CDN.

## SEO and Recruiter Discoverability

Include appropriate metadata on every page:

* Page title
* Meta description
* Canonical URL placeholder
* Open Graph metadata
* Twitter Card metadata
* Author metadata
* Theme color
* Keywords used naturally and responsibly

Include structured data using JSON-LD for:

* `Person`
* `WebSite`
* `ProfilePage`
* Relevant professional information

Use placeholders for information that has not been provided.

Do not expose private personal details.

## Logo, Profile Photo, and Favicon Processing

The user may provide:

* A logo
* A headshot or profile photo

Automatically resize and optimize the provided files.

### Logo Variants

Generate:

| File                            | Purpose                           |
| ------------------------------- | --------------------------------- |
| `/assets/images/logo.png`       | Main navigation logo              |
| `/assets/images/logo-large.png` | Hero or About page                |
| `/assets/images/logo-dark.png`  | Optional dark-background version  |
| `/assets/images/logo-light.png` | Optional light-background version |

### Profile Image Variants

Generate:

| File                                   | Size/Purpose              |
| -------------------------------------- | ------------------------- |
| `/assets/images/profile.png`           | Main profile image        |
| `/assets/images/profile-400.png`       | Optimized display version |
| `/assets/images/profile-thumbnail.png` | Small cards or metadata   |

Do not alter facial features or create a fake professional headshot unless explicitly requested.

### Favicon Variants

Generate all of the following:

| File                                        | Size/Purpose                           |
| ------------------------------------------- | -------------------------------------- |
| `/favicon.ico`                              | 16×16, 32×32, and 48×48 multi-size ICO |
| `/assets/images/favicon-16x16.png`          | Standard favicon                       |
| `/assets/images/favicon-32x32.png`          | Standard favicon                       |
| `/assets/images/apple-touch-icon.png`       | 180×180                                |
| `/assets/images/android-chrome-192x192.png` | 192×192                                |
| `/assets/images/android-chrome-512x512.png` | 512×512                                |
| `/assets/images/og-image.png`               | 1200×630 social sharing image          |

The Open Graph image should display:

* My name
* Professional headline
* Portfolio branding
* A clean business and analytics background

## Web App Manifest

Create `/site.webmanifest`.

It must reference the Android Chrome icons and include:

* Name
* Short name
* Start URL
* Display mode
* Background color
* Theme color

## Generated Visual Assets

Create 3–6 lightweight visual assets for the website.

Store them in:

`/assets/generated/`

Possible assets:

* Abstract analytics background
* Financial data visualization illustration
* Business intelligence illustration
* Network or data-flow graphic
* Subtle geometric background
* Project placeholder image

Prefer optimized SVG or WebP files.

All images must have concise, meaningful alt text.

Do not use copyrighted company imagery without permission.

## Accessibility Requirements

Follow WCAG-friendly practices.

Include:

* Semantic HTML
* Proper heading hierarchy
* Skip-to-content link
* Keyboard-accessible navigation
* Visible focus indicators
* Sufficient contrast
* Accessible form labels
* Accessible accordion behavior
* Appropriate ARIA attributes
* Alt text for meaningful images
* Empty alt attributes for decorative images
* Accessible project modals, if used
* Reduced-motion support
* Screen-reader-friendly status updates for project filtering

Do not rely only on color to communicate meaning.

## Performance Requirements

* Lazy-load project images
* Avoid heavy JavaScript
* Avoid unnecessary external dependencies
* Optimize all generated images
* Use local SVG icons
* Minimize layout shifts
* Use responsive image dimensions
* Defer noncritical JavaScript
* Ensure fast loading on mobile networks
* Avoid auto-playing video or large background media

## Animation Requirements

Use subtle animations only, such as:

* Fade-in on scroll
* Small hover elevation
* Button transitions
* Navigation transitions
* Project filtering transitions

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

The site must remain fully functional without animation.

## File Structure

```text
/index.html
/projects.html
/about.html
/resume.html
/contact.html
/favicon.ico
/site.webmanifest
/README.md

/assets/
  /css/
    styles.css
    print.css

  /js/
    main.js
    projects.js
    experience.js

  /images/
    logo.png
    logo-large.png
    logo-dark.png
    logo-light.png
    profile.png
    profile-400.png
    profile-thumbnail.png
    favicon-16x16.png
    favicon-32x32.png
    apple-touch-icon.png
    android-chrome-192x192.png
    android-chrome-512x512.png
    og-image.png

  /documents/
    Esteban-Anez-Resume.pdf

  /projects/
    project-placeholder-01.png
    project-placeholder-02.png
    project-placeholder-03.png

  /generated/
    analytics-background.svg
    finance-visual.svg
    data-network.svg
    geometric-pattern.svg
```

## README Requirements

The `README.md` must explain:

### Running the Website

* How to open `index.html` locally
* That no installation is required
* That no build command is required

### Publishing to GitHub Pages

Provide complete steps for:

1. Creating a GitHub repository
2. Uploading all files
3. Committing the files
4. Opening repository settings
5. Selecting Pages
6. Choosing deployment from the main branch
7. Selecting the root folder
8. Finding the published URL
9. Updating canonical and social-sharing URLs

### Updating Projects

Explain how to edit the embedded project array inside:

`/assets/js/projects.js`

Explain every supported project field.

Include one complete example project object.

State clearly that the project data must remain embedded and must not be loaded using `fetch()`.

### Updating Experience

Explain how to edit:

`/assets/js/experience.js`

### Replacing the Resume

Explain how to replace:

`/assets/documents/Esteban-Anez-Resume.pdf`

Explain that the same filename should be maintained unless all resume links are updated.

### Replacing the Logo

Explain how to replace the logo and regenerate all favicon variants.

Include an online favicon-generator alternative.

### Replacing the Profile Photo

Explain the recommended image dimensions, format, compression, and filenames.

### Configuring the Contact Form

Explain:

* How to use the `mailto:` fallback
* How to create and insert a Formspree endpoint
* That no secret keys should be committed

### Customizing the Website

Explain how to change:

* Name
* Headline
* Summary
* Location
* Contact information
* Social links
* Skills
* Role interests
* Colors
* Typography
* Theme
* Project categories

### Limitations

Explain that:

* The website has no backend
* Form submissions require Formspree or another static form service
* GitHub Pages does not execute server-side code
* Resume and project files must be uploaded manually
* External project links require an internet connection

## Content Quality

Write concise, polished, recruiter-friendly copy.

The website should emphasize evidence, capabilities, and projects rather than vague personality claims.

Use active language such as:

* Analyzed
* Built
* Evaluated
* Developed
* Presented
* Designed
* Improved
* Researched
* Modeled
* Identified
* Recommended
* Collaborated

Do not invent measurable results.

When a result has not been supplied, use editable placeholder wording such as:

“Add a verified project outcome here.”

Avoid phrases such as:

* Passionate individual
* Results-driven self-starter
* Data wizard
* Finance guru
* Rockstar
* Ninja
* Best-in-class
* World-class expert

## Final Quality Checks

Before creating the ZIP archive, verify that:

* All pages open successfully
* Every navigation link works
* All pages are connected
* The website works through `file://`
* The website works on GitHub Pages
* No project data uses `fetch()`
* Search works correctly
* Category filters work correctly
* Tag filters work correctly
* Search checks descriptions, tools, skills, categories, and tags
* Theme selection persists using `localStorage`
* Mobile navigation works
* Contact form fallback works
* FAQ accordion works
* Resume print button works
* Resume download links use the correct file
* No empty project links appear
* All local assets use correct relative paths
* All favicon variants are referenced on every page
* The web manifest is valid
* Images have appropriate alt text
* Animations respect reduced-motion preferences
* Forms have proper labels
* Keyboard focus is visible
* There are no browser-console errors
* There is no placeholder text presented as a verified personal accomplishment

## Final Output

Return ONLY a single ZIP archive containing the complete website.

Do not include explanations, setup instructions, source code excerpts, or commentary outside the ZIP file.

The finished website must be immediately usable after extracting the archive and opening `index.html`.
