/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}, ./dist/*.html'],
  theme: {
    extend: {
      colors: {
        'pink-red': '#f65261',
        'light-black': '#232323',
        'dark-gray': '#424242',
        'light-gray': '#555555',
      },
      backgroundImage: {
        'header': 'url(\'./assets/images/header.png\')',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
