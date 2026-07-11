import { z } from "zod"

import { AssetSchema, RichTextSchema, SectionBaseSchema } from "../../page-spec/common.schema"

const TeamMemberSchema = z
  .object({
    name: z.string().min(1),
    role: z.string().min(1),
    bio: RichTextSchema,
    media: AssetSchema,
  })
  .strict()

export const TeamSectionSchema = SectionBaseSchema.extend({
  type: z.literal("team"),
  presentation: z.enum(["membership-experts", "collective-team"]),
  heading: z.string().min(1),
  people: z.array(TeamMemberSchema).min(1),
}).strict()

export type TeamSection = z.output<typeof TeamSectionSchema>
export type TeamSectionInput = z.input<typeof TeamSectionSchema>
