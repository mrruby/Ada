# ADR 002: Pilot forms, consent, analytics, and embeds

- Status: Proposed
- Date: 2026-07-11
- Scope: Phase 2 cutover readiness for `/magic/` and `/magic-kolektyw/`
- Decision owners: project owner and migration lead
- Supersedes: none; extends the Phase 1 boundaries in ADR 001

## Decision summary

Before either pilot route moves from Gatsby to Astro, `apps/web` will add one temporary, sandboxed MailerLite legacy-form integration; a small consent manager; a pilot-only integration registry for GA4, GTM, Meta Pixel, MailerLite, and Vimeo; and a consent-aware Vimeo facade. The MailerLite form will keep form ID `141238205381870880` and its current subscribe action, and cutover is blocked until a controlled submission is confirmed in the same MailerLite audience and automation as Gatsby. Consent is default-denied, uses the `necessary`, `functional`, `analytics`, and `marketing` categories, updates Google Consent Mode v2 before loading permitted scripts, and conservatively migrates and mirrors the existing `gatsby-gdpr-*` cookies. Google Calendar remains an external link, while the Vimeo iframe is created only after functional consent; the fact that Gatsby did not gate third-party iframes is not a privacy behavior that Astro must reproduce.

## A. `/magic-kolektyw/` MailerLite lead form

### Context

The legacy form is the raw `src/values/forms/magic-form-wide.html` document imported by `MagicTitle`. It posts `fields[name]`, `fields[email]`, `ml-submit=1`, and `anticsrf=true` to:

```text
https://assets.mailerlite.com/jsonp/549725/forms/141238205381870880/subscribe
```

It also includes the newsletter consent checkbox and text, a success callback that redirects to `/thank/`, MailerLite's `webforms.min.js`, and a request to the form-specific `takel` endpoint. The repository proves the account and form IDs but cannot prove the human-readable MailerLite audience, downstream automation, retention settings, or current provider-side behavior.

ADR 001 intentionally excluded forms from Phase 1 and prohibits raw HTML, scripts, or provider implementation details in PageSpec content. PLAN.md section 13 permits a temporary `LegacyFormEmbed` when its dependencies, owner, tests, and retirement are explicit. A typed `FormSpec` adapter that posts to MailerLite's generated JSONP URL would depend on an undocumented browser endpoint and could silently lose validation, anti-abuse behavior, consent evidence, or list routing.

### Decision

Use a temporary `LegacyFormEmbed`; do not implement the general `FormSpec` adapter for this cutover.

The implementation boundary in `apps/web` is:

```text
src/integrations/forms/
├── FormSlot.astro
├── LegacyFormEmbed.astro
└── legacy-form-registry.ts
public/legacy-forms/
└── magic-kolektyw-webinar.html
```

`legacy-form-registry.ts` is a closed, typed map. Its sole pilot entry is `magic-kolektyw-webinar` and records:

- the exact subscribe URL and MailerLite form ID;
- business owner: Adrianna Promis-Urbas;
- technical owner: migration lead;
- consent category: `functional` for loading the provider document and script;
- allowed form, script, style, and connection origins;
- the copied source file and a checksum or review date;
- success destination `/thank/`;
- retirement deadline: 2026-10-31;
- the manual submission-test procedure and last verified date.

`magic-kolektyw-webinar.html` is a reviewed snapshot, not content data. It retains the action URL, field names, hidden values, visible mailing consent, MailerLite script, and provider initialization needed for parity. It must include a document-specific Content Security Policy that allows only the recorded MailerLite origins. Provider-hosted fonts should be removed or replaced with the application's fonts unless a visual review proves them necessary. Any difference from the Gatsby source, including the success bridge described below, must be documented beside the registry entry.

`LegacyFormEmbed.astro` accepts only the registry key; it cannot accept arbitrary HTML, a URL, or a script string. It initially renders an accessible placeholder. Once `functional` consent is granted, it inserts an iframe pointing to the static snapshot with:

```text
sandbox="allow-forms allow-scripts allow-popups"
```

The sandbox deliberately omits `allow-same-origin` and top-navigation permissions. The snapshot's success callback sends a narrowly shaped `postMessage` to its parent. `LegacyFormEmbed.astro` validates both `event.source` against that iframe's `contentWindow` and the message shape before navigating the top page to `/thank/`. The parent must not accept a generic redirect URL from the message. The iframe needs an explicit title and a tested responsive height; its isolated styles must not leak into the page.

