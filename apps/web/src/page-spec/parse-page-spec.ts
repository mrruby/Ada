import { PageSpecSchema, type PageSpec } from "./page.schema"

export function parsePageSpec(input: unknown): PageSpec {
  return PageSpecSchema.parse(input)
}
