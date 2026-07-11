import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

const routes = ["/", "/magic/", "/magic-kolektyw/"]
const viewports = [375, 1440]
const wcagTags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]

function formatViolations(violations: Awaited<ReturnType<AxeBuilder["analyze"]>>["violations"]) {
  return violations
    .flatMap((violation) =>
      violation.nodes.map(
        (node) =>
          `id: ${violation.id}\nimpact: ${violation.impact ?? "unknown"}\nselector: ${node.target.join(", ")}\nhelp: ${violation.helpUrl}`,
      ),
    )
    .join("\n\n")
}

for (const width of viewports) {
  for (const route of routes) {
    test(`${route} has no WCAG 2.1/2.2 A or AA violations at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.goto(route, { waitUntil: "networkidle" })

      const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze()

      expect(results.violations, formatViolations(results.violations)).toHaveLength(0)
    })
  }
}
