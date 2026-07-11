# Commerce audit

This audit is based only on the repository contents. Line numbers refer to the current working tree at the time of writing.

## Shopify

### Clients and configuration

- `package.json:9` declares `@shopify/admin-api-client` (`^1.0.8`); the lockfile resolves it to `1.1.2` (`yarn.lock:2997-3004`).
- `package.json:10` declares `@shopify/storefront-api-client` (`^1.0.7`); the lockfile resolves it to `1.0.10` (`yarn.lock:3009-3015`).
- `.env.example:1` declares `GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN`.
- `.env.example:2` declares `SHOPIFY_PRIVATE_STOREFRONT_ACCESS_TOKEN`.
- `.env.example:3` declares `GATSBY_SHOPIFY_STORE_DOMAIN`.
- `src/values/const.ts:1` defines `SHOPIFY_API_VERSION = "2024-07"`.
- `src/utils/shopify.ts:1-8` contains only `generateRandomDiscountCode`, a local random-string helper. It does not instantiate or call a Shopify client.

### Imports/calls and verdict

There are no Shopify imports or calls from any page, component, or hook. The `SHOPIFY_API_VERSION` constant is also not imported or used elsewhere, and no Shopify client construction or Storefront/Admin API request exists in the source searched. The code-level verdict is therefore: **no active Shopify storefront flow is evidenced by this repository**. The repository has client dependencies, environment-variable names, and a version constant, but no connected catalog, cart, checkout, or storefront request flow.

## Stripe

Stripe is used by the OTO promotion-code flow, not as the checkout destination:

- `src/server/oto/discount.ts:1` imports `Stripe` from `stripe`.
- `src/server/oto/discount.ts:11-18` lazily creates one process-local Stripe client using `STRIPE_SECRET_KEY`.
- `src/server/oto/discount.ts:40-83` implements `ensurePromotionCode`. It reuses a session's stored promotion code only while its stored expiry is in the future (`:24-30`); otherwise it creates a Stripe promotion code with the configured coupon, `expires_at` equal to the OTO session end, `max_redemptions: 1`, and session metadata (`:48-67`). The generated code format is `OTO-WYZ-` plus random hex for the configured campaign (`:21-22`, `src/server/oto/config.ts:14-22`).
- `src/api/oto/checkout.ts:3-6` imports the checkout URL builder, regular checkout configuration, and `ensurePromotionCode`; `:65-95` invokes the promotion-code flow and redirects to the external checkout with `promo=<code>`.
- `src/server/oto/checkout.ts:4-10` adds the promotion code as the `promo` query parameter to the configured EasyTools/EasyCart-like URL.
- `src/server/oto/config.ts:34-35` reads `STRIPE_SECRET_KEY` and `STRIPE_WYZWANIE_OTO_COUPON_ID`; `.env.example:6-7` declares both variables.

### Idempotency and concurrency as implemented

- There is **no Stripe idempotency key** passed to `stripe.promotionCodes.create` (`src/server/oto/discount.ts:54-67`).
- The code retries up to three attempts only when Stripe reports a code collision (`:32-38`, `:50-78`). Each retry generates another random code; this handles a code-name collision, not duplicate requests for one OTO session.
- Netlify Blobs reads use strong consistency (`src/server/oto/sessions.ts:85-97`), session creation uses `onlyIfNew` (`:118-151`), and promotion persistence uses an ETag conditional write via `onlyIfMatch` (`:100-115`).
- In `/api/oto/checkout`, the Stripe side effect happens before the conditional session write (`src/api/oto/checkout.ts:65-72`). If two requests race, both can observe a session without a promotion code and both can create distinct Stripe promotion codes; the losing write is reread and, when a stored code exists, used for the redirect (`:70-85`). The loser’s already-created Stripe code is not deleted or otherwise reconciled. If the reread does not find a stored code, the handler can still redirect using its locally created code (`:87-95`).
- Consequently, the current implementation has conditional session-write protection and reuse after a successful write, but it does not provide end-to-end idempotency for concurrent Stripe promotion-code creation.

## EasyTools / external checkout

The following hardcoded checkout URLs or checkout paths occur in components or hooks. Repeated occurrences are listed by file and line.

