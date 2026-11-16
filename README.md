# Neritic AI site

One-page static site (Astro, no client scripts).

- Text: `src/data/site.ts` (the product name is the `PRODUCT` constant, the demo button target is `DEMO_URL`).
- Look: `src/styles/theme.css` (colour, type and size tokens, fonts, one class per type role).
- Layout: `src/components/`, `src/layouts/`, `src/pages/`.
- Fonts (SIL OFL) in `public/fonts/` with their licences; Lucide `arrow-right` (ISC) in `src/assets/icons/lucide/`, licence in `public/icons/`.

```
npm install
npm run build   # writes dist/
npm run check   # astro check
```
