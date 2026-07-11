import { z } from "zod"

import { CtaSchema, SectionBaseSchema } from "../../page-spec/common.schema"

export const StickyCtaSectionSchema = SectionBaseSchema.extend({
  type: z.literal("sticky-cta"),
  presentation: z.literal("membership"),
  label: z.string().min(1),
  targetCta: CtaSchema,
}).strict()

export type StickyCtaSection = z.output<typeof StickyCtaSectionSchema>
export type StickyCtaSectionInput = z.input<typeof StickyCtaSectionSchema>
