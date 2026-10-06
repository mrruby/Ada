import { describe, expect, it } from "vitest"
import { cn } from "@/lib/cn"

const classes = (value: string) => value.split(" ").sort()

describe("cn", () => {
  it("joins class names and skips falsy values and nested arrays", () => {
    expect(cn("a", false, null, undefined, 0, "", ["b", ["c", false]])).toBe("a b c")
  })

  it("lets later conflicting utilities win", () => {
    expect(cn("p-4", "p-8")).toBe("p-8")
    expect(cn("px-2 py-1", "p-3")).toBe("p-3")
    expect(cn("text-navy", "text-white")).toBe("text-white")
    expect(cn("rounded-xl shadow-md", "rounded-3xl")).toBe("shadow-md rounded-3xl")
  })

  it("resolves brand palette colors like Tailwind colors", () => {
    expect(cn("bg-mint", "bg-lavender")).toBe("bg-lavender")
    expect(cn("border-tangerine/40", "border-navy")).toBe("border-navy")
  })

  it("keeps variants independent", () => {
    expect(classes(cn("p-4", "md:p-8"))).toEqual(["md:p-8", "p-4"])
    expect(cn("md:p-4", "md:p-8")).toBe("md:p-8")
    expect(cn("hover:text-navy", "hover:text-white")).toBe("hover:text-white")
  })

  describe("bg-art-* artwork utilities", () => {
    it("are kept next to a background color", () => {
      expect(classes(cn("bg-mint", "bg-art-grid"))).toEqual(["bg-art-grid", "bg-mint"])
      expect(classes(cn("bg-art-wave", "bg-lavender"))).toEqual(["bg-art-wave", "bg-lavender"])
    })

    it("let a later color replace only the color", () => {
      expect(classes(cn("bg-art-grid bg-mint", "bg-cream"))).toEqual(["bg-art-grid", "bg-cream"])
    })

    it("replace each other (later artwork wins)", () => {
      expect(cn("bg-art-grid", "bg-art-checker")).toBe("bg-art-checker")
    })
  })

  describe("leading-* next to text-*", () => {
    it("keeps an explicit line height when a later font size is added", () => {
      expect(classes(cn("text-xl leading-tight", "text-3xl"))).toEqual([
        "leading-tight",
        "text-3xl",
      ])
      expect(classes(cn("leading-none", "text-5xl"))).toEqual(["leading-none", "text-5xl"])
    })

    it("still replaces conflicting font sizes and line heights", () => {
      expect(cn("text-xl", "text-3xl")).toBe("text-3xl")
      expect(cn("leading-tight", "leading-loose")).toBe("leading-loose")
    })

    it("does not confuse font size with text color", () => {
      expect(classes(cn("text-xl text-navy", "text-white"))).toEqual(["text-white", "text-xl"])
    })
  })
})
