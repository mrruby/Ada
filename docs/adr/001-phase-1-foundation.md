# ADR 001: Phase 1 foundation and Gatsby/Astro coexistence

- Status: Accepted
- Date: 2026-07-11
- Scope: Phase 1 of the Gatsby-to-Astro migration
- Decision owners: project owner and migration lead

## Decision summary

Phase 1 will add an isolated Astro application at `apps/web` while leaving the Gatsby application at the repository root. The new application will use Yarn 4 with its own lockfile, TypeScript, Astro 7, React 19 islands, Tailwind CSS 4, Zod, and a second Netlify site; the legacy root will remain on Yarn 1 and keep its current Netlify build. Content will be provider-neutral, typed `PageSpec` data committed to Git, with a closed semantic section registry covering `/magic/` and `/magic-kolektyw/`; no CMS or Studio will be created in this phase. Phase 1 establishes contracts and a buildable preview foundation, not production route cutover or pixel parity.

## A. Repository layout for coexistence

### Context

PLAN.md section 6 proposes a full monorepo layout in which the current Gatsby application moves from the repository root to `apps/legacy-gatsby` and the new application lives at `apps/web`. That is a reasonable end-state layout, but moving Gatsby now would change paths used by the existing root `package.json`, `yarn.lock`, `gatsby-config.js`, `netlify.toml`, source aliases, scripts, and Netlify site settings before any route is migrated.

The migration requires a second Netlify site, preview validation before cutover, route-by-route rollback, and no production path changes in Phase 1. The current worktree has no `.github/workflows` directory. The Git remote is hosted on GitHub, and production is hosted on Netlify.

### Decision

Use an additive `apps/web` directory and leave the complete Gatsby application at the repository root during coexistence.

```text
ada/
├── apps/
│   └── web/                 # isolated Astro application
├── src/                     # unchanged Gatsby application
├── package.json             # unchanged Gatsby/Yarn 1 project
├── yarn.lock                # unchanged Gatsby/Yarn 1 lockfile
├── gatsby-config.js
├── netlify.toml             # production Gatsby site configuration
└── docs/
```

Phase 1 must not create `apps/legacy-gatsby`, move existing source files, or add a root workspace definition. The second Netlify site will use `apps/web` as its base/package directory, `yarn build` as its build command, and `dist` as its publish directory. Its Astro/Netlify configuration belongs inside `apps/web`. The existing Netlify site continues to build from the repository root with Yarn 1 and is not given Phase 1 rewrites.

The migration to `apps/legacy-gatsby`, if still useful, may happen only after all production routes have left Gatsby. At that point deleting Gatsby is simpler than moving it temporarily.

### Consequences

- The production Gatsby build, path assumptions, and Netlify configuration remain unchanged during foundation work.
- Existing file history stays on the same paths. The new application starts with clean history under `apps/web`.
- Rollback is operationally simple: detach or delete the second Netlify site and revert/delete `apps/web`; Gatsby is unaffected.
- The repository temporarily contains two independent JavaScript projects rather than one root workspace. Cross-app packages and hoisting are intentionally unavailable in Phase 1.
- A future shared package must justify introducing a root workspace. PageSpec contracts remain inside `apps/web` until there is a real second consumer.
- `apps/web` is preferred over a top-level `web/` because it preserves the planned `apps/*` namespace without forcing the legacy move.

### Rejected alternatives

**Move Gatsby to `apps/legacy-gatsby` now.** Rejected because it creates a large path-only diff, obscures useful Git history during review, requires immediate changes to the production Netlify build, and makes rollback depend on reversing a repository-wide move.

**Create a top-level `web/` directory.** Viable, but rejected because `apps/web` communicates that it is a deployable application and leaves a stable namespace for later applications without changing any legacy path.

**Replace Gatsby at the root with Astro.** Rejected because it turns a route-by-route migration into a big-bang cutover and removes the independent rollback boundary.

## B. Package and workspace manager

### Context

The legacy project is pinned to Yarn 1.22.22 and must remain buildable without dependency or lockfile churn. The repository rules require Yarn and prohibit npm/package-lock usage. Making the root a workspace would cause the new application to participate in legacy dependency resolution and hoisting, which weakens isolation.

### Decision

Use two independent Yarn projects:

