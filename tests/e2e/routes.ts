/**
 * Routes of the production build, enumerated from dist/ (every
 * `<dir>/index.html` plus top-level `*.html`), and the page files they come
 * from in src/pages.
 */
import { existsSync, readdirSync } from "node:fs"
import { join, relative, sep } from "node:path"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("../..", import.meta.url))
export const distDir = join(root, "dist")
const pagesDir = join(root, "src", "pages")

const walk = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  })

const toPosix = (path: string) => path.split(sep).join("/")

/** "/", "/about/", "/404"… sorted, from the built HTML files. */
export const getBuiltRoutes = (): string[] => {
  if (!existsSync(join(distDir, "index.html"))) {
    throw new Error("dist/ is missing — run `yarn build` (or `yarn test:e2e`) first.")
  }
  return walk(distDir)
    .map((file) => toPosix(relative(distDir, file)))
    .filter((file) => file.endsWith(".html") && !file.startsWith("_astro/"))
    .map((file) =>
      file === "index.html"
        ? "/"
        : file.endsWith("/index.html")
          ? `/${file.slice(0, -"index.html".length)}`
          : `/${file.slice(0, -".html".length)}`
    )
    .sort()
}

/** Routes expected from src/pages (static pages only, no API endpoints). */
export const getSourceRoutes = (): string[] =>
  walk(pagesDir)
    .map((file) => toPosix(relative(pagesDir, file)))
    .filter((file) => /\.(astro|md|mdx)$/.test(file) && !file.startsWith("api/"))
    .map((file) => file.replace(/\.(astro|md|mdx)$/, ""))
    .map((file) =>
      file === "index"
        ? "/"
        : file === "404" || file === "500"
          ? `/${file}`
          : `/${file.replace(/(^|\/)index$/, "")}/`.replace(/\/+$/, "/")
    )
    .sort()

export const routes = getBuiltRoutes()