| File and line | Hardcoded URL/path |
|---|---|
| `src/hooks/useOtoTimer.ts:140` | `/api/oto/checkout?campaign=${CAMPAIGN_ID}` |
| `src/components/MagicCommunityOpinions/index.tsx:77` | `https://cart.easy.tools/checkout/81632369/magic-subskrypcja` |
| `src/components/MasterclassInfo1/index.tsx:54`; `src/components/MasterclassInfo2/index.tsx:42`; `src/components/MasterclassInfo3/index.tsx:46`; `src/components/MasterclassDate/index.tsx:50`; `src/components/MasterclassTime1/index.tsx:31`; `src/components/MasterclassFAQ/index.tsx:630` | `https://app.easycart.pl/checkout/62332176/masterclass-kevin-sam-w-menedzerze-reklam-zaplanuj-swoj-lejek-reklamowy` |
| `src/components/MagicBanner/index.tsx:53,76,98` | `https://slowmarketing.mailingr.co/c/magic-pakiet-basic-rXx5?priceId=price_UikNAGssSyiK3qw7UfE6vSMi` |
| `src/components/BuyChillButton/index.tsx:6`; `src/components/MasterclassAgenda/index.tsx:1137,1269,1374` | `https://slowmarketing.mailingr.co/c/adsyandchill-2025-6nPc?priceId=price_SITaPYXmbvodQAaQDDTjXIkQ` |
| `src/components/MasterclassAgenda/index.tsx:317,350` | `https://slowmarketing.mailingr.co/c/masterclass:-reklamy-ig-ktore-buduja-zaangazowana-spolecznosc-ubRU` |
| `src/components/MasterclassAgenda/index.tsx:327,360` | `https://slowmarketing.mailingr.co/c/masterclass:-lista-mailowa-ktora-przyciaga-klientow-1dPN` |
| `src/components/MasterclassAgenda/index.tsx:337,370` | `https://slowmarketing.mailingr.co/c/masterclass:-reklamy-ktore-sprzedaja-na-automacie-Dvcn` |
| `src/components/MasterclassAgenda/index.tsx:984` | `https://www.mailingr.co/c/meta-ads-masters-basic-YeW7` |
| `src/components/MasterclassAgenda/index.tsx:1015` | `https://www.mailingr.co/c/meta-ads-masters-mentoring-pro-N9Nw` |
| `src/components/MagicSpecialJoin/index.tsx:144`; `src/components/MagicSaleBanner/index.tsx:154,202,275,349` | `https://slowmarketing.zanfia.co/c/magic-pakiet-basic-rXx5` (the `MagicSpecialJoin` URL additionally has a `variant` query parameter) |
| `src/components/MagicSpecialJoin/index.tsx:144` | `https://slowmarketing.zanfia.co/c/sesame/magic-pakiet-basic-rXx5?variant=6582ca8f-6ee8-4e7a-b989-420e44303bab` |

The OTO server configuration also contains a hardcoded fallback URL outside components/hooks: `src/server/oto/config.ts:25` has `https://easl.ink/v62RG`; `:30-33` use it when the two OTO checkout environment variables are absent. The corresponding configurable variables are `OTO_WYZWANIE_EASY_CHECKOUT_URL` and `OTO_WYZWANIE_REGULAR_CHECKOUT_URL` (`src/server/oto/config.ts:18-20,30-33`; `.env.example:4-5`).

For completeness, the same `cart.easy.tools` URL is also hardcoded directly in pages at `src/pages/magic-special.tsx:46` and `src/pages/magic-wyzwanie.tsx:102`; those page occurrences are outside the component/hook inventory above.

### Hardcoded monetary values

The following monetary literals are hardcoded in page/component/hook code. Some are offer prices and some are displayed examples, budgets, or performance figures; the source does not provide a separate machine-readable classification.

