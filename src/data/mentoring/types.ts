import type { ImageMetadata } from "astro"
import type { RichText } from "@/lib/content"

/** Emoji bullet + rich text ("Czy Ty też…" question lists). */
export type EmojiItem = {
  icon: string
  text: RichText
}

/** One stop of the alternating "W programie" agenda. */
export type TimelineItem = {
  title: RichText
  text: RichText
  /** Column on wide screens. */
  side: "left" | "right"
}

/** Numbered topic shown on a spinning flower ("Nad czym będziemy pracować?"). */
export type StepItem = {
  number: string
  title: string
  text?: RichText
}

/** Bonus tile: icon + description + optional value line. */
export type BonusItem = {
  image: ImageMetadata
  /** Rendered icon width in px (kept from the original artwork sizes). */
  width: number
  text: RichText
  value?: RichText
}

/** Highlighted label + description ("Co dostajesz w ramach programu?"). */
export type PerkItem = {
  label: string
  text: string
}

/** Question with an optional answer (static FAQ, question carousel). */
export type QaItem = {
  question: string
  answer?: RichText
}
