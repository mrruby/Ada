module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ada: {
          blue: "#253274",
          grey: "rgba(37, 50, 116, 0.20);",
          "light-pink": "#EEDCF6",
          pink: "#F2A7B2",
          white: "#FFFFFF",
        },
      },
      backgroundImage: {
        "linear": "linear-gradient(180deg, #F4DCE8 0%, #FFF 100%);",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        adaNav: "0.9375rem",
        adaBase: "1.125rem",
        adaSubtitle: "1.5625rem",
        adaSubtitleSecondary: "2.1875rem",
        adaTitle: "3rem",
        adaBig: "5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
