/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'f1loading': "url('/src/assets/img/f1.jpeg')",
      },
      colors: {
        'regal-blue': '#243c5a',
        'f1-main': '#443737',
        'f1-red': '#FF0000',
        'f1-dark-red': '#720005',
        'f1-orange': '#FF4D00',
        'f1-dark-orange': '#571400',
        'f1-white': '#FFFBEB'
      },
    },
  },
  plugins: [],
}