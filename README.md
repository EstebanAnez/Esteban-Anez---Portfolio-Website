# Esteban Añez Velarde | Portfolio Website

A fully static personal portfolio built with HTML, CSS, and vanilla JavaScript. No backend, no database, no build step, no Node.js. It works when opened directly from your file system and when published to GitHub Pages.

---

## Running the Website

1. Extract the ZIP archive anywhere on your computer.
2. Double-click `index.html` (or right-click → Open With → your browser).

That's it. **No installation and no build command are required.** All fonts, icons, images, and scripts are included locally.

---

## Publishing to GitHub Pages

1. **Create a GitHub repository.** Sign in at github.com → click **New repository** → give it a name (for example `portfolio`) → set it to **Public** → **Create repository**.
2. **Upload all files.** On the new repository page, click **uploading an existing file**, then drag in *everything* from this folder, including `index.html`, all other `.html` files, `favicon.ico`, `site.webmanifest`, and the entire `assets/` folder (keep the folder structure intact).
3. **Commit the files.** Scroll down, add a commit message like "Initial portfolio", and click **Commit changes**.
4. **Open repository settings.** Click the **Settings** tab at the top of the repository.
5. **Select Pages.** In the left sidebar, click **Pages**.
6. **Choose deployment from the main branch.** Under *Build and deployment* → *Source*, select **Deploy from a branch**, then choose the **main** branch.
7. **Select the root folder.** Next to the branch, choose **/ (root)**, then click **Save**.
8. **Find the published URL.** After a minute or two, the Pages screen shows your live URL, usually `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
9. **Update canonical and social-sharing URLs.** Every HTML page currently uses `https://estebananez.github.io/portfolio` (based on the GitHub username EstebanAnez and a repository named `portfolio`). If your repository has a different name, find-and-replace this URL with your real published URL in all five HTML files. It appears in the `<link rel="canonical">` tag, the Open Graph tags (`og:url`, `og:image`), the Twitter Card image tag, and the JSON-LD structured data.

---

## Updating Projects

All project content lives in one file: **`/assets/js/projects.js`**, inside the `portfolioData.projects` array. Edit, add, or remove objects there, nothing else needs to change.

> **Important:** the project data must remain embedded inside `projects.js`. Do **not** move it to a separate JSON file loaded with `fetch()`: `fetch()` is blocked when the site is opened from the file system (`file://`), and the projects page would appear empty.

### Supported project fields

| Field | Type | Purpose |
|---|---|---|
| `id` | string (required) | Unique identifier, e.g. `"my-project"` |
| `title` | string (required) | Project title |
| `summary` | string | One-sentence summary shown on the card |
| `description` | string | Full description shown in the case study |
| `image` | string | Path to the project image (16:9 recommended) |
| `imageAlt` | string | Alt text describing the image |
| `category` | string | One category, e.g. `"Finance"`: filter buttons are generated automatically |
| `date` | string | Free text, e.g. `"2026"` or `"Jan 2026 – May 2026"` |
| `organization` | string | Company, university, client, or competition |
| `context` | string | Academic, professional, consulting, or personal project |
| `problem` | string | The business problem addressed |
| `objective` | string | The project objective |
| `process` | array of strings | Methodology steps |
| `tools` | array of strings | Tools and technologies |
| `skills` | array of strings | Key skills demonstrated |
| `results` | array of strings | Results or outcomes (only verified ones) |
| `lessons` | string | Key lesson or takeaway |
| `githubUrl` | string | GitHub link (leave `''` to hide the button) |
| `liveUrl` | string | Live demo link (leave `''` to hide) |
| `dashboardUrl` | string | Dashboard link (leave `''` to hide) |
| `reportUrl` | string | Report or presentation link (leave `''` to hide) |
| `tags` | array of strings | Tag filters are generated automatically |
| `featured` | boolean | `true` shows the project on the home page |

Empty fields are simply not displayed, no blank buttons or empty sections appear.

### Example project object

```javascript
{
  id: 'sales-dashboard',
  title: 'Regional Sales Dashboard',
  summary: 'An interactive Power BI dashboard tracking sales KPIs across four regions.',
  description: 'Built a dashboard consolidating monthly sales data from multiple sources into a single view for regional managers.',
  image: 'assets/projects/project-placeholder-02.png',
  imageAlt: 'Bar chart dashboard preview',
  category: 'Data Visualization',
  date: '2026',
  organization: 'Example Company',
  context: 'Professional project',
  problem: 'Managers relied on manual weekly spreadsheets with inconsistent definitions.',
  objective: 'Provide a single, always-current view of regional sales performance.',
  process: ['Consolidated data sources', 'Defined shared KPI logic', 'Built and iterated the dashboard with users'],
  tools: ['Power BI', 'SQL', 'Excel'],
  skills: ['Dashboard development', 'KPI reporting'],
  results: ['Add a verified project outcome here.'],
  lessons: 'Shared metric definitions matter more than visual polish.',
  githubUrl: '',
  liveUrl: '',
  dashboardUrl: '',
  reportUrl: '',
  tags: ['dashboard', 'analytics'],
  featured: false
}
```

---

## Updating Experience

Professional experience lives in **`/assets/js/experience.js`**, inside the `experienceData.roles` array. Each entry supports: `organization`, `title`, `location`, `start`, `end`, `description`, `responsibilities` (array), `accomplishments` (array), `tools` (array), `skills` (array), and `preview` (set `true` to also show the role in the home-page preview timeline). Empty fields are hidden automatically. As with projects, keep the data embedded in the file, do not load it with `fetch()`.

---

## Replacing the Resume

