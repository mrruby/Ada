/**
 * GET /api/oto/status?campaign=wyzwanie
 * Reports the visitor's OTO session without starting one.
 */
import type { APIRoute } from "astro"
import { readSessionCookie } from "@/lib/oto/cookies"
import {
  getRequestCampaign,
  sendInactiveStatus,
  sendInvalidCampaign,
  sendJson,
  sendMethodNotAllowed,
  sendServerError,
} from "@/lib/oto/http"
import { getSession, getSessionStatus } from "@/lib/oto/sessions"

export const prerender = false

export const GET: APIRoute = async ({ request, url }) => {
  const campaign = getRequestCampaign(url)
  if (!campaign) return sendInvalidCampaign()

  const sessionCookie = readSessionCookie(request, campaign.id)
  if (!sessionCookie) return sendInactiveStatus()

  try {
    const storedSession = await getSession(campaign.id, sessionCookie.subjectHash)
    if (!storedSession) return sendInactiveStatus()

    return sendJson(getSessionStatus(storedSession.session))
  } catch (error) {
    console.error("Error reading OTO session:", error)
    return sendServerError()
  }
}

export const ALL: APIRoute = () => sendMethodNotAllowed()
