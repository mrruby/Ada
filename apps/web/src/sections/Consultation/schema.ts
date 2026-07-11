import { z } from "zod"

import { CtaSchema, RichTextSchema, SectionBaseSchema } from "../../page-spec/common.schema"

export const ConsultationSectionSchema = SectionBaseSchema.extend({
  type: z.literal("consultation"),
  presentation: z.literal("appointment"),
  heading: z.string().min(1),
  body: RichTextSchema,
  provider: z.literal("google-calendar"),
  externalUrl: z.string().url(),
  cta: CtaSchema,
}).strict()

export type ConsultationSection = z.output<typeof ConsultationSectionSchema>
export type ConsultationSectionInput = z.input<typeof ConsultationSectionSchema>
