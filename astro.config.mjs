// @ts-check
import { defineConfig } from 'astro/config';

// Static site, no integrations, one small inline script in the layout. Served as plain files.
export default defineConfig({
  site: 'https://neritic.ai',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
});