Replace the file at **`/assets/documents/Esteban-Anez-Resume.pdf`** with your real resume PDF.

**Keep the same filename** (`Esteban-Anez-Resume.pdf`), every "Download Resume" button on the site points to that exact path. If you prefer a different filename, update the link in all five HTML files (search for `Esteban-Anez-Resume.pdf`).

Also update the on-page resume content in `resume.html` so the web version matches the PDF.

---

## Replacing the Logo

The logo appears in several sizes:

- `/assets/images/logo.png`: navigation logo
- `/assets/images/logo-large.png`: larger display version
- `/assets/images/logo-dark.png`: version for dark backgrounds
- `/assets/images/logo-light.png`: version for light backgrounds
- Favicon variants: `/favicon.ico`, `/assets/images/favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` (180×180), `android-chrome-192x192.png`, `android-chrome-512x512.png`
- `/assets/images/og-image.png`: 1200×630 social sharing image

To replace them, export your new logo at each size listed above and overwrite the files (keep the filenames). The easiest way to regenerate every favicon variant is an online generator such as **https://realfavicongenerator.net** or **https://favicon.io**: upload one square logo image (512×512 or larger) and download the full set, then copy the generated files over the existing ones.

---

## Replacing the Profile Photo

The About page shows `/assets/images/profile-400.jpg` (already set to the professional headshot). Three variants exist:

| File | Recommended size |
|---|---|
| `assets/images/profile.jpg` | 800×800 |
| `assets/images/profile-400.jpg` | 400×400 |
| `assets/images/profile-thumbnail.jpg` | 160×160 |

To change the photo, use a **square** image, export it as JPEG at the sizes above, and overwrite the files keeping the same filenames (or update the file path in `about.html` if you use a different format). Keep the 400px version under ~200 KB.

---

## Configuring the Contact Form

The site is static, so the form works in one of two ways. Both are configured at the top of **`/assets/js/main.js`**:

1. **`mailto:` fallback (default).** Set `CONTACT_EMAIL` to your email address. When a visitor submits the form, their email client opens with the message pre-filled. No service or signup required.
2. **Formspree (recommended for real submissions).** Create a free form at **https://formspree.io**, copy the endpoint it gives you (it looks like `https://formspree.io/f/abcdwxyz`), and paste it into `FORMSPREE_ENDPOINT` in `main.js`. Submissions are then sent directly without opening an email client.

Also replace the placeholder email/LinkedIn/GitHub links on the contact page (`contact.html`), in the footer of every page, and in `resume.html`.

> **Never commit secret keys.** A Formspree endpoint URL is public by design and safe to include; API keys, passwords, and tokens are not, and this site needs none.

---

## Customizing the Website

- **Name and headline**: appear in the hero (`index.html`), the navigation brand and footer (all pages), `resume.html`, the `<title>`/meta tags, and the JSON-LD structured data. Find-and-replace works well.
- **Summary**: the "Professional summary" section in `index.html` and the introduction in `about.html`.
- **Location and availability**: the two lines marked with a comment in the hero section of `index.html` (search for "Location and availability").
- **Contact information and social links**: already set to estebana.velarde@gmail.com, linkedin.com/in/esteban-anez, and github.com/EstebanAnez in `contact.html`, the footer of every page, `resume.html`, and `assets/js/main.js`. Edit those files if anything changes.
- **Skills**: the "Skills overview" section in `index.html` and the fuller version in `about.html`. Both are plain HTML chip lists, edit the `<li class="chip">` items.
- **Role interests**: the `#role-interests` list in `about.html`.
- **Colors**: all colors are CSS custom properties at the top of `/assets/css/styles.css` (`:root` for dark mode, `[data-theme='light']` for light mode). Change `--accent`, `--tan`, `--bg`, etc. once and the whole site updates.
- **Typography**: font files live in `/assets/fonts/` (IBM Plex Sans + IBM Plex Mono, both open-licensed). Swap the `@font-face` rules and the `--font-sans` / `--font-mono` variables in `styles.css` to change typefaces.
- **Theme**: dark is the default; the toggle stores the visitor's choice in `localStorage`. To default to light instead, change `applyTheme(storedTheme() || 'dark')` in `main.js` to `'light'` and mirror the change in the small inline script in each page's `<head>`.
- **Project categories**: you don't edit these directly: category and tag filter buttons on the projects page are generated automatically from whatever `category` and `tags` values exist in `projects.js`.

---

## Limitations

- **No backend.** The site is purely static, there is no server code, database, or user accounts.
- **Form submissions require Formspree** (or another static-form service). Without one, the form falls back to opening the visitor's email client via `mailto:`.
- **GitHub Pages does not execute server-side code**, so nothing requiring a server will work there.
- **Resume and project files must be uploaded manually**: replacing the PDF or project images means overwriting the files in `assets/` and re-uploading them to the repository.
- **External project links require an internet connection** (for example the EquityIQ live demo); everything else works offline.

---

## File Structure

```text
/index.html            Home
/projects.html         Project library (search + filters + case studies)
/about.html            About, education, experience, leadership, skills
/resume.html           Online resume (print + download)
/contact.html          Contact form, links, FAQ
/favicon.ico
/site.webmanifest
/README.md

/assets/css/           styles.css, print.css
/assets/js/            main.js, projects.js (project data), experience.js (experience data)
/assets/fonts/         IBM Plex Sans & IBM Plex Mono (local, open-licensed)
/assets/images/        logo, profile, favicon variants, og-image
/assets/documents/     Esteban-Anez-Resume.pdf
/assets/projects/      project placeholder images
/assets/generated/     decorative SVG assets
```
