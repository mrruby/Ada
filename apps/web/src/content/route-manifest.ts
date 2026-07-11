import { PageSpecNotFoundError } from "../page-builder/errors"
import type { PageSpec } from "../page-spec/page.schema"
import { magicKolektywPageSpec } from "./pages/magic-kolektyw"
import { magicPageSpec } from "./pages/magic"

export const routeManifest = [magicPageSpec, magicKolektywPageSpec] as const

const pageSpecsByPath = new Map<string, PageSpec>(
  routeManifest.map((spec) => [spec.path, spec]),
)

export function getPageSpec(path: string): PageSpec {
  const spec = pageSpecsByPath.get(path)

  if (!spec) {
    throw new PageSpecNotFoundError(path)
  }

  return spec
}
