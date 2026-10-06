/**
 * GET|POST /api/oto/start?campaign=wyzwanie[&oto=<token>]
 * Starts or resumes the visitor's OTO session, (re)sets the signed session
 * cookie and returns `{ active, endsAt, secondsLeft }`.
 */
import type { APIRoute } from "astro"
import {
  createSessionCookie,
  readSessionCookie,
  type OtoSessionCookiePayload,
} from "@/lib/oto/cookies"
import {
  getBodyValue,
  getQueryValue,
  getRequestCampaign,
  sendInvalidCampaign,
  sendJson,
  sendMethodNotAllowed,
  sendServerError,
} from "@/lib/oto/http"
import { getOrCreateSession, getSessionStatus } from "@/lib/oto/sessions"
import { createAnonymousSubjectHash, getSubjectHash, verifyOtoToken } from "@/lib/oto/tokens"

export const prerender = false

const getTokenFromRequest = async (request: Request, url: URL) =>
  getQueryValue(url, "oto") ?? (await getBodyValue(request, "oto"))

const getSubjectHashForRequest = async (request: Request, url: URL, campaignId: string) => {
  const sessionCookie = readSessionCookie(request, campaignId)
  if (sessionCookie) return sessionCookie.subjectHash

  const token = await getTokenFromRequest(request, url)
  const payload = token ? verifyOtoToken(token, campaignId) : null
  if (payload) return getSubjectHash(campaignId, payload.subjectId)

  return createAnonymousSubjectHash(campaignId)
}

const handler: APIRoute = async ({ request, url }) => {
  const campaign = getRequestCampaign(url)
  if (!campaign) return sendInvalidCampaign()

  try {
    const subjectHash = await getSubjectHashForRequest(request, url, campaign.id)
    const { session } = await getOrCreateSession(campaign.id, subjectHash, campaign.durationMs)
    const status = getSessionStatus(session)

    const cookiePayload: OtoSessionCookiePayload = {
      campaignId: campaign.id,
      subjectHash,
      iat: Math.floor(Date.now() / 1000),
    }

    return sendJson(status, 200, {
      "Set-Cookie": createSessionCookie(cookiePayload),
    })
  } catch (error) {
    console.error("Error starting OTO session:", error)
    return sendServerError()
  }
}

export const GET = handler
export const POST = handler
export const ALL: APIRoute = () => sendMethodNotAllowed()
