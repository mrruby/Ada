import { createReadStream } from "node:fs"
import { access, stat } from "node:fs/promises"
import { createServer } from "node:http"
import { extname, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(fileURLToPath(new URL("../dist/", import.meta.url)))
const port = Number.parseInt(process.env.PORT ?? "4321", 10)

const contentTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
}

try {
  await access(root)
} catch {
  console.error(`Missing build output: ${root}. Run yarn build before yarn test:a11y.`)
  process.exit(1)
}

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" })
    response.end()
    return
  }

  let pathname
  try {
    pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname)
  } catch {
    response.writeHead(400)
    response.end("Bad request")
    return
  }

  let filePath = resolve(root, `.${pathname}`)
  if (!filePath.startsWith(`${root}${sep}`) && filePath !== root) {
    response.writeHead(403)
    response.end("Forbidden")
    return
  }

  try {
    if ((await stat(filePath)).isDirectory()) {
      filePath = resolve(filePath, "index.html")
    }

    const file = await stat(filePath)
    if (!file.isFile()) {
      throw new Error("Not a file")
    }

    response.writeHead(200, {
      "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
      "Content-Length": file.size,
      "Cache-Control": "no-store",
    })

    if (request.method === "HEAD") {
      response.end()
      return
    }

    createReadStream(filePath).pipe(response)
  } catch {
    response.writeHead(404)
    response.end("Not found")
  }
})

server.listen(port, "127.0.0.1", () => {
  console.log(`Serving ${root} at http://127.0.0.1:${port}`)
})
