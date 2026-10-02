import { describe, expect, it, vi } from "vitest"
import { buildEasyCheckoutUrlWithPromo } from "@/lib/oto/checkout"
import {
  DEFAULT_OTO_CAMPAIGN_ID,
  getCampaignConfig,
  getCampaignEasyCheckoutUrl,
  getCampaignRegularCheckoutUrl,
  getCampaignStripeCouponId,
  getRuntimeEnv,
  requireEnv,
} from "@/lib/oto/config"

const wyzwanie = getCampaignConfig("wyzwanie")!

describe("getCampaignConfig", () => {
  it("knows the wyzwanie campaign (30-minute window)", () => {
    expect(DEFAULT_OTO_CAMPAIGN_ID).toBe("wyzwanie")
    expect(wyzwanie).toMatchObject({
      id: "wyzwanie",
      durationMs: 30 * 60 * 1000,
      promoCodePrefix: "OTO-WYZ",
    })
  })

  it.each(["", "nope", "constructor", "__proto__", "toString", "valueOf", "hasOwnProperty"])(
    "returns null for %j (no prototype lookups)",
    (id) => {
      expect(getCampaignConfig(id)).toBeNull()
    }
  )
})

describe("environment", () => {
  it("reads runtime variables from process.env", () => {
    vi.stubEnv("SOME_TEST_VAR", "value")
    expect(getRuntimeEnv("SOME_TEST_VAR")).toBe("value")
    expect(getRuntimeEnv("SURELY_UNSET_VAR")).toBeUndefined()
  })

  it("requireEnv returns a set variable and throws for a missing one", () => {
    expect(requireEnv("STRIPE_SECRET_KEY")).toBe("sk_test_123")
    vi.stubEnv("STRIPE_SECRET_KEY", "")
    expect(() => requireEnv("STRIPE_SECRET_KEY")).toThrow(
      "Missing required environment variable: STRIPE_SECRET_KEY"
    )
  })

  it("uses the configured checkout URLs", () => {
    expect(getCampaignEasyCheckoutUrl(wyzwanie)).toBe("https://checkout.example/easy")
    expect(getCampaignRegularCheckoutUrl(wyzwanie)).toBe("https://checkout.example/regular")
  })

  it("falls back to the default checkout when the URLs are unset", () => {
    vi.stubEnv("OTO_WYZWANIE_EASY_CHECKOUT_URL", "")
    vi.stubEnv("OTO_WYZWANIE_REGULAR_CHECKOUT_URL", "")
    expect(getCampaignEasyCheckoutUrl(wyzwanie)).toBe("https://easl.ink/v62RG")
    expect(getCampaignRegularCheckoutUrl(wyzwanie)).toBe("https://easl.ink/v62RG")
  })

  it("requires a Stripe coupon id", () => {
    expect(getCampaignStripeCouponId(wyzwanie)).toBe("coupon_test")
    vi.stubEnv("STRIPE_WYZWANIE_OTO_COUPON_ID", "")
    expect(() => getCampaignStripeCouponId(wyzwanie)).toThrow(/STRIPE_WYZWANIE_OTO_COUPON_ID/)
  })
})

describe("buildEasyCheckoutUrlWithPromo", () => {
  it("adds the promo code to the discounted checkout URL", () => {
    expect(buildEasyCheckoutUrlWithPromo(wyzwanie, "OTO-WYZ-ABCDE")).toBe(
      "https://checkout.example/easy?promo=OTO-WYZ-ABCDE"
    )
  })

  it("keeps existing query parameters and replaces an old promo", () => {
    vi.stubEnv("OTO_WYZWANIE_EASY_CHECKOUT_URL", "https://checkout.example/easy?ref=ig&promo=OLD")
    const url = new URL(buildEasyCheckoutUrlWithPromo(wyzwanie, "NEW"))
    expect(url.searchParams.get("ref")).toBe("ig")
    expect(url.searchParams.getAll("promo")).toEqual(["NEW"])
  })
})
