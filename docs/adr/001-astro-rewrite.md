# ADR 001: Rebuild the site as an Astro app in `astro/`

- Status: Accepted
- Date: 2026-10-02
- Update 2026-10-06: the Astro app replaced Gatsby at the repo root and went
  live on adrianna.com.pl; the Gatsby code was removed.

## Context

The Gatsby site (31 routes) grew through copy-pasted `version={n}` switch
components, ~60 numbered colors and a custom type scale, page-absolute
decorations and React for static marketing pages. A first migration attempt
(`backup/migration-astro-old`, local only) designed a strict, Zod-validated
"PageSpec" page builder and shipped two pilot pages.

## Decisions

1. **Separate app in `astro/`**, next to the untouched Gatsby root, with its
   own `package.json`/`yarn.lock` (Yarn 1). Netlify site base directory:
   `astro`. Gatsby stays deployable until cutover.
2. **Pages compose components in `.astro` files.** Typed content modules in
   `src/data` hold lists and repeated copy; one-off copy stays in components.
   We did not adopt the PageSpec builder: for a site of one-off campaign
   landings, a closed section registry costs more than it protects.
3. **Layers:** `components/ui` (primitives) → `components/sections` (reusable
   sections) → `components/<family>` (pieces of one page family) → pages.
   A pattern used by a second family moves down a layer instead of being
   copied.
4. **Styling:** Tailwind CSS 4 defaults for every scale; only a semantic brand
   palette in `theme.css`; `bg-art-*` utilities for artwork; `cn()` (tailwind-
   merge) so `class` props override defaults.
5. **No UI framework at runtime.** Native HTML first (`<details>`, `<dialog>`,
   Popover API, anchors); small TypeScript modules for the rest. Scripts are
   never inlined (`assetsInlineLimit: 0`) so a strict CSP is possible.
6. **Consent:** four optional categories (statistics, preferences, marketing,
   media), unticked by default, changeable any time; Google Consent Mode v2
   and Meta consent signals; withdrawal reloads the page; trackers and
   third-party embeds load only after consent. Legacy cookie names are kept
   so earlier decisions remain valid.
7. **Security:** baseline headers enforced; the full CSP runs report-only
   with `/api/csp-report` logging violations, to be enforced once the log is
   clean (GTM may inject tags the code doesn't list).
8. **Quality gate:** `astro check`, Vitest unit tests, Playwright e2e +
   axe accessibility tests and a production build run in GitHub Actions
   (`.github/workflows/astro.yml`).

## Consequences

- New pages are fast to build from existing primitives; `/styleguide` shows
  them all.
- Content is not CMS-shaped. If a CMS is added later, the typed data modules
  are the place to adapt it.
- Visual parity is approximate by design (default scales), reviewed against
  full-page screenshots of the Gatsby build.
