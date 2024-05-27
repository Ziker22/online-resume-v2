/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#f72585',
      secondary: '#7209b7',
      tertiary: '#3a0ca3',
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
