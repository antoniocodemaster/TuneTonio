/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-app-color': '#8c68cd',
        'primary-app-color-hover': '#7758ae',
        'black-50':'#0C0C0C'
      }
    },
  },
  plugins: [],
}