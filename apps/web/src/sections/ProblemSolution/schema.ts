import { z } from "zod"

import { SectionBaseSchema } from "../../page-spec/common.schema"

export const ProblemSolutionSectionSchema = SectionBaseSchema.extend({
  type: z.literal("problem-solution"),
  presentation: z.enum(["comparison", "situations"]),
  heading: z.string().min(1),
  problems: z.array(z.string().min(1)).min(1),
  outcomes: z.array(z.string().min(1)).min(1),
}).strict()

export type ProblemSolutionSection = z.output<typeof ProblemSolutionSectionSchema>
export type ProblemSolutionSectionInput = z.input<typeof ProblemSolutionSectionSchema>
