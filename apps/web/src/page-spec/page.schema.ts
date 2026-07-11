import { z } from "zod"

import { AudienceSectionSchema } from "../sections/Audience/schema"
import { BenefitGridSectionSchema } from "../sections/BenefitGrid/schema"
import { ConsultationSectionSchema } from "../sections/Consultation/schema"
import { FaqSectionSchema } from "../sections/Faq/schema"
import { FinalCtaSectionSchema } from "../sections/FinalCta/schema"
import { HeroSectionSchema } from "../sections/Hero/schema"
import { LearningPathSectionSchema } from "../sections/LearningPath/schema"
import { MediaSectionSchema } from "../sections/Media/schema"
import { OfferSectionSchema } from "../sections/Offer/schema"
import { ProblemSolutionSectionSchema } from "../sections/ProblemSolution/schema"
import { ProofSectionSchema } from "../sections/Proof/schema"
import { StickyCtaSectionSchema } from "../sections/StickyCta/schema"
import { TeamSectionSchema } from "../sections/Team/schema"
import { AssetSchema } from "./common.schema"

export const pageSectionTypes = [
  "sticky-cta",
  "hero",
  "problem-solution",
  "benefit-grid",
  "audience",
  "learning-path",
  "team",
  "media",
  "proof",
  "offer",
  "consultation",
  "faq",
  "final-cta",
] as const

export const PageSectionSchema = z.discriminatedUnion("type", [
  StickyCtaSectionSchema,
  HeroSectionSchema,
  ProblemSolutionSectionSchema,
  BenefitGridSectionSchema,
  AudienceSectionSchema,
  LearningPathSectionSchema,
  TeamSectionSchema,
  MediaSectionSchema,
  ProofSectionSchema,
  OfferSectionSchema,
  ConsultationSectionSchema,
  FaqSectionSchema,
  FinalCtaSectionSchema,
])

export const PageSpecSchema = z
  .object({
    schemaVersion: z.literal(1),
    path: z.string().regex(/^\/(?:[a-z0-9-]+\/)*$/),
    locale: z.literal("pl-PL"),
    brand: z.literal("magic"),
    seo: z
      .object({
        title: z.string().min(1),
        description: z.string().min(1),
        image: AssetSchema.optional(),
        noindex: z.boolean().default(false),
      })
      .strict(),
    sections: z.array(PageSectionSchema).min(1),
  })
  .strict()

export type PageSection = z.output<typeof PageSectionSchema>
export type PageSpec = z.output<typeof PageSpecSchema>
export type PageSpecInput = z.input<typeof PageSpecSchema>
