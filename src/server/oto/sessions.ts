import { getStore } from "@netlify/blobs"

export type OtoSessionStatus = "active" | "expired"

export type OtoSession = {
  campaignId: string
  subjectHash: string
  startedAt: string
  endsAt: string
  status: OtoSessionStatus
  stripePromotionCodeId?: string
  promoCode?: string
  promoCodeExpiresAt?: string
  promoCodeCreatedAt?: string
}

export type StoredOtoSession = {
  session: OtoSession
  etag?: string
}

export type OtoStatusResponse = {
  active: boolean
  endsAt: string | null
  secondsLeft: number
}

const STORE_NAME = "oto-sessions"

const getRuntimeEnv = (name: string): string | undefined => {
  const globalWithProcess = globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> }
  }

  return globalWithProcess.process?.env?.[name]
}

export const getSessionKey = (
  campaignId: string,
  subjectHash: string
): string => `oto:${campaignId}:${subjectHash}`

const getSessionStore = () => {
  const siteID =
    getRuntimeEnv("NETLIFY_BLOBS_SITE_ID") ?? getRuntimeEnv("SITE_ID")
  const token =
    getRuntimeEnv("NETLIFY_BLOBS_TOKEN") ?? getRuntimeEnv("NETLIFY_AUTH_TOKEN")

  if (siteID && token) {
    return getStore({ name: STORE_NAME, siteID, token })
  }

  return getStore(STORE_NAME)
}

const isOtoSession = (value: unknown): value is OtoSession => {
  if (!value || typeof value !== "object") return false

  const session = value as Record<string, unknown>
  return (
    typeof session.campaignId === "string" &&
    typeof session.subjectHash === "string" &&
    typeof session.startedAt === "string" &&
    typeof session.endsAt === "string" &&
    (session.status === "active" || session.status === "expired")
  )
}

export const isSessionActive = (session: OtoSession): boolean =>
  session.status === "active" && new Date(session.endsAt).getTime() > Date.now()

export const getSessionStatus = (session: OtoSession): OtoStatusResponse => {
  if (!isSessionActive(session)) {
    return { active: false, endsAt: session.endsAt, secondsLeft: 0 }
  }

  const secondsLeft = Math.max(
    0,
    Math.ceil((new Date(session.endsAt).getTime() - Date.now()) / 1000)
  )

  return { active: secondsLeft > 0, endsAt: session.endsAt, secondsLeft }
}

export const getSession = async (
  campaignId: string,
  subjectHash: string
): Promise<StoredOtoSession | null> => {
  const key = getSessionKey(campaignId, subjectHash)
  const entry = await getSessionStore().getWithMetadata(key, {
    type: "json",
    consistency: "strong",
  })

  if (!entry || !isOtoSession(entry.data)) return null

  return { session: entry.data, etag: entry.etag }
}

export const saveSession = async (
  session: OtoSession,
  etag?: string
): Promise<boolean> => {
  const key = getSessionKey(session.campaignId, session.subjectHash)
  const result = await getSessionStore().setJSON(key, session, {
    ...(etag ? { onlyIfMatch: etag } : {}),
    metadata: {
      campaignId: session.campaignId,
      subjectHash: session.subjectHash,
      endsAt: session.endsAt,
      status: session.status,
    },
  })

  return result.modified
}

export const getOrCreateSession = async (
  campaignId: string,
  subjectHash: string,
  durationMs: number
): Promise<StoredOtoSession> => {
  const existing = await getSession(campaignId, subjectHash)
  if (existing) return existing

  const now = new Date()
  const session: OtoSession = {
    campaignId,
    subjectHash,
    startedAt: now.toISOString(),
    endsAt: new Date(now.getTime() + durationMs).toISOString(),
    status: "active",
  }

  const key = getSessionKey(campaignId, subjectHash)
  const result = await getSessionStore().setJSON(key, session, {
    onlyIfNew: true,
    metadata: {
      campaignId,
      subjectHash,
      endsAt: session.endsAt,
      status: session.status,
    },
  })

  if (!result.modified) {
    const storedSession = await getSession(campaignId, subjectHash)
    if (storedSession) return storedSession
  }

  return { session, etag: result.etag }
}

export const expireSession = (session: OtoSession): OtoSession => ({
  ...session,
  status: "expired",
})
