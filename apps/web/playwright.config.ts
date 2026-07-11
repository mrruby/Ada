import { defineConfig } from "@playwright/test"

const baseURL = process.env.BASE_URL ?? "http://localhost:4321"

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.ts",
  fullyParallel: true,
  use: {
    baseURL,
  },
  // An explicit BASE_URL is an externally served build, so do not start a local server.
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: "node scripts/serve-dist.mjs",
        url: baseURL,
        reuseExistingServer: !process.env.CI,
      },
})
