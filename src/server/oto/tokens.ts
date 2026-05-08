import { hashSubject, signTokenPayload, verifyTokenPayload } from "./crypto"

export type OtoTokenPayload = {
  campaignId: string
  subjectId: string
  iat: number
  exp: number
}

const isTokenPayload = (payload: unknown): payload is OtoTokenPayload => {
  if (!payload || typeof payload !== "object") return false

  const value = payload as Record<string, unknown>
  return (
    typeof value.campaignId === "string" &&
    typeof value.subjectId === "string" &&
    typeof value.iat === "number" &&
    typeof value.exp === "number"
  )
}

export const verifyOtoToken = (
  token: string,
  expectedCampaignId: string
): OtoTokenPayload | null => {
  const payload = verifyTokenPayload<unknown>(token)
  if (!isTokenPayload(payload)) return null
  if (payload.campaignId !== expectedCampaignId) return null
  if (!payload.subjectId.trim()) return null
  if (payload.exp <= Math.floor(Date.now() / 1000)) return null

  return payload
}

export const createOtoToken = (payload: OtoTokenPayload): string =>
  signTokenPayload(payload)

export const getSubjectHash = (campaignId: string, subjectId: string): string =>
  hashSubject(campaignId, subjectId.trim().toLowerCase())