- repository root: Yarn 1.22.22 with the existing root `yarn.lock`;
- `apps/web`: Yarn 4, pinned in its nearest `package.json`, with `apps/web/yarn.lock` and `nodeLinker: node-modules` in `apps/web/.yarnrc.yml`.

`apps/web/package.json` will be private and include an exact `packageManager` value. CI and Netlify will enter `apps/web`, enable Corepack, and run `yarn install --immutable`. Phase 1 will not declare root `workspaces`, use `portal:`/`link:` dependencies across the two projects, or share `node_modules`.

Node 22 is the common runtime for CI and Netlify. It is supported by the new stack and is already the known-good runtime for the legacy Gatsby build documented in the Phase 0 summary.

### Consequences

- Installing or upgrading Astro dependencies cannot rewrite the legacy lockfile or alter Gatsby's dependency graph.
- Commands are explicit: legacy commands run at the root; Astro commands run from `apps/web`.
- Yarn 4 gives the new app immutable installs and current workspace behavior when it eventually becomes the repository workspace root.
- Two lockfiles and two Yarn versions are intentional during coexistence and must be called out in contributor documentation.
- The new app cannot import unpublished modules from the Gatsby tree. Shared behavior must first be expressed as stable, framework-independent code and deliberately extracted later.

### Rejected alternatives

**Use Yarn 1 for both applications.** Rejected because it carries an obsolete installer and hoisting model into the new foundation solely for temporary consistency.

**Make the repository root a Yarn workspace now.** Rejected because it couples installs, changes the legacy root package contract, and provides no Phase 1 benefit while there are no shared packages.

**Use pnpm, npm, or Bun for `apps/web`.** Rejected because the repository has a Yarn-only rule; npm would also risk a prohibited `package-lock.json`. Introducing a third tool is not justified for an isolated app.

## C. Minimal design-token model

### Context

The legacy Tailwind configuration exposes more than forty `ada.*` colors plus custom type sizes, gradients, animations, and many arbitrary values. The owner decision explicitly changes the visual goal: the new application should be clean, simple, and approximately faithful, using Tailwind defaults, 12-column grids, default spacing/type scales, and minimal arbitrary values. Copying every legacy token would preserve accidental duplication and make the new foundation harder to use.

Both pilot routes belong to the Magic family. Phase 1 therefore needs the Magic identity, neutral semantic surfaces, and accessible interaction states; it does not need Sowa, training, mentoring, or one-off campaign palettes.

### Decision

Implement the three-layer model from PLAN.md section 7 in this reduced form.

#### Layer 1: foundation

Tailwind CSS 4 defaults are the foundation for spacing, the 12-column grid, breakpoints, type scale, line height, radii, shadows, neutral colors, and motion duration. Use `white`, `black`, `neutral-*`, `gray-*`, `pink-*`, `violet-*`, `orange-*`, and `yellow-*` utilities where approximate color is sufficient. Do not create aliases such as `ada-white`, `ada-black`, `ada-white3`, or custom `adaTitle` sizes.

Only these current values survive as exact brand tokens in `@theme`:

| New foundation token | Legacy source | Value | Reason |
| --- | --- | --- | --- |
| `--color-magic-ink` | `ada.newPurple` | `#3D03A1` | Distinctive deep Magic contrast surface |
| `--color-magic-purple` | `ada.magicPurple3` | `#5D4E9D` | Primary Magic purple surface |
| `--color-magic-lilac` | `ada.magicPurple4` | `#B2A1FA` | Distinctive light purple accent |
| `--color-magic-orange` | `ada.magicOrange` | `#EE701E` | Primary action and outline accent |
| `--color-magic-gold` | `ada.magicOrange2` | `#FFAD00` | Hero/highlight accent distinct from orange |
| `--color-magic-green` | `ada.magicGreen` | `#E8F6CB` | Recognizable pale green surface |
| `--color-magic-pink` | `ada.magicPink4` | `#FFB0DB` | Recognizable pink action/accent surface |
| `--color-magic-yellow` | `ada.magicYellow` | `#F4E105` | High-energy Magic highlight |
| `--color-magic-cream` | `ada.white2` | `#F2F0E9` | Warm campaign background not represented by a neutral default |

Close duplicates are consolidated rather than preserved: `ada.orange` maps to `magic-orange`; `ada.purple3` maps to `magic-lilac` or a Tailwind violet; `ada.pink2`, `ada.pink8`, `ada.magicPink2`, and `ada.light-pink` map to `magic-pink` or Tailwind pink/violet tints according to contrast; `ada.magicGrey*` and `ada.white3` map to Tailwind neutral values. All `sowa*` colors and non-pilot `ada.*` colors are deferred.

