/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1A2B3C',
          orange: '#E67E22',
          cream: '#FAF8F5',
          creamDark: '#F3EFEA',
          muted: '#5C6B7A',
          border: '#E8E2D9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Charter', 'Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
};
