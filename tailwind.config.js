/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9E76FB',
        dark: '#010001'
      },
      fontFamily: {
        sans: 'Noto Sans JP',
        primary: '"Dela Gothic One"'
      }
    },
  },
  plugins: [],
}

