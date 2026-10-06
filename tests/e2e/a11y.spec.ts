/**
 * axe-core scan (WCAG 2.1 A/AA) of every built route at both viewports.
 * Fails only on `critical` violations; everything is written to
 * test-results/a11y-report.json (see a11y-report.ts) for triage.
 */
import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import AxeBuilder from "@axe-core/playwright"
import { A11Y_PARTS_DIR, type A11yPart } from "./a11y-report"
import { expect, test } from "./fixtures"
import { routes } from "./routes"

const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]

// Reveal/settle animations run instantly, so axe sees the final state.
test.use({ reducedMotion: "reduce" })

test.describe("accessibility", () => {
  test.describe.configure({ timeout: 90_000 })

  for (const route of routes) {
    test(`axe ${route}`, async ({ page }, testInfo) => {
      await page.goto(route, { waitUntil: "load" })
      await page.evaluate(() => document.fonts.ready)

      const results = await new AxeBuilder({ page }).withTags(TAGS).analyze()

      const part: A11yPart = {
        route,
        project: testInfo.project.name,
        url: page.url(),
        violations: results.violations.map((violation) => ({
          id: violation.id,
          impact: violation.impact ?? null,
          help: violation.help,
          helpUrl: violation.helpUrl,
          nodes: violation.nodes.map((node) => ({
            target: node.target.map(String).join(" "),
            html: node.html.slice(0, 300),
            summary: node.failureSummary ?? "",
          })),
        })),
        incomplete: results.incomplete.length,
        passes: results.passes.length,
      }
      mkdirSync(A11Y_PARTS_DIR, { recursive: true })
      const slug = route === "/" ? "home" : route.replace(/^\/|\/$/g, "").replace(/\//g, "_")
      writeFileSync(join(A11Y_PARTS_DIR, `${slug}@${part.project}.json`), JSON.stringify(part))

      const count = (impact: string) =>
        part.violations
          .filter((violation) => violation.impact === impact)
          .reduce((sum, violation) => sum + violation.nodes.length, 0)
      testInfo.annotations.push({
        type: "axe",
        description: `critical ${count("critical")}, serious ${count("serious")}, moderate ${count("moderate")}, minor ${count("minor")}`,
      })

      const critical = part.violations
        .filter((violation) => violation.impact === "critical")
        .map(
          (violation) =>
            `${violation.id} (${violation.nodes.length}): ${violation.nodes[0]?.target}`
        )
      expect(critical, `critical axe violations on ${route}`).toEqual([])
    })
  }
})
