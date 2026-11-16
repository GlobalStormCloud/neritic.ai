# Neritic AI site

One-page static site for Neritic AI, built with Astro (no client scripts).

- Text: `src/data/site.ts` (the product name is the `PRODUCT` constant, the demo button target is `DEMO_URL`).
- Look: `src/styles/theme.css` (colour, type and size tokens, fonts, one class per type role).
- Layout: `src/components/`, `src/layouts/`, `src/pages/`.
- Fonts (SIL OFL) in `public/fonts/` with their licences; Lucide `arrow-right` (ISC) in `src/assets/icons/lucide/`, licence in `public/icons/`.

## Build locally

```
npm ci
npm run build   # writes dist/
npm run check   # astro check
```

`dist/` is the output; it is not committed.

## Deployment

The site is built and deployed to GitHub Pages by the workflow in `.github/workflows/pages.yml`
(manual run; the deploy job only runs from `main`). The repository root also holds the files of the
previous single-page version (`index.html`, `neritic-image.webp`, `CNAME`); the workflow does not use them.
