/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#A70000',
        'primary-red-hover': '#CE0000',
        'black-50':'#0C0C0C'
      }
    },
  },
  plugins: [],
}