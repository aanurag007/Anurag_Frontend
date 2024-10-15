/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navColor: "rgba(12, 43, 47, 0.7)",
        navBorder: " rgba(15, 55, 60, 1)",
        fontColor: " rgba(176, 250, 255, 0.7)",
        navButtonColor: " rgba(205, 252, 255, 1)",
        investment: "rgba(176, 249, 255, 1)",
        dApp: "rgb(17, 25, 23)",
        dAppBorder: "rgba(139,249,232,0.2)",
        logoBg1: "rgba(30, 128, 140, 1)",
        logoBg2: "rgba(26, 222, 245, 1)",
        squareBorder: "rgba(14, 139, 154, 1)",
        squareColor: "rgba(21, 182, 201, 1)",
        AboutEthAiColor: "rgba(8, 37, 42, 1)",
        logoColor: "rgba(97, 240, 254, 1)",
        donutcolor1: "rgba(24, 110,118, 1)",
        donutcolor2: "rgba(10, 153, 166, 1)",
        footerBg: "rgba(1, 15, 20, 1)",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        play: ["Play", "sans-serif"],
      },
      screens: {
        "custom-lg": "900px",
        "custom-md": "1140px",
        "custom-xl": "1440px",
        "custom-sm": "425px",
      },
    },
  },
  plugins: [],
};