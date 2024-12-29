/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
    theme: {
      extend: {
        colors: {
          primaryPink: "#A53860",
          secondaryPink:"#DA627D",
          lightPink: "#FFA5AB",
          darkPink: "#450920",
          darkOpacityPink: "rgba(165, 56, 96, 0.58)",
          primaryGray:"#666666",
          darkGray: "#1A1A2E",
          lightGray: "#E0E0E0",
          lightBlack: "#333333",
          bgColor:"#F5F5F5"
        },
        container: {
          center: true,
          padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "3rem",
            xl: "4rem",
            "2xl": "6rem",
          },
        },
        fontFamily: {
          custom: ['Montserrat','sans-serif'],
        },
      }
  },
  plugins: [],
}