The initial font tokens are `--font-body` (Montserrat with a sans-serif fallback) and `--font-display` (Anton with a sans-serif fallback). Use Tailwind's default font-size and line-height scale. Courier content maps to the default monospace stack; no additional size tokens are introduced.

#### Layer 2: semantic aliases

Define only the aliases needed by primitives and section shells:

```css
--surface-page
--surface-subtle
--surface-accent
--text-primary
--text-on-accent
--action-primary
--action-primary-hover
--border-emphasis
--focus-ring
```

These remain ordinary CSS custom properties. PageSpec content may select a closed semantic `tone` such as `default`, `subtle`, `accent`, or `contrast`; it may not contain token names, Tailwind classes, hex values, arbitrary values, or CSS.

#### Layer 3: brand recipe

Phase 1 has one recipe, `[data-brand="magic"]`, which assigns the semantic aliases from the foundation tokens. Do not add route-specific recipes for `/magic/` and `/magic-kolektyw/` or an empty campaign-recipe framework. A named campaign recipe may be added later only when a migrated route requires a deliberate semantic override.

### Consequences

- The pilots retain recognizable Magic colors and typography without importing the legacy theme wholesale.
- Most layout and typography choices become predictable Tailwind defaults, so new code is simpler and easier to review.
- Approximate visual differences from Gatsby are expected and are reviewed against baselines as a composition/brand reference, not as pixel diffs.
- Consolidation may change close shades between adjacent legacy sections. This is an accepted consequence of the owner-approved visual direction.
- Accessibility remains a gate: recipes must provide WCAG-appropriate text/action/focus contrast even when that differs from a legacy pairing.

### Rejected alternatives

**Port every `ada.*` value one-to-one.** Rejected because it preserves duplicate colors, custom scales, and historical implementation details that conflict with the Tailwind-defaults-first decision.

**Use only unmodified Tailwind colors.** Rejected because the Magic palette is a meaningful brand asset and the two pilots would lose their identity.

**Build all brand and campaign recipes in Phase 1.** Rejected because only the Magic family has an immediate consumer; speculative recipes would not be validated by a page.

## D. PageSpec v1 and the pilot section registry

### Context

Phase 1 has no CMS. Content lives in Git as typed PageSpec modules, but the contracts must remain usable when a CMS is attached later. The legacy pilots use numeric component branches (`version={...}` and `part={...}`), React nodes in component data, and styling strings. Those implementation details must not become the new content model.

The route inventory identifies `/magic/` as the Magic membership page and `/magic-kolektyw/` as the Magic marketing-service page. Reading their current composition shows a shared need for heroes, audience/benefit sections, proof, offers, team, FAQ, and CTAs, plus membership learning content and a service consultation embed.

### Decision

PageSpec v1 is a strict, JSON-serializable, provider-neutral Zod contract. TypeScript types are inferred from schemas; there are no parallel handwritten interfaces. Every content module uses `satisfies PageSpecInput` for authoring feedback and is parsed with `PageSpecSchema` before rendering. Unknown keys and unknown section types fail the production build.

The contract skeleton is:

```ts
import { z } from "zod"

export const InlineSchema = z.object({
  text: z.string(),
  marks: z.array(z.enum(["strong", "emphasis"])).default([]),
}).strict()

export const RichTextSchema = z.array(z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("paragraph"),
    content: z.array(InlineSchema).min(1),
  }).strict(),
  z.object({
    kind: z.literal("list"),
    style: z.enum(["bullets", "checks", "steps"]),
    items: z.array(z.array(InlineSchema).min(1)).min(1),
  }).strict(),
]))

export const AssetSchema = z.object({
  src: z.string().min(1),
  alt: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
}).strict()

export const CtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  analyticsKey: z.string().regex(/^[a-z0-9.-]+$/),
  external: z.boolean().default(false),
}).strict()

export const SectionBaseSchema = z.object({
  id: z.string().regex(/^[a-z][a-z0-9-]*$/).optional(),
  tone: z.enum(["default", "subtle", "accent", "contrast"]).default("default"),
}).strict()

export const PageSectionSchema = z.discriminatedUnion("type", [
  StickyCtaSectionSchema,
  HeroSectionSchema,
  ProblemSolutionSectionSchema,
  BenefitGridSectionSchema,
  AudienceSectionSchema,
  LearningPathSectionSchema,
  TeamSectionSchema,
  MediaSectionSchema,
  ProofSectionSchema,
  OfferSectionSchema,
  ConsultationSectionSchema,
  FaqSectionSchema,
  FinalCtaSectionSchema,
])

export const PageSpecSchema = z.object({
  schemaVersion: z.literal(1),
  path: z.string().regex(/^\/(?:[a-z0-9-]+\/)*$/),
  locale: z.literal("pl-PL"),
  brand: z.literal("magic"),
  seo: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    image: AssetSchema.optional(),
    noindex: z.boolean().default(false),
  }).strict(),
  sections: z.array(PageSectionSchema).min(1),
}).strict()

export type PageSpec = z.output<typeof PageSpecSchema>
export type PageSpecInput = z.input<typeof PageSpecSchema>
```