PageSpec contains only the stable reference `leadFormId: "magic-kolektyw-webinar"`, not provider URLs or HTML. Add this field to the `collective` hero contract in `src/sections/Hero/schema.ts`; `src/sections/Hero/Hero.astro` passes it to `FormSlot.astro`. The registry can later change that ID from a legacy embed to a typed adapter without changing page content.

Cookie consent and newsletter/data-processing consent remain separate. Granting `functional` cookies only permits the form integration to load; it does not check the newsletter consent box or authorize a submission. The checkbox remains unchecked and required. Refusing `functional` consent leaves the placeholder and a button that opens cookie settings; it must not load MailerLite in the background.

Cutover requires a test address controlled by the project owner. The owner must confirm in MailerLite that the submission lands in the same audience/group and starts the same automation as a submission from Gatsby. A successful HTTP response or matching form ID alone is insufficient evidence. The test must also cover required fields, unchecked mailing consent, duplicate email behavior, error presentation, success redirect, keyboard operation, and mobile layout. Test data must be removed if operational policy requires it.

### Consequences

- The pilot preserves the provider-generated contract with less routing risk than reimplementing it against an undocumented endpoint.
- Vendor HTML, CSS, and JavaScript are isolated from the Astro document and cannot become a general page-authoring mechanism.
- The form remains unavailable until functional consent, which is a deliberate privacy improvement over eager loading.
- CSP and sandbox behavior may expose assumptions in MailerLite's script. Any required sandbox relaxation needs a follow-up ADR or explicit lead approval; it is not an implementation convenience.
- The embed is temporary debt with an owner and deadline. By 2026-10-31 it should be replaced with a typed form backed by a supported MailerLite API or official embed contract, while preserving the audience and automation.

### Rejected alternatives

**Post a new typed `FormSpec` directly to the current JSONP URL.** Rejected for the pilot because the URL is generated embed infrastructure rather than a documented application API. Matching the URL does not prove matching validation, anti-abuse behavior, consent evidence, or downstream automation.

**Inject `magic-form-wide.html` into the Astro page with `set:html`.** Rejected because it gives third-party styles and scripts the page's origin and DOM, conflicts with ADR 001's content boundary, and makes CSP and cleanup harder.

**Remove the form because the current collective page has a consultation CTA.** Rejected because the form is an explicit cutover-parity requirement and its destination is conversion-critical.

**Build the complete cross-provider form framework now.** Rejected because only one pilot form needs migration. The provider-neutral `leadFormId` and `FormSlot` boundary are sufficient for later replacement.

## B. Consent and analytics parity

### Context

Gatsby configures GA4 `G-8LX78J4XMN`, GTM `GTM-TC7CLB2`, and Meta Pixel `187660469934129` through `gatsby-plugin-gdpr-cookies`. The current banner writes:

```text
gatsby-gdpr-google-analytics
gatsby-gdpr-google-tagmanager
gatsby-gdpr-facebook-pixel
```

The plugin is the source-visible gate, but its exact runtime network order and the contents of the remote GTM container are not in the repository. The old banner preselects categories visually and calls `initializeAndTrack` only after saving a choice. ADR 001 deferred consent and analytics because no production route was cut over; the two pilots cannot cut over with no equivalent gate or with Gatsby and Astro both firing for one page view.

### Decision

Add a small, framework-light consent layer mounted once by a new `src/layouts/SiteLayout.astro`, which replaces the duplicated document shell in `src/pages/[...slug].astro`. Use these modules:

```text
src/integrations/consent/
├── ConsentBootstrap.astro
├── ConsentManager.astro
├── consent-state.ts
└── consent-types.ts
src/integrations/scripts/
├── load-pilot-integrations.ts
└── pilot-registry.ts
tests/integrations/
├── consent-state.test.ts
└── pilot-integrations.spec.ts
```

The categories and pilot assignments are:

| Category | Behavior | Pilot integrations |
| --- | --- | --- |
| `necessary` | Always on; no toggle | consent state and security only |
| `functional` | Off until granted | MailerLite legacy form, Vimeo player |
| `analytics` | Off until granted | GA4 and GTM |
| `marketing` | Off until granted | Meta Pixel |

The visible Polish labels are `Niezbędne`, `Funkcjonalne`, `Analityczne`, and `Marketingowe`. Optional toggles start off, and `necessary` is visibly fixed on. The UI provides equally visible accept-all, reject-optional, and save-selection actions, plus a persistent `Ustawienia cookies` control in the page footer or fixed utility area. It is keyboard accessible, restores focus when closed, and links to `/policy/`. Final wording, category classification, retention, and legal basis require owner/legal approval before cutover.

