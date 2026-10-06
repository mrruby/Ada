import type { RichText } from "@/lib/content"

/** Card background palette used across the training landings. */
export type TrainingTone = "pink" | "yellow" | "purple"

export type TrainingBenefit = {
  tone: TrainingTone
  title: string
  description: string
}

/** Copy of a standard mini-course landing (hero + form, pink intro, benefits). */
export type TrainingLandingData = {
  /** Page title passed to the layout's SEO. */
  seoTitle: string
  heroTone: "yellow" | "orange"
  /** Small bold line above the headline. */
  eyebrow: string
  /** Hero headline (trusted HTML). */
  headline: RichText
  /** Badge heading of the pink intro section. Defaults to "mini-kurs za 0zł". */
  sectionTitle?: string
  bullets: string[]
  /** Benefits heading (trusted HTML). Defaults to "co zyskasz podczas mini-kursu". */
  benefitsTitle?: RichText
  benefits: TrainingBenefit[]
}
