/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1565DB",
        dark:{
          hard:"#0D2436",
          soft:"#183B56",
          light:"#5A7184"
        }
      },
      fontFamily:{
        opensans:["Open Sans", "sans-serif"],
        roboto:[ "Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}