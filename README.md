# ibrahimdev.cloud

Personal portfolio of **Ibrahim Baatiah**, a Cloud & Infra Management Engineer.

**Stack:** Next.js (App Router, JavaScript/JSX) · Tailwind CSS · next-themes (light/dark mode) · static export · Azure Static Web Apps · GitHub Actions

## Pages

| Route | Content |
|---|---|
| `/` | Hero, focus areas, featured projects |
| `/about` | Story, skills, education, languages |
| `/cv` | Experience, education, certifications, skills, with a print-to-PDF button |
| `/projects` | All projects, filterable by category |
| `/contact` | Contact channels and a message form |

## Editing content

All text lives in `data/`. Edit those files, not the components:

- `data/profile.js` — name, title, about, links
- `data/projects.js` — projects and categories
- `data/cv.js` — experience, education, certifications
- `data/skills.js` — skill groups

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

## Deployment

Each push to `main` runs `.github/workflows/azure-static-web-apps-*.yml`, which builds the site and uploads `out/` to Azure Static Web Apps.
