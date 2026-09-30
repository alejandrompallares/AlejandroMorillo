import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alejandrompallares.github.io',
  base: '/AlejandroMorillo',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/AlejandroMorillo/'),
    }),
  ],
});
