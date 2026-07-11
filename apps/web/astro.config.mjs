import netlify from "@astrojs/netlify"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
  integrations: [react()],
  adapter: netlify(),
  vite: {
    build: {
      // Keep Astro client modules external so the pilot CSP can remain nonce-free.
      assetsInlineLimit: 0,
    },
    plugins: [tailwindcss()],
  },
})
