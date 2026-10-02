import type { ImageMetadata } from "astro"
import type { RichText } from "@/lib/content"

/** List item with its own emoji marker ("✅", "🤝"…). */
export type IconItem = {
  icon: string
  text: RichText
}

/** Gives every text in a list the same emoji marker. */
export const withIcon = (icon: string, texts: RichText[]): IconItem[] =>
  texts.map((text) => ({ icon, text }))

/** Heading + bulleted list column (pain points / gains, benefits). */
export type IconListColumn = {
  emoji?: string
  title: string
  items: IconItem[]
}

/** Offer package card ("Jak możesz z nami współpracować?"). */
export type CollectivePackage = {
  title: string
  subtitle: string
  tone: "green" | "pink" | "lavender" | "rose"
  benefits: string[]
  audience: string[]
}

/** Label + value pair in a case study fact sheet. */
export type CaseStudyFact = {
  label: string
  value: RichText
}

export type CaseStudy = {
  title: string
  tone: "green" | "pink"
  /** Ads manager screenshot shown above the facts. */
  report: { src: ImageMetadata; alt: string }
  /** Supporting screenshot below the facts. */
  detail: { src: ImageMetadata; alt: string }
  /** Wider (2/3) column. */
  main: CaseStudyFact[]
  /** Narrow (1/3) column. */
  side: CaseStudyFact[]
}

/**
 * One piece of a result row in a ResultBox. Rows are flex-wrapped, so a row
 * reads like a sentence: "przyniósł 28 🛒 zakupów o wartości 69 972 zł".
 */
export type ResultToken =
  | { kind: "emoji"; value: string; rotate?: boolean }
  | { kind: "text"; html: RichText; narrow?: boolean }
  /** Typed, handwritten number with an optional label above it. */
  | { kind: "value"; value: string; label?: string }

export type CampaignResult = {
  title: string
  tone: "green" | "paper"
  subtitle?: RichText
  caption?: RichText
  rows: ResultToken[][]
  summary: RichText
  /** Show the round "scroll to the form" arrow under the box. */
  arrow?: boolean
}

export type StatPill = {
  value: string
  /** Small line under the value ("działań płatnych"). */
  note?: string
  /** Render "=" between the value and the text. */
  equals?: boolean
  text: RichText
}

export type StepContent = {
  title: string
  lead: string
  paragraphs: RichText[]
}