- OTO offer: `src/hooks/useOtoTimer.ts:137-139` — `67 zł`, `119 zł`, `119 zł`; `src/pages/wyzwanie.tsx:605-606` — `67 zł`, `119 zł`; `src/pages/wyzwanie.tsx:738` — `KUPUJĘ ZA 67 ZŁ`; `src/components/WyzwanieStickyCountdown/index.tsx:27,48` — `67 zł`.
- Package helper: `src/helpers/Package/index.tsx:21` — crossed-out `349 zł`.
- Magic package: `src/components/MagicBanner/index.tsx:40,48,63,71,86` — `291 zł`, `1746 zł`, `302 zł`, `907 zł`, `333 zł`; `src/components/MagicSpecialJoin/index.tsx:103,119` — `333zł`; `src/components/MagicSaleBanner/index.tsx:116` — `557 zł`.
- Masterclass: `src/components/MasterclassAgenda/index.tsx:316,326,336` — `297 zł`; `:627` — `699 zł`; `:1145,1147,1368,1371` — `547 zł`, `699 zł`, `547 zł`, `729 zł`; `src/components/MasterclassDate/index.tsx:63` — `79 złotych`.
- Mastermind/other offer copy: `src/components/MastermindInfo3/index.tsx:107,184-185` — `1000 zł`, `2550 zł netto`, `2 x 1350 zł netto`; `src/components/MastermindSteps/index.tsx:281,312,371,402,432,488,515,543,576,633,661,689,720,748` — `197 zł`, `247 zł`, `97 zł`, `97 zł`, `397 zł`, `197 zł`, `97 zł`, `97 zł`, `397 zł`, `197 zł`, `97 zł`, `97 zł`, `179 zł`, `397 zł`.
- Other displayed monetary values in components include `src/components/MasterclassAgenda/index.tsx:142,846,850,889,893,926,930,979,1010` — `100 zł`, `3321 zł`, `4 x 850 zł`, `3690 zł`, `4 x 920 zł`, `4920 zł`, `4 x 1230 zł`, `760 zł x 6`, `980 zł x 6`; `src/components/MasterclassesInfo/index.tsx:43,45,47,97,111,114,171,175,225,227,229,280,294,297,355,359` — `6892,61 zł`, `28 x 2499 zł`, `69 972 zł`, `4810,98 zł`, `540 zł`, `10800 zł`, `203,72 zł`, `3900,80 zł` and repeated values; `src/components/MasterclassesInfo2/index.tsx:84,213,256,266,399,436` — `5781,47 zł`, `69 972 zł`, `6892,61 zł`, `28 x 2499 zł`, `55 858 zł`, `172, około 120 000 złotych`.
- Additional displayed figures: `src/components/MagicCollectiveBanner/index.tsx:533,541,549,648,664,673,767,783,1380,1491,1499,1507,1613,1629` — `6892,61 zł`, `28 x 2499 zł`, `69 972 zł`, `4810,98 zł`, `4,95 zł`, `10800 zł`, `203,72 zł`, `3900,80 zł`, `5781,47 zł`, repeated package figures, `55 858 zł`, and `172, około 120 000 złotych`; `src/components/MagicBanner4/index.tsx:12,30,48,100,151,160` — `69 972 zł`, `6 892,61 zł`, `69 972 zł`, `0,43 zł`, `249,84 zł`, `12 632 zł`; `src/components/MagicResultsTable/index.tsx:14-28` — per-result amounts and `9500 zł`, `17000 zł`, `54000 zł`.
- Other offer-like literals: `src/components/MagicWebinarFormBottom/index.tsx:66`, `src/components/MagicWebinar1/index.tsx:216`, `src/components/MagicWebinar8/index.tsx:16`, `src/components/MagicWebinar11/index.tsx:22`, `src/components/MentoringBanner/index.tsx:73`, `src/components/WebinarBanner/index.tsx:87`, `src/components/TrainingLandingPage/index.tsx:170`, `src/pages/eliksir.tsx:52,71` — `0 zł`/`0zł`; `src/components/MastermindInfo2/index.tsx:59`, `src/components/MasterclassFAQ/index.tsx:252,344,494`, `src/pages/wyzwanie.tsx:370,478,484,493,499-500` — budget, result, or explanatory amounts.

## Uncertainties

- A repository search shows no Shopify client import, request, or storefront UI integration, but source alone cannot prove whether Shopify is used by an external system, deployment configuration not committed here, or an unsearched CMS/runtime.
- `.env.example` lists variable names but contains no values, so the active production URLs, Stripe account/mode, coupon identity, and whether the OTO environment variables override the fallback cannot be established from this repository.
- The external `/c/...` destinations are identified as checkout-like from their URL shape and call sites; the repository does not document the provider contract for every MailingR or Zanfia URL.
- The concurrency risk described above follows directly from operation order and the absence of a Stripe idempotency key. The repository contains no test or incident evidence confirming that duplicate promotion codes have occurred in production.
- The monetary inventory intentionally includes displayed budgets, examples, and performance figures because code does not consistently distinguish them from offer prices. No claim is made that every such figure is a payable price.
