/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#c3f73a',
      secondary: '#094d92',
      background: '#000',
      backgroundSecondary: '#111',
      text: '#fff',
      'text-secondary': '#ced4da',
    },
    fontFamily: {
      sans: ['Inter Tight Variable', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
