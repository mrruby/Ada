/**
 * Maps legacy Gatsby image references stored in PageSpec content to the
 * generated public directory used by the Astro pilot.
 */
export function legacyAssetPath(src: string) {
  const legacyPrefix = "src/images/"

  if (!src.startsWith(legacyPrefix)) {
    return src
  }

  return `/legacy-assets/${src.slice(legacyPrefix.length)}`
}