Each imported section schema extends the base shape before applying `.strict()`. Required section-specific fields are deliberately small:

| `type` | Named presentations allowed in v1 | Minimum content fields |
| --- | --- | --- |
| `sticky-cta` | `membership` | label, target CTA |
| `hero` | `membership`, `collective` | heading, body, primary CTA, media |
| `problem-solution` | `comparison`, `situations` | heading, problems, outcomes |
| `benefit-grid` | `value-proposition`, `principles`, `membership-benefits`, `service-benefits` | heading, items with title/body |
| `audience` | `membership-dual`, `collective` | heading, audience groups and criteria |
| `learning-path` | `curriculum`, `monthly-plan` | heading, ordered stages/items |
| `team` | `membership-experts`, `collective-team` | heading, people with role/bio/media |
| `media` | `invitation-video` | heading, provider, provider asset ID, poster, consent category |
| `proof` | `case-studies`, `results`, `testimonials`, `qa-sample`, `customer-story` | heading, typed proof entries and media |
| `offer` | `membership-packages`, `service-packages` | heading, offers, feature lists, optional CTA/price display |
| `consultation` | `appointment` | heading, body, provider, external URL, CTA |
| `faq` | `membership`, `services` | heading, question/answer items |
| `final-cta` | `membership`, `collective` | heading/body as applicable, primary CTA, optional social links |

Presentation names select a renderer-supported composition; they are not route names or visual class bundles. The enums are closed and may grow only with a fixture, schema test, renderer, and documented consumer. Content contains no raw HTML, JSX/React nodes, script tags, executable expressions, Tailwind classes, raw CSS, or numeric variants.

#### Required pilot compositions

The v1 registry is complete only when it can represent these sequences. Repeated proof entries may be grouped into one section where that produces cleaner content data.

**`/magic/`:**

1. `sticky-cta` / `membership` — current `MagicStickyBar`.
2. `hero` / `membership` — current `MagicSaleBanner` hero branch.
3. `proof` / `case-studies` — current `MagicCaseStudies`.
4. `audience` / `membership-dual` — entrepreneur and marketer audiences from `MagicWhy`.
5. `problem-solution` / `situations` — current recognition/problem block.
6. `learning-path` / `curriculum` — current MAGIC learning/features section.
7. `learning-path` / `monthly-plan` — current example month and MAGIC Plan section.
8. `team` / `membership-experts` — current expert-team section.
9. `media` / `invitation-video` — current Vimeo invitation.
10. `proof` / `results` — current member results and opinions.
11. `offer` / `membership-packages` — current package/pricing branch.
12. `proof` / `qa-sample` — current example questions and answers.
13. `proof` / `customer-story` — the two current Magda stories.
14. `faq` / `membership`.
15. `final-cta` / `membership`.

**`/magic-kolektyw/`:**

1. `hero` / `collective` — current `MagicTitle` hero.
2. `benefit-grid` / `value-proposition` — opening service promise.
3. `problem-solution` / `comparison` — current problems versus outcomes.
4. `benefit-grid` / `principles` — why MAGIC works as a partner.
5. `audience` / `collective` — who the service is for.
6. `team` / `collective-team`.
7. `offer` / `service-packages` — Single, Marketing Partner, Growth Intensive, and Newsletter Master.
8. `proof` / `results` — aggregate results in numbers.
9. `benefit-grid` / `service-benefits` — reasons to choose the team.
10. `consultation` / `appointment` — consultation copy and Google Calendar appointment URL.
11. `proof` / `case-studies` — the three campaign case studies and their figures.
12. `proof` / `testimonials` — client opinions.
13. `final-cta` / `collective` — current MAGIC philosophy/contact callout.
14. `faq` / `services`.

