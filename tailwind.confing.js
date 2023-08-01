module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ada: {
          blue: "#253274",
          "light-pink": "#EEDCF6",
          pink: "#F2A7B2",
          white: "#FFFFFF",
        },
      },
      background: {
        "linear": "linear-gradient(180deg, #F4DCE8 0%, #FFF 100%);",
      },
      fontFamily: {
        montserrat: ['Montserrat', sans-serif],
      },
      fontSize: {
        adaNav: "0.9375rem",
        adaBase: "1.125rem",
        adaSubtitle: "1.5625rem",
        adaTitle: "3rem",
        adaBig: "5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
