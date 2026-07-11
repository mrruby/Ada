# Pilot section renderers

The `/magic/` and `/magic-kolektyw/` Astro pages render the typed PageSpec
content in `src/content/pages`. The content remains independent from markup,
Tailwind classes, and client-side code.

## Legacy image assets

PageSpec content currently points to the Gatsby source directory with paths
such as `src/images/magic-hero.webp`. Astro cannot publish files from that
directory directly, so `yarn dev` and `yarn build` first run
`scripts/copy-legacy-assets.mjs`.

The script reads only the image paths referenced by `src/content/pages/*.ts`,
copies them to the generated `public/legacy-assets/` directory, and clears old
generated files before each run. `public/legacy-assets/` is ignored by Git;
the root `src/images/` directory remains the source of truth.

Renderers must pass PageSpec asset paths through
`legacyAssetPath()` from `src/lib/legacy-assets.ts`. This maps a legacy path to
`/legacy-assets/<file-name>` while leaving a future non-legacy URL unchanged.
