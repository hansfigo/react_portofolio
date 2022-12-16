/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'darkBlue': '#323A50',
      },
      fontFamily:{
        burtons:"burtons",
      } 
    },
  },
  plugins: [],
}