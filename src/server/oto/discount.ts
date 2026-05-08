import Stripe from "stripe"

import {
  getCampaignStripeCouponId,
  OtoCampaignConfig,
  requireEnv,
} from "./config"
import { randomHex } from "./crypto"
import { getSessionKey, OtoSession } from "./sessions"

let stripeClient: Stripe | null = null

const getStripe = () => {
  if (!stripeClient) {
    stripeClient = new Stripe(requireEnv("STRIPE_SECRET_KEY"))
  }

  return stripeClient
}

const createPromoCode = (campaign: OtoCampaignConfig): string =>
  `${campaign.promoCodePrefix}-${randomHex(5)}`

const isReusablePromo = (session: OtoSession): boolean =>
  Boolean(
    session.stripePromotionCodeId &&
    session.promoCode &&
    session.promoCodeExpiresAt &&
    new Date(session.promoCodeExpiresAt).getTime() > Date.now()
  )

const isStripeCodeCollision = (error: unknown): boolean => {
  const stripeError = error as { code?: string; message?: string }
  return (
    stripeError.code === "resource_already_exists" ||
    Boolean(stripeError.message?.toLowerCase().includes("already exists"))
  )
}

export const ensurePromotionCode = async (
  session: OtoSession,
  campaign: OtoCampaignConfig
): Promise<OtoSession> => {
  if (isReusablePromo(session)) return session

  const stripe = getStripe()
  const couponId = getCampaignStripeCouponId(campaign)
  const expiresAt = Math.floor(new Date(session.endsAt).getTime() / 1000)

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const code = createPromoCode(campaign)

    try {
      const promotionCode = await stripe.promotionCodes.create({
        promotion: {
          type: "coupon",
          coupon: couponId,
        },
        code,
        expires_at: expiresAt,
        max_redemptions: 1,
        metadata: {
          campaignId: session.campaignId,
          otoSessionId: getSessionKey(session.campaignId, session.subjectHash),
          subjectHash: session.subjectHash,
        },
      })

      return {
        ...session,
        stripePromotionCodeId: promotionCode.id,
        promoCode: promotionCode.code ?? code,
        promoCodeCreatedAt: new Date().toISOString(),
        promoCodeExpiresAt: session.endsAt,
      }
    } catch (error) {
      if (attempt < 2 && isStripeCodeCollision(error)) continue
      throw error
    }
  }

  throw new Error("Could not create Stripe promotion code")
}
