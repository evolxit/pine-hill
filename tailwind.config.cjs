import typographyPlugin from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#D1FAE5', // Lightest shade
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#22C55E', // Default
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D', // Darkest shade
        },
        secondary: {
          100: '#ffb3b3',
          200: '#ff6666',
          300: '#ff3333',
          400: '#ff0000',
          500: '#a90000cc',
          600: '#990000',
          700: '#800000',
          800: '#660000',
          900: '#330000',
        },
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      // colors: {
      //   primary: 'var(--aw-color-primary)',
      //   secondary: 'var(--aw-color-secondary)',
      //   accent: 'var(--aw-color-accent)',
      //   default: 'var(--aw-color-text-default)',
      //   muted: 'var(--aw-color-text-muted)',
      // },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
