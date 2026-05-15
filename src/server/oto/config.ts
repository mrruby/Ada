export type OtoCampaignId = "wyzwanie"

export type OtoCampaignConfig = {
  id: OtoCampaignId
  durationMs: number
  easyCheckoutUrlEnv: string
  regularCheckoutUrlEnv: string
  stripeCouponIdEnv: string
  promoCodePrefix: string
}

const OTO_DURATION_MS = 30 * 60 * 1000

const CAMPAIGNS: Record<OtoCampaignId, OtoCampaignConfig> = {
  wyzwanie: {
    id: "wyzwanie",
    durationMs: OTO_DURATION_MS,
    easyCheckoutUrlEnv: "OTO_WYZWANIE_EASY_CHECKOUT_URL",
    regularCheckoutUrlEnv: "OTO_WYZWANIE_REGULAR_CHECKOUT_URL",
    stripeCouponIdEnv: "STRIPE_WYZWANIE_OTO_COUPON_ID",
    promoCodePrefix: "OTO-WYZ",
  },
}

const WYZWANIE_CHECKOUT_URL = "https://easl.ink/v62RG"

const ENV = {
  OTO_COOKIE_SECRET: process.env.OTO_COOKIE_SECRET,
  OTO_TOKEN_SECRET: process.env.OTO_TOKEN_SECRET,
  OTO_WYZWANIE_EASY_CHECKOUT_URL:
    process.env.OTO_WYZWANIE_EASY_CHECKOUT_URL || WYZWANIE_CHECKOUT_URL,
  OTO_WYZWANIE_REGULAR_CHECKOUT_URL:
    process.env.OTO_WYZWANIE_REGULAR_CHECKOUT_URL || WYZWANIE_CHECKOUT_URL,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_WYZWANIE_OTO_COUPON_ID: process.env.STRIPE_WYZWANIE_OTO_COUPON_ID,
}

export const DEFAULT_OTO_CAMPAIGN_ID: OtoCampaignId = "wyzwanie"

export const getCampaignConfig = (
  campaignId: string
): OtoCampaignConfig | null =>
  campaignId in CAMPAIGNS ? CAMPAIGNS[campaignId as OtoCampaignId] : null

export const requireEnv = (name: string): string => {
  const value = ENV[name as keyof typeof ENV]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const getCampaignEasyCheckoutUrl = (
  campaign: OtoCampaignConfig
): string => requireEnv(campaign.easyCheckoutUrlEnv)

export const getCampaignRegularCheckoutUrl = (
  campaign: OtoCampaignConfig
): string =>
  ENV[campaign.regularCheckoutUrlEnv as keyof typeof ENV] ??
  requireEnv(campaign.easyCheckoutUrlEnv)

export const getCampaignStripeCouponId = (
  campaign: OtoCampaignConfig
): string => requireEnv(campaign.stripeCouponIdEnv)
