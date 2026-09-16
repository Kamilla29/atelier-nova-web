# Atelier Nova — Commercial Website Frontend

[![Quality checks](https://github.com/Kamilla29/atelier-nova-web/actions/workflows/quality.yml/badge.svg)](https://github.com/Kamilla29/atelier-nova-web/actions/workflows/quality.yml)

A responsive commercial website for a fictional Prague interior-design studio, built as a **classic frontend / design-to-code portfolio case**.

The repository already includes a GitHub Pages deployment workflow; the public demo can be enabled from the repository Pages settings.

The project intentionally uses semantic HTML5, SCSS, Bootstrap and jQuery rather than React. Its purpose is to demonstrate agency-style website implementation alongside my React/TypeScript application projects.

## Why this project exists

My portfolio already demonstrates React and TypeScript application development. Atelier Nova covers a different frontend use case: translating a visual brief into a polished, responsive, SEO-aware commercial website with lightweight JavaScript interactions.

## What this project demonstrates

- design-to-code implementation from a visual brief;
- semantic HTML5 and accessible structure;
- responsive CSS/SCSS and Bootstrap 5 layout;
- practical jQuery interactions;
- mobile navigation and smooth in-page navigation;
- filterable portfolio gallery;
- Bootstrap project modal;
- accessible FAQ accordion;
- native client-side form validation;
- SEO metadata, Open Graph and Schema.org structured data;
- `robots.txt`, `sitemap.xml` and canonical URL setup;
- reduced-motion support and visible keyboard focus;
- local visual assets with explicit dimensions to reduce layout shift;
- GitHub Actions quality checks and GitHub Pages deployment workflow.

## Stack

- HTML5
- SCSS / CSS3
- JavaScript
- jQuery 3
- Bootstrap 5
- GitHub Actions
- GitHub Pages

## Interaction map

| Feature | Technology |
| --- | --- |
| Project filtering | jQuery |
| FAQ accordion | jQuery + ARIA state |
| Form validation | HTML Constraint Validation API + jQuery |
| Project detail overlay | Bootstrap Modal |
| Responsive layout | Bootstrap grid + custom SCSS |
| Motion preferences | CSS `prefers-reduced-motion` |
| Static deployment | GitHub Pages workflow |
| Automated syntax check | GitHub Actions |

## Design → Code

See [`docs/DESIGN_TO_CODE.md`](docs/DESIGN_TO_CODE.md) for the visual brief, implementation decisions and handoff rationale.

## Run locally

No build step is required. Serve the repository root with any static server, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

Bootstrap and jQuery are loaded from CDN. Custom styling is committed as both editable `styles.scss` and ready-to-use `styles.css`.

## Quality checks

```bash
npm run check
```

The repository also contains GitHub Actions workflows for JavaScript syntax validation, required-asset checks and static deployment.

## Project structure

```text
atelier-nova-web/
├── .github/
│   └── workflows/
├── docs/
│   └── DESIGN_TO_CODE.md
├── public/
│   ├── assets/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.js
│   ├── styles.scss
│   └── styles.css
├── index.html
├── package.json
├── LICENSE
└── README.md
```

## Portfolio context

Atelier Nova is a fictional brand created for demonstration purposes. All names, project descriptions, contact details and statistics are illustrative.

---

**Kamilla Kuanysheva**  
Frontend / React Developer · JavaScript · TypeScript · Responsive Web
