import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import type { OtoSession } from "../sessions"

const stripeMocks = vi.hoisted(() => {
  const createPromotionCode = vi.fn()
  const Stripe = vi.fn(function StripeClient() {
    return {
      promotionCodes: {
        create: createPromotionCode,
      },
    }
  })

  return { createPromotionCode, Stripe }
})

vi.mock("stripe", () => ({
  default: stripeMocks.Stripe,
}))

vi.mock("@netlify/blobs", () => ({
  getStore: vi.fn(),
}))

const NOW = new Date("2026-01-15T12:00:00.000Z")

const session = (overrides: Partial<OtoSession> = {}): OtoSession => ({
  campaignId: "wyzwanie",
  subjectHash: "subject-hash",
  startedAt: "2026-01-15T12:00:00.000Z",
  endsAt: "2026-01-15T12:30:00.000Z",
  status: "active",
  ...overrides,
})

const loadSubject = async () => {
  const [{ ensurePromotionCode }, { getCampaignConfig }] = await Promise.all([
    import("../discount"),
    import("../config"),
  ])
  const campaign = getCampaignConfig("wyzwanie")
  if (!campaign) throw new Error("Missing test campaign")

  return { campaign, ensurePromotionCode }
}

describe("ensurePromotionCode", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(NOW)
    vi.resetModules()
    stripeMocks.Stripe.mockClear()
    stripeMocks.createPromotionCode.mockReset()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("reuses the same session object while its existing promotion code is unexpired", async () => {
    const { campaign, ensurePromotionCode } = await loadSubject()
    const existing = session({
      stripePromotionCodeId: "promo_existing",
      promoCode: "OTO-WYZ-EXISTING",
      promoCodeCreatedAt: "2026-01-15T11:55:00.000Z",
      promoCodeExpiresAt: "2026-01-15T12:30:00.000Z",
    })

    const result = await ensurePromotionCode(existing, campaign)

    expect(result).toBe(existing)
    expect(stripeMocks.Stripe).not.toHaveBeenCalled()
    expect(stripeMocks.createPromotionCode).not.toHaveBeenCalled()
  })

  it("creates a single-use promotion code when none is reusable", async () => {
    stripeMocks.createPromotionCode.mockResolvedValueOnce({
      id: "promo_created",
      code: "OTO-WYZ-FROM-STRIPE",
    })
    const { campaign, ensurePromotionCode } = await loadSubject()
    const original = session()

    const result = await ensurePromotionCode(original, campaign)

    expect(stripeMocks.Stripe).toHaveBeenCalledWith("sk_test_offline")
    expect(stripeMocks.createPromotionCode).toHaveBeenCalledTimes(1)
    expect(stripeMocks.createPromotionCode).toHaveBeenCalledWith({
      promotion: {
        type: "coupon",
        coupon: "coupon_offline",
      },
      code: expect.stringMatching(/^OTO-WYZ-[A-F0-9]{10}$/),
      expires_at: Math.floor(new Date(original.endsAt).getTime() / 1000),
      max_redemptions: 1,
      metadata: {
        campaignId: "wyzwanie",
        otoSessionId: "oto:wyzwanie:subject-hash",
        subjectHash: "subject-hash",
      },
    })
    expect(result).toEqual({
      ...original,
      stripePromotionCodeId: "promo_created",
      promoCode: "OTO-WYZ-FROM-STRIPE",
      promoCodeCreatedAt: NOW.toISOString(),
      promoCodeExpiresAt: original.endsAt,
    })
  })

  it("treats a promotion code expiring exactly now as non-reusable", async () => {
    stripeMocks.createPromotionCode.mockResolvedValueOnce({
      id: "promo_replacement",
      code: "OTO-WYZ-REPLACED",
    })
    const { campaign, ensurePromotionCode } = await loadSubject()

    await ensurePromotionCode(
      session({
        stripePromotionCodeId: "promo_expired",
        promoCode: "OTO-WYZ-EXPIRED",
        promoCodeExpiresAt: NOW.toISOString(),
      }),
      campaign
    )

    expect(stripeMocks.createPromotionCode).toHaveBeenCalledTimes(1)
  })

  it("retries Stripe code collisions but propagates a third collision", async () => {
    const collision = Object.assign(new Error("Code already exists"), {
      code: "resource_already_exists",
    })
    stripeMocks.createPromotionCode.mockRejectedValue(collision)
    const { campaign, ensurePromotionCode } = await loadSubject()

    await expect(ensurePromotionCode(session(), campaign)).rejects.toBe(
      collision
    )
    expect(stripeMocks.createPromotionCode).toHaveBeenCalledTimes(3)
  })

  it("CURRENT CONTRACT: concurrent calls for one unsaved session create multiple Stripe codes without idempotency keys", async () => {
    stripeMocks.createPromotionCode
      .mockResolvedValueOnce({ id: "promo_first", code: "OTO-WYZ-FIRST" })
      .mockResolvedValueOnce({ id: "promo_second", code: "OTO-WYZ-SECOND" })
    const { campaign, ensurePromotionCode } = await loadSubject()
    const sameUnsavedSession = session()

    const [first, second] = await Promise.all([
      ensurePromotionCode(sameUnsavedSession, campaign),
      ensurePromotionCode(sameUnsavedSession, campaign),
    ])

    expect(stripeMocks.createPromotionCode).toHaveBeenCalledTimes(2)
    expect(
      stripeMocks.createPromotionCode.mock.calls.every(
        (call) => call.length === 1
      )
    ).toBe(true)
    expect(first.promoCode).toBe("OTO-WYZ-FIRST")
    expect(second.promoCode).toBe("OTO-WYZ-SECOND")
  })
})
