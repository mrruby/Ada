# Forms and scripts audit

This inventory is based on the repository source. The raw HTML rule is in `gatsby-node.js` and uses `html-loader` for `*.html`; the entries below are the raw form files that are imported by source code.

## Forms inventory

### Netlify-native form

`src/components/ContactForm/index.tsx` is rendered on `src/pages/contact.tsx`. It is a `POST` form with `data-netlify="true"`, `data-netlify-recaptcha="true"`, `name="contact-page"`, and `data-netlify-honeypot="bot-field"`. The submitted fields are:

- required `name`, `surname`, `email`, and `message`;
- required `consent`, a checkbox whose text consents to personal-data processing and possible commercial information and identifies Slow Marketing Adrianna Promis-Urbas as administrator;
- hidden `bot-field` honeypot;
- hidden `form-name=contact-page`;
- hidden `form-source`, populated from the component's `source` prop (default `default`).

Spam protection is Netlify's reCAPTCHA attribute plus the honeypot. The component also renders `react-google-recaptcha` with `process.env.GATSBY_SITE_RECAPTCHA_KEY`. The code does not show a custom destination URL; the Netlify form name is the visible routing identifier.

### Other React forms

`src/components/MagicCollectiveForm/index.tsx` is rendered inside `MagicCollectiveBanner` on the pages that use that component: `kolektyw-rozmowa.tsx`, `adsy-chill.tsx`, `magic-zaproszenie.tsx`, and `magic-kolektyw.tsx`. It submits with `fetch` (`POST`, `no-cors`, URL-encoded body) to Google Forms:
`https://docs.google.com/forms/d/e/1FAIpQLScWWFTLKbI4z7gIHU7-6gDcBcKLmlDP1QgB3EfODdomkHmpYw/formResponse`.

It collects name, email, phone, preferred form of address, Meta Ads experience, self-setup experience, results, marketing budget, Instagram nickname, and email-list information. It appends `formSource=magic-zaproszenie` and a `segmentHint` (`MAGIC` or `KOLEKTYW`) to the request. There is no consent checkbox or consent text in this component; the code does not show a separate privacy notice or spam protection.

`src/components/PasswordProtectedContent/index.tsx` contains a local password gate, not a data-submission form. It has a password input and compares the value in the browser with the component `password` prop; it has no external action, consent, or third-party provider.

### Imported raw MailerLite HTML forms

All entries below use MailerLite's `ml-block-form`, collect required `fields[name]` and `fields[email]`, include a required-looking consent checkbox, and include hidden `ml-submit=1` and `anticsrf=true`. Their markup visibly links to `https://adrianna.com.pl/policy/` (and, in `form-marketerki.html`, a Google Drive newsletter regulation document). The visible provider/destination is the `assets.mailerlite.com/jsonp/549725/forms/.../subscribe` action. Unless noted, the file loads `https://groot.mailerlite.com/js/w/webforms.min.js` and also contains inline MailerLite submit/initialization code. Each file also has an external `@import` for MailerLite-hosted fonts at `https://assets.mlcdn.com/fonts.css?...`. The consent checkbox is part of each form's submission UI; it is not the site's cookie-consent mechanism.