`ConsentBootstrap.astro` runs in the document head before any integration loader. It creates only the local `dataLayer`/`gtag` command queue and immediately establishes Google Consent Mode v2 defaults:

```text
analytics_storage: denied
ad_storage: denied
ad_user_data: denied
ad_personalization: denied
```

This bootstrap performs no network request. It reads stored consent synchronously, issues the corresponding `consent update`, and only then asks the registry loader to insert permitted scripts. Analytics grants `analytics_storage`; marketing grants `ad_storage`, `ad_user_data`, and `ad_personalization`. Functional consent does not grant any Google advertising signal.

The canonical cookie is `ada-consent-v1`, scoped to `/`, with `SameSite=Lax`, `Secure` in production, a one-year maximum age, a policy version, timestamp, and explicit booleans for all categories. It contains no identifier. To preserve choices and make a route-level rollback safe, the manager implements this migration:

1. If `ada-consent-v1` exists and validates, use it.
2. If it is absent and all three legacy cookies are absent, keep every optional category denied and show the banner.
3. If it is absent and legacy cookies exist, migrate conservatively: `analytics` is granted only when both Google legacy cookies equal `true`; `marketing` follows the Facebook cookie; `functional` remains denied because no legacy equivalent exists. Missing, malformed, or contradictory values never become a grant.
4. Whenever a user saves a new choice, mirror `analytics` to both Google legacy cookies and `marketing` to the Facebook legacy cookie, using `true` or `false`. This lets Gatsby honor the most recent choice after a route rollback. Functional consent exists only in the canonical cookie.

`pilot-registry.ts` is an exhaustive map, not a general public API. Each entry records category, owner, environments, source/connect/frame allowlists, retention note, disable procedure, and loader. It contains only:

- `ga4` — `G-8LX78J4XMN`, category `analytics`;
- `gtm` — `GTM-TC7CLB2`, category `analytics`;
- `metaPixel` — `187660469934129`, category `marketing`;
- `mailerliteForm` — the closed form registry bridge, category `functional`;
- `vimeo` — iframe resource integration, category `functional`.

The loader is idempotent, marks every inserted resource, and cannot execute a script passed through PageSpec or page props. GA4 and Meta page-view events fire once per full Astro navigation. GTM uses the existing `dataLayer` name. Before marketing grant, initialize the local Meta queue in revoked-consent mode without fetching `fbevents.js`; after grant, load, grant, initialize, and emit one `PageView`.

The repository cannot show whether GTM also emits GA4 or Meta events. Therefore preview network and Tag Assistant verification is a cutover blocker: one browser navigation must produce no duplicate GA4 `page_view`, GTM bootstrap, or Meta `PageView`. The direct GA4 and Meta registry entries are the intended pilot event owners. If the live GTM container duplicates either event, its pilot-route triggers must be excluded or the registry ownership must be changed and documented before cutover; shipping duplicate measurement is not allowed.

Changing preferences dispatches one `ada:consent-changed` event. Newly granted integrations may load immediately. On withdrawal, call the provider's consent-revocation command where available, persist and mirror the denied state, then reload the page so disabled scripts and iframes are absent. Code must not claim to undo requests already sent before withdrawal. Known first-party-readable provider cookies may be removed only from an explicit, tested list; no wildcard cookie deletion is allowed.

`public/_headers` will carry only the CSP origins needed by the two pilots and the integrations above. Preview tests must record actual requests and tighten the allowlist before cutover. The Gatsby proxy must route one request to one renderer; the Astro page cannot include Gatsby's plugin output, and Gatsby must not wrap or hydrate the proxied response.

### Consequences

- Existing visitors are not silently upgraded to broader consent, and their choices remain usable after a per-route rollback.
- No GA, GTM, Meta, Vimeo, or MailerLite network request occurs before its category is granted.
- Consent Mode v2 state is set before Google scripts, while the stricter project rule still prevents consentless Google network pings.
- The registry is deliberately small and can be replaced or expanded when more routes migrate.
- Withdrawal is reliable for future page activity through a reload, but cannot retract already transmitted events.
- Remote GTM configuration remains an operational dependency and must be observed rather than inferred from source.

### Rejected alternatives

