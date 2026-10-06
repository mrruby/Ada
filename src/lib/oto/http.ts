/**
 * Web `Request`/`Response` helpers shared by the /api/oto/* endpoints.
 * Every response is marked `Cache-Control: no-store, max-age=0`.
 */
import { DEFAULT_OTO_CAMPAIGN_ID, getCampaignConfig, type OtoCampaignConfig } from "./config"

export const NO_STORE = "no-store, max-age=0"

export const sendJson = (body: unknown, status = 200, headers: HeadersInit = {}): Response => {
  const responseHeaders = new Headers(headers)
  responseHeaders.set("Content-Type", "application/json; charset=utf-8")
  responseHeaders.set("Cache-Control", NO_STORE)
  return new Response(JSON.stringify(body), {
    status,
    headers: responseHeaders,
  })
}

export const sendRedirect = (location: string): Response =>
  new Response(null, {
    status: 302,
    headers: { Location: location, "Cache-Control": NO_STORE },
  })

/** First value of a query parameter (`?a=1&a=2` → "1"). */
export const getQueryValue = (url: URL, name: string): string | undefined =>
  url.searchParams.get(name) ?? undefined

export const getRequestCampaign = (url: URL): OtoCampaignConfig | null =>
  getCampaignConfig(getQueryValue(url, "campaign") ?? DEFAULT_OTO_CAMPAIGN_ID)

/** Reads a string field from a JSON, urlencoded or multipart request body. */
export const getBodyValue = async (request: Request, name: string): Promise<string | undefined> => {
  if (request.method !== "POST") return undefined
  const type = request.headers.get("content-type") ?? ""

  try {
    if (type.includes("application/json")) {
      const body: unknown = await request.json()
      const value =
        body && typeof body === "object" ? (body as Record<string, unknown>)[name] : undefined
      return typeof value === "string" ? value : undefined
    }
    if (
      type.includes("application/x-www-form-urlencoded") ||
      type.includes("multipart/form-data")
    ) {
      const value = (await request.formData()).get(name)
      return typeof value === "string" ? value : undefined
    }
  } catch {
    return undefined
  }
  return undefined
}

export const sendInactiveStatus = (status = 200) =>
  sendJson({ active: false, endsAt: null, secondsLeft: 0 }, status)

export const sendMethodNotAllowed = () => sendJson({ error: "Method not allowed" }, 405)

export const sendInvalidCampaign = () => sendJson({ error: "Invalid OTO campaign" }, 400)

export const sendServerError = () => sendJson({ error: "Internal Server Error" }, 500)
