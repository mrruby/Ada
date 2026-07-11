import { z } from "zod"

import { ConsentCategorySchema } from "../../integrations/consent/consent-types"
import { AssetSchema, SectionBaseSchema } from "../../page-spec/common.schema"

export const MediaSectionSchema = SectionBaseSchema.extend({
  type: z.literal("media"),
  presentation: z.literal("invitation-video"),
  heading: z.string().min(1),
  provider: z.literal("vimeo"),
  providerAssetId: z.string().min(1),
  poster: AssetSchema,
  consentCategory: ConsentCategorySchema,
}).strict()

export type MediaSection = z.output<typeof MediaSectionSchema>
export type MediaSectionInput = z.input<typeof MediaSectionSchema>
