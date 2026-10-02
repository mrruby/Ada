#!/usr/bin/env node
/**
 * Tiny dependency-free static server for the production build (dist/), used by
 * the Playwright e2e tests. Mirrors the Netlify behaviour the site relies on:
 *
 *   /about      → dist/about/index.html  (directory index)
 *   /about/     → dist/about/index.html
 *   /404        → dist/404.html          (".html" resolution)
 *   /missing    → dist/404.html with status 404
 *
 * On-demand routes (/api/*) are not served — tests mock them with page.route.
 *
 *   PORT=4322 HOST=127.0.0.1 node scripts/serve-dist.mjs [dir]
 */
import { createReadStream } from "node:fs"
import { stat } from "node:fs/promises"
import { createServer } from "node:http"
import { extname, join, normalize, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(process.argv[2] ?? fileURLToPath(new URL("../dist", import.meta.url)))
const port = Number(process.env.PORT ?? 4322)
const host = process.env.HOST ?? "127.0.0.1"

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".pdf": "application/pdf",
}

const isFile = async (path) => {
  try {
    return (await stat(path)).isFile()
  } catch {
    return false
  }
}

/** Maps a URL pathname to a file inside `root`, or null. */
const resolveFile = async (pathname) => {
  let decoded
  try {
    decoded = decodeURIComponent(pathname)
  } catch {
    return null
  }
  const target = normalize(join(root, decoded))
  if (target !== root && !target.startsWith(root + sep)) return null

  const candidates = decoded.endsWith("/")
    ? [join(target, "index.html")]
    : [target, `${target}.html`, join(target, "index.html")]
  for (const candidate of candidates) {
    if (await isFile(candidate)) return candidate
  }
  return null
}

const send = async (req, res, file, status) => {
  const { size } = await stat(file)
  res.writeHead(status, {
    "Content-Type": TYPES[extname(file).toLowerCase()] ?? "application/octet-stream",
    "Content-Length": size,
    "Cache-Control": "no-cache",
  })
  if (req.method === "HEAD") return res.end()
  createReadStream(file).pipe(res)
}

const server = createServer(async (req, res) => {
  try {
    if (req.method !== "GET" && req.method !== "HEAD") {
      res.writeHead(405, { Allow: "GET, HEAD" }).end()
      return
    }
    const { pathname } = new URL(req.url ?? "/", "http://localhost")
    const file = await resolveFile(pathname)
    if (file) return await send(req, res, file, 200)

    const notFound = join(root, "404.html")
    if (await isFile(notFound)) return await send(req, res, notFound, 404)
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found")
  } catch (error) {
    console.error(error)
    if (!res.headersSent) res.writeHead(500)
    res.end()
  }
})

if (!(await isFile(join(root, "index.html")))) {
  console.error(`serve-dist: ${root}/index.html not found — run \`yarn build\` first.`)
  process.exit(1)
}

server.listen(port, host, () => {
  console.log(`serve-dist: ${root} on http://${host}:${port}`)
})

for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => process.exit(0))
