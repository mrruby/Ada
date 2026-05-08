import { signCookiePayload, verifyCookiePayload } from "./crypto"

export const OTO_SESSION_COOKIE = "ada_oto_session"
const REMEMBER_COOKIE_MAX_AGE_SECONDS = 180 * 24 * 60 * 60

export type OtoSessionCookiePayload = {
  campaignId: string
  subjectHash: string
  iat: number
}

type CookieRequest = {
  cookies?: Record<string, string>
  headers?: {
    cookie?: string | string[]
  }
}

const isProduction = () => process.env.NODE_ENV === "production"

const parseCookieHeader = (cookieHeader?: string | string[]) => {
  const header = Array.isArray(cookieHeader)
    ? cookieHeader.join("; ")
    : cookieHeader

  if (!header) return {}

  return header.split(";").reduce<Record<string, string>>((cookies, part) => {
    const [rawName, ...rawValue] = part.trim().split("=")
    if (!rawName || rawValue.length === 0) return cookies

    cookies[rawName] = decodeURIComponent(rawValue.join("="))
    return cookies
  }, {})
}

export const getCookie = (
  req: CookieRequest,
  name: string
): string | undefined =>
  req.cookies?.[name] ?? parseCookieHeader(req.headers?.cookie)[name]

export const createSessionCookie = (
  payload: OtoSessionCookiePayload,
  maxAgeSeconds = REMEMBER_COOKIE_MAX_AGE_SECONDS
): string => {
  const maxAge = Math.max(0, maxAgeSeconds)
  const signedPayload = signCookiePayload(payload)
  const secure = isProduction() ? "; Secure" : ""

  return `${OTO_SESSION_COOKIE}=${encodeURIComponent(
    signedPayload
  )}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax${secure}`
}

export const clearSessionCookie = (): string =>
  `${OTO_SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${
    isProduction() ? "; Secure" : ""
  }`

export const readSessionCookie = (
  req: CookieRequest,
  expectedCampaignId: string
): OtoSessionCookiePayload | null => {
  const value = getCookie(req, OTO_SESSION_COOKIE)
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
