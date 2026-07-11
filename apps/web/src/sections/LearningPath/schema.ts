import { z } from "zod"

import { SectionBaseSchema } from "../../page-spec/common.schema"

const LearningStageSchema = z
  .object({
    title: z.string().min(1),
    body: z.string().min(1),
  })
  .strict()

export const LearningPathSectionSchema = SectionBaseSchema.extend({
  type: z.literal("learning-path"),
  presentation: z.enum(["curriculum", "monthly-plan"]),
  heading: z.string().min(1),
  stages: z.array(LearningStageSchema).min(1),
}).strict()

export type LearningPathSection = z.output<typeof LearningPathSectionSchema>
export type LearningPathSectionInput = z.input<typeof LearningPathSectionSchema>
