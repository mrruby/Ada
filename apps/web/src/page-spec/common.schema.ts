import { z } from "zod"

export const InlineSchema = z
  .object({
    text: z.string(),
    marks: z.array(z.enum(["strong", "emphasis"])).default([]),
  })
  .strict()

export const RichTextSchema = z.array(
  z.discriminatedUnion("kind", [
    z
      .object({
        kind: z.literal("paragraph"),
        content: z.array(InlineSchema).min(1),
      })
      .strict(),
    z
      .object({
        kind: z.literal("list"),
        style: z.enum(["bullets", "checks", "steps"]),
        items: z.array(z.array(InlineSchema).min(1)).min(1),
      })
      .strict(),
  ]),
)

export const AssetSchema = z
  .object({
    src: z.string().min(1),
    alt: z.string(),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
  })
  .strict()

export const CtaSchema = z
  .object({
    label: z.string().min(1),
    href: z.string().min(1),
    analyticsKey: z.string().regex(/^[a-z0-9.-]+$/),
    external: z.boolean().default(false),
  })
  .strict()

export const SectionBaseSchema = z
  .object({
    id: z.string().regex(/^[a-z][a-z0-9-]*$/).optional(),
    tone: z.enum(["default", "subtle", "accent", "contrast"]).default("default"),
  })
  .strict()

export type RichText = z.output<typeof RichTextSchema>
export type Asset = z.output<typeof AssetSchema>
export type Cta = z.output<typeof CtaSchema>
