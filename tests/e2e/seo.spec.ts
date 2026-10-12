/**
 * SEO of the built pages (read from dist/, plus robots.txt and the sitemap
 * over HTTP): a unique, descriptive Polish <title> and meta description per
 * page, canonical URLs, and a sitemap of exactly the indexable pages.
 */
import { readFileSync } from "node:fs"
import { join } from "node:path"
import type { APIRequestContext } from "@playwright/test"
import { expect, test } from "./fixtures"
import { distDir, routes } from "./routes"

const SITE = "https://adrianna.com.pl"
const SUFFIX = " | Adrianna Promis-Urbas"

const decode = (text: string) =>
  text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")

const fileOf = (route: string) =>
  route === "/" ? "index.html" : route.endsWith("/") ? `${route.slice(1)}index.html` : `${route.slice(1)}.html`

type PageHead = {
  route: string
  title: string
  description: string
  canonical: string
  noindex: boolean
}

const readHead = (route: string): PageHead => {
  const html = readFileSync(join(distDir, fileOf(route)), "utf8")
  const head = html.slice(0, html.indexOf("</head>"))
  const match = (pattern: RegExp) => decode(head.match(pattern)?.[1] ?? "")
  return {
    route,
    title: match(/<title>([^<]*)<\/title>/),
    description: match(/<meta name="description" content="([^"]*)"/),
    canonical: match(/<link rel="canonical" href="([^"]*)"/),
    noindex: /<meta name="robots" content="[^"]*noindex/.test(head),
  }
}

const pages = routes.map(readHead)
/** Aliases point their canonical at another page and share its copy. */
const isAlias = (page: PageHead) => page.route !== "/404" && page.canonical !== `${SITE}${page.route}`
const indexable = pages.filter((page) => !page.noindex && !isAlias(page) && page.route !== "/404")

const duplicates = (values: string[]) =>
  [...new Set(values.filter((value, index) => values.indexOf(value) !== index))]

test.beforeEach(({}, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "reads dist/, same for every project")
})

test.describe("titles and descriptions", () => {
  for (const page of pages) {
    test(`${page.route} has a descriptive title and description`, () => {
      expect(page.title, "title ends with the site name").toMatch(/^.+ \| Adrianna Promis-Urbas$/)
      const name = page.title.slice(0, -SUFFIX.length)
      expect(name.length, `"${name}" is too short to describe the page`).toBeGreaterThanOrEqual(15)
      expect(name, "generic English title").not.toMatch(/\b(home|thank you|page|untitled)\b/i)
      expect(page.description.length, `description: "${page.description}"`).toBeGreaterThanOrEqual(80)
      expect(page.description.length, `description: "${page.description}"`).toBeLessThanOrEqual(180)
    })
  }

  test("the home page is not called 'Home' and /thank/ is not generic", () => {
    const home = pages.find((page) => page.route === "/")!
    const thank = pages.find((page) => page.route === "/thank/")!
    expect(home.title).not.toMatch(/^Home\b/i)
    expect(home.title).toMatch(/Meta Ads/)
    expect(thank.title).toMatch(/^Dziękuję za zapis/)
    expect(thank.noindex).toBe(true)
  })

  test("no two pages share a title or a description (aliases excluded)", () => {
    const own = pages.filter((page) => !isAlias(page))
    expect(duplicates(own.map((page) => page.title)), "duplicate titles").toEqual([])
    expect(duplicates(own.map((page) => page.description)), "duplicate descriptions").toEqual([])
  })

  test("aliases have a canonical URL of another built page with the same copy", () => {
    for (const alias of pages.filter(isAlias)) {
      const target = pages.find((page) => `${SITE}${page.route}` === alias.canonical)
      expect(target, `${alias.route} → ${alias.canonical}`).toBeDefined()
      expect(isAlias(target!)).toBe(false)
      expect(alias.title).toBe(target!.title)
    }
  })
})

test.describe("robots.txt and sitemap", () => {
  const sitemapUrls = async (request: APIRequestContext) => {
    const index = await request.get("/sitemap-index.xml")
    expect(index.status()).toBe(200)
    const sitemaps = [...(await index.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
    expect(sitemaps.length).toBeGreaterThan(0)
    const urls: string[] = []
    for (const sitemap of sitemaps) {
      expect(sitemap.startsWith(`${SITE}/`)).toBe(true)
      const response = await request.get(new URL(sitemap).pathname)
      expect(response.status(), sitemap).toBe(200)
      urls.push(...[...(await response.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]))
    }
    return urls
  }

  test("robots.txt allows crawling and points to the sitemap", async ({ request }) => {
    const response = await request.get("/robots.txt")
    expect(response.status()).toBe(200)
    const robots = await response.text()
    expect(robots).toMatch(/^User-agent: \*$/m)
    expect(robots).not.toMatch(/^Disallow: \/\s*$/m)
    expect(robots).toMatch(new RegExp(`^Sitemap: ${SITE}/sitemap-index\\.xml$`, "m"))
  })

  test("the sitemap lists exactly the indexable pages", async ({ request }) => {
    const urls = await sitemapUrls(request)
    expect(duplicates(urls)).toEqual([])
    expect([...urls].sort()).toEqual(indexable.map((page) => `${SITE}${page.route}`).sort())
  })

  test("thank-you, link-only, alias and error pages stay out of the sitemap", async ({
    request,
  }) => {
    const paths = (await sitemapUrls(request)).map((url) => new URL(url).pathname)
    for (const route of ["/thank/", "/styleguide/", "/jesien-nagranie/", "/jesien-nagranie2/"]) {
      expect(paths).not.toContain(route)
    }
    expect(paths).not.toContain("/jesien-masterclass/")
    expect(paths.filter((path) => path.startsWith("/404"))).toEqual([])
    for (const page of pages.filter((page) => page.noindex || isAlias(page))) {
      expect(paths, `${page.route} is noindex or an alias`).not.toContain(page.route)
    }
  })
})
