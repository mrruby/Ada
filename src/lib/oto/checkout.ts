/** Checkout URL helpers (server only). */
import { getCampaignEasyCheckoutUrl, type OtoCampaignConfig } from "./config"

export const buildEasyCheckoutUrlWithPromo = (
  campaign: OtoCampaignConfig,
  promoCode: string
): string => {
  const checkoutUrl = new URL(getCampaignEasyCheckoutUrl(campaign))
  checkoutUrl.searchParams.set("promo", promoCode)
  return checkoutUrl.toString()
}
