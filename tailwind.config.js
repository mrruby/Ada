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
          yellow: "#FFB800",
          yellow2: "#FCD444",
          yellow3: "#F4E107",
          orange: "#F3661F",
          orange2: "#FEC884",
          orange3: "#FFBEA3",
          orange4: "#FEAB42",
          purple: "#A361B4",
          purple2: "#9C70E9",
          pink: "#F2A7B2",
          pink2: "#FFD3EB",
          pink3: "#BA93DF",
          pink4: "#F7E5EE",
          pink5: "#FEB0DB",
          pink6: "#FFD1F0",
          pink7: "#FF00A6",
          white: "#FFFFFF",
          white40: "#FFFFFF66",
          brown: "#9B3118",
          black: "#000000",
          newPurple: "#3D03A1",
        },
      },
      backgroundImage: {
        linear: "linear-gradient(180deg, #F4DCE8 0%, #FFF 100%);",
        linear2: "linear-gradient(0deg, #EEDCF6 0%, #FFF 100%);",
        linear3: "linear-gradient(180deg, #EEDCF6 0%, #FFF 100%)",
        linear4: "linear-gradient(270deg, #EEDCF6 0%, #FFF 100%)",
        linear5: "linear-gradient(180deg, #F4DCE8 0%, #FFF 50%, #F4DCE8 100%);",
        linear6:
          "linear-gradient(180deg,  #EEDCF6 0%, #FFF 50%, #EEDCF6 100%);",
        linear7: "linear-gradient(0deg, #FFBEA3 0%, #FFFFFF 100%)",
      },
      backgroundPosition: {
        bgPosition: "0px 310px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lemon: ["Lemon", "serif"],
      },
      fontSize: {
        adaMin: "0.75rem",
        adaNav: "0.9375rem",
        adaStandard: "1rem",
        adaDesc: "1.125rem",
        adaBase: "1.25rem",
        adaSubtitle: "1.5rem",
        adaSubtitleSecondary: "2rem",
        adaSubtitleThird: "2.5rem",
        adaTitle: "3rem",
        adaTitle2: "3.75rem",
        adaTitle3: "4rem",
        adaBig: "5rem",
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out",
        carousel: "marquee 60s linear infinite",
        blink: "blink 1s both infinite",
        "spin-slow": "spin 4s linear infinite",
        bounce: "custombounce 1.5s ease-in-out",
        bounce2: "bounce 1s infinite",
        marquee: "marquee 120s linear infinite",
        marquee2: "marquee 120s linear infinite",
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
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".animation-delay-200": {
          "animation-delay": "200ms",
        },
        ".animation-delay-400": {
          "animation-delay": "400ms",
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
