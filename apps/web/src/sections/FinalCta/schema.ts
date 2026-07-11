import { z } from "zod"

import { CtaSchema, RichTextSchema, SectionBaseSchema } from "../../page-spec/common.schema"

const SocialLinkSchema = z
  .object({
    label: z.string().min(1),
    href: z.string().min(1),
  })
  .strict()

export const FinalCtaSectionSchema = SectionBaseSchema.extend({
  type: z.literal("final-cta"),
  presentation: z.enum(["membership", "collective"]),
  heading: z.string().min(1),
  body: RichTextSchema,
  primaryCta: CtaSchema,
  socialLinks: z.array(SocialLinkSchema).min(1).optional(),
}).strict()

export type FinalCtaSection = z.output<typeof FinalCtaSectionSchema>
export type FinalCtaSectionInput = z.input<typeof FinalCtaSectionSchema>
