import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages default URL configuration
export default defineConfig({
  site: 'https://wrwanshenchen-boop.github.io',
  base: '/themoneymargin',
  integrations: [tailwind()],
});
