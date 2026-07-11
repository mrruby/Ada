import { z } from "zod"

import { RichTextSchema, SectionBaseSchema } from "../../page-spec/common.schema"

const FaqItemSchema = z
  .object({
    question: z.string().min(1),
    answer: RichTextSchema,
  })
  .strict()

export const FaqSectionSchema = SectionBaseSchema.extend({
  type: z.literal("faq"),
  presentation: z.enum(["membership", "services"]),
  heading: z.string().min(1),
  items: z.array(FaqItemSchema).min(1),
}).strict()

export type FaqSection = z.output<typeof FaqSectionSchema>
export type FaqSectionInput = z.input<typeof FaqSectionSchema>
