# Migration audits

Snapshots of the **Gatsby site** (removed from the repo on 2026-10-06) taken
on 2026-07-11, before the Astro rewrite (they come from the first migration attempt). Use them as a
reference for what the old site did — routes, SEO tags, forms and scripts,
commerce code, assets. They are not updated as the Astro app changes.

| File | What it records |
| --- | --- |
| `route-inventory.md` | every public route and what it rendered |
| `seo-baseline.md` | title / description / OG / canonical per route |
| `forms-scripts-audit.md` | MailerLite / Netlify / Google forms and third-party scripts |
| `commerce-audit.md` | OTO checkout, Stripe, Shopify (dead) code |
| `asset-audit.md` | images and static files |

Since then: `/adseliksir`, `/eliksir`, `/magic-masterclass`, `/magic-nagranie`
and `/magic-wyzwanie` were retired and now redirect to `/magic/`
(`astro.config.mjs`). Google Analytics, Google Tag Manager and Hotjar were
replaced by PostHog (see the README, "Consent and analytics").
