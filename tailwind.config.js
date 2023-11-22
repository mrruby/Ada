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
          "dark-pink": "#ABA3AF",
          pink: "#F2A7B2",
          white: "#FFFFFF",
          white40: "#FFFFFF66",
        },
      },
      backgroundImage: {
        linear: "linear-gradient(180deg, #F4DCE8 0%, #FFF 100%);",
        linear2: "linear-gradient(0deg, #EEDCF6 0%, #FFF 100%);",
        linear3: "linear-gradient(180deg, #EEDCF6 0%, #FFF 100%)",
        linear4: "linear-gradient(270deg, #EEDCF6 0%, #FFF 100%)",
        linear5: "linear-gradient(180deg, #F4DCE8 0%, #FFF 50%, #F4DCE8 100%);",
      },
      backgroundPosition: {
        bgPosition: "0px 310px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        adaNav: "0.9375rem",
        adaDesc: "1.125rem",
        adaBase: "1.25rem",
        adaSubtitle: "1.5rem",
        adaSubtitleSecondary: "2.0625rem",
        adaTitle: "3rem",
        adaTitle2: "3.75rem",
        adaBig: "5rem",
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out",
        carousel: "marquee 60s linear infinite",
        blink: "blink 1s both infinite",
        "spin-slow": "spin 4s linear infinite",
        bounce: "bounce 1.2s ease",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        bounce: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
