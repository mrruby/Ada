import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

/** Legal documents rendered at /policy and /terms. */
const legal = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/legal" }),
  schema: z.object({
    /** Visible document heading. */
    title: z.string(),
    /** <title> when it differs from the heading. */
    seoTitle: z.string().optional(),
  }),
})

export const collections = { legal }
