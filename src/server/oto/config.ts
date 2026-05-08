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

export const DEFAULT_OTO_CAMPAIGN_ID: OtoCampaignId = "wyzwanie"

export const getCampaignConfig = (
  campaignId: string
): OtoCampaignConfig | null =>
  campaignId in CAMPAIGNS ? CAMPAIGNS[campaignId as OtoCampaignId] : null

export const requireEnv = (name: string): string => {
  const value = process.env[name]
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
): string => requireEnv(campaign.regularCheckoutUrlEnv)

export const getCampaignStripeCouponId = (
  campaign: OtoCampaignConfig
): string => requireEnv(campaign.stripeCouponIdEnv)
