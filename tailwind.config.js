/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'avatar': '0 0px 40px -px rgba(0, 0, 0, 0.2)',
      },
      colors:{
        'darkBlue': '#323A50',
        'darkBlueBG' : '#0B1121',
      },
      fontFamily:{
        burtons:"burtons",
      } 
    },
  },
  plugins: [],
}