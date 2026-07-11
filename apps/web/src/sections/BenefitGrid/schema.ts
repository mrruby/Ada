import { z } from "zod"

import { SectionBaseSchema } from "../../page-spec/common.schema"

const BenefitItemSchema = z
  .object({
    title: z.string().min(1),
    body: z.string().min(1),
  })
  .strict()

export const BenefitGridSectionSchema = SectionBaseSchema.extend({
  type: z.literal("benefit-grid"),
  presentation: z.enum([
    "value-proposition",
    "principles",
    "membership-benefits",
    "service-benefits",
  ]),
  heading: z.string().min(1),
  items: z.array(BenefitItemSchema).min(1),
}).strict()

export type BenefitGridSection = z.output<typeof BenefitGridSectionSchema>
export type BenefitGridSectionInput = z.input<typeof BenefitGridSectionSchema>
