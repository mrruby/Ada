/**
 * OTO (one-time offer) campaigns and runtime configuration (server only).
 *
 * Secrets are read from `process.env` when a request is handled — never via
 * `import.meta.env`, which Astro would inline into the bundle at build time.
 */
export type OtoCampaignId = "wyzwanie"

export type OtoCampaignConfig = {
  id: OtoCampaignId
  durationMs: number
  easyCheckoutUrlEnv: OtoEnvName
  regularCheckoutUrlEnv: OtoEnvName
  stripeCouponIdEnv: OtoEnvName
  promoCodePrefix: string
}

type OtoEnvName =
  | "OTO_COOKIE_SECRET"
  | "OTO_TOKEN_SECRET"
  | "OTO_WYZWANIE_EASY_CHECKOUT_URL"
  | "OTO_WYZWANIE_REGULAR_CHECKOUT_URL"
  | "STRIPE_SECRET_KEY"
  | "STRIPE_WYZWANIE_OTO_COUPON_ID"

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

/** Fallbacks used when a variable is unset or empty. */
const ENV_DEFAULTS: Partial<Record<OtoEnvName, string>> = {
  OTO_WYZWANIE_EASY_CHECKOUT_URL: WYZWANIE_CHECKOUT_URL,
  OTO_WYZWANIE_REGULAR_CHECKOUT_URL: WYZWANIE_CHECKOUT_URL,
}

/** Reads a variable from the runtime environment (Netlify Function / Node). */
export const getRuntimeEnv = (name: string): string | undefined => {
  const runtime = globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> }
  }
  return runtime.process?.env?.[name]
}

const readEnv = (name: OtoEnvName): string | undefined => getRuntimeEnv(name) || ENV_DEFAULTS[name]

export const DEFAULT_OTO_CAMPAIGN_ID: OtoCampaignId = "wyzwanie"

export const getCampaignConfig = (campaignId: string): OtoCampaignConfig | null =>
  Object.hasOwn(CAMPAIGNS, campaignId) ? CAMPAIGNS[campaignId as OtoCampaignId] : null

export const requireEnv = (name: OtoEnvName): string => {
  const value = readEnv(name)
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const getCampaignEasyCheckoutUrl = (campaign: OtoCampaignConfig): string =>
  requireEnv(campaign.easyCheckoutUrlEnv)

export const getCampaignRegularCheckoutUrl = (campaign: OtoCampaignConfig): string =>
  readEnv(campaign.regularCheckoutUrlEnv) ?? requireEnv(campaign.easyCheckoutUrlEnv)

export const getCampaignStripeCouponId = (campaign: OtoCampaignConfig): string =>
  requireEnv(campaign.stripeCouponIdEnv)
