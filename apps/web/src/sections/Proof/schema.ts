import { z } from "zod"

import { AssetSchema, RichTextSchema, SectionBaseSchema } from "../../page-spec/common.schema"

const CaseStudyProofSchema = z
  .object({
    type: z.literal("case-study"),
    title: z.string().min(1),
    summary: z.string().min(1),
    figures: z.array(z.string().min(1)).min(1),
    media: AssetSchema.optional(),
    supportingMedia: AssetSchema.optional(),
  })
  .strict()

const ResultProofSchema = z
  .object({
    type: z.literal("result"),
    label: z.string().min(1),
    value: z.string().min(1),
    context: z.string().min(1).optional(),
    media: AssetSchema.optional(),
  })
  .strict()

const TestimonialProofSchema = z
  .object({
    type: z.literal("testimonial"),
    quote: z.string().min(1),
    person: z.string().min(1),
    role: z.string().min(1).optional(),
    media: AssetSchema.optional(),
  })
  .strict()

const QaProofSchema = z
  .object({
    type: z.literal("qa"),
    question: z.string().min(1),
    answer: RichTextSchema,
    media: AssetSchema.optional(),
  })
  .strict()

const CustomerStoryProofSchema = z
  .object({
    type: z.literal("customer-story"),
    title: z.string().min(1),
    body: RichTextSchema,
    media: AssetSchema.optional(),
    artwork: z.array(AssetSchema).min(1).optional(),
  })
  .strict()

export const ProofSectionSchema = SectionBaseSchema.extend({
  type: z.literal("proof"),
  presentation: z.enum([
    "case-studies",
    "results",
    "testimonials",
    "qa-sample",
    "customer-story",
  ]),
  heading: z.string().min(1),
  decoration: AssetSchema.optional(),
  gallery: z.array(AssetSchema).min(1).optional(),
  entries: z
    .array(
      z.discriminatedUnion("type", [
        CaseStudyProofSchema,
        ResultProofSchema,
        TestimonialProofSchema,
        QaProofSchema,
        CustomerStoryProofSchema,
      ]),
    )
    .min(1),
}).strict()

export type ProofSection = z.output<typeof ProofSectionSchema>
export type ProofSectionInput = z.input<typeof ProofSectionSchema>
