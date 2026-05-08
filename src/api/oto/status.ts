import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

import { readSessionCookie } from "../../server/oto/cookies"
import {
  getRequestCampaign,
  sendInactiveStatus,
  sendInvalidCampaign,
  sendMethodNotAllowed,
  setNoStore,
} from "../../server/oto/http"
import { getSession, getSessionStatus } from "../../server/oto/sessions"

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  setNoStore(res)

  if (req.method !== "GET") {
    return sendMethodNotAllowed(res)
  }

  const campaign = getRequestCampaign(req)
  if (!campaign) return sendInvalidCampaign(res)

  const sessionCookie = readSessionCookie(req, campaign.id)
  if (!sessionCookie) return sendInactiveStatus(res)

  try {
    const storedSession = await getSession(
      campaign.id,
      sessionCookie.subjectHash
    )
    if (!storedSession) return sendInactiveStatus(res)

    return res.status(200).json(getSessionStatus(storedSession.session))
  } catch (error) {
    console.error("Error reading OTO session:", error)
    return res.status(500).json({ error: "Internal Server Error" })
  }
}
