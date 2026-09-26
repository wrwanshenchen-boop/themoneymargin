import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Repository: https://github.com/wrwanshenchen-boop/themoneymargin.git
// Configured for custom domain themoneymargin.com
export default defineConfig({
  site: 'https://themoneymargin.com',
  base: '/',
  integrations: [tailwind()],
});
