/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xs": "390px"
      },
      keyframes: {
        "inout": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.75)" }
        }
      },
      animation: {
        "inout": "inout 4s ease-in-out infinite"
      },
      gridTemplateColumns:{
        "half": "0.5fr 2fr"
      }
    },
  },
  plugins: [],
}
