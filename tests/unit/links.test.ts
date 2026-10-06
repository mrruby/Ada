import { describe, expect, it } from "vitest"
import { isExternal, newTabProps } from "@/lib/links"

describe("isExternal", () => {
  it.each([
    "https://sklep.adrianna.com.pl/",
    "http://example.com",
    "https://adrianna.com.pl/about",
  ])("treats %s as external", (href) => expect(isExternal(href)).toBe(true))

  it.each(["/about", "/thank/", "#pakiety", "about", "mailto:ada@example.com", "tel:+48123", ""])(
    "treats %s as internal / non-http",
    (href) => expect(isExternal(href)).toBe(false)
  )
})

describe("newTabProps", () => {
  it("opens a new tab without leaking the opener", () => {
    expect(newTabProps).toEqual({ target: "_blank", rel: "noopener noreferrer" })
  })
})
