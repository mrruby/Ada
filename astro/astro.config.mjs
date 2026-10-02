// @ts-check
import netlify from "@astrojs/netlify"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

const google = fontProviders.google()

export default defineConfig({
  site: "https://adrianna.com.pl",
  // Pages are static by default; API routes opt into on-demand rendering
  // with `export const prerender = false`.
  output: "static",
  // Optimize images at build time (sharp) instead of the Netlify Image CDN so
  // output is host-agnostic and verifiable locally.
  adapter: netlify({ imageCDN: false }),
  trailingSlash: "ignore",
  devToolbar: { enabled: false },
  // Keep classic HTML whitespace rules: lots of copy relies on spaces
  // between inline elements (<strong>…</strong> text).
  compressHTML: true,
  build: { format: "directory" },
  image: {
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: google,
      name: "Montserrat",
      cssVariable: "--ff-montserrat",
      weights: [400, 500, 600, 700, 800, 900],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: google,
      name: "Anton",
      cssVariable: "--ff-anton",
      weights: [400],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: google,
      name: "Lemon",
      cssVariable: "--ff-lemon",
      weights: [400],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["serif"],
    },
    {
      provider: google,
      name: "Courier Prime",
      cssVariable: "--ff-courier",
      weights: [400, 700],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["monospace"],
    },
    {
      provider: google,
      name: "Annie Use Your Telescope",
      cssVariable: "--ff-annie",
      weights: [400],
      subsets: ["latin"],
      fallbacks: ["cursive"],
    },
    {
      provider: google,
      name: "Caveat",
      cssVariable: "--ff-caveat",
      weights: [400, 500, 600, 700],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["cursive"],
    },
    // MAGIC jesień pages (/magic-jesien, /jesien-nagranie2): self-hosted files
    // from src/assets/fonts/magic-jesien, rendered only in those pages' <head>.
    {
      provider: fontProviders.local(),
      name: "Outfit",
      cssVariable: "--ff-outfit",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          { weight: 400, style: "normal", src: ["./src/assets/fonts/magic-jesien/outfit-400.ttf"] },
          { weight: 500, style: "normal", src: ["./src/assets/fonts/magic-jesien/outfit-500.ttf"] },
          { weight: 600, style: "normal", src: ["./src/assets/fonts/magic-jesien/outfit-600.ttf"] },
          { weight: 700, style: "normal", src: ["./src/assets/fonts/magic-jesien/outfit-700.ttf"] },
          { weight: 800, style: "normal", src: ["./src/assets/fonts/magic-jesien/outfit-800.ttf"] },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Playfair Display",
      cssVariable: "--ff-playfair",
      fallbacks: ["Georgia", "serif"],
      options: {
        variants: [
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/fonts/magic-jesien/playfair-display-400.ttf"],
          },
          {
            weight: 500,
            style: "italic",
            src: ["./src/assets/fonts/magic-jesien/playfair-display-500.ttf"],
          },
        ],
      },
    },
  ],
})
