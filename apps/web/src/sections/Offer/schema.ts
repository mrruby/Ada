import { z } from "zod"

import { CtaSchema, SectionBaseSchema } from "../../page-spec/common.schema"

const PriceDisplaySchema = z
  .object({
    label: z.string().min(1),
    value: z.string().min(1),
  })
  .strict()

const OfferItemSchema = z
  .object({
    name: z.string().min(1),
    features: z.array(z.string().min(1)).min(1),
    price: PriceDisplaySchema.optional(),
    cta: CtaSchema.optional(),
  })
  .strict()

export const OfferSectionSchema = SectionBaseSchema.extend({
  type: z.literal("offer"),
  presentation: z.enum(["membership-packages", "service-packages"]),
  heading: z.string().min(1),
  offers: z.array(OfferItemSchema).min(1),
}).strict()

export type OfferSection = z.output<typeof OfferSectionSchema>
export type OfferSectionInput = z.input<typeof OfferSectionSchema>
