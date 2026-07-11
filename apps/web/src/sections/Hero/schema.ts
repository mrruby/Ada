import { z } from "zod"

import {
  AssetSchema,
  CtaSchema,
  RichTextSchema,
  SectionBaseSchema,
} from "../../page-spec/common.schema"

export const HeroDecorationsSchema = z
  .object({
    heading: AssetSchema.optional(),
    afterCta: AssetSchema.optional(),
  })
  .strict()

export const HeroSectionSchema = SectionBaseSchema.extend({
  type: z.literal("hero"),
  presentation: z.enum(["membership", "collective"]),
  heading: z.string().min(1),
  body: RichTextSchema,
  primaryCta: CtaSchema,
  logo: AssetSchema.optional(),
  decorations: HeroDecorationsSchema.optional(),
  media: AssetSchema,
}).strict()

export type HeroSection = z.output<typeof HeroSectionSchema>
export type HeroSectionInput = z.input<typeof HeroSectionSchema>
