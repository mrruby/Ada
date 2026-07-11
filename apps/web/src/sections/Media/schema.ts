import { z } from "zod"

import { AssetSchema, SectionBaseSchema } from "../../page-spec/common.schema"

export const MediaSectionSchema = SectionBaseSchema.extend({
  type: z.literal("media"),
  presentation: z.literal("invitation-video"),
  heading: z.string().min(1),
  provider: z.literal("vimeo"),
  providerAssetId: z.string().min(1),
  poster: AssetSchema,
  consentCategory: z.enum(["necessary", "statistics", "marketing"]),
}).strict()

export type MediaSection = z.output<typeof MediaSectionSchema>
export type MediaSectionInput = z.input<typeof MediaSectionSchema>
