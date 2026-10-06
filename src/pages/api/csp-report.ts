/**
 * Receives Content-Security-Policy violation reports (see netlify.toml) and
 * logs one compact line per violation to the Netlify function log, so the
 * report-only policy can be reviewed before it is enforced.
 */
import type { APIRoute } from "astro"

export const prerender = false

const MAX_BODY_BYTES = 16_000

type Violation = {
  document?: string
  blocked?: string
  directive?: string
  source?: string
}

const fromLegacy = (body: Record<string, unknown>): Violation | null => {
  const report = body["csp-report"] as Record<string, unknown> | undefined
  if (!report) return null
  return {
    document: String(report["document-uri"] ?? ""),
    blocked: String(report["blocked-uri"] ?? ""),
    directive: String(report["effective-directive"] ?? report["violated-directive"] ?? ""),
    source: report["source-file"] ? String(report["source-file"]) : undefined,
  }
}

const fromReportingApi = (entry: Record<string, unknown>): Violation | null => {
  if (entry.type !== "csp-violation") return null
  const report = (entry.body ?? {}) as Record<string, unknown>
  return {
    document: String(report.documentURL ?? entry.url ?? ""),
    blocked: String(report.blockedURL ?? ""),
    directive: String(report.effectiveDirective ?? ""),
    source: report.sourceFile ? String(report.sourceFile) : undefined,
  }
}

export const POST: APIRoute = async ({ request }) => {
  const text = (await request.text()).slice(0, MAX_BODY_BYTES)
  let violations: Violation[] = []
  try {
    const parsed: unknown = JSON.parse(text)
    const entries = Array.isArray(parsed) ? parsed : [parsed]
    violations = entries
      .map((entry) =>
        entry && typeof entry === "object"
          ? (fromLegacy(entry as Record<string, unknown>) ??
            fromReportingApi(entry as Record<string, unknown>))
          : null
      )
      .filter((violation): violation is Violation => violation !== null)
  } catch {
    return new Response(null, { status: 400 })
  }

  for (const violation of violations) {
    console.log(
      `[csp] ${violation.directive} blocked ${violation.blocked || "(inline)"} on ${violation.document}` +
        (violation.source ? ` (${violation.source})` : "")
    )
  }
  return new Response(null, { status: 204 })
}
