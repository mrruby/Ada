/**
 * Public OTO offer constants shared by the /wyzwanie page and its client
 * script (safe for the browser — no secrets here).
 */
export const OTO_CAMPAIGN_ID = "wyzwanie"
export const OTO_PRICE = "67 zł"
export const OTO_OLD_PRICE = "119 zł"
export const REGULAR_PRICE = "119 zł"
export const OTO_CHECKOUT_URL = `/api/oto/checkout?campaign=${OTO_CAMPAIGN_ID}`
