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
    },
  },
  plugins: [],
}