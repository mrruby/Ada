import { describe, expect, it } from "vitest"
import {
  classifyLink,
  isCookielessEvent,
  mailerLiteFormId,
  metaEventFor,
  videoFromPlayerUrl,
} from "@/lib/analytics-events"

const SITE = "https://adrianna.com.pl"
const classify = (href: string) => classifyLink(new URL(href, SITE), SITE)

describe("classifyLink", () => {
  it("names the product of checkout links", () => {
    expect(classify("https://cart.easy.tools/checkout/81632369/klub-magic?lang=pl")).toEqual({
      event: "checkout_started",
      properties: { product: "klub-magic", destination: "cart.easy.tools" },
    })
    expect(
      classify("https://app.easycart.pl/checkout/62332176/masterclass-kevin")?.properties
    ).toEqual({ product: "masterclass-kevin", destination: "app.easycart.pl" })
    expect(classify("https://easl.ink/v62RG")?.properties).toEqual({
      product: "easl.ink/v62RG",
      destination: "easl.ink",
    })
    expect(
      classify("https://slowmarketing.mailingr.co/c/adsyandchill-2025-6nPc?priceId=price_1")
        ?.properties
    ).toEqual({ product: "adsyandchill-2025-6nPc", destination: "slowmarketing.mailingr.co" })
  })

  it("treats the OTO checkout endpoint as a checkout of its campaign", () => {
    expect(classify("/api/oto/checkout?campaign=wyzwanie")).toEqual({
      event: "checkout_started",
      properties: { product: "wyzwanie-oto", destination: "adrianna.com.pl" },
    })
  })

  it("recognises call booking links", () => {
    expect(
      classify("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZ")?.event
    ).toBe("booking_opened")
    expect(classify("https://calendar.app.google/svhytZTJ93aiMJ6BA")?.properties).toEqual({
      provider: "google_calendar",
    })
    expect(classify("https://koalendar.com/e/ogarnij-swoje-adsy")?.properties).toEqual({
      provider: "koalendar",
    })
  })

  it("ignores every other link", () => {
    for (const href of [
      "/magic/",
      "#magic-package",
      "https://www.instagram.com/adapromis/",
      "https://sklep.adrianna.com.pl/",
      "https://calendar.google.com/calendar/embed?src=x",
      "mailto:adrianna@getbold.agency",
    ]) {
      expect(classify(href)).toBeNull()
    }
  })
})

describe("metaEventFor", () => {
  it("mirrors leads and checkouts as Meta standard events", () => {
    expect(metaEventFor("lead_form_submitted", { form_id: "1966" })).toEqual([
      "Lead",
      { content_name: "1966" },
    ])
    expect(
      metaEventFor("checkout_started", { product: "klub-magic", destination: "cart.easy.tools" })
    ).toEqual(["InitiateCheckout", { content_name: "klub-magic" }])
  })

  it("sends nothing to Meta for other events", () => {
    expect(metaEventFor("quiz_completed", { result: "ninja" })).toBeNull()
    expect(metaEventFor("video_played", { provider: "vimeo", video_id: "1" })).toBeNull()
  })
})

describe("videoFromPlayerUrl", () => {
  it("reads provider and id from player URLs", () => {
    expect(videoFromPlayerUrl("https://player.vimeo.com/video/1150047798?dnt=1")).toEqual({
      provider: "vimeo",
      video_id: "1150047798",
    })
    expect(videoFromPlayerUrl("https://www.youtube-nocookie.com/embed/abc123?rel=0")).toEqual({
      provider: "youtube",
      video_id: "abc123",
    })
    expect(videoFromPlayerUrl("https://calendar.google.com/calendar/appointments/x")).toBeNull()
  })
})

describe("mailerLiteFormId", () => {
  it("extracts the form id from the action URL", () => {
    expect(
      mailerLiteFormId(
        "https://assets.mailerlite.com/jsonp/549725/forms/196678376972354872/subscribe"
      )
    ).toBe("196678376972354872")
    expect(mailerLiteFormId("https://example.com/")).toBe("unknown")
  })
})

describe("isCookielessEvent", () => {
  it("lets page views and catalog events through without consent", () => {
    for (const name of ["$pageview", "$pageleave", "lead_form_submitted", "checkout_started"]) {
      expect(isCookielessEvent(name)).toBe(true)
    }
  })

  it("holds back autocapture, heatmaps and the rest", () => {
    for (const name of ["$autocapture", "$$heatmap", "$rageclick", "$web_vitals", "toString"]) {
      expect(isCookielessEvent(name)).toBe(false)
    }
  })
})