| Raw file | Action / MailerLite form id | Importing page(s) and component | Visible form purpose / consent implication |
|---|---|---|---|
| `form-dzielna-poszukiwaczka.html` | `.../161459831904929241/subscribe` | `quiz.tsx` via `QuizResult` | Results for the “adsowa osobowość” quiz; newsletter and email-message consent. |
| `form-freelance-ninja.html` | `.../161459988755121525/subscribe` | `quiz.tsx` via `QuizResult` | Same quiz-result flow; newsletter and email-message consent. |
| `form-zosia-samosia.html` | `.../161458129238755248/subscribe` | `quiz.tsx` via `QuizResult` | Same quiz-result flow; newsletter and email-message consent. |
| `form-przedsiebiorczynie.html` | `.../173871364470473878/subscribe` | `meta-2026.tsx` | Free content/newsletter; educational and commercial-message consent, privacy policy and newsletter-regulation links. |
| `form-sowa.html` | `.../173871364470473878/subscribe` | `eliksir.tsx` | Free content/newsletter; educational and commercial-message consent, privacy policy and newsletter-regulation links. It uses the same action id as `form-przedsiebiorczynie.html`. |
| `form-marketerki.html` | `.../182916625001875132/subscribe` | `andromeda-2026.tsx`, `advantage.tsx` | Free content/newsletter; consent to processing and educational/commercial messages, with a Google Drive newsletter-regulation link and privacy-policy link. |
| `form-nagranie-masterclassu.html` | `.../163366276750641099/subscribe` | `magic-masterclass.tsx` via `MagicWebinar1` and `MagicWebinarFormBottom` | Access to “Jesienny re-start” masterclass recording; newsletter/email-message consent. Both components intercept submission and redirect on success. |
| `magic-webinar.html` | `.../148596241898407535/subscribe` | Imported by `MagicWebinar1` and `MagicWebinar12`; no page directly imports either component in the current source | “Od pasji do zysku” webinar; newsletter/email-message consent. `MagicWebinar1` uses it for its non-pink/default branch; `MagicWebinar12` selects it for version 1. |
| `magic-form-jesien.html` | `.../163366276750641099/subscribe` | Imported by `MagicWebinar12`; no page use of that component found | “Jesienny re-start” masterclass; newsletter/email-message consent. Same action id as `form-nagranie-masterclassu.html`. |
| `form-magic-zainteresowanych.html` | `.../149751473310270644/subscribe` | Imported by `MagicWebinar12`; no page use of that component found | MAGIC interest list; newsletter/email-message consent. |
| `magic-zainteresowani-new.html` | `.../149751473310270644/subscribe` | `kurs-meta-2026.tsx` and `kurs-andromeda-2026.tsx` via `KursPage` → `MagicJoinClosed` | MAGIC waiting/interest list; newsletter/email-message consent. `MagicJoinClosed` intercepts submission and redirects on success. |
| `magic-form-wide.html` | `.../141238205381870880/subscribe` | `magic-kolektyw.tsx` via `MagicTitle` | “3 zmiany w reklamach...” webinar; newsletter/email-message consent. |
| `magic-form.html` | `.../141238205381870880/subscribe` | Imported by `MagicLastSection`; no page import of that component found | Same “3 zmiany...” webinar; newsletter/email-message consent. |
| `form-wyzwanie.html` | `.../130106545761420554/subscribe` | Imported by `PuzzleForm`; no page import of that component found | “Ułóż puzzle swojego biznesu z adsami” email challenge; newsletter/email-message consent. |
| `form-wakacje.html` | `.../159261688056513764/subscribe` | Imported by `WakacjeForm`; no page import of that component found | “5 reklam...” training access; newsletter/email-message consent. |
| `form.html` | `.../123779883849484140/subscribe` | No import found | “Niech kampanie pracują na moje wakacje!” workshop; newsletter/email-message consent. |
| `magic-lista.html` | `.../149751473310270644/subscribe` | No import found | MAGIC waiting list; newsletter/email-message consent. This file is present but is not an `html-loader` import in current source. |
| `magic-zainteresowani.html` | `.../149751473310270644/subscribe` | No import found | MAGIC interest list; newsletter/email-message consent. This file is present but is not an `html-loader` import in current source. |
| `meta-ads-zainteresowani.html` | `.../150120029135832900/subscribe` | `adsy-chill.tsx`, `ogarnij-swoje-adsy.tsx`, `warsztat-lejek.tsx`, and `meta-ads-mentoring.tsx` via `MasterclassAgenda` | Meta Ads Masters Mentoring waiting list; newsletter/email-message consent. |
| `ogarnij-swoje-adsy-zainteresowani.html` | `.../150120348256306285/subscribe` | The same four pages via `MasterclassAgenda` | “Ogarnij swoje adsy” waiting list; newsletter/email-message consent. |
| `form-meta-ads-masters.html` | `.../132639183321695945/subscribe` | `ogarnij-swoje-adsy-2.tsx` via `MentoringForm` version 1 | Mentoring waiting list; newsletter/email-message consent. |
| `form-ogarnij-swoje-adsy.html` | `.../133986692870702762/subscribe` | `ogarnij-swoje-adsy-2.tsx` via `MentoringForm` version 2 | “Ogarnij swoje adsy” waiting list; newsletter/email-message consent. |

The imported raw forms generally render their markup with `dangerouslySetInnerHTML`. `MagicWebinar1`, `MagicWebinar12`, `MagicWebinarFormBottom`, `MagicJoinClosed`, and `QuizResult` remove the form's `target` and submit it with JavaScript; the other raw-form consumers leave the MailerLite form's declared `target`/native behavior in place. The forms' MailerLite scripts are not visibly gated by the cookie banner; the consent shown in the form is mailing/data-processing consent, not analytics consent.

The exact MailerLite JavaScript URL is `https://groot.mailerlite.com/js/w/webforms.min.js?v95037e5bac78f29ed026832ca21a7c7b` in `form-marketerki.html`; `...?v2d8fb22bb5b3677f161552cd9e774127` in the imported `form-meta-ads-masters.html`, `form-ogarnij-swoje-adsy.html`, and `form-wyzwanie.html`; and `...?v176e10baa5e7ed80d35ae235be3d5024` in all other imported raw forms listed above. The exact `@import` query string differs by file and is visible in each raw file.

## Third-party scripts, trackers, and embeds

### Analytics, advertising, and behavior tracking

