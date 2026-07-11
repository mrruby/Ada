import { z } from "zod"

import {
  AssetSchema,
  CtaSchema,
  RichTextSchema,
  SectionBaseSchema,
} from "../../page-spec/common.schema"

export const HeroSectionSchema = SectionBaseSchema.extend({
  type: z.literal("hero"),
  presentation: z.enum(["membership", "collective"]),
  heading: z.string().min(1),
  body: RichTextSchema,
  primaryCta: CtaSchema,
  media: AssetSchema,
  /** Stable integration reference for the collective pilot; never provider markup or a URL. */
  leadFormId: z.literal("magic-kolektyw-webinar").optional(),
}).strict()

export type HeroSection = z.output<typeof HeroSectionSchema>
export type HeroSectionInput = z.input<typeof HeroSectionSchema>
