/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        primary: '#ffffff',
        accent: '#8a2be2', 
      },
fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        jersey: ['"Jersey 10"', 'sans-serif'], // <--- Ensure this line is here
      }
    },
  },
  plugins: [],
}