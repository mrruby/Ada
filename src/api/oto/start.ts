import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

import {
  createSessionCookie,
  OtoSessionCookiePayload,
} from "../../server/oto/cookies"
import {
  getQueryValue,
  getRequestCampaign,
  sendInactiveStatus,
  sendInvalidCampaign,
  sendMethodNotAllowed,
  setNoStore,
} from "../../server/oto/http"
import { getOrCreateSession, getSessionStatus } from "../../server/oto/sessions"
import { getSubjectHash, verifyOtoToken } from "../../server/oto/tokens"

const getTokenFromRequest = (req: GatsbyFunctionRequest): string | undefined =>
  getQueryValue(req.query.oto) ??
  (typeof req.body?.oto === "string" ? req.body.oto : undefined)

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

  const token = getTokenFromRequest(req)
  if (!token) return sendInactiveStatus(res, 401)

  const payload = verifyOtoToken(token, campaign.id)
  if (!payload) return sendInactiveStatus(res, 401)

  try {
    const subjectHash = getSubjectHash(campaign.id, payload.subjectId)
    const { session } = await getOrCreateSession(
      campaign.id,
      subjectHash,
      campaign.durationMs
    )
    const status = getSessionStatus(session)

    if (status.active && status.endsAt) {
      const cookiePayload: OtoSessionCookiePayload = {
        campaignId: campaign.id,
        subjectHash,
        iat: Math.floor(Date.now() / 1000),
      }

      res.setHeader(
        "Set-Cookie",
        createSessionCookie(cookiePayload, status.endsAt)
      )
    }

    return res.status(200).json(status)
  } catch (error) {
    console.error("Error starting OTO session:", error)
    return res.status(500).json({ error: "Internal Server Error" })
  }
}
