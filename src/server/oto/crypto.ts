import { createHmac, randomBytes, timingSafeEqual } from "node:crypto"

import { requireEnv } from "./config"

const TOKEN_SECRET_ENV = "OTO_TOKEN_SECRET"
const COOKIE_SECRET_ENV = "OTO_COOKIE_SECRET"

const base64UrlEncode = (value: Buffer | string): string =>
  Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")

const base64UrlDecode = (value: string): string => {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/")
  const padded = normalized.padEnd(
    normalized.length + ((4 - (normalized.length % 4)) % 4),
    "="
  )
  return Buffer.from(padded, "base64").toString("utf8")
}

const sign = (value: string, secret: string): string =>
  base64UrlEncode(createHmac("sha256", secret).update(value).digest())

export const signJson = (payload: Record<string, unknown>, secret: string) => {
  const encodedPayload = base64UrlEncode(JSON.stringify(payload))
  return `${encodedPayload}.${sign(encodedPayload, secret)}`
}

export const verifySignedJson = <Payload>(
  token: string,
  secret: string
): Payload | null => {
  const [encodedPayload, signature, ...extra] = token.split(".")
  if (!encodedPayload || !signature || extra.length > 0) return null

  const expectedSignature = sign(encodedPayload, secret)
  const providedBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expectedSignature)

  if (
    providedBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(providedBuffer, expectedBuffer)
  ) {
    return null
  }

  try {
    return JSON.parse(base64UrlDecode(encodedPayload)) as Payload
  } catch {
    return null
  }
}

export const signTokenPayload = (payload: Record<string, unknown>): string =>
  signJson(payload, requireEnv(TOKEN_SECRET_ENV))

export const verifyTokenPayload = <Payload>(token: string): Payload | null =>
  verifySignedJson<Payload>(token, requireEnv(TOKEN_SECRET_ENV))

export const signCookiePayload = (payload: Record<string, unknown>): string =>
  signJson(payload, requireEnv(COOKIE_SECRET_ENV))

export const verifyCookiePayload = <Payload>(token: string): Payload | null =>
  verifySignedJson<Payload>(token, requireEnv(COOKIE_SECRET_ENV))

export const hashSubject = (campaignId: string, subjectId: string): string =>
  createHmac("sha256", requireEnv(TOKEN_SECRET_ENV))
    .update(`${campaignId}:${subjectId}`)
    .digest("hex")

export const randomHex = (bytes: number): string =>
  randomBytes(bytes).toString("hex").toUpperCase()
