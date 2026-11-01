import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Custom domain configuration: moneymarginsecret.com
export default defineConfig({
  site: 'https://moneymarginsecret.com',
  base: '/',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
