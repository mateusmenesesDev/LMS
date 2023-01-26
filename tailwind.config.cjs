/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mb: '480px',
        fullhd: '1700px',
      },
    },
  },
  daisyui: {
    themes: ['business', 'emerald'],
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar'),  require('@shrutibalasa/tailwind-grid-auto-fit'),],
};
