# Adrianna Promis-Urbas — Astro site

The website of Adrianna Promis-Urbas (Polish marketing strategist, Meta ads,
slow marketing), rebuilt on [Astro](https://astro.build). Static pages by
default, a few on-demand API routes (OTO checkout), deployed to Netlify.

```bash
yarn install     # Node >= 22.12, yarn only
yarn dev         # http://localhost:4321 (daemon: `yarn astro dev stop|logs`)
yarn build       # static build into dist/ (+ Netlify function for /api)
yarn check       # astro check (TypeScript + .astro diagnostics)
```

Every UI primitive and shared section is rendered on **`/styleguide`**
(noindex). Open it before building something new — it probably exists.

## Stack

- **Astro 7** — `.astro` components, zero JS by default. Interactivity is small
  vanilla TypeScript in component `<script>` tags, or native HTML where it
  exists (`<details>`, Popover API, `href="#id"`).
- **Tailwind CSS 4** — CSS-first theme in `src/styles/theme.css`; everything
  else is Tailwind's default scale.
- **astro:assets** — images in `src/assets/images`, optimized at build time.
- **Fonts API** — Google fonts self-hosted at build (`astro.config.mjs`).
- **@astrojs/netlify** — `/api/*` routes run as Netlify Functions.

## Folder map

```
src/
  config/site.ts         site metadata, navigation, social links, tracking IDs
  styles/
    global.css           entry: Tailwind + theme + decor + base rules
    theme.css            brand tokens: palette, animations, font families
    decor.css            background artwork utilities (bg-art-*)
  layouts/
    BaseLayout.astro     <html>/<head>, SEO, fonts, cookie consent — every page
    SiteLayout.astro     BaseLayout + header + footer (regular pages)
    LegalLayout.astro    renders a document from the `legal` collection
  components/
    ui/                  primitives without content (Button, Section, Card…)
    site/                global chrome (Header, Footer, Seo, CookieConsent)
    sections/            reusable data-driven sections (FaqSection…)
    <family>/            pieces owned by one page family (see below)
  data/                  page content as typed TS modules (copy, lists, links)
    shared/              content used by several families
  content/legal/         markdown documents (content collection)
  forms/                 MailerLite form exports (raw HTML, imported ?raw)
  lib/                   cn, consent, countdown, content types, oto/ (API)
  pages/                 routes; `pages/api/` = on-demand endpoints
public/                  files served as-is (/assets artwork, /img OG images)
```

Page families (component folder + data folder with the same name):

| Family        | Pages                                                                   |
| ------------- | ----------------------------------------------------------------------- |
| core          | `/`, `/about`, `/contact`, `/thank`, `/404`, `/policy`, `/terms`        |
| `mentoring`   | `/meta-ads-mentoring`, `/ogarnij-swoje-adsy`, `/ogarnij-swoje-adsy-2`    |
| `masterclass` | `/warsztat-lejek`, `/adsy-chill`                                        |
| `magic`       | `/magic`, `/magic-special`, `/kurs-meta-2026`, `/kurs-andromeda-2026`    |
| `kolektyw`    | `/magic-kolektyw`, `/magic-zaproszenie`, `/kolektyw-rozmowa`, `/kolektyw-na-start` |
| `jesien`      | `/jesien`, `/jesien-masterclass` (= `/masterclass-jesien`), `/jesien-nagranie`, `/jesien-nagranie2`, `/magic-jesien` |
| `training`    | `/advantage`, `/andromeda-2026`, `/meta-2026`, `/wyzwanie` (+ `/api/oto/*`) |
| `quiz`        | `/quiz`                                                                 |

## Building pages

A page is a stack of **Sections** inside a layout:

```astro
---
import { FaqSection } from "@/components/sections"
import { Button, Heading, Section } from "@/components/ui"
import { OG_ADA_PURPLE } from "@/config/site"
import BaseLayout from "@/layouts/BaseLayout.astro"
import { faq } from "@/data/magic"
---

<BaseLayout title="Magic" image={OG_ADA_PURPLE}>
  <Section bg="bg-mint bg-art-grid" width="content" pad="md">
    <Heading variant="anton" size="lg" align="center">Dołącz do Magic</Heading>
    <Button href="#pakiety" variant="dark" size="xl">Dołączam</Button>
  </Section>
  <FaqSection items={faq} variant="outlined" bg="bg-lavender" />
</BaseLayout>
```

- `SiteLayout` = page with header + footer. `BaseLayout` = bare landing page.
- SEO props on both layouts: `title`, `description`, `image`, `canonical`,
  `noindex`. Extra `<head>` tags go in `<Fragment slot="head">`.

### Primitives (`@/components/ui`)

| Component        | Use it for                                                                       |
| ---------------- | -------------------------------------------------------------------------------- |
| `Section`        | full-bleed band: `bg`, `width` (container/narrow/content/wide/page/full), `pad`  |
| `Container`      | centered column without a band; `width` uses the same keys as Section            |
| `Heading`        | `variant` anton/sans/black + responsive `size` xs…display                        |
| `MarkerHeading`  | classic heading over a highlighter stripe                                        |
| `GhostHeading`   | classic title overlapping a large faded line; `size` sm/md/lg                    |
| `Button`         | `<a>` with `href`, else `<button>`; variants soft/outline/dark/black/pill/offer/pink/bare |
| `Card`           | rounded panel; `tone` paper/green/pink/white/lavender + `pad`; radius/shadow via `class` |
| `IconList`       | emoji / glyph / image-led list; columns, `inline`, `stacked`                     |
| `Accordion`      | `<details>` disclosure (no JS); `group` makes items exclusive                    |
| `Carousel`       | scroll-snap slider; each child = slide; `perView`, `autoplay`, arrows            |
| `Countdown`      | fixed `target` or per-visitor `evergreen`; drives `[data-countdown-scope]`       |
| `TileCountdown`  | Countdown preset: "DNI : GODZ : MIN : SEK" tiles; `tone` = tile classes          |
| `VideoEmbed`     | Vimeo/YouTube facade (poster → iframe on click)                                  |
| `TypingText`     | typewriter text: loop / once / words                                             |
| `Reveal`         | fade/slide-in on scroll; `from` bottom/left/right                                |
| `Marquee`        | endless ticker                                                                   |
| `MailerLiteForm` | MailerLite export from `src/forms/*.html?raw`; `submit="fetch"` strips its scripts |
| `Decor`          | decorative artwork image, positioned inside its section                          |
| `CircleArrow`    | round "scroll down" marker / link; `circleClass="fill-*"`, `arrowClass="stroke-*"` |
| `StarBadge`      | star sticker label                                                               |
| `Prose`          | typography for rendered Markdown                                                 |

### Sections (`@/components/sections`)

`FaqSection`, `ImageCarousel` (testimonial screenshots), `VideoGrid`,
`CaseStudyVideos` (Magic member videos), `PromoCard`, `FlowerFeature`.
They take content via props (shapes in `src/lib/content.ts`) and expose
`class` / `bg` for styling.

### Family components

Each family folder holds that family's sections plus a few thin "brand"
wrappers over the primitives (e.g. `MagicCta`, `JesienButton`,
`KolektywTitle`). Reuse a wrapper inside its family; when a pattern is
needed by a second family, move it to `sections/` (or `ui/`) instead of
copying it.

## Styling rules

- **Tailwind defaults only** for spacing, sizes, font sizes, radii, shadows,
  line heights and breakpoints: `p-8`, `max-w-4xl`, `text-5xl`,
  `rounded-3xl`, `shadow-xl`, `md:` / `lg:`. Round to the nearest step — not
  being pixel-perfect is fine. Avoid `px-[37px]`-style values; keep arbitrary
  values for things the scale can't express (a clip-path, an aspect ratio).
- **Mobile-first:** base classes are mobile, add `md:` / `lg:` upwards. No
  custom breakpoints (`max-[700px]:`).
- **Colors** come from the brand palette in `theme.css`, used like any
  Tailwind color, opacity included (`bg-mint`, `text-navy`, `border-tangerine/40`):
  - core: `navy` (text), `lavender`, `cream`, `mint`, `tangerine`, `lemon`
  - pinks: `rose`, `blush`, `petal`, `petal-light`, `bubblegum`, `orchid`, `magenta`
  - purples: `plum`, `amethyst`, `iris`, `lilac`, `periwinkle`, `ultraviolet`
  - warm: `sunflower`, `butter`, `marigold`, `apricot`, `peach`
  - campaign: `jesien-*` (ink, purple, pink, orange, lavender, blush + `-soft`)
  - greys and white/black: Tailwind's own (`neutral-100`, `white`, `black`)
- **Gradients:** native utilities, `bg-linear-to-b from-lavender to-white`.
- **Motion:** `animate-settle` (one gentle bounce for headings), `animate-spin-slow`,
  `animate-marquee`, `animate-wiggle`… — see `theme.css`; delays with
  `animation-delay-200`. Everything respects `prefers-reduced-motion`.
- **Artwork backgrounds:** `bg-art-*` utilities from `decor.css`
  (`bg-art-grid`, `bg-art-checker`, `bg-art-wave`…), combinable with a color.
- **Merging:** components accept `class` and merge it with `cn()` so callers
  can override defaults (later classes win).
- Never build class names dynamically (`text-${size}`) — Tailwind only sees
  complete strings. Use a lookup object of full class names instead.

## Other conventions

- **Content lives in `src/data/`** when it is a list or repeated structure
  (FAQ items, packages, testimonials, agenda). Rich text in data is a trusted
  HTML string rendered with `set:html`. One-off copy stays in the component.
- **No "version" switches.** Instead of `<Banner version={7} />`, make a
  section with props, or a distinct named component.
- **Images:** import from `@/assets/images/...` and render with `<Image>` /
  `<Picture>` from `astro:assets`, with meaningful Polish `alt` (or `alt=""`
  for decoration). Above-the-fold hero: `loading="eager"`.
- **Links:** plain `<a href>`; in-page jumps use `href="#id"` (smooth scroll
  is global). External links that should open a tab: `newTab`.
- **Scripts:** one `<script>` per component, initializing every instance via
  `data-*` attributes. Progressive: the page must read fine without JS.
- **Countdown/offer states:** wrap the page part in `data-countdown-scope`
  and mark alternatives with `data-when="active" | "expired"` — CSS swaps
  them, no extra script.
- **Copy:** Polish, unchanged from the previous site unless asked otherwise.
- **Analytics/GDPR:** trackers load only via `lib/consent.ts` after consent
  (cookie names kept from the Gatsby site so existing choices stay valid).
  Never add tracking tags directly to pages (Hotjar on /adsy-chill is the one
  historical exception, in its `head` slot).
- **Forms:** MailerLite exports run their own scripts (redirect to /thank on
  success); use `submit="fetch"` when a page has several forms or shows one
  conditionally (no duplicate MailerLite scripts/pings). The contact page uses Netlify Forms; set `PUBLIC_SITE_RECAPTCHA_KEY`
  (or Netlify's `SITE_RECAPTCHA_KEY`) for a custom reCAPTCHA, otherwise
  Netlify's built-in one is used.

## Deployment

`netlify.toml` builds with `yarn build` and publishes `dist/` — point the
Netlify site's base directory at `astro/`. Environment variables for
`/api/oto/*` (Stripe, Netlify Blobs, HMAC secrets) are listed in
`.env.example`; they are read at request time, never inlined.