#### Module layout

```text
apps/web/src/
├── content/
│   ├── pages/
│   │   ├── magic.ts
│   │   └── magic-kolektyw.ts
│   └── route-manifest.ts
├── page-spec/
│   ├── common.schema.ts
│   ├── page.schema.ts
│   └── parse-page-spec.ts
├── page-builder/
│   ├── PageRenderer.astro
│   ├── registry.ts
│   └── errors.ts
├── sections/
│   ├── StickyCta/
│   ├── Hero/
│   ├── ProblemSolution/
│   ├── BenefitGrid/
│   ├── Audience/
│   ├── LearningPath/
│   ├── Team/
│   ├── Media/
│   ├── Proof/
│   ├── Offer/
│   ├── Consultation/
│   ├── Faq/
│   └── FinalCta/
└── tests/schema/
```

Each section directory owns `<Name>.astro`, `schema.ts`, and `fixtures.ts`. `registry.ts` is an exhaustive map from `PageSection["type"]` to renderer; it contains no fallback renderer. A future CMS loader may transform provider documents into this exact PageSpec shape, but CMS identifiers and provider-native rich text must remain in the adapter boundary.

### Consequences

- Both pilot pages can be authored and validated in Git without encoding legacy numeric branches.
- A CMS can be attached later through a loader/adapter without changing the renderer or section contracts.
- The registry is intentionally closed: adding a section is a code change and review event, not an editor-created arbitrary layout.
- The shared `proof` and `benefit-grid` types avoid one component per legacy branch while named presentations preserve real composition differences.
- Provider embeds are data, not scripts. Their renderers remain responsible for consent and loading behavior when implemented.
- The `brand` enum contains only `magic` in v1. It expands when another brand family enters migration; it is not populated speculatively.

### Rejected alternatives

**Mirror `version={1}`, `version={20}`, or `part={12}` in PageSpec.** Rejected because the numbers carry no domain meaning and would freeze legacy implementation details into future CMS content.

**Use a generic block with `component`, `props`, or `className`.** Rejected because it bypasses validation, permits arbitrary presentation data, and turns the content layer into executable UI configuration.

**Create a unique section type for every current component branch.** Rejected because it would reproduce the fragmented Gatsby component model instead of establishing reusable contracts.

**Shape PageSpec directly like Sanity, Decap, or Storyblok documents.** Rejected because the CMS decision is deferred and the contract must be provider-neutral.

## E. Continuous integration

### Context

The GitHub repository currently has no `.github/workflows` directory. Netlify builds deploys, but a deploy preview alone is not a sufficient merge gate. PLAN.md includes Storybook and automated visual tests in the broad foundation plan, while the owner decision replaces pixel parity with lead visual review and owner acceptance. Phase 1 needs fast contract and build feedback before it needs a component catalog.

### Decision

Add one GitHub Actions workflow during scaffold implementation at `.github/workflows/web.yml`. It runs for pull requests and pushes to the default branch when `apps/web/**` or the workflow itself changes. It uses Node 22, Corepack, the `apps/web` working directory, and the nested immutable Yarn install.

The required jobs may run in one job initially and execute, in order:

1. `yarn install --immutable`;
2. `yarn lint` — ESLint plus `astro check`/TypeScript checking;
3. `yarn test:schema` — Vitest tests for both pilot PageSpecs, every section fixture, registry/schema key equality, rejection of unknown sections, and rejection of invalid asset/CTA data;
4. `yarn build` — production Astro build with PageSpec parsing enabled.

GitHub Actions is the code-quality gate. The second Netlify site remains the deploy-preview environment and runs its own immutable install and build; GitHub Actions does not deploy and receives no Netlify production token. The workflow should be made a required status check before Phase 2 cutover work begins.

Defer Storybook to Phase 2, when the first pilot renderers have stable visual states worth cataloguing. Also defer Playwright screenshot, browser a11y, and cross-app visual suites to Phase 2. Phase 1 schema fixtures are TypeScript data fixtures; they do not require a browser.

### Consequences

