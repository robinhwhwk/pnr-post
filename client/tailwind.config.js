/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#030303',
          brighter: '#272728',
        },
        light: {
         DEFAULT: '#F8FaFC'
        },
      }
    },
  },
  plugins: [],
}