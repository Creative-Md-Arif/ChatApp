/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#fff",
        secondary:"#222222"
      }
      
    },
    container: {
      center: true,
    },

    fontFamily:{
      primary:[ "Roboto", "sans-serif"],
      secondary:["Lato", "sans-serif"],
    }
  },
  plugins: [],
}