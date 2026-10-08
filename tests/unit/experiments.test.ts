import { afterEach, describe, expect, it, vi } from "vitest"
import split, { config, type EdgeContext } from "../../netlify/edge-functions/magic-jesien-ab.ts"
import {
  assignVariant,
  drawVariant,
  experimentCookieString,
  experimentProperties,
  isBot,
  MAGIC_JESIEN_EXPERIMENT as experiment,
} from "@/lib/experiments"

const BROWSER =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1"
const STATS_GRANTED =
  "ada-consent-statistics=true; ada-consent-marketing=false; ada-consent-media=false"
const STATS_DENIED =
  "ada-consent-statistics=false; ada-consent-marketing=true; ada-consent-media=true"

const assign = (request: Partial<Parameters<typeof assignVariant>[1]>) =>
  assignVariant(experiment, {
    cookieHeader: "",
    search: "",
    userAgent: BROWSER,
    random: 0.5,
    ...request,
  })

describe("drawVariant", () => {
  it("gives B to 20% of the draws", () => {
    expect(drawVariant(experiment, 0)).toBe("b")
    expect(drawVariant(experiment, 0.1999)).toBe("b")
    expect(drawVariant(experiment, 0.2)).toBe("a")
    expect(drawVariant(experiment, 0.9999)).toBe("a")
    const draws = Array.from({ length: 1000 }, (_, i) => drawVariant(experiment, i / 1000))
    expect(draws.filter((variant) => variant === "b")).toHaveLength(200)
  })
})

describe("assignVariant", () => {
  it("stores the draw for visitors with statistics consent", () => {
    expect(assign({ cookieHeader: STATS_GRANTED, random: 0.1 })).toEqual({
      variant: "b",
      cookie: "set",
    })
  })

  it("keeps a stored variant for visitors with statistics consent", () => {
    const cookieHeader = `${STATS_GRANTED}; ada-ab-magic-jesien=b`
    expect(assign({ cookieHeader, random: 0.9 })).toEqual({ variant: "b", cookie: "keep" })
  })

  it("stores nothing without statistics consent and drops an old cookie", () => {
    expect(assign({ random: 0.1 })).toEqual({ variant: "b", cookie: "keep" })
    expect(assign({ cookieHeader: STATS_DENIED, random: 0.9 })).toEqual({
      variant: "a",
      cookie: "keep",
    })
    expect(assign({ cookieHeader: `${STATS_DENIED}; ada-ab-magic-jesien=b`, random: 0.9 })).toEqual(
      { variant: "a", cookie: "delete" }
    )
  })

  it("honours ?wariant= over the cookie and the draw", () => {
    const cookieHeader = `${STATS_GRANTED}; ada-ab-magic-jesien=a`
    expect(assign({ cookieHeader, search: "?wariant=b&utm_source=fb" })).toEqual({
      variant: "b",
      cookie: "set",
    })
    expect(assign({ search: "?wariant=a", random: 0 }).variant).toBe("a")
    expect(assign({ search: "?wariant=zzz", random: 0 }).variant).toBe("b")
  })

  it("ignores tampered cookie values", () => {
    const cookieHeader = `${STATS_GRANTED}; ada-ab-magic-jesien=c`
    expect(assign({ cookieHeader, random: 0.9 })).toEqual({ variant: "a", cookie: "set" })
  })

  it("always shows A to bots, without touching cookies", () => {
    for (const userAgent of [
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      "facebookexternalhit/1.1",
      "Mozilla/5.0 (Linux; Android 11) Chrome/120 Mobile Safari/537.36 Chrome-Lighthouse",
      "",
    ]) {
      expect(isBot(userAgent)).toBe(true)
      expect(assign({ userAgent, random: 0 })).toEqual({ variant: "a", cookie: "keep" })
    }
    expect(isBot(BROWSER)).toBe(false)
  })
})

describe("experimentCookieString", () => {
  it("stores and removes the variant", () => {
    expect(experimentCookieString(experiment, "b", true)).toBe(
      "ada-ab-magic-jesien=b; Path=/; Max-Age=5184000; SameSite=Lax; Secure"
    )
    expect(experimentCookieString(experiment, null, false)).toBe(
      "ada-ab-magic-jesien=; Path=/; Max-Age=0; SameSite=Lax"
    )
  })
})

describe("experimentProperties", () => {
  it("names the experiment, the variant and the PostHog flag value", () => {
    expect(experimentProperties("magic-jesien-ab", "a")).toEqual({
      experiment: "magic-jesien-ab",
      experiment_variant: "a",
      "$feature/magic-jesien-ab": "control",
    })
    expect(experimentProperties("magic-jesien-ab", "b")["$feature/magic-jesien-ab"]).toBe("test")
  })
})

describe("magic-jesien-ab edge function", () => {
  afterEach(() => vi.restoreAllMocks())

  const run = async (url: string, headers: Record<string, string>, random: number) => {
    vi.spyOn(Math, "random").mockReturnValue(random)
    const passThrough = new Response("A")
    const context = {
      cookies: { set: vi.fn(), delete: vi.fn() },
      next: vi.fn(async () => passThrough),
    } satisfies EdgeContext
    const result = await split(new Request(url, { headers }), context)
    return { result, passThrough, context }
  }

  it("runs on /magic-jesien only", () => {
    expect(config.path).toEqual(["/magic-jesien", "/magic-jesien/"])
  })

  it("rewrites B to the static variant page, keeping the query", async () => {
    const { result, context } = await run(
      "https://adrianna.com.pl/magic-jesien/?utm_source=fb",
      { "user-agent": BROWSER, cookie: STATS_GRANTED },
      0.05
    )
    expect(result).toBeInstanceOf(URL)
    expect(String(result)).toBe("https://adrianna.com.pl/magic-jesien-b/?utm_source=fb")
    expect(context.next).not.toHaveBeenCalled()
    expect(context.cookies.set).toHaveBeenCalledWith({
      name: "ada-ab-magic-jesien",
      value: "b",
      path: "/",
      maxAge: 5184000,
      sameSite: "Lax",
      secure: true,
    })
  })

  it("passes A through, setting no cookie without consent", async () => {
    const { result, passThrough, context } = await run(
      "https://adrianna.com.pl/magic-jesien",
      { "user-agent": BROWSER },
      0.7
    )
    expect(result).toBe(passThrough)
    expect(context.cookies.set).not.toHaveBeenCalled()
    expect(context.cookies.delete).not.toHaveBeenCalled()
  })

  it("removes the cookie of a visitor who withdrew statistics consent", async () => {
    const { context } = await run(
      "https://adrianna.com.pl/magic-jesien/",
      { "user-agent": BROWSER, cookie: `${STATS_DENIED}; ada-ab-magic-jesien=b` },
      0.7
    )
    expect(context.cookies.delete).toHaveBeenCalledWith({ name: "ada-ab-magic-jesien", path: "/" })
  })
})
