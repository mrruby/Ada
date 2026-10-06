/**
 * E2E tests against the production build served from dist/ by
 * scripts/serve-dist.mjs. Build first: `yarn test:e2e` (= build + test), or
 * `yarn build && yarn test:e2e:dist`.
 */
import { defineConfig, devices } from "@playwright/test"

const PORT = Number(process.env.E2E_PORT ?? 4322)
const baseURL = `http://127.0.0.1:${PORT}`
const CI = Boolean(process.env.CI)

export default defineConfig({
  testDir: "tests/e2e",
  outputDir: "test-results/playwright",
  globalSetup: "./tests/e2e/a11y-report.ts",
  fullyParallel: true,
  forbidOnly: CI,
  retries: CI ? 1 : 0,
  reporter: CI
    ? [["github"], ["list"], ["html", { open: "never", outputFolder: "playwright-report" }]]
    : [["list"], ["html", { open: "never", outputFolder: "playwright-report" }]],
  expect: { timeout: 7_000 },
  use: {
    baseURL,
    locale: "pl-PL",
    timezoneId: "Europe/Warsaw",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "mobile",
      use: { ...devices["Desktop Chrome"], viewport: { width: 375, height: 812 } },
    },
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
  ],
  webServer: {
    command: "node scripts/serve-dist.mjs",
    url: `${baseURL}/`,
    env: { PORT: String(PORT), HOST: "127.0.0.1" },
    reuseExistingServer: !CI,
    stdout: "ignore",
    stderr: "pipe",
  },
})