**Reuse only the three boolean Gatsby cookies as the new consent model.** Rejected because they lack policy version, timestamp, a Vimeo/MailerLite functional category, and a safe way to evolve the policy.

**Discard the Gatsby cookies and start every visitor from a blank state.** Rejected because it loses valid prior choices, creates banner churn across proxied routes, and weakens rollback behavior.

**Map either one of the Google legacy cookies to an analytics grant.** Rejected because it could expand a partial or contradictory legacy choice. Requiring both is conservative.

**Load Google tags in denied mode before the user chooses.** Rejected for these pilots even though Consent Mode can support cookieless pings; PLAN.md requires allowed integrations to load only after consent.

**Use a large consent-management or tag-management abstraction immediately.** Rejected because the pilots need five known entries, not the full PLAN.md registry or every legacy integration.

## C. Google Calendar and Vimeo embeds

### Context

The Astro `Consultation` renderer already links to the Google Calendar appointment page instead of embedding `calendar.google.com`. The current `Media` renderer links to Vimeo, while the intended `/magic/` invitation-video experience is a facade for Vimeo asset `1117395484`. Gatsby's normal `VimeoFacade` delays the player iframe until click but fetches third-party thumbnails and preconnects without cookie-consent checks. The audit also found several legacy Google Calendar, Vimeo, YouTube, and Koalendar iframes that load without consent.

Literal parity with an ungated third-party iframe would conflict with the default-denied consent decision. Visual parity does not require identical pre-consent network behavior.

### Decision

Keep Google Calendar as a normal external link. `src/sections/Consultation/Consultation.astro` continues to render the appointment CTA from the typed `externalUrl`; it must not render a Google iframe, preconnect, or provider script. Navigation occurs only after an explicit click, so there is no iframe resource to consent-gate on the Astro page. CTA analytics fires only when analytics consent is present.

Implement `src/integrations/video/VimeoFacade.astro` and make `src/sections/Media/Media.astro` use it. The facade renders a local, dimensioned poster from PageSpec and a native play button. Before functional consent it must not request `vumbnail.com`, `vimeo.com`, `player.vimeo.com`, or `i.vimeocdn.com`, and it must not preconnect to them. The poster must therefore be copied into the Astro asset pipeline rather than fetched from a thumbnail service at runtime.

When functional consent is already granted, activating play creates an iframe for video `1117395484` with an explicit title, constrained `allow` permissions, `allowfullscreen`, lazy loading, and Vimeo's do-not-track parameter where supported. When functional consent is absent, activating play opens `ConsentManager` at the functional category and explains why playback is unavailable. A separate `Obejrzyj w Vimeo` link may remain available as explicit top-level navigation.

Update `src/sections/Media/schema.ts` to use the shared consent-category type and change `src/content/pages/magic.ts` from the legacy `marketing` value to `functional`. `statistics` is not a category in the new model. The registry owns the provider URL template and permissions; PageSpec continues to carry only provider, asset ID, poster, and semantic category.

Iframe gating is required for the Vimeo player before cutover even though Gatsby did not perform it. No Google Calendar iframe is introduced, so no Calendar iframe gate is needed. This decision applies to the two Astro pilots only; it does not silently authorize a repository-wide retrofit of legacy embeds.

### Consequences

- The consultation remains fast and has no third-party request before the visitor chooses to leave the site.
- `/magic/` gets inline playback after consent without loading a React island or Vimeo resources for visitors who never play the video.
- The locally hosted poster removes the current pre-consent thumbnail leak and avoids layout shift.
- Visitors who reject functional consent need one extra choice before inline playback, but can still navigate directly to Vimeo.

### Rejected alternatives

**Embed Google Calendar for closer Gatsby parity.** Rejected because the typed external CTA completes the same user task with less code, less privacy surface, and better performance.

**Load Vimeo on the first play click without checking stored consent.** Rejected because a click is not the same as a persisted category choice under the selected consent model.

**Classify Vimeo as marketing.** Rejected for the pilots because the player supplies requested page functionality. Marketing or analytics performed by provider configuration remains disabled through DNT and the absence of analytics/marketing consent; legal review may require a stricter classification before cutover.

**Keep only the current link-out renderer.** Rejected because the invitation video is an explicit pilot experience and the facade supplies it without eager third-party loading.

## D. Boundaries

### Context

The purpose of this ADR is to close the integration gaps that ADR 001 deferred and that now block the two owner-selected pilot routes. It is not permission to advance unrelated migration phases.

### Decision

