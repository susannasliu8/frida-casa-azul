// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// `site` and `base` can be overridden at build time so the same build works for
// the production GitHub Pages site and for per-PR preview subpaths.
const site = process.env.SITE_URL || 'https://susannasliu8.github.io';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