- Every change to the new application proves that contracts, types, lint rules, and the production build agree.
- CI remains independent of Netlify credentials and catches failures before or alongside a deploy preview.
- Phase 1 does not pay Storybook configuration and maintenance cost for placeholder or rapidly changing components.
- The absence of browser visual/a11y checks is accepted only for the foundation scaffold. Phase 2 must add visual review, responsive checks, and automated a11y coverage before either pilot can cut over.
- Changes limited to the root Gatsby app continue using the existing validation process; this ADR does not create or alter legacy CI.

### Rejected alternatives

**Use Netlify deploy status as the only check.** Rejected because it does not explicitly gate schema behavior, registry exhaustiveness, or lint/type errors and couples review feedback to hosting.

**Introduce Storybook in Phase 1.** Rejected because there are only contract fixtures and foundation renderers at this point. Storybook becomes valuable once Phase 2 produces reviewed section states.

**Add pixel-diff visual regression now.** Rejected because the approved target is approximate visual continuity, not pixel parity, and no production route is rendered by Astro in Phase 1.

**Create multiple workflow files and a large test matrix.** Rejected because one Node version and one isolated application are sufficient for the initial gate.

## F. Explicit Phase 1 boundaries

### Context

The original plan grouped foundation, CMS, previews, Storybook, and visual automation into Phase 1. Owner decisions now bind Phase 1 to Git-authored content, two named Phase 2 pilots, a simplified visual target, and removal of dead Shopify code. A precise boundary is required to prevent the scaffold from becoming an early route migration or speculative platform build.

### Decision

The following are out of scope for Phase 1:

- moving, refactoring, or otherwise restructuring the root Gatsby application;
- switching `/magic/`, `/magic-kolektyw/`, or any other production path to Astro;
- production proxy rewrites, redirect changes, DNS changes, or removal of the Gatsby Netlify site;
- full pilot copy migration and final visual implementation; Phase 1 may contain valid representative PageSpecs/fixtures for both pilots, while route-complete content and rendering belong to Phase 2;
- pixel parity, pixel-diff approval, or reproducing legacy arbitrary spacing and type scales;
- Sanity, Decap, Storyblok, `apps/studio`, CMS preview, visual editing, or CMS credentials;
- Storybook, Playwright visual regression, browser E2E, and browser a11y automation; these become pilot gates in Phase 2;
- non-Magic brands, non-pilot routes, localization beyond `pl-PL`, and speculative section types;
- forms, analytics, consent management, Hotjar, reCAPTCHA, Google Forms, and global third-party script migration;
- implementation of Vimeo or Google Calendar consent/loading behavior beyond provider-neutral contract fields;
- OTO endpoints, the `ada_oto_session` cookie, Netlify Blobs, Stripe promotion logic, checkout adapters, prices, and commerce behavior;
- shared root packages, a root workspace, or extracting legacy code into `packages/*`;
- broad asset cleanup, image reprocessing, SEO remediation, or legacy content refactors.

The Shopify removal decision remains binding: the new app must not add Shopify dependencies, environment variables, clients, or adapters. Deleting the already-audited dead Shopify code from the legacy project is a separate, independently reviewable cleanup and is not part of the `apps/web` scaffold diff; it may run in parallel without changing this ADR.

Phase 1 is complete when the isolated app installs reproducibly, builds on GitHub Actions and the second Netlify preview site, validates both pilot PageSpecs against the closed registry, fails on an unknown section, and leaves all production routes served by Gatsby.

### Consequences

- The scaffold has a small rollback surface and cannot accidentally change production routing.
- Phase 2 has explicit work remaining: complete pilot content, real renderers, Storybook stories where useful, responsive/visual/a11y verification, integrations, and cutover approval.
- Shopify cannot leak into the new architecture, while its legacy deletion remains easy to review and reverse through Git.
- Deferring CMS avoids designing contracts around an unchosen vendor but makes Git review the only Phase 1 publishing workflow.

### Rejected alternatives

**Include one pilot cutover to prove the foundation.** Rejected because pilot migration is Phase 2 and requires preview visual approval and route-specific gates not established by the scaffold alone.

**Add a CMS now but keep content in Git temporarily.** Rejected because it creates two content paths, contradicts the owner decision, and risks provider-shaped contracts.

**Treat Shopify removal as a reason to build new commerce abstractions.** Rejected because Shopify is dead code, the pilots do not require it, and OTO/checkout migration is reserved for later explicit work.
