const fs = require("node:fs")
const path = require("node:path")
const { chromium } = require("@playwright/test")
const { PAGE_ROUTES } = require("./routes")

const BASE_URL = (process.env.BASE_URL || "http://localhost:9000").replace(
  /\/+$/,
  ""
)
const OUTPUT_DIRECTORY = path.resolve(process.cwd(), "baselines")
const SETTLE_DELAY_MS = 500
const SCROLL_STEP_DELAY_MS = 150
const NAVIGATION_TIMEOUT_MS = 30_000
const VIEWPORTS = [
  { width: 375, height: 812 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1440, height: 900 },
]
const MOTION_RESET_CSS = `
  *, *::before, *::after {
    animation: none !important;
    scroll-behavior: auto !important;
    transition: none !important;
  }
`

function routeToSlug(route) {
  const slug = route.replace(/^\/+|\/+$/g, "").replace(/\//g, "--")

  return slug || "home"
}

function captureUrl(route) {
  return `${BASE_URL}${route}`
}

function errorMessage(error) {
  return error instanceof Error ? error.message : String(error)
}

async function revealLazyLoadedContent(page, viewportHeight) {
  await page.evaluate(
    async ({ step, delay }) => {
      const pause = (duration) =>
        new Promise((resolve) => window.setTimeout(resolve, duration))
      let scrollPosition = 0

      while (
        scrollPosition + window.innerHeight <
        document.documentElement.scrollHeight
      ) {
        scrollPosition += step
        window.scrollTo(0, scrollPosition)
        await pause(delay)
      }

      window.scrollTo(0, document.documentElement.scrollHeight)
      await pause(delay)
      window.scrollTo(0, 0)
    },
    { step: viewportHeight, delay: SCROLL_STEP_DELAY_MS }
  )
}

async function captureRoute(browser, route, stats) {
  const routeFailures = []
  const routeDirectory = path.join(OUTPUT_DIRECTORY, routeToSlug(route))

  try {
    fs.mkdirSync(routeDirectory, { recursive: true })
  } catch (error) {
    const message = errorMessage(error)

    console.error(
      `Failed ${route}: could not create its output directory: ${message}`
    )
    stats.failed += VIEWPORTS.length
    return [`output directory: ${message}`]
  }

  for (const viewport of VIEWPORTS) {
    let context
    const outputPath = path.join(routeDirectory, `${viewport.width}.png`)

    if (fs.existsSync(outputPath)) {
      stats.skipped += 1
      console.log(`Skipped ${route} at ${viewport.width}px: skipped (exists)`)
      continue
    }

    try {
      context = await browser.newContext({ viewport })
      const page = await context.newPage()

      await page.goto(captureUrl(route), {
        timeout: NAVIGATION_TIMEOUT_MS,
        waitUntil: "load",
      })
      await page.addStyleTag({ content: MOTION_RESET_CSS })
      await revealLazyLoadedContent(page, viewport.height)
      await page.waitForTimeout(SETTLE_DELAY_MS)
      await page.screenshot({ fullPage: true, path: outputPath })
      stats.captured += 1
      console.log(`Captured ${route} at ${viewport.width}px -> ${outputPath}`)
    } catch (error) {
      const message = errorMessage(error)

      stats.failed += 1
      routeFailures.push(`${viewport.width}px: ${message}`)
      console.error(`Failed ${route} at ${viewport.width}px: ${message}`)
    } finally {
      if (context) {
        try {
          await context.close()
        } catch (error) {
          const message = errorMessage(error)

          routeFailures.push(`${viewport.width}px cleanup: ${message}`)
          console.error(
            `Failed to close ${route} at ${viewport.width}px: ${message}`
          )
        }
      }
    }
  }

  return routeFailures
}

async function main() {
  if (PAGE_ROUTES.length !== 29) {
    throw new Error(`Expected 29 page routes, found ${PAGE_ROUTES.length}.`)
  }

  console.log(`Capturing ${PAGE_ROUTES.length} routes from ${BASE_URL}`)

  const browser = await chromium.launch()
  const failures = []
  const stats = { captured: 0, skipped: 0, failed: 0 }

  try {
    for (const route of PAGE_ROUTES) {
      const routeFailures = await captureRoute(browser, route, stats)

      if (routeFailures.length > 0) {
        failures.push({ route, routeFailures })
      }
    }
  } finally {
    await browser.close()
  }

  if (failures.length > 0) {
    console.error(
      `\nCapture finished with failures on ${failures.length} route(s):`
    )

    for (const { route, routeFailures } of failures) {
      console.error(`- ${route}: ${routeFailures.join("; ")}`)
    }

    console.log(
      `\nSummary: captured ${stats.captured}, skipped ${stats.skipped}, failed ${stats.failed}`
    )
    process.exitCode = 1
    return
  }

  console.log(`\nCapture complete: ${OUTPUT_DIRECTORY}`)
  console.log(
    `Summary: captured ${stats.captured}, skipped ${stats.skipped}, failed ${stats.failed}`
  )
}

main().catch((error) => {
  console.error(`Baseline capture could not start: ${errorMessage(error)}`)
  process.exitCode = 1
})
