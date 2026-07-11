import { copyFile, mkdir, readFile, readdir, rm } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const currentDirectory = dirname(fileURLToPath(import.meta.url))
const appDirectory = join(currentDirectory, "..")
const pageDirectory = join(appDirectory, "src", "content", "pages")
const legacyImageDirectory = join(appDirectory, "..", "..", "src", "images")
const outputDirectory = join(appDirectory, "public", "legacy-assets")

const pageFiles = (await readdir(pageDirectory)).filter((file) => file.endsWith(".ts"))
const sources = await Promise.all(
  pageFiles.map((file) => readFile(join(pageDirectory, file), "utf8")),
)
const imageNames = new Set(
  sources.flatMap((source) =>
    [...source.matchAll(/src\/images\/([A-Za-z0-9._-]+)/g)].map((match) => match[1]),
  ),
)

await rm(outputDirectory, { force: true, recursive: true })
await mkdir(outputDirectory, { recursive: true })

await Promise.all(
  [...imageNames].map(async (imageName) => {
    await copyFile(
      join(legacyImageDirectory, imageName),
      join(outputDirectory, imageName),
    )
  }),
)

console.log(`Copied ${imageNames.size} legacy content assets to public/legacy-assets.`)
