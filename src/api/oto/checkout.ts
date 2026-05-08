import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

import { buildEasyCheckoutUrlWithPromo } from "../../server/oto/checkout"
import { getCampaignRegularCheckoutUrl } from "../../server/oto/config"
import { readSessionCookie } from "../../server/oto/cookies"
import { ensurePromotionCode } from "../../server/oto/discount"
import {
  getRequestCampaign,
  sendInvalidCampaign,
  sendMethodNotAllowed,
  setNoStore,
} from "../../server/oto/http"
import {
  expireSession,
  getSession,
  isSessionActive,
  saveSession,
} from "../../server/oto/sessions"

const redirectToRegularCheckout = (
  campaign: NonNullable<ReturnType<typeof getRequestCampaign>>,
  res: GatsbyFunctionResponse
) => sendRedirect(res, getCampaignRegularCheckoutUrl(campaign))

const sendRedirect = (res: GatsbyFunctionResponse, location: string) => {
  res.statusCode = 302
  res.setHeader("Location", location)
  return res.end()
}

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

  try {
    const sessionCookie = readSessionCookie(req, campaign.id)
    if (!sessionCookie) return redirectToRegularCheckout(campaign, res)

    const storedSession = await getSession(
      campaign.id,
      sessionCookie.subjectHash
    )
    if (!storedSession) return redirectToRegularCheckout(campaign, res)

    if (!isSessionActive(storedSession.session)) {
      if (storedSession.session.status !== "expired") {
        await saveSession(
          expireSession(storedSession.session),
          storedSession.etag
        )
      }

      return redirectToRegularCheckout(campaign, res)
    }

    const sessionWithPromo = await ensurePromotionCode(
      storedSession.session,
      campaign
    )

    if (sessionWithPromo !== storedSession.session) {
      const saved = await saveSession(sessionWithPromo, storedSession.etag)
      if (!saved) {
        const refreshedSession = await getSession(
          campaign.id,
          sessionCookie.subjectHash
        )
        if (refreshedSession?.session.promoCode) {
          return sendRedirect(
            res,
            buildEasyCheckoutUrlWithPromo(
              campaign,
              refreshedSession.session.promoCode
            )
          )
        }
      }
    }

    if (!sessionWithPromo.promoCode) {
      throw new Error("Promotion code was not created")
    }

    return sendRedirect(
      res,
      buildEasyCheckoutUrlWithPromo(campaign, sessionWithPromo.promoCode)
    )
  } catch (error) {
    console.error("Error resolving OTO checkout:", error)
    return res.status(500).json({ error: "Internal Server Error" })
  }
}