The following remain explicitly out of scope:

- OTO endpoints, `src/api/oto`, `src/server/oto`, `ada_oto_session`, Stripe, checkout, and commerce adapters;
- any production route other than `/magic/` and `/magic-kolektyw/`;
- Hotjar, YouTube, Koalendar, reCAPTCHA, Google Forms, other MailerLite forms, and the complete PLAN.md script registry;
- a generic provider-complete `FormSpec` framework;
- CMS, Studio, Sanity, or changes to the Git-authored PageSpec content model beyond the pilot integration reference;
- changes to Gatsby's consent component or plugin, except the production rewrite needed for each approved cutover;
- broad legal-policy rewriting. Technical implementation does not replace owner/legal approval.

### Consequences

- The work remains independently reviewable and rollbackable with the two pilot rewrites.
- Similar legacy integrations are not automatically approved for later routes; each must enter the registry with an owner and tests.
- OTO and CMS contracts remain untouched as required by PLAN.md and ADR 001.

### Rejected alternatives

**Generalize every integration before the pilots.** Rejected because it expands risk without improving either pilot's cutover evidence.

**Retrofit the Gatsby application at the same time.** Rejected because it couples rollback paths and makes it harder to prove which renderer emitted a request.

## Phased delivery checklist

### Phase 2A — implementation and preview prerequisites

- [ ] Add `SiteLayout.astro`, the consent modules, the closed pilot registry, and the three-cookie migration/mirroring tests.
- [ ] Add the accessible Polish consent UI and persistent `Ustawienia cookies` control; obtain owner/legal approval for wording, categories, retention, and `/policy/` alignment.
- [ ] Add the sandboxed `magic-kolektyw-webinar.html` snapshot, registry metadata, per-document CSP, and `FormSlot`/hero integration without putting HTML or provider URLs in PageSpec.
- [ ] Add the local-poster `VimeoFacade.astro`; set the invitation video category to `functional`; retain Google Calendar as link-out only.
- [ ] Add the minimal `public/_headers` CSP for the pilot origins.
- [ ] Add unit tests for malformed, absent, canonical, partial-legacy, granted, denied, and withdrawn consent states.
- [ ] Add Playwright network tests proving that Google, Meta, MailerLite, and Vimeo resources are absent before consent and appear only for the matching category.

### Phase 2B — blockers for each production cutover

- [ ] On the deploy preview, submit an owner-controlled address through both Gatsby and Astro and confirm the same MailerLite audience/group, automation, consent record, duplicate behavior, and `/thank/` outcome.
- [ ] Verify GA4 `G-8LX78J4XMN`, GTM `GTM-TC7CLB2`, and Meta Pixel `187660469934129` with browser network tools and provider assistants: no pre-consent request, correct Consent Mode v2 updates, one page view per provider, no duplicate GA/Meta from GTM, and no Gatsby tracker in the Astro response.
- [ ] Verify accept-all, reject-optional, granular save, persisted revisit, legacy-cookie migration, fixed settings access, withdrawal/reload, and rollback from Astro to Gatsby.
- [ ] Verify Vimeo has no third-party request before functional consent and plays by keyboard and pointer after consent; verify the direct Vimeo link; verify Google Calendar never renders an iframe.
- [ ] Pass the remaining PLAN.md section 19 gates for the route: unchanged URL; approved canonical, title, description, and OG image; complete copy; correct CTA destinations; no console or hydration errors; approved review at 375, 768, 1024, and 1440 px; zero critical/serious axe violations; keyboard support; laboratory CWV budgets; and no new crawl 404s.
- [ ] Add one Netlify proxy rule per approved route, test the matching rollback rule, and monitor conversion and integration errors after release. `/magic/` and `/magic-kolektyw/` must be independently reversible.
- [ ] Freeze the Gatsby copy for each route as it cuts over so there is one source of truth.

### Follow-up work that does not block the pilot cutover

- [ ] Replace `LegacyFormEmbed` with a typed adapter using a supported MailerLite API or official contract by 2026-10-31, then delete the static snapshot and its CSP exceptions.
- [ ] Expand the consent and integration registry only as later routes introduce verified providers.
- [ ] Revisit a consent-management platform if policy complexity, regional behavior, or provider count outgrows the small local manager.
- [ ] Add broader analytics event taxonomy and reporting after page-view and CTA parity are stable.
- [ ] Migrate other videos, calendars, forms, and scripts route by route under separate reviewed scopes.
