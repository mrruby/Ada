import { z } from "zod"

import { SectionBaseSchema } from "../../page-spec/common.schema"

const AudienceGroupSchema = z
  .object({
    title: z.string().min(1),
    criteria: z.array(z.string().min(1)).min(1),
  })
  .strict()

export const AudienceSectionSchema = SectionBaseSchema.extend({
  type: z.literal("audience"),
  presentation: z.enum(["membership-dual", "collective"]),
  heading: z.string().min(1),
  groups: z.array(AudienceGroupSchema).min(1),
}).strict()

export type AudienceSection = z.output<typeof AudienceSectionSchema>
export type AudienceSectionInput = z.input<typeof AudienceSectionSchema>
