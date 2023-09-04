/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#97CDDE",
        darkBlue: "#1F3765",
        midBlue: "#385896",
        darkGray: "#22292C",
        lightGray: "#8B8B8B",
        lighterGray: "#ADADAD",
      },

      backgroundImage: {
        hero: "url('./src/assets/bg-hero.svg')",
        heroMobile: "url('./src/assets/bg-hero-mobile.svg')",
      },

      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [],
};

