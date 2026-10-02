import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import type { OtoSession } from "@/lib/oto/sessions"

const stripe = vi.hoisted(() => ({
  create: vi.fn(),
  constructed: vi.fn(),
}))

vi.mock("stripe", () => ({
  default: class {
    promotionCodes = { create: stripe.create }
    constructor(key: string) {
      stripe.constructed(key)
    }
  },
}))

// Sessions import @netlify/blobs at module level; discount only needs the key helper.
vi.mock("@netlify/blobs", () => ({ getStore: vi.fn() }))

const { ensurePromotionCode } = await import("@/lib/oto/discount")
const { getCampaignConfig } = await import("@/lib/oto/config")

const campaign = getCampaignConfig("wyzwanie")!
const NOW = new Date("2026-03-01T12:00:00.000Z")
const endsAt = new Date(+NOW + 30 * 60_000).toISOString()

const session = (overrides: Partial<OtoSession> = {}): OtoSession => ({
  campaignId: "wyzwanie",
  subjectHash: "c".repeat(64),
  startedAt: NOW.toISOString(),
  endsAt,
  status: "active",
  ...overrides,
})

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(NOW)
  stripe.create.mockReset()
  stripe.create.mockImplementation(async (params: { code: string }) => ({
    id: "promo_123",
    code: params.code,
  }))
})

afterEach(() => {
  vi.useRealTimers()
})

describe("ensurePromotionCode", () => {
  it("creates a single-use code that expires with the session", async () => {
    const result = await ensurePromotionCode(session(), campaign)

    expect(stripe.create).toHaveBeenCalledTimes(1)
    const params = stripe.create.mock.calls[0][0]
    expect(params).toMatchObject({
      promotion: { type: "coupon", coupon: "coupon_test" },
      max_redemptions: 1,
      expires_at: Math.floor(+new Date(endsAt) / 1000),
      metadata: { campaignId: "wyzwanie", otoSessionId: `oto:wyzwanie:${"c".repeat(64)}` },
    })
    expect(params.code).toMatch(/^OTO-WYZ-[0-9A-F]{10}$/)
    expect(result).toMatchObject({
      stripePromotionCodeId: "promo_123",
      promoCode: params.code,
      promoCodeExpiresAt: endsAt,
      promoCodeCreatedAt: NOW.toISOString(),
    })
  })

  it("reuses a promo code that is still valid", async () => {
    const existing = session({
      stripePromotionCodeId: "promo_old",
      promoCode: "OTO-WYZ-OLD",
      promoCodeExpiresAt: endsAt,
    })

    expect(await ensurePromotionCode(existing, campaign)).toBe(existing)
    expect(stripe.create).not.toHaveBeenCalled()
  })

  it("creates a new code when the stored one expired", async () => {
    const stale = session({
      stripePromotionCodeId: "promo_old",
      promoCode: "OTO-WYZ-OLD",
      promoCodeExpiresAt: new Date(+NOW - 1000).toISOString(),
    })

    const result = await ensurePromotionCode(stale, campaign)
    expect(stripe.create).toHaveBeenCalledTimes(1)
    expect(result.promoCode).not.toBe("OTO-WYZ-OLD")
  })

  it("retries on a code collision", async () => {
    stripe.create.mockRejectedValueOnce({ code: "resource_already_exists" })

    const result = await ensurePromotionCode(session(), campaign)
    expect(stripe.create).toHaveBeenCalledTimes(2)
    expect(result.stripePromotionCodeId).toBe("promo_123")
  })

  it("gives up after three collisions", async () => {
    stripe.create.mockRejectedValue({ message: "Promotion code already exists" })

    await expect(ensurePromotionCode(session(), campaign)).rejects.toMatchObject({
      message: "Promotion code already exists",
    })
    expect(stripe.create).toHaveBeenCalledTimes(3)
  })

  it("does not retry other Stripe errors", async () => {
    stripe.create.mockRejectedValue(new Error("No such coupon"))

    await expect(ensurePromotionCode(session(), campaign)).rejects.toThrow("No such coupon")
    expect(stripe.create).toHaveBeenCalledTimes(1)
  })
})
