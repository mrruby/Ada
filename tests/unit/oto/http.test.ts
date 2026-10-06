import { describe, expect, it } from "vitest"
import {
  NO_STORE,
  getBodyValue,
  getQueryValue,
  getRequestCampaign,
  sendInactiveStatus,
  sendInvalidCampaign,
  sendJson,
  sendMethodNotAllowed,
  sendRedirect,
  sendServerError,
} from "@/lib/oto/http"

const url = (query = "") => new URL(`https://adrianna.com.pl/api/oto/start${query}`)

const post = (body: BodyInit, contentType?: string) =>
  new Request(url(), {
    method: "POST",
    body,
    headers: contentType ? { "content-type": contentType } : {},
  })

describe("responses", () => {
  it("sendJson returns uncacheable JSON (200 by default)", async () => {
    const response = sendJson({ ok: true })

    expect(response.status).toBe(200)
    expect(response.headers.get("content-type")).toBe("application/json; charset=utf-8")
    expect(response.headers.get("cache-control")).toBe(NO_STORE)
    expect(await response.json()).toEqual({ ok: true })
  })

  it("sendJson keeps extra headers but enforces type and no-store", () => {
    const response = sendJson({}, 201, {
      "Set-Cookie": "a=1",
      "Cache-Control": "public, max-age=600",
      "Content-Type": "text/plain",
    })

    expect(response.status).toBe(201)
    expect(response.headers.get("set-cookie")).toBe("a=1")
    expect(response.headers.get("cache-control")).toBe(NO_STORE)
    expect(response.headers.get("content-type")).toContain("application/json")
  })

  it("sendRedirect is an uncacheable 302", () => {
    const response = sendRedirect("https://checkout.example/?promo=X")

    expect(response.status).toBe(302)
    expect(response.headers.get("location")).toBe("https://checkout.example/?promo=X")
    expect(response.headers.get("cache-control")).toBe(NO_STORE)
  })

  it.each([
    [
      "sendInactiveStatus",
      sendInactiveStatus,
      200,
      { active: false, endsAt: null, secondsLeft: 0 },
    ],
    ["sendMethodNotAllowed", sendMethodNotAllowed, 405, { error: "Method not allowed" }],
    ["sendInvalidCampaign", sendInvalidCampaign, 400, { error: "Invalid OTO campaign" }],
    ["sendServerError", sendServerError, 500, { error: "Internal Server Error" }],
  ] as const)("%s → %i", async (_name, send, status, body) => {
    const response = send()
    expect(response.status).toBe(status)
    expect(response.headers.get("cache-control")).toBe(NO_STORE)
    expect(await response.json()).toEqual(body)
  })

  it("sendInactiveStatus accepts a custom status", () => {
    expect(sendInactiveStatus(404).status).toBe(404)
  })
})

describe("getQueryValue", () => {
  it("returns the first value of a parameter", () => {
    expect(getQueryValue(url("?oto=a&oto=b"), "oto")).toBe("a")
    expect(getQueryValue(url("?oto="), "oto")).toBe("")
    expect(getQueryValue(url(), "oto")).toBeUndefined()
  })
})

describe("getRequestCampaign", () => {
  it("defaults to the wyzwanie campaign", () => {
    expect(getRequestCampaign(url())?.id).toBe("wyzwanie")
    expect(getRequestCampaign(url("?campaign=wyzwanie"))?.id).toBe("wyzwanie")
  })

  it.each(["unknown", "constructor", "__proto__", "toString", "hasOwnProperty", "WYZWANIE", ""])(
    "rejects ?campaign=%s",
    (campaign) => {
      expect(getRequestCampaign(url(`?campaign=${campaign}`))).toBeNull()
    }
  )
})

describe("getBodyValue", () => {
  it("reads JSON bodies", async () => {
    expect(
      await getBodyValue(post(JSON.stringify({ oto: "tok" }), "application/json"), "oto")
    ).toBe("tok")
  })

  it("reads urlencoded bodies", async () => {
    const request = post("oto=tok&x=1", "application/x-www-form-urlencoded; charset=UTF-8")
    expect(await getBodyValue(request, "oto")).toBe("tok")
  })

  it("reads multipart bodies", async () => {
    const form = new FormData()
    form.set("oto", "tok")
    expect(await getBodyValue(new Request(url(), { method: "POST", body: form }), "oto")).toBe(
      "tok"
    )
  })

  it("ignores non-POST requests", async () => {
    expect(await getBodyValue(new Request(url("?oto=tok")), "oto")).toBeUndefined()
  })

  it("ignores missing, non-string and unparsable values", async () => {
    expect(
      await getBodyValue(post(JSON.stringify({ other: "x" }), "application/json"), "oto")
    ).toBeUndefined()
    expect(
      await getBodyValue(post(JSON.stringify({ oto: 123 }), "application/json"), "oto")
    ).toBeUndefined()
    expect(
      await getBodyValue(post(JSON.stringify(null), "application/json"), "oto")
    ).toBeUndefined()
    expect(await getBodyValue(post("{broken", "application/json"), "oto")).toBeUndefined()
    expect(await getBodyValue(post("oto=tok", "text/plain"), "oto")).toBeUndefined()
  })
})
