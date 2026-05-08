import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

import {
  createSessionCookie,
  OtoSessionCookiePayload,
  readSessionCookie,
} from "../../server/oto/cookies"
import {
  getQueryValue,
  getRequestCampaign,
  sendInvalidCampaign,
  sendMethodNotAllowed,
  setNoStore,
} from "../../server/oto/http"
import { getOrCreateSession, getSessionStatus } from "../../server/oto/sessions"
import {
  createAnonymousSubjectHash,
  getSubjectHash,
  verifyOtoToken,
} from "../../server/oto/tokens"

const getTokenFromRequest = (req: GatsbyFunctionRequest): string | undefined =>
  getQueryValue(req.query.oto) ??
  (typeof req.body?.oto === "string" ? req.body.oto : undefined)

const getSubjectHashForRequest = (
  req: GatsbyFunctionRequest,
  campaignId: string
): string => {
  const sessionCookie = readSessionCookie(req, campaignId)
  if (sessionCookie) return sessionCookie.subjectHash

  const token = getTokenFromRequest(req)
  const payload = token ? verifyOtoToken(token, campaignId) : null
  if (payload) return getSubjectHash(campaignId, payload.subjectId)

  return createAnonymousSubjectHash(campaignId)
}

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  setNoStore(res)

  if (req.method !== "GET" && req.method !== "POST") {
    return sendMethodNotAllowed(res)
  }

  const campaign = getRequestCampaign(req)
  if (!campaign) return sendInvalidCampaign(res)

  try {
    const subjectHash = getSubjectHashForRequest(req, campaign.id)
    const { session } = await getOrCreateSession(
      campaign.id,
      subjectHash,
      campaign.durationMs
    )
    const status = getSessionStatus(session)

    const cookiePayload: OtoSessionCookiePayload = {
      campaignId: campaign.id,
      subjectHash,
      iat: Math.floor(Date.now() / 1000),
    }

    res.setHeader("Set-Cookie", createSessionCookie(cookiePayload))

    return res.status(200).json(status)
  } catch (error) {
    console.error("Error starting OTO session:", error)
    return res.status(500).json({ error: "Internal Server Error" })
  }
}
