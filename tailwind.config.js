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
          purple: "#A361B4",
          pink: "#F2A7B2",
          pink2: "#FFD3EB",
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
        leagueSpartan: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        adaNav: "0.9375rem",
        adaDesc: "1.125rem",
        adaBase: "1.25rem",
        adaSubtitle: "1.5rem",
        adaSubtitleSecondary: "2.0625rem",
        adaSubtitleThird: "2.5rem",
        adaTitle: "3rem",
        adaTitle2: "3.75rem",
        adaBig: "5rem",
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out",
        carousel: "marquee 60s linear infinite",
        blink: "blink 1s both infinite",
        "spin-slow": "spin 4s linear infinite",
        bounce: "custombounce 1.5s ease-in-out",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee 25s linear infinite",
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
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        custombounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-10px)" },
          "60%": { transform: "translateY(-4px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
