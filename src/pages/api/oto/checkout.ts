/**
 * GET /api/oto/checkout?campaign=wyzwanie
 * 302 to the discounted checkout (with a single-use Stripe promotion code)
 * while the visitor's OTO session is active, otherwise to the regular one.
 */
import type { APIRoute } from "astro"
import { buildEasyCheckoutUrlWithPromo } from "@/lib/oto/checkout"
import { getCampaignRegularCheckoutUrl } from "@/lib/oto/config"
import { readSessionCookie } from "@/lib/oto/cookies"
import { ensurePromotionCode } from "@/lib/oto/discount"
import {
  getRequestCampaign,
  sendInvalidCampaign,
  sendMethodNotAllowed,
  sendRedirect,
  sendServerError,
} from "@/lib/oto/http"
import { expireSession, getSession, isSessionActive, saveSession } from "@/lib/oto/sessions"

export const prerender = false

export const GET: APIRoute = async ({ request, url }) => {
  const campaign = getRequestCampaign(url)
  if (!campaign) return sendInvalidCampaign()

  const redirectToRegularCheckout = () => sendRedirect(getCampaignRegularCheckoutUrl(campaign))

  try {
    const sessionCookie = readSessionCookie(request, campaign.id)
    if (!sessionCookie) return redirectToRegularCheckout()

    const storedSession = await getSession(campaign.id, sessionCookie.subjectHash)
    if (!storedSession) return redirectToRegularCheckout()

    if (!isSessionActive(storedSession.session)) {
      if (storedSession.session.status !== "expired") {
        await saveSession(expireSession(storedSession.session), storedSession.etag)
      }

      return redirectToRegularCheckout()
    }

    const sessionWithPromo = await ensurePromotionCode(storedSession.session, campaign)

    if (sessionWithPromo !== storedSession.session) {
      const saved = await saveSession(sessionWithPromo, storedSession.etag)
      if (!saved) {
        const refreshedSession = await getSession(campaign.id, sessionCookie.subjectHash)
        if (refreshedSession?.session.promoCode) {
          return sendRedirect(
            buildEasyCheckoutUrlWithPromo(campaign, refreshedSession.session.promoCode)
          )
        }
      }
    }

    if (!sessionWithPromo.promoCode) {
      throw new Error("Promotion code was not created")
    }

    return sendRedirect(buildEasyCheckoutUrlWithPromo(campaign, sessionWithPromo.promoCode))
  } catch (error) {
    console.error("Error resolving OTO checkout:", error)
    return sendServerError()
  }
}

export const ALL: APIRoute = () => sendMethodNotAllowed()