- `gatsby-plugin-gdpr-cookies` in `gatsby-config.js` configures Google Analytics 4 with tracking ID `G-8LX78J4XMN`, cookie `gatsby-gdpr-google-analytics`, and `anonymize: true`; Google Tag Manager with ID `GTM-TC7CLB2`, cookie `gatsby-gdpr-google-tagmanager`, and data layer `dataLayer`; and Meta Pixel with ID `187660469934129` and cookie `gatsby-gdpr-facebook-pixel`. The configured environments are both `production` and `development`.
- `src/components/Cookies/index.tsx` exposes these as Statistics, Preferences, and Marketing choices. It writes the three cookie names and calls `initializeAndTrack(location)` after accepting all or any selected category. The plugin is therefore the code-visible consent gate for these three integrations. The banner initializes its preferences to `true` while no preference cookie exists, but does not call `initializeAndTrack` until the user saves a choice.
- `src/pages/adsy-chill.tsx` passes a raw script string through the `script` prop of `src/components/seo.tsx`. It creates Hotjar with `hjid: 5046108`, `hjsv: 6`, and loads `https://static.hotjar.com/c/hotjar-5046108.js?sv=6`. This script is inserted whenever that page's `Head` renders; it is not connected in code to the cookie banner or any consent value.
- `src/components/seo.tsx` accepts `script?: string` and renders it as an inline `<script>` when supplied. The only page passing this prop found in the source is `adsy-chill.tsx` (the Hotjar script above).

### reCAPTCHA and form-provider scripts

- `ContactForm` renders `react-google-recaptcha` and Netlify's `data-netlify-recaptcha="true"`; the site key comes from `GATSBY_SITE_RECAPTCHA_KEY`. The component does not implement a cookie-consent gate around reCAPTCHA.
- Every imported MailerLite HTML form includes a `groot.mailerlite.com/js/w/webforms.min.js` external script (with versioned query strings; older/newer forms use the exact URLs shown in their markup), plus inline MailerLite code. The raw markup also includes Google reCAPTCHA-related CSS/classes (`.g-recaptcha`), but no explicit reCAPTCHA external script URL is present in these files. Whether the MailerLite script loads another resource is not determinable from this repository.

### Video and other external embeds

- `src/components/VimeoFacade/index.tsx` uses thumbnail URLs from `vumbnail.com` and, after the user clicks the play facade (or when `eager` is true), creates a Vimeo iframe from `https://player.vimeo.com/video/{videoId}...`. It also adds preconnect links to `player.vimeo.com` and `i.vimeocdn.com` on pointer-enter/focus. The normal facade delays the Vimeo iframe until interaction; there is no cookie-consent check. `MagicVideo`, `MagicBanner5`, and `MagicCaseStudies` use this component. `kurs-andromeda-2026.tsx` also passes a Vimeo player URL into `KursPage`, whose iframe is loaded directly when that video is rendered, without a consent check.
- `src/components/ResponsiveYouTubeEmbed.tsx` renders mobile and desktop iframes using `https://www.youtube.com/embed/{videoId}`. `MagicWebinarHero` uses it. `src/components/OpinionVideos/index.tsx` renders YouTube embed iframes for its opinion videos, and `src/components/MagicTitle/index.tsx` has a direct YouTube iframe (`https://www.youtube.com/embed/sP9q-F6PolE?...`). These iframes load as part of rendering and are not cookie-consent-gated.
- `src/components/MentoringKoalendar/index.tsx` embeds `https://koalendar.com/e/meta-ads-master?embed=true`; `src/components/NextSteps/index.tsx` embeds a supplied Koalendar URL with `?embed=true`; and `MasterclassAgenda`/related components pass Koalendar URLs to calendar widgets. These are external iframes, not consent-gated in the inspected code.
- `src/components/MagicCollectiveBanner/index.tsx` embeds a Google Calendar appointments iframe at `calendar.google.com`. It is rendered directly and has no consent gate.
- `gatsby-ssr.js` preloads and dynamically loads Google Fonts stylesheets from `fonts.googleapis.com` / `fonts.gstatic.com`. This is a font resource loader, not an identified tracker, and it is not cookie-consent-gated.

## Uncertainties

- The repository shows the configured IDs, cookie names, and JavaScript gates, but it does not show the generated production HTML or the runtime implementation inside `gatsby-plugin-gdpr-cookies`; the exact network timing and behavior of the plugin-managed integrations cannot be established from source alone.
- The effective MailerLite processing, cookies, downstream lists, and any resources fetched by `webforms.min.js` are not fully visible in the repository. The action URLs identify MailerLite and form IDs, but not the corresponding list names or retention behavior.
- It is not determinable from source whether Netlify's reCAPTCHA, `react-google-recaptcha`, or MailerLite's form validation is configured with consent behavior outside this codebase.
- The audit identifies external iframes and scripts present in source, but cannot determine all cookies or tracking performed by Vimeo, YouTube, Koalendar, Google Calendar, Google Fonts, Google Forms, or Hotjar at runtime.
- `form.html`, `magic-lista.html`, and `magic-zainteresowani.html` exist under `src/values/forms`, but no importing source was found for them; they are listed above for completeness and explicitly marked as unused rather than treated as active forms.
- Several imported-form components have no page import found in the current source (`MagicWebinar12`, `MagicLastSection`, `PuzzleForm`, and `WakacjeForm`). Their raw forms are therefore inventory evidence, not evidence that those forms are currently reachable in a built route.
- The source does not identify the final human recipient, CRM list, or operational owner for Netlify submissions, Google Forms submissions, or each MailerLite form beyond the visible provider/action URL.
