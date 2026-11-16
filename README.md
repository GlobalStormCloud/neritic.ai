# Neritic AI site

One-page static site for Neritic AI, built with Astro. One small inline script (scroll progress, current nav link, the "How it starts" step, fade-in); the page is complete and readable without it.

- Text: `src/data/site.ts` (the product name is the `PRODUCT` constant, the demo button target is `DEMO_URL`).
- Look: `src/styles/theme.css` (colour, type and size tokens, fonts, one class per type role).
- Layout: `src/components/`, `src/layouts/`, `src/pages/`. The signal drawings are illustrations, not data: `src/data/signals.ts`.
- Fonts (SIL OFL) in `public/fonts/` with their licences; Lucide icons (ISC) in `src/assets/icons/lucide/`, licence in `public/icons/`.

## Build locally

```
npm ci
npm run build   # writes dist/
npm run check   # astro check
```

Two slots whose wording is not approved are drawn only by a draft build, as marked placeholders:
`NERITIC_DRAFT=1 npx astro build --outDir dist-draft`. The normal build never contains them.

`dist/` is the output; it is not committed.

## Deployment

The site is built and deployed to GitHub Pages by the workflow in `.github/workflows/pages.yml`
(manual run; the deploy job only runs from `main`). The repository root also holds the files of the
previous single-page version (`index.html`, `neritic-image.webp`, `CNAME`); the workflow does not use them.
