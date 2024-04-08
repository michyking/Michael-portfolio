/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Phudu",
      secondary: "Poppins",
      tertiary: "Montserrat",
    },
    
    
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "rgb(251, 37, 118)",
        secondary: "rgb(0, 2, 161)",
        site: "rgb(11, 2, 19)",
        sitebg: "rgb(12, 1, 30)"
      },
    },
  },
  plugins: [],
}