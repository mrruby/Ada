/**
 * Playwright global setup/teardown for the accessibility report.
 *
 * Each a11y test (one per route and viewport) writes its axe results to
 * test-results/a11y-parts/; after the run they are merged into
 * test-results/a11y-report.json (grouped by rule) and summarised on stdout.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { fileURLToPath } from "node:url"

const resultsDir = fileURLToPath(new URL("../../test-results", import.meta.url))
export const A11Y_PARTS_DIR = join(resultsDir, "a11y-parts")
export const A11Y_REPORT = join(resultsDir, "a11y-report.json")

export type A11yViolationNode = { target: string; html: string; summary: string }

export type A11yViolation = {
  id: string
  impact: string | null
  help: string
  helpUrl: string
  nodes: A11yViolationNode[]
}

export type A11yPart = {
  route: string
  project: string
  url: string
  violations: A11yViolation[]
  incomplete: number
  passes: number
}

type RuleSummary = {
  id: string
  impact: string | null
  help: string
  helpUrl: string
  /** Affected elements over all routes and viewports. */
  count: number
  routes: string[]
  example: { route: string; target: string; html: string }
}

const IMPACT_ORDER = ["critical", "serious", "moderate", "minor"]
const rank = (impact: string | null) => {
  const index = IMPACT_ORDER.indexOf(impact ?? "")
  return index === -1 ? IMPACT_ORDER.length : index
}

const readParts = (): A11yPart[] =>
  existsSync(A11Y_PARTS_DIR)
    ? readdirSync(A11Y_PARTS_DIR)
        .filter((file) => file.endsWith(".json"))
        .map((file) => JSON.parse(readFileSync(join(A11Y_PARTS_DIR, file), "utf8")) as A11yPart)
    : []

export const writeA11yReport = () => {
  const parts = readParts().sort((a, b) =>
    `${a.route}@${a.project}`.localeCompare(`${b.route}@${b.project}`)
  )
  if (parts.length === 0) return

  const rules = new Map<string, RuleSummary>()
  for (const part of parts) {
    for (const violation of part.violations) {
      const where = `${part.route} @${part.project}`
      const rule = rules.get(violation.id) ?? {
        id: violation.id,
        impact: violation.impact,
        help: violation.help,
        helpUrl: violation.helpUrl,
        count: 0,
        routes: [],
        example: {
          route: where,
          target: violation.nodes[0]?.target ?? "",
          html: violation.nodes[0]?.html ?? "",
        },
      }
      rule.count += violation.nodes.length
      if (!rule.routes.includes(where)) rule.routes.push(where)
      if (rank(violation.impact) < rank(rule.impact)) rule.impact = violation.impact
      rules.set(violation.id, rule)
    }
  }

  const summary = [...rules.values()].sort(
    (a, b) => rank(a.impact) - rank(b.impact) || b.count - a.count
  )
  const byImpact = Object.fromEntries(
    IMPACT_ORDER.map((impact) => [
      impact,
      summary.filter((rule) => rule.impact === impact).reduce((sum, rule) => sum + rule.count, 0),
    ])
  )

  mkdirSync(resultsDir, { recursive: true })
  writeFileSync(
    A11Y_REPORT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        tags: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
        scanned: parts.length,
        byImpact,
        rules: summary,
        pages: parts,
      },
      null,
      2
    )
  )

  const lines = summary.map(
    (rule) =>
      `  ${(rule.impact ?? "?").padEnd(9)} ${rule.id.padEnd(28)} ${String(rule.count).padStart(4)} nodes on ${rule.routes.length} page/viewport(s) — e.g. ${rule.example.target}`
  )
  console.log(
    [
      `\naxe (WCAG 2.1 A/AA): ${parts.length} scans — ` +
        IMPACT_ORDER.map((impact) => `${impact} ${byImpact[impact]}`).join(", "),
      ...lines,
      `  full report: ${A11Y_REPORT}\n`,
    ].join("\n")
  )
}

export default function globalSetup() {
  rmSync(A11Y_PARTS_DIR, { recursive: true, force: true })
  rmSync(A11Y_REPORT, { force: true })
  return writeA11yReport
}
