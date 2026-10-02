/** Signed, HttpOnly OTO session cookie (server only). */
import { signCookiePayload, verifyCookiePayload } from "./crypto"

export const OTO_SESSION_COOKIE = "ada_oto_session"
const REMEMBER_COOKIE_MAX_AGE_SECONDS = 180 * 24 * 60 * 60

export type OtoSessionCookiePayload = {
  campaignId: string
  subjectHash: string
  iat: number
}

// Build-time flag (not a secret): true in the production build, false in dev.
const secureFlag = () => (import.meta.env.PROD ? "; Secure" : "")

const safeDecode = (value: string) => {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

/** Parses a `Cookie` header; the first occurrence of a name wins. */
const parseCookieHeader = (header: string | null): Record<string, string> => {
  const cookies: Record<string, string> = {}
  if (!header) return cookies

  for (const part of header.split(";")) {
    const [rawName, ...rawValue] = part.trim().split("=")
    if (!rawName || rawValue.length === 0 || rawName in cookies) continue

    let value = rawValue.join("=").trim()
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1)
    cookies[rawName] = safeDecode(value)
  }
  return cookies
}

export const getCookie = (request: Request, name: string): string | undefined =>
  parseCookieHeader(request.headers.get("cookie"))[name]

export const createSessionCookie = (
  payload: OtoSessionCookiePayload,
  maxAgeSeconds = REMEMBER_COOKIE_MAX_AGE_SECONDS
): string => {
  const maxAge = Math.max(0, maxAgeSeconds)
  const signedPayload = signCookiePayload(payload)

  return `${OTO_SESSION_COOKIE}=${encodeURIComponent(
    signedPayload
  )}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax${secureFlag()}`
}

export const clearSessionCookie = (): string =>
  `${OTO_SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secureFlag()}`

export const readSessionCookie = (
  request: Request,
  expectedCampaignId: string
): OtoSessionCookiePayload | null => {
  const value = getCookie(request, OTO_SESSION_COOKIE)
  if (!value) return null

  const payload = verifyCookiePayload<unknown>(value)
  if (!payload || typeof payload !== "object") return null

  const sessionPayload = payload as Record<string, unknown>
  if (
    sessionPayload.campaignId !== expectedCampaignId ||
    typeof sessionPayload.subjectHash !== "string" ||
    typeof sessionPayload.iat !== "number"
  ) {
    return null
  }

  return {
    campaignId: expectedCampaignId,
    subjectHash: sessionPayload.subjectHash,
    iat: sessionPayload.iat,
  }
}
