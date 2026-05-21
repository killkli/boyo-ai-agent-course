import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        boyo: {
          50: '#f0faf7',
          100: '#d1f0e6',
          200: '#a3e0cd',
          300: '#6dc9ae',
          400: '#3dae8e',
          500: '#2D8B75',
          600: '#256f5e',
          700: '#1d5548',
          800: '#153b32',
          900: '#0d221d',
        },
        accent: {
          50: '#fef3ee',
          100: '#fdddcc',
          200: '#fbbb99',
          300: '#f89966',
          400: '#E8734A',
          500: '#cc5a33',
          600: '#a84828',
          700: '#84371e',
          800: '#602714',
          900: '#3c170a',
        },
        cream: {
          50: '#FDF8F0',
          100: '#FAF0E1',
          200: '#F5E1C3',
        },
        bark: {
          700: '#5C4A3A',
          800: '#4A3B2E',
          900: '#3D3229',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', 'Georgia', 'serif'],
        sans: ['"Noto Sans TC"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
