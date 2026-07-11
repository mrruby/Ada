# Raport decyzyjny: migracja projektu Ada z Gatsby do architektury 2026

**Stan researchu: 11 lipca 2026.**
**Zakres:** analiza całego eksportu repozytorium, research oficjalnej dokumentacji oraz plan migracji. Bez zmian w kodzie.
**Model wykonania:** sekcja 23 — plan realizowany w modelu lead/implementerzy: Claude Code (Fable) jako lead techniczny, modele Codex (Sol / Terra / Luna) jako implementerzy, Sol dodatkowo jako druga opinia. Zob. też [AGENTS.md](./AGENTS.md).

## Werdykt

**Rekomenduję migrację do:**

> **Astro 7 + React 19 islands + TypeScript strict + Tailwind CSS 4 z warstwą design tokens + Sanity Studio/Content Lake + Netlify.**

Architektura powinna być **static-first**, z uruchamianiem JavaScriptu wyłącznie dla interaktywnych fragmentów: formularzy, countdownów, carouselów, consent managera, video facades i klienta OTO. Endpointy OTO należy zachować pod niezmienionymi URL-ami jako cienkie adaptery do framework-agnostic domeny serwerowej.

Migrację należy przeprowadzać **route-by-route przez Netlify rewrites**, nie jako jednorazowy rewrite. Najlepszym pilotem jest **`/meta-2026/`**, a następnym sprawdzianem reużywalności — `/andromeda-2026/`.

Nie rekomenduję Astro dlatego, że Gatsby jest „martwy”. Gatsby 5.16 otrzymał w 2026 roku obsługę React 19 i Node.js 24, a 5.16.1 widnieje jako najnowsze wydanie. Problemem projektu jest przede wszystkim model kodu: treść i layout zaszyte w TSX, numeryczne warianty, duże komponenty kampanijne, brak kontraktów stron i brak testów. ([GitHub][1])

---

## 1. Fakty wynikające z repozytorium

### 1.1. Obecny stos i topologia

Eksport przedstawia aplikację opartą na Gatsby 5, React 19, TypeScript 6, Tailwind CSS 4, Yarn 1 oraz adapterze Netlify. W zależnościach są również Netlify Blobs, klienci Shopify i Stripe. Skrypt `test` nie uruchamia żadnych testów, a kończy się błędem „Write tests!”.

Repozytorium zawiera 29 route files: strony evergreen, landing pages, strony kursowe, strony prawne, liczne kampanie Magic, mentoring, masterclass, challenge i strony OTO.

Architekturę można skrótowo przedstawić tak:

```text
Gatsby route
  └── Layout
      ├── Cookies
      ├── Header / Footer
      ├── global LayoutElements
      └── page sections
          └── version / part branches
              ├── inline Polish copy
              ├── Tailwind class strings
              └── Gatsby StaticImage
```

Endpointy OTO są wydzielone do `src/api/oto/{start,status,checkout}.ts`, a logika pomocnicza do `src/server/oto`.

### 1.2. Strony i sposób ich składania

Większość starszych oraz rozbudowanych stron to ręcznie zapisane kompozycje TSX. Przykładowo `meta-ads-mentoring.tsx`:

- przekazuje do `Layout` wiele flag dekoracji,
- składa kilkanaście sekcji,
- wybiera ich treści i wygląd przez `version={...}`,
- steruje tłem przez stringi klas przekazywane do `MaxWithBgColorContainer`.

Ta sama tendencja występuje w rodzinach Magic, Masterclass i Mentoring. Reprezentatywny `MentoringBanner` zawiera dziesięć niezależnych gałęzi `version`, które nie reprezentują wariantów jednego komponentu, lecz wiele odmiennych semantycznie sekcji: nagłówek, CTA, opis, przycisk sprzedażowy i śródtytuły.

Największe ryzyko utrzymaniowe nie wynika z liczby komponentów, ale z tego, że:

- `version={7}` nie wyjaśnia intencji;
- treść, styl, układ i zachowanie są połączone;
- zmiana jednego wariantu wymaga otwarcia dużego komponentu używanego przez inne kampanie;
- agent AI nie potrafi bezpiecznie ustalić, czy ma dodać `version={19}`, edytować istniejącą gałąź, czy utworzyć kolejny komponent.

### 1.3. Dobry zalążek architektury docelowej

Nowsze landing pages są wyraźnie lepiej rozdzielone. `meta-2026.tsx`, `andromeda-2026.tsx` i `advantage.tsx` są cienkimi route’ami, które przekazują dane z `src/values/*Landing.tsx` do współdzielonego `TrainingLandingPage`. Nadal występują tam React nodes i importowane raw HTML forms, ale kierunek — oddzielenie danych strony od renderera — jest właściwy.

To powinien być punkt startowy migracji, a nie próba mechanicznego przenoszenia najbardziej złożonych komponentów.

### 1.4. Layout i dekoracje

`Layout` ma bardzo dużą liczbę boolean props dla dekoracji: kwiatów, fal, słońc, liści, okularów, flamingów i innych elementów. Następnie scala je z ogromnym `defaultProps` i przekazuje do `LayoutElements`.

`LayoutElements` pozycjonuje dekoracje globalnie względem całej strony, m.in. za pomocą wartości `top-[6300px]`, `top-[10000px]`, `top-[12000px]` i `top-[14400px]`. Oznacza to, że zmiana wysokości wcześniejszej sekcji może przesunąć lub zepsuć dekoracje wiele ekranów niżej.

`MaxWithBgColorContainer` jest w praktyce wrapperem `w-screen` oraz `.container`, ale jego API pozwala przekazywać dowolne klasy jako `bgColor` i `extraStyle`.

**Wniosek:** dekoracje muszą zostać przypisane do sekcji lub kampanijnego art-directed module. Nie powinny być pozycjonowane na podstawie globalnej wysokości dokumentu.

### 1.5. Style i systemy wizualne

Tailwind config zawiera rozbudowaną, płaską przestrzeń kolorów `ada.*`, obejmującą kolory bazowej marki oraz palety Magic, Sowa i innych kampanii.

Poza Tailwindem istnieje duży `global.css` z:

- kampanijnymi obrazami tła;
- pseudo-elementami;
- globalnymi animacjami;
- ręcznie skalowanymi posterami;
- wyjątkami dla konkretnych stron;
- obejściami z-index i `pointer-events`;
- wysokościami zależnymi od viewportu i tysięcy pikseli.

Marka nie ma jednego systemu wizualnego. W praktyce funkcjonują co najmniej:

- bazowa marka Ada;
- Magic;
- Sowa;
- mentoring/mastermind;
- masterclass;
- kampanie szkoleniowe 2026;
- wyzwanie;
- jednorazowe kampanie o własnej art direction.

**To nie jest błąd.** Błędem byłoby spłaszczenie ich do jednego zestawu komponentów o identycznym wyglądzie. Współdzielone powinny być semantyka, dostępność i kontrakty; skórki oraz kompozycje artystyczne mogą pozostać odrębne.

### 1.6. Treść i CMS

Treści występują w czterech formach:

1. inline JSX wewnątrz komponentów;
2. tablice i React nodes w `src/values/*.tsx`;
3. Markdown dla polityki i regulaminu;
4. surowe pliki HTML formularzy ładowane przez `html-loader`.

Repozytorium zawiera kilkanaście osobnych plików formularzy HTML.

`AGENTS.md` deklaruje „CMS: Netlify CMS”, ale w widocznej strukturze nie ma konfiguracji `admin/config.yml` ani potwierdzonego przepływu redakcyjnego. Sam eksport oznacza ten punkt jako niewyjaśniony.

**Wniosek:** przed migracją trzeba potwierdzić, czy CMS rzeczywiście działa, kto z niego korzysta i które treści są tam edytowane. Nie należy zakładać, że deklaracja w `AGENTS.md` odpowiada aktualnej produkcji.

### 1.7. Obrazy i assety

Repozytorium ma rozbudowany katalog `src/images` oraz drugi katalog `static/assets`. Obejmuje fotografie, screenshoty opinii, tła, grafiki kampanijne, dekoracyjne SVG, plakaty, strzałki, fale i elementy w wielu generacjach.

Problemy:

- brak jednego manifestu assetów;
- podobne zasoby istnieją pod różnymi nazwami i w dwóch katalogach;
- część obrazów jest treścią, część dekoracją, część dowodem społecznym;
- informacje o prawach, autorze, focal point i przeznaczeniu nie są jawne;
- `alt=""` bywa używany zarówno dla dekoracji, jak i elementów mogących nieść znaczenie.

### 1.8. SEO, skrypty i analityka

Komponent `SEO` pobiera site metadata przez Gatsby GraphQL, dodaje podstawowe Open Graph i Twitter metadata oraz przyjmuje opcjonalny surowy `script`.

Na stronie `adsy-chill.tsx` ten mechanizm służy do bezpośredniego wstrzyknięcia skryptu Hotjar.

Gatsby config zawiera identyfikatory:

- Google Analytics;
- Google Tag Manager;
- Facebook Pixel;

oraz nazwy cookies kontrolowanych przez `gatsby-plugin-gdpr-cookies`.

Ryzyka:

- skrypty zewnętrzne nie mają centralnego rejestru;
- trudno zweryfikować, które strony uruchamiają które trackery;
- łatwo podwójnie uruchomić GA/GTM;
- surowy `script` w SEO jest zbyt szerokim kontraktem;
- consent i analityka są silnie związane z pluginem Gatsby.

### 1.9. Formularze

`ContactForm` jest natywnym Netlify Form z:

- `data-netlify`;
- Netlify reCAPTCHA;
- honeypotem;
- ukrytym `form-name`;
- poprawnie powiązanymi labels i inputs.

Jednocześnie lead-generation pages importują gotowe bloki HTML od zewnętrznych dostawców. To utrudnia:

- testy dostępności;
- kontrolę consent;
- typowanie pól;
- przypisanie eventów analitycznych;
- spójne błędy i komunikaty sukcesu;
- bezpieczne działanie agentów AI.

### 1.10. Mechanizm OTO

Obecny przepływ jest sensownie wydzielony:

1. klient wywołuje `/api/oto/start?campaign=wyzwanie`;
2. endpoint odczytuje signed cookie, opcjonalny token OTO albo tworzy anonimowy subject hash;
3. sesja jest zapisywana w Netlify Blobs;
4. klient otrzymuje `active`, `endsAt` i `secondsLeft`;
5. `/api/oto/checkout` tworzy lub ponownie wykorzystuje Stripe Promotion Code;
6. kod jest dodawany jako parametr `promo` do zewnętrznego checkoutu;
7. użytkownik zostaje przekierowany do EasyTools/EasyCart-like checkout.

Sesja ma `campaignId`, `subjectHash`, daty rozpoczęcia i końca, status oraz opcjonalne dane promotion code. Netlify Blobs jest używany z strong consistency i conditional writes.

Cookie:

- nazywa się `ada_oto_session`;
- jest signed;
- jest `HttpOnly`;
- ma `SameSite=Lax`;
- w produkcji ma `Secure`;
- jest pamiętane przez 180 dni.

Klient nadal zawiera na sztywno ceny `67 zł`, `119 zł` i ścieżkę checkoutu.

**Wniosek:** domena OTO jest znacznie lepiej wydzielona niż warstwa prezentacji. Nie należy jej przepisywać przy pierwszych migracjach stron.

### 1.11. Shopify i Stripe

Repozytorium zawiera Shopify Storefront/Admin clients i zmienne środowiskowe, lecz widoczny kod nie potwierdza aktywnego kompletnego storefront flow. Stała `SHOPIFY_API_VERSION` ma wartość `2024-07`.

Stripe jest aktywnie używany przez OTO do tworzenia jednorazowych, wygasających promotion codes.

### 1.12. Testy i reguły agentów

Nie ma działającego suite testowego. `yarn test` celowo kończy się statusem 1.

`AGENTS.md` jest wartościowym początkiem: ustala polski język treści, Figma-first, mobile-first, zachowanie GDPR, Yarn-only, build/lint i obowiązek raportowania walidacji.

Jednocześnie obecne reguły są dostosowane do utrzymywania starego Gatsby, a nie do bezpiecznego generowania nowych stron przez agentów.

---

## 2. Fakty z oficjalnych źródeł — status technologii w 2026 roku

### Gatsby

Gatsby nie jest formalnie porzucony. W styczniu 2026 Gatsby 5.16 dodał oficjalne wsparcie React 19 i Node.js 24; dokumentacja wydania ostrzega jedynie, że community plugins mogą pozostawać w tyle. ([GitHub][1])

**Implikacja:** można bezpiecznie prowadzić migrację etapami. Nie ma potrzeby awaryjnego rewrite’u.

### Astro

Astro na Netlify domyślnie wysyła zero client-side JavaScript, obsługuje islands architecture, React components, server islands, image optimization oraz on-demand rendering przez Netlify Functions. Oficjalny Netlify adapter jest utrzymywany przez zespół Astro. ([Netlify Docs][2])

Astro 7 ukazało się 22 czerwca 2026. Wprowadziło m.in. nowy compiler i MDX pipeline w Rust, stabilne route caching oraz usprawnienia dla agentów kodujących, takie jak structured JSON logs i możliwość uruchamiania development servera w tle. ([Astro][3])

Astro Content Collections mogą ładować dane lokalne, z CMS, API lub źródeł live i zapewniają automatyczne typowanie TypeScript. Walidacja opiera się na Zod i strict TypeScript. ([Astro Documentation][4])

### Next.js

W aktualnym App Routerze pages i layouts są domyślnie Server Components, a Client Components służą interaktywności i browser APIs. Trzeba jednak uważać na granicę `"use client"`: wszystkie bezpośrednio importowane moduły trafiają wtedy do client bundle. ([Next.js][5])

Next.js ma pełnoprawne Route Handlers oparte na standardowych `Request` i `Response`, więc OTO byłoby możliwe do zaimplementowania. ([Next.js][6])

Czysty static export nie obsłuży jednak request-dependent route handlers, cookies, rewrites, redirects, Draft Mode ani standardowego image optimization. Ada musiałaby więc działać jako runtime deployment, nie jako całkowicie statyczny export. ([Next.js][7])

### React Router Framework Mode

React Router 7+ może działać jako full-stack framework i oferuje nested routes, parallel data loading oraz server/browser runtime. Generuje też route-specific TypeScript types. Netlify ma dla niego własny Vite plugin i może wdrażać aplikację do Serverless lub Edge Functions. ([React Router][8])

### CMS

Sanity TypeGen generuje TypeScript definitions z Sanity schemas i GROQ queries, co ułatwia wykrywanie nullability, autocomplete oraz refaktoryzację. ([Sanity.io][9])

Sanity Visual Editing ma oficjalny quickstart dla Astro i wspiera live preview, click-to-edit oraz drag-and-drop page building. ([Sanity.io][10])

Storyblok oferuje rozbudowany WYSIWYG Visual Editor, w którym edytor może klikać elementy w preview i obserwować aktualizacje w czasie rzeczywistym. ([Storyblok][11])

Decap CMS pozostaje rozwiązaniem Git-based: editorial workflow przekłada draft, review i publish na branches oraz pull requests. ([Decap CMS][12])

### Tailwind CSS 4

Tailwind 4 traktuje `@theme` variables jako API design tokens, generuje z nich utilities oraz zwykłe CSS variables. Theme files można współdzielić między aplikacjami w monorepo. ([Tailwind CSS][13])

### Netlify

Netlify `200` rewrites zachowują URL użytkownika i mogą proxy’ować do innego serwisu lub innego Netlify site. Dokumentacja wskazuje transitioning legacy content jako jeden z zastosowań. ([Netlify Docs][14])

Netlify Forms wykrywa formularze, analizując HTML podczas deployu. Dla formularzy renderowanych wyłącznie przez JavaScript lub SSR wymagany jest odpowiadający im statyczny/ukryty HTML form definition. ([Netlify Docs][15])

### Shopify, Stripe i Netlify Blobs

Shopify publikuje API versions kwartalnie. Aktualną wersją Storefront API jest `2026-07`, a oficjalny Storefront API Client jest rekomendowanym lekkim klientem dla custom storefrontów poza Hydrogen. ([Shopify][16])

Repozytoryjne `2024-07` wymaga więc pilnego audytu. Shopify może automatycznie „fall forward” do nowszej wersji, co grozi niezauważoną zmianą zachowania po wycofaniu jawnie wybranej wersji. ([Shopify][16])

Netlify Blobs działa zgodnie z zasadą „last write wins” i nie zapewnia wbudowanego concurrency control. ([Netlify Docs][17])

Stripe zaleca idempotency keys przy tworzeniu lub aktualizowaniu obiektów, aby retry lub równoległe wywołania nie utworzyły dwóch obiektów. ([Stripe Docs][18])

### Consent, wydajność i dostępność

Google Consent Mode wymaga ustawienia default consent state, a następnie aktualizacji po interakcji użytkownika. Consent Mode v2 obejmuje również `ad_user_data` i `ad_personalization`. ([Google for Developers][19])

Aktualne cele Core Web Vitals to:

- LCP ≤ 2,5 s;
- INP ≤ 200 ms;
- CLS ≤ 0,1;

mierzone na 75. percentylu, osobno dla mobile i desktop. ([web.dev][20])

WCAG 2.2 jest W3C Recommendation, a W3C zaleca korzystanie z najnowszej wersji WCAG przy nowych i aktualizowanych politykach dostępności. ([W3C][21])

---

## 3. Porównanie wariantów docelowego stosu

Poniższa punktacja jest **moją oceną dopasowania do projektu Ada**, a nie ogólnym rankingiem frameworków.

| Kryterium                              |     Waga | Astro 7 + React | Next.js App Router | React Router Framework | Gatsby 5.16 po refaktorze |
| -------------------------------------- | -------: | --------------: | -----------------: | ---------------------: | ------------------------: |
| Dopasowanie do marketing/content-first |      20% |               5 |                  4 |                      3 |                         4 |
| Netlify, forms i endpointy OTO         |      15% |               5 |                  4 |                      5 |                         4 |
| Możliwość ponownego użycia React       |      15% |               4 |                  5 |                      5 |                         5 |
| Typowany content model i praca agentów |      20% |               5 |                  4 |                      4 |                         2 |
| Mały client bundle i wydajność         |      10% |               5 |                  4 |                      4 |                         3 |
| Prostota operacyjna                    |      10% |               5 |                  3 |                      4 |                         3 |
| Dojrzałość i perspektywa utrzymania    |      10% |               4 |                  5 |                      4 |                         3 |
| **Wynik**                              | **100%** |          **95** |             **83** |                 **82** |                    **69** |

### Wariant A — Astro 7 + React islands + Sanity

**Najlepsze dopasowanie.**

Zalety:

- HTML-first i minimalny JavaScript;
- istniejące interaktywne React components mogą być przenoszone jako islands;
- statyczne strony i dynamiczne API mogą współistnieć;
- oficjalny Netlify adapter;
- wbudowany, typowany content layer;
- prosty mental model dla agentów: page spec → registry → sections;
- dobry model dla wielu kampanii o różnych visual systems.

Wady:

- część zespołu będzie musiała nauczyć się `.astro`;
- Gatsby `StaticImage`, `Link`, `Head` i GraphQL wymagają migracji;
- niektóre React libraries trzeba izolować przez `client:*`;
- preview Sanity wymaga osobnego przepływu i zabezpieczonych draft endpoints.

### Wariant B — Next.js App Router + Sanity

**Bardzo mocny, ale zbyt rozbudowany dla obecnego profilu strony.**

Zalety:

- największy React/full-stack ecosystem;
- bardzo dobre primitives dla aplikacji z kontami użytkowników;
- Route Handlers, Server Components, caching i streaming;
- dobre wsparcie Sanity.

Wady:

- większość projektu nie potrzebuje stale działającego modelu aplikacyjnego;
- łatwiej przypadkowo rozszerzyć client bundle przez `"use client"`;
- więcej decyzji dotyczących caching, rendering modes i server/client boundaries;
- na Netlify nie byłby to prosty static export ze względu na cookies i OTO;
- większa powierzchnia zmian frameworkowych niż wymaga obecna domena.

**Kiedy wybrać zamiast Astro:** jeżeli w najbliższym roadmapie jest authenticated dashboard, konto klienta, rozbudowana personalizacja lub produkt SaaS w tej samej aplikacji.

### Wariant C — React Router Framework Mode + Sanity lub Storyblok

**Dobra alternatywa, gdy priorytetem jest pozostanie w czystym React.**

Zalety:

- najłatwiejszy mentalny transfer z obecnego React;
- typed routes;
- dobre Netlify integration;
- pełny server runtime;
- atrakcyjny wariant, gdy Shopify stanie się główną domeną aplikacji.

Wady:

- jest bardziej app-oriented niż content-oriented;
- content collections i page builder trzeba zaprojektować samodzielnie;
- nie daje tak naturalnego static-first modelu jak Astro;
- więcej własnej infrastruktury wokół content loading i renderowania stron.

### Wariant D — pozostanie na Gatsby 5.16 i duży refaktor

**Technicznie możliwe, ale nie rekomendowane jako cel kilkuletni.**

Zalety:

- najmniejszy koszt krótkoterminowy;
- brak migracji route API i image components;
- pełna zgodność z obecną bazą.

Wady:

- zachowuje Gatsby-specific GraphQL/plugin layer;
- nie usuwa długu bez prawie takiego samego refaktoru komponentów i content modelu;
- nie daje przewagi odpowiadającej kosztowi dalszego inwestowania;
- utrudnia stopniowe ograniczanie client-side React;
- AI-agent friendliness nadal trzeba zbudować od zera.

---

## 4. Porównanie CMS i modelu treści

| Rozwiązanie                        | Mocne strony                                                                                         | Słabe strony                                                                                                             | Rekomendowane użycie                                            |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| **Sanity**                         | TypeGen, structured content, oficjalne Astro integration, live preview, click-to-edit, drag-and-drop | SaaS, koszt, GROQ i Studio do nauczenia, vendor dependency                                                               | **Główny CMS dla stron, kampanii, zespołu, opinii i FAQ**       |
| **Storyblok**                      | Najbardziej bezpośredni WYSIWYG, blokowy model, bardzo przyjazny marketingowi                        | Silniejsze przywiązanie treści do modelu bloków Storyblok, mniej kontroli nad jednym wspólnym kontraktem kod/CMS         | Alternatywa, gdy WYSIWYG ma wyższy priorytet niż ścisłe TypeGen |
| **Decap CMS**                      | Git-native, prosty kosztowo, PR-based editorial workflow                                             | Słabszy page builder, trudniejszy preview dużych kampanii, konflikty Git, mniej wygodna praca nietechnicznych redaktorów | Proste wpisy, legal content, niewielki serwis                   |
| **Git-only MDX/Astro Collections** | Najprostszy dla developerów i agentów, najwyższa kontrola, pełne typowanie                           | Brak komfortowego panelu dla marketingu, publikacja wymaga Git                                                           | Dokumentacja, fixtures, migration manifests, ewentualnie legal  |

### Rekomendowany model hybrydowy

**Sanity:**

- strony;
- kolejność sekcji;
- copy;
- SEO;
- FAQ;
- testimonials;
- osoby i zespół;
- media redakcyjne;
- daty kampanii;
- CTA references;
- wybór dozwolonego named variant.

**Git:**

- design tokens;
- component contracts;
- section registry;
- integracje;
- OTO i commerce logic;
- analytics event schema;
- agent rules;
- ADR-y;
- test fixtures;
- migration manifests;
- opcjonalnie treści prawne, o ile są zatwierdzane przez Git.

**Nigdy w CMS:**

- dowolne Tailwind classes;
- raw HTML;
- `<script>`;
- Stripe coupon IDs;
- sekrety;
- React nodes;
- adresy API wymagające tajnych tokenów;
- executable expressions.

---

## 5. Rekomendowany stos docelowy

```text
Framework:        Astro 7
Interactive UI:   React 19 islands
Language:         TypeScript strict
Validation:       Zod + Sanity TypeGen
Styling:          Tailwind CSS 4 + CSS custom properties
CMS:              Sanity Studio + Content Lake
Hosting:          Netlify
Images:           Astro Image + Netlify Image CDN
Forms:            Netlify Forms + typed provider adapters
Server:           Astro endpoints / Netlify Functions
State storage:    Netlify Blobs, zachowane dla OTO
Commerce:         adaptery Shopify / Stripe / EasyTools
Components:       Storybook
Unit tests:       Vitest
E2E/visual:       Playwright
Accessibility:    axe + manual WCAG 2.2 AA review
Observability:    structured logs + error monitoring
```

---

## 6. Proponowana struktura katalogów

W okresie koegzystencji:

```text
ada/
├── apps/
│   ├── legacy-gatsby/                 # tymczasowo; obecna aplikacja
│   ├── web/
│   │   ├── astro.config.mjs
│   │   └── src/
│   │       ├── pages/
│   │       │   ├── index.astro
│   │       │   ├── [slug].astro
│   │       │   ├── preview/
│   │       │   └── api/
│   │       │       └── oto/
│   │       │           ├── start.ts
│   │       │           ├── status.ts
│   │       │           └── checkout.ts
│   │       ├── layouts/
│   │       │   ├── SiteLayout.astro
│   │       │   ├── CampaignLayout.astro
│   │       │   └── LegalLayout.astro
│   │       ├── components/
│   │       │   ├── primitives/
│   │       │   ├── sections/
│   │       │   │   ├── shared/
│   │       │   │   └── campaigns/
│   │       │   │       ├── magic/
│   │       │   │       ├── sowa/
│   │       │   │       ├── mentoring/
│   │       │   │       ├── training/
│   │       │   │       └── wyzwanie/
│   │       │   ├── islands/
│   │       │   └── embeds/
│   │       ├── page-builder/
│   │       │   ├── PageRenderer.astro
│   │       │   ├── registry.ts
│   │       │   ├── schemas/
│   │       │   └── errors.ts
│   │       ├── content/
│   │       │   ├── loaders/
│   │       │   ├── queries/
│   │       │   └── legal/
│   │       ├── integrations/
│   │       │   ├── analytics/
│   │       │   ├── consent/
│   │       │   ├── forms/
│   │       │   ├── media/
│   │       │   └── commerce/
│   │       ├── styles/
│   │       │   ├── tokens/
│   │       │   ├── themes/
│   │       │   ├── recipes/
│   │       │   └── globals.css
│   │       └── assets/
│   │           ├── brand/
│   │           └── decorative/
│   └── studio/
│       ├── schemas/
│       │   ├── documents/
│       │   ├── objects/
│       │   └── sections/
│       └── structure/
├── packages/
│   ├── design-tokens/
│   ├── content-contracts/
│   ├── section-contracts/
│   ├── oto-domain/
│   ├── analytics-contracts/
│   ├── test-fixtures/
│   └── eslint-config/
├── content/
│   ├── legal/
│   └── migration-manifests/
├── docs/
│   ├── adr/
│   ├── architecture/
│   ├── agents/
│   ├── component-catalog/
│   └── runbooks/
├── scripts/
│   ├── asset-audit/
│   ├── page-generator/
│   ├── route-audit/
│   └── migration/
└── tests/
    ├── contracts/
    ├── e2e/
    ├── visual/
    └── accessibility/
```

Po fazie 4 `apps/legacy-gatsby` zostaje usunięte.

---

## 7. Design tokens i zachowanie marki

### Trzy poziomy tokenów

#### 1. Foundation tokens

Wartości nieposiadające jeszcze semantyki:

```css
--color-purple-500
--color-pink-400
--space-6
--radius-pill
--shadow-card
--font-display
--motion-duration-fast
```

#### 2. Semantic tokens

Znaczenie niezależne od kampanii:

```css
--surface-page
--surface-section
--surface-accent
--text-primary
--text-on-accent
--action-primary
--action-primary-hover
--border-emphasis
--focus-ring
```

#### 3. Brand i campaign recipes

```css
[data-brand="ada"] { ... }
[data-brand="magic"] { ... }
[data-brand="sowa"] { ... }

[data-campaign="training-2026"] { ... }
[data-campaign="mentoring"] { ... }
[data-campaign="wyzwanie"] { ... }
```

W ten sposób:

- `Button` pozostaje jednym dostępnym komponentem;
- kolory, fonty, radius i motion wynikają z theme;
- Magic nie musi wyglądać jak strona główna;
- Sowa zachowuje własną typografię i granatowo-złotą estetykę;
- pojedyncza kampania może nadpisać recipe bez zmiany foundation.

### Reguły migracji stylów

1. Najpierw przepisać istniejące wartości 1:1 do tokenów — bez redesignu.
2. Dopiero potem wykrywać duplikaty i normalizować nazewnictwo.
3. `@theme` stosować dla wartości, które mają generować Tailwind utilities.
4. Semantic aliases przechowywać jako zwykłe CSS custom properties.
5. Dekoracje przypisywać do sekcji, nie do globalnego `Layout`.
6. Każda animacja musi mieć zachowanie dla `prefers-reduced-motion`.
7. Fonty hostować lokalnie lub przez kontrolowany package pipeline zamiast ładować siedem rodzin z Google Fonts na każdej stronie.

---

## 8. Primitives, sections i kontrakty

### Primitive

Primitive powinien:

- mieć stabilną semantykę HTML;
- nie zawierać tekstu kampanii;
- nie znać CMS;
- nie przyjmować dowolnych klas z zewnątrz;
- obsługiwać focus, keyboard i reduced motion;
- mieć Storybook stories i testy.

Przykłady:

```text
Button
LinkButton
Container
SectionFrame
Heading
RichText
Stack
Cluster
Grid
Card
Disclosure
Countdown
ResponsiveImage
VideoFacade
Carousel
DecorativeAsset
```

### Shared section

Shared section wyraża semantyczny blok strony:

```text
LeadMagnetHero
BenefitsGrid
StatsGrid
TeamSection
TestimonialsSection
FAQSection
OfferSection
LeadFormSection
WebinarHero
VideoSection
CaseStudySection
FinalCTASection
```

### Campaign-specific section

Campaign-specific section jest uzasadniona, gdy kompozycja stanowi istotną część art direction i nie daje się opisać wyłącznie przez theme:

```text
MagicUniquePoster
MagicMembershipOffer
SowaWorkshopHero
WyzwanieTimeline
MagicExpertsCollage
MentoringTransformationPath
```

Nie należy sztucznie uogólniać każdego plakatu, kolażu czy nietypowej sekcji. Wspólne pozostają wewnętrzne primitives i kontrakt danych.

---

## 9. Typowany schemat składania stron

Docelowy model:

```ts
type ThemeId =
  "ada" | "magic" | "sowa" | "mentoring" | "training-2026" | "wyzwanie"

type PageSpec = {
  slug: string
  locale: "pl-PL"
  theme: ThemeId
  seo: SeoSpec
  sections: PageSection[]
}

type PageSection =
  | LeadMagnetHeroSpec
  | BenefitsGridSpec
  | TeamSectionSpec
  | TestimonialsSectionSpec
  | FAQSectionSpec
  | LeadFormSectionSpec
  | OfferSectionSpec
  | MagicUniquePosterSpec
```

Przykładowy kontrakt sekcji:

```ts
type LeadMagnetHeroSpec = {
  type: "hero.lead-magnet"
  variant: "split" | "centered" | "poster"
  id?: string
  eyebrow?: string
  heading: RichTextValue
  description?: RichTextValue
  media?: AssetReference
  primaryCta?: CtaReference
  analyticsKey: string
}
```

### Zasady

- `type` jest stabilnym identyfikatorem semantycznym.
- `variant` ma nazwę opisową, nigdy `1`, `7` czy `19`.
- CMS może wybrać wyłącznie wariant z enum.
- `sectionRegistry` mapuje typ na konkretny renderer.
- unknown section type kończy preview czytelnym błędem, a produkcyjny build — błędem walidacji.
- treść nie zawiera React nodes.
- `className`, arbitrary values i raw CSS nie trafiają do CMS.
- CTA jest typowanym obiektem, nie dowolnym URL stringiem.
- każdy section type ma fixtures, Storybook story, schema i dokumentację.

Przykładowy moduł:

```text
sections/shared/LeadMagnetHero/
├── LeadMagnetHero.astro
├── schema.ts
├── variants.ts
├── LeadMagnetHero.stories.ts
├── LeadMagnetHero.spec.ts
├── fixtures/
│   ├── split.json
│   └── poster.json
└── README.md
```

---

## 10. Zarządzanie treścią

### Główne dokumenty Sanity

```text
page
campaign
offer
person
testimonial
faqSet
formDefinition
redirect
navigation
siteSettings
assetMetadata
```

### Ważne granice

**CMS opisuje:**

- co jest wyświetlane;
- w jakiej kolejności;
- jaki dozwolony wariant zastosować;
- jakie media i copy wykorzystać;
- jakie SEO przypisać.

**Kod opisuje:**

- jak sekcja działa;
- jakie ma markup i a11y;
- jakie ma theme recipes;
- które scripts wolno uruchamiać;
- jakie eventy analityczne wysyła;
- jak działa checkout i OTO.

### Oferta i cena

CMS nie powinien być jedynym źródłem prawdy dla ceny. Strona powinna referencjonować `offerId`, a adapter commerce powinien dostarczać autorytatywną cenę, checkout URL i status dostępności. Pozwoli to uniknąć sytuacji, w której copy mówi „67 zł”, a checkout nalicza 119 zł.

---

## 11. Obrazy i asset workflow

### Podział

**W Git:**

- logo;
- ikony;
- dekoracyjne SVG;
- brand backgrounds;
- elementy wymagające code review;
- art-directed campaign compositions.

**W Sanity Media Library:**

- zdjęcia zespołu;
- testimonials;
- screenshoty wyników;
- zdjęcia kampanii;
- OG images;
- materiały regularnie podmieniane przez marketing.

### Wymagane metadata

```text
alt
decorative
caption
credit
rights/status
campaign
focalPoint
crop
width
height
usage
source
```

### Proces

1. Agent dostaje assety.
2. Skrypt liczy hash i wykrywa duplikaty.
3. Sprawdza format, rozmiar i przezroczystość.
4. Wymaga decyzji `decorative` albo znaczący `alt`.
5. Generuje asset manifest.
6. Przypisuje zalecane `sizes` i aspect ratio.
7. LCP image dostaje eager/preload wyłącznie po pomiarze.
8. Pozostałe assety są lazy-loaded.
9. Visual regression potwierdza crop na wymaganych breakpointach.

---

## 12. SEO, wydajność i dostępność

### SEO

Nowy `SeoSpec` powinien obejmować:

```text
title
description
canonical
ogTitle
ogDescription
ogImage
robots
structuredData
alternateLocales
```

Dodatkowo:

- centralny `siteUrl`;
- jeden typed metadata renderer;
- sitemap;
- robots.txt;
- typed JSON-LD dla `Person`, `Organization`, `Course`, `Event`, `Product` i `FAQPage`;
- route manifest z canonical, status i redirect;
- automatyczny test unikalności titles i descriptions;
- brak surowego `script` w komponencie SEO.

### Wydajność

Budżety:

- LCP ≤ 2,5 s;
- INP ≤ 200 ms;
- CLS ≤ 0,1;
- brak nieuzasadnionych React islands;
- brak carousel JS na desktopie, jeśli wystarczy CSS/grid;
- video przez facade;
- stabilne wymiary każdego obrazu;
- brak globalnego ładowania wszystkich fontów i trackerów;
- per-route bundle report.

### Dostępność

Cel: **WCAG 2.2 AA**.

Obowiązkowe testy:

- keyboard-only;
- visible focus;
- headings hierarchy;
- labels i error messages;
- color contrast we wszystkich themes;
- reduced motion;
- zoom 200%;
- reflow przy 320 CSS px;
- target sizes;
- carousel controls;
- iframe/video titles;
- countdown jako nieagresywny live region;
- poprawna semantyka formularzy;
- dekoracje wykluczone z accessibility tree.

---

## 13. Formularze

### Docelowy kontrakt

```ts
type FormSpec = {
  id: string
  provider: "netlify" | "mailingr" | "custom-api"
  fields: FormField[]
  consent: ConsentFieldSpec[]
  success: SuccessBehavior
  spamProtection: "honeypot" | "netlify-recaptcha" | "turnstile"
  analyticsKey: string
}
```

### Plan

1. Zachować obecny `ContactForm` jako pierwszy natywny adapter Netlify.
2. Dla SSR/client forms generować statyczne hidden form definitions wymagane przez Netlify.
3. Stworzyć tymczasowy `LegacyFormEmbed` dla istniejących HTML snippets.
4. Każdy legacy embed objąć:

   - CSP allowlist;
   - właścicielem biznesowym;
   - datą wycofania;
   - testem submission;
   - testem consent;
   - listą skryptów i cookies.

5. Stopniowo zastępować snippets typowanymi form blocks lub oficjalnym API dostawcy.
6. Zabronić nowym stronom dodawania raw HTML forms.

---

## 14. Analityka, cookies i GDPR

### Docelowy model

Jeden `ConsentManager` powinien zarządzać kategoriami:

```text
necessary
functional
analytics
marketing
```

Przed decyzją użytkownika:

```text
analytics_storage: denied
ad_storage: denied
ad_user_data: denied
ad_personalization: denied
```

Po decyzji:

- consent state zostaje zapisany z wersją polityki i timestampem;
- Google Consent Mode jest aktualizowany;
- dopiero wtedy ładowane są dozwolone integracje;
- użytkownik ma stały link „Ustawienia cookies”;
- cofnięcie zgody aktualizuje stan i blokuje kolejne requesty.

### Script registry

```text
gtm
ga4
metaPixel
hotjar
recaptcha
vimeo
youtube
mailingr
```

Każda integracja ma:

- kategorię consent;
- ownera;
- środowiska;
- source URL allowlist;
- data retention note;
- test sieciowy;
- procedurę wyłączenia.

Strona nie może już przekazywać dowolnego JS przez `SEO script={...}`.

To jest rekomendacja techniczna. Ostateczna konfiguracja cookies, podstaw prawnych i retencji wymaga osobnego przeglądu prawnego.

---

## 15. OTO, Stripe, Shopify i checkout

### Zachować logikę domenową

`src/server/oto` należy przenieść do `packages/oto-domain` z minimalnymi zmianami. Framework-specific code powinien zostać ograniczony do adapterów:

```text
Astro Request/Response
  → OTO HTTP adapter
    → OTO domain service
      → SessionRepository
      → PromotionCodeProvider
      → CheckoutProvider
```

Interfejsy:

```ts
interface SessionRepository {
  get(key: SessionKey): Promise<StoredSession | null>
  create(session: OtoSession): Promise<CreateResult>
  compareAndSet(session: OtoSession, etag: string): Promise<boolean>
}

interface PromotionCodeProvider {
  ensureForSession(session: OtoSession): Promise<PromotionCode>
}

interface CheckoutProvider {
  buildUrl(input: CheckoutInput): URL
}
```

### Kontrakty, które muszą pozostać identyczne

- `/api/oto/start`;
- `/api/oto/status`;
- `/api/oto/checkout`;
- cookie `ada_oto_session`;
- cookie flags;
- response JSON;
- `Cache-Control: no-store`;
- campaign ID;
- czas sesji;
- token validation;
- redirect semantics;
- istniejące sesje w Blobs.

### Ryzyko konkurencji

Obecne conditional writes chronią część zapisu sesji, ale zewnętrzny side effect — utworzenie Stripe Promotion Code — może nastąpić przed skutecznym utrwaleniem wyniku. Przy równoległych wywołaniach checkout istnieje ryzyko utworzenia więcej niż jednego promotion code dla tej samej sesji. To jest **wniosek z kolejności operacji**, nie potwierdzony incydent.

Plan zabezpieczenia:

- Stripe idempotency key oparty na niejawnej wartości `campaignId + subjectHash`;
- opcjonalny status pośredni `checkout-reserved`;
- retry policy tylko dla klasyfikowanych błędów;
- test równoległych requestów;
- structured audit log bez danych osobowych;
- alarm na więcej niż jeden promotion code dla session key.

### Client contract

Ceny i checkout state nie powinny być eksportowane jako stałe w hooku React. Klient powinien otrzymywać:

```ts
type OtoOfferResponse = {
  active: boolean
  endsAt: string | null
  secondsLeft: number
  offer: {
    id: string
    price: Money
    regularPrice?: Money
    checkoutPath: string
  } | null
}
```

### Shopify

Najpierw należy ustalić, czy Shopify jest aktywny. Jeżeli nie:

- usunąć klienty, zmienne i martwe utilities po potwierdzeniu telemetrycznym.

Jeżeli jest aktywny:

- przejść na aktualną wspieraną wersję API;
- ustalić kwartalny proces review;
- używać oficjalnego Storefront API Client;
- private token przechowywać wyłącznie server-side;
- dodać contract tests wybranych queries;
- nie wiązać UI bezpośrednio ze strukturą Shopify response.

### EasyTools / zewnętrzny checkout

Zewnętrzny checkout powinien być implementacją `CheckoutProvider`, a nie URL-em rozsianym po komponentach. Pozwoli to później zmienić EasyTools na Shopify Checkout lub Stripe Checkout bez przepisywania sekcji sprzedażowych.

---

## 16. Testy i visual regression

Playwright ma natywne `toHaveScreenshot()`, przy czym dokumentacja wskazuje konieczność generowania i porównywania baseline’ów w tym samym środowisku. ([Playwright][22])

Storybook może wykonywać visual tests dla każdej story i porównywać ją z ostatnim zatwierdzonym baseline’em. ([Storybook][23])

### Docelowa piramida testów

| Warstwa          | Narzędzie                              | Zakres                                   |
| ---------------- | -------------------------------------- | ---------------------------------------- |
| Schema           | Vitest/Zod                             | PageSpec, sections, CMS transforms       |
| Primitives       | Vitest + Testing Library               | semantics, events, keyboard              |
| Sections         | Storybook                              | warianty, themes, content extremes       |
| Visual component | Storybook/Chromatic lub lokalny runner | każdy fixture i theme                    |
| E2E              | Playwright                             | routing, form, consent, CTA, media       |
| Visual page      | Playwright                             | 375, 768, 1024, 1440 px                  |
| Accessibility    | axe + manual                           | WCAG 2.2 AA                              |
| OTO contracts    | Vitest/integration                     | cookies, status, expiry, concurrency     |
| Performance      | Lighthouse CI + RUM                    | budgets i field CWV                      |
| SEO              | custom checks                          | canonical, OG, title, JSON-LD, redirects |

### Baseline przed pierwszą migracją

Przed refaktorem trzeba zapisać dla każdej aktywnej strony:

- screenshoty mobile/tablet/desktop;
- pełny HTML lub istotny DOM outline;
- metadata;
- canonical;
- status HTTP;
- redirect chain;
- formularze i nazwy pól;
- cookies przed i po zgodzie;
- third-party network requests;
- CTA destinations;
- Lighthouse report.

---

## 17. Przyporządkowanie istniejących komponentów

| Kategoria                     | Istniejący moduł                                          | Docelowe przeznaczenie                                                                |
| ----------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **primitive**                 | `helpers/Button`                                          | Rozdzielić na `Button`, `LinkButton`, `ExternalLinkButton`; usunąć dowolne `btnStyle` |
| **primitive**                 | `helpers/Accordion`, `Question`                           | Jeden dostępny `Disclosure` oraz `FAQItem`                                            |
| **primitive**                 | `components/shared/Section`, `Typography`, `Card`         | Zachować ideę, ujednolicić semantykę i tokeny                                         |
| **primitive**                 | `CountdownTimer`                                          | React island `Countdown`, z reduced motion i kontrolowanym live region                |
| **primitive**                 | `VimeoFacade`, `ResponsiveYouTubeEmbed`                   | Wspólny `VideoFacade`                                                                 |
| **primitive**                 | pojedyncze dekoracje z `LayoutElements`                   | `DecorativeAsset`, osadzany lokalnie w sekcji                                         |
| **shared section**            | `TrainingLandingPage`                                     | Rozłożyć na `LeadMagnetHero`, `BenefitsGrid`, `LeadFormSection`, `FinalCTA`           |
| **shared section**            | `Features`, `FeaturesAda`                                 | `StatsGrid` z named visual variants                                                   |
| **shared section**            | `MagicWebinarHero`                                        | `WebinarHero`                                                                         |
| **shared section**            | `MasterclassFAQ`                                          | `FAQSection`; treść jako `faqSet`                                                     |
| **shared section**            | `ReferencesMentoring`, `Opinions`, `OpinionVideos`        | `TestimonialsSection` i `VideoTestimonialsSection`                                    |
| **shared section**            | `ContactForm`                                             | `FormSection` z adapterem Netlify                                                     |
| **campaign-specific section** | `MagicSaleBanner`                                         | `campaigns/magic/MagicMembershipOffer`                                                |
| **campaign-specific section** | poster z `MagicDateBanner version={5}`                    | `campaigns/magic/MagicUniquePoster`                                                   |
| **campaign-specific section** | `MagicCollectiveBanner`                                   | Podzielić na nazwane sekcje Magic Collective                                          |
| **campaign-specific section** | `MagicCaseStudies`, `MagicCommunityOpinions`              | Zachować rodzinę Magic, oprzeć na shared cards/media                                  |
| **campaign-specific section** | lokalne sekcje w `wyzwanie.tsx`                           | `WyzwanieTimeline`, `WyzwanieAudience`, `WyzwanieResults`                             |
| **campaign-specific section** | Sowa-specific hero/CTA                                    | Osobna rodzina `campaigns/sowa`                                                       |
| **content/config**            | `values/*Landing.tsx`                                     | Migrować do `PageSpec`/Sanity; usunąć React nodes                                     |
| **content/config**            | `PEOPLE_CONTENT`, `peopleContent`                         | Dokumenty `person` i references do `TeamSection`                                      |
| **content/config**            | lokalne FAQ arrays                                        | `faqSet`                                                                              |
| **content/config**            | `src/values/legal/*.md`                                   | Git MDX lub Sanity legal collection                                                   |
| **content/config**            | tablice nawigacji w Header/Footer                         | `navigation` w CMS/site settings                                                      |
| **content/config**            | `src/server/oto/config.ts`                                | Typed server-only campaign registry                                                   |
| **merge/retire**              | `MagicBanner`, `MagicBanner2–5`                           | Rozłożyć według semantyki; nie tworzyć jednego „MegaBanner”                           |
| **merge/retire**              | `MagicBioBanner`, `MagicBioBanner2`, `MagicBioBanner3`    | Jedna rodzina `TeamSection` + campaign recipes                                        |
| **merge/retire**              | `MasterclassInfo`, `MasterclassInfo2`, `MasterclassInfo3` | Nazwane sekcje informacyjne, nie numerowane generacje                                 |
| **merge/retire**              | `Package`, `Package2`                                     | `OfferCard`/`PricingCard`                                                             |
| **merge/retire**              | `ContentBox`, `InfoBox`, `ProductBox`                     | Ograniczona rodzina semantycznych card primitives                                     |
| **merge/retire**              | `TypingAnimation`, `TypingMagic`, `TypingWordSwitch`      | Jeden `AnimatedText` lub eliminacja, zawsze z reduced motion                          |
| **merge/retire**              | `MaxWithBgColorContainer`                                 | `SectionFrame` oparty na tokenach i typed width/background props                      |
| **merge/retire**              | globalny `LayoutElements`                                 | Usunąć boolean matrix i globalne Y offsets                                            |
| **merge/retire**              | `MagicBelowFold/MainContent`, `SocialProof`, `Conversion` | Zastąpić deklaratywnym PageSpec; nie traktować jako reużywalnych sekcji               |
| **merge/retire**              | raw HTML form imports                                     | Tymczasowy `LegacyFormEmbed`, następnie typed forms                                   |

---

## 18. Architektura zoptymalizowana dla agentów AI

### Zasada główna

Agent nie powinien „pisać strony w JSX od zera”. Powinien tworzyć lub modyfikować **zwalidowany PageSpec**, wybierając elementy z zamkniętego katalogu komponentów.

### Artefakty wymagane dla każdego section type

- schema;
- TypeScript contract;
- renderer;
- allowed themes;
- allowed variants;
- Storybook stories;
- fixtures: minimal, typical, maximum-content;
- accessibility notes;
- asset requirements;
- analytics events;
- testy;
- README z przykładami poprawnego i błędnego użycia.

### Reguły agentów

Agent:

- nie może dodawać numerycznego `version`;
- nie może umieszczać Tailwind classes w content data;
- nie może dodawać raw HTML ani `dangerouslySetInnerHTML`;
- nie może wstrzykiwać third-party scripts;
- nie może modyfikować OTO podczas tworzenia zwykłej strony;
- nie może dodawać nowego design token bez uzasadnienia i ADR;
- nie może tworzyć nowego section type, jeżeli istniejący contract da się rozszerzyć named variant;
- musi wygenerować story, fixture i test;
- musi wskazać użyte i nieużyte assety;
- musi raportować visual diffs;
- musi zaznaczyć brakujące copy, alt, zgodę prawną lub destination CTA jako blokadę publikacji.

### Dokumentacja dla agentów

```text
docs/agents/
├── README.md
├── page-authoring.md
├── section-selection.md
├── asset-intake.md
├── content-style-pl.md
├── analytics-and-consent.md
├── seo-checklist.md
├── accessibility-checklist.md
├── commerce-boundaries.md
├── forbidden-patterns.md
└── examples/
```

Dodatkowo:

```text
docs/adr/
├── 001-framework-astro.md
├── 002-cms-sanity.md
├── 003-page-contract.md
├── 004-theme-architecture.md
├── 005-oto-boundary.md
└── 006-netlify-coexistence.md
```

---

## 19. Etapowa migracja bez big bang rewrite

## Faza 0 — inwentaryzacja i zabezpieczenie stanu

### Zakres

- ustalenie listy aktywnych route’ów;
- traffic i conversion ranking;
- crawl produkcji;
- metadata i redirect inventory;
- screenshot baselines;
- audit wszystkich forms i third-party scripts;
- audit Shopify/EasyTools/Stripe;
- asset audit;
- contract tests OTO;
- potwierdzenie source of visual truth: Figma czy produkcja;
- lista właścicieli treści i integracji.

### Kryteria akceptacji

- każdy aktywny URL ma ownera i status;
- każdy formularz ma potwierdzony destination;
- wszystkie checkout URLs są znane;
- istnieje baseline wizualny i SEO;
- wiadomo, czy Netlify CMS jest faktycznie używany;
- OTO ma tests opisujące obecny kontrakt.

### Rollback

Brak zmian produkcyjnych.

---

## Faza 1 — foundation i koegzystencja

### Zakres

- utworzenie `apps/web` i `apps/studio`;
- konfiguracja Astro/Netlify;
- tokens i themes;
- pierwsze primitives;
- `PageSpec`, Zod schemas i section registry;
- Storybook;
- CI;
- Sanity preview;
- drugi Netlify site dla nowej aplikacji;
- automatyczne visual tests;
- route manifest.

### Kryteria akceptacji

- preview deploy działa;
- żadna produkcyjna ścieżka nie jest jeszcze przełączona;
- tokens odwzorowują obecne kolory i fonty;
- agent potrafi wygenerować poprawny przykładowy PageSpec;
- nieznana sekcja blokuje build;
- wszystkie fixtures przechodzą visual i a11y checks.

### Rollback

Usunięcie nowego deployu nie wpływa na Gatsby.

---

## Faza 2 — pilot

### Pierwsza strona

**`/meta-2026/`**

Powody:

- route jest cienki;
- istnieje częściowo wydzielony content config;
- używa wspólnego `TrainingLandingPage`;
- sprawdza hero, benefits, theme, obrazy, SEO i formularz;
- nie zawiera OTO ani krytycznej logiki sprzedażowej;
- wynik można szybko zweryfikować wizualnie;
- po nim `/andromeda-2026/` sprawdzi, czy architektura naprawdę umożliwia reuse.

Obecny route `meta-2026.tsx` przekazuje wartości, benefits i raw HTML form do `TrainingLandingPage`, więc jest naturalnym kandydatem do przepisania jako pierwszy typed PageSpec.

### Kryteria akceptacji pilota

- niezmieniony URL;
- identyczny lub zatwierdzony canonical;
- zatwierdzone title, description i OG image;
- kompletna zgodność copy;
- form submission trafia do tego samego systemu;
- honeypot/reCAPTCHA działają;
- analytics nie uruchamiają się przed zgodą;
- brak podwójnego GA/GTM;
- brak console errors;
- brak hydration errors;
- visual regression zatwierdzony dla 375, 768, 1024 i 1440 px;
- zero critical/serious axe violations;
- pełna obsługa keyboard;
- spełnione laboratoryjne budgets CWV;
- crawl nie wykrywa nowych 404;
- CTA prowadzą do właściwych destinations.

### Routing i rollback

Na głównym Gatsby Netlify site:

```text
/meta-2026/*  →  Astro Netlify site  200
/_astro/*     →  Astro Netlify site  200
```

URL pozostaje bez zmian. Rollback polega na cofnięciu jednej reguły proxy. Netlify oficjalnie wspiera taki sposób przechodzenia z legacy content. ([Netlify Docs][14])

Jeśli `/meta-2026/` ma w tym momencie krytyczny ruch kampanijny, pilot powinien najpierw działać pod preview URL albo na mniej aktywnym `/advantage/`, a produkcyjny cutover nastąpić po zamknięciu kampanii.

---

## Faza 3 — skalowanie

### Kolejność

1. `/andromeda-2026/` i `/advantage/`;
2. pozostałe training/lead-generation pages;
3. `/about`, `/contact`, legal;
4. home, Header, Footer i navigation;
5. centralny consent i analytics;
6. wspólne FAQ, testimonials, team i video;
7. campaign pages bez OTO;
8. mentoring/masterclass;
9. prostsze strony Magic.

### Zasada

Każdy route przechodzi osobno:

```text
inventory
→ content migration
→ preview
→ visual/SEO/form/a11y gate
→ Netlify rewrite
→ monitoring
→ acceptance
```

### Rollback

Każdy URL ma osobną regułę i może wrócić do Gatsby bez rollbacku pozostałych stron.

### Dodatkowy warunek

Podczas koegzystencji pojedyncza strona ma jedno źródło prawdy. Po przełączeniu route’u treść starej wersji zostaje zamrożona albo generowana z tego samego CMS. Nie wolno prowadzić dwóch niezależnych wersji copy.

---

## Faza 4 — strony krytyczne, OTO i wyłączenie Gatsby

### Zakres

- `magic`, `magic-special`, `magic-wyzwanie`;
- `wyzwanie`;
- kursy z ograniczonym dostępem;
- pricing i checkout sections;
- OTO endpoints;
- Shopify/Stripe/EasyTools adapters;
- migracja cookies;
- canary release;
- final root-domain switch;
- reverse proxy pozostałych legacy routes;
- wyłączenie Gatsby po okresie stabilizacji.

### Kryteria OTO

- contract parity dla wszystkich endpointów;
- istniejące cookie nadal rozpoznawane;
- istniejące sesje Blobs nadal działają;
- Stripe test mode przechodzi:

  - pierwszy checkout;
  - retry;
  - dwa równoległe requesty;
  - wygasła sesja;
  - invalid token;
  - missing env;
  - Stripe timeout;
  - Blobs conflict;

- redirect trafia do właściwego checkoutu;
- promotion code ma poprawny expiry i max redemption;
- ceny UI i checkoutu są zgodne;
- logi nie zawierają subject IDs ani sekretów.

### Rollback

- API paths wracają do Gatsby Functions;
- strony wracają przez rewrites;
- format sesji pozostaje zgodny wstecz;
- nie migruje się Blobs do nowego storage w tym samym release co framework.

### Wyłączenie Gatsby

Dopiero gdy:

- przez co najmniej dwa cykle wydawnicze nie ma ruchu do legacy routes;
- logi nie pokazują odwołań do starych assetów;
- wszystkie redirects są pokryte testami;
- formularze i commerce mają zatwierdzone wyniki;
- nie ma aktywnej kampanii wymagającej rollbacku.

---

## 20. Główne ryzyka

| Ryzyko                                                | Ograniczenie                                                             |
| ----------------------------------------------------- | ------------------------------------------------------------------------ |
| Utrata charakteru kampanii przez nadmierną unifikację | Oddzielić semantic contracts od campaign recipes i art-directed sections |
| CMS stanie się dowolnym page builderem                | Zamknięty section registry, enums i Zod validation                       |
| Content drift między Gatsby i Astro                   | Jedno źródło prawdy na route, freeze po cutover                          |
| Ukryte formularze lub skrypty przestaną działać       | Phase 0 network/form audit i per-route contract tests                    |
| Duplikacja analytics                                  | Jeden consent-aware script registry                                      |
| Błędne canonical/trailing slash                       | Route manifest i crawl comparison                                        |
| Różnice obrazów po odejściu od `StaticImage`          | Asset manifest, wymuszone dimensions, visual regression                  |
| Nieznany status Shopify                               | Telemetry i owner confirmation przed jakimkolwiek usunięciem             |
| Race w tworzeniu Stripe promotion codes               | Idempotency key i concurrency tests                                      |
| Zbyt wczesna migracja OTO                             | OTO dopiero w fazie 4                                                    |
| Agenci będą tworzyć kolejne jednorazowe komponenty    | Component RFC, fixtures i registry gate                                  |
| Sanity vendor lock-in                                 | Framework-independent contracts i eksportowalne PageSpec                 |
| Dwa Netlify sites skomplikują assets                  | Stabilny `/_astro/` path, jedna warstwa proxy, testy rewrites            |
| Brak wiarygodnego design source                       | Screenshot baselines; Figma po udostępnieniu staje się primary source    |

---

## 21. Decyzje wymagające odpowiedzi właściciela projektu

> **Decyzje właściciela z 2026-07-11 (wiążące dla realizacji):**
>
> 1. **Pilot fazy 2: `/magic/` i `/magic-kolektyw/`** (zamiast `/meta-2026/`). Uwaga wykonawcza: to strony wizualnie ciężkie z rodziną komponentów Magic; walidacja na preview URL przed jakimkolwiek cutoverem pozostaje obowiązkowa.
> 2. **Shopify: usunąć martwy kod** (klienci, env vars, `SHOPIFY_API_VERSION`, utils) — potwierdzone audytem `docs/migration/commerce-audit.md`; odwracalne przez git.
> 3. **Źródło prawdy wizualnej: NIE pixel-parity.** Celem jest czysty, prosty system w kodzie — siatki 12-kolumnowe, domyślne skale/odstępy Tailwind, minimum arbitrary values — wizualnie *w przybliżeniu* odpowiadający obecnej stronie. Screenshot baselines (`baselines/`) służą jako punkt odniesienia do review, nie jako kontrakt pikselowy. Gate'y „visual regression" z §16/§19 czytać jako: review wizualny leada + akceptacja właściciela, nie pixel-diff.
> 4. **CMS: faza 1 bez CMS** — treści jako typowane PageSpec w Git. Kontrakty sekcji projektować tak, by późniejsze podpięcie CMS (Sanity/Decap/Storyblok) nie wymagało ich zmiany. Sekcje planu dotyczące Sanity (m.in. §4, §10, struktura `apps/studio`) są odroczone do osobnej decyzji.

1. **Czy projekt pozostanie marketing/content platformą, czy ma stać się aplikacją z logowaniem i dashboardem?**
   Drugi wariant może przesunąć wybór z Astro w stronę Next.js lub React Router.

2. **Co jest wizualnym source of truth: obecna produkcja, Figma czy nowe projekty?**
   W eksporcie nie ma linku Figma, więc bez decyzji baseline’em musi być obecny rendering.

3. **Czy Netlify CMS jest faktycznie używany?**
   Kto publikuje treści i jakie operacje wykonuje?

4. **Czy redaktor potrzebuje pełnego visual editing i drag-and-drop?**
   To przesądza o Sanity vs prostszy Git-based CMS.

5. **Które route’y są aktywne, archiwalne, sezonowe lub przeznaczone do usunięcia?**

6. **Które integracje są obecnie produkcyjne?**
   Shopify, Stripe, EasyTools, MailingR, Hotjar, GA, GTM, Meta Pixel, reCAPTCHA, Vimeo, YouTube, Circle.

7. **Jakie są docelowe role Shopify, Stripe i EasyTools?**
   Shopify jako catalog, koszyk czy pełny checkout? Stripe tylko discount provider czy docelowy checkout?

8. **Czy `/meta-2026/` jest bezpiecznym pilotem pod względem aktualnego ruchu i kampanii?**

9. **Kto zatwierdza copy, SEO, zgody, politykę cookies i komunikaty cenowe?**

10. **Które assety mają potwierdzone prawa, a które są czasowymi screenshotami lub materiałami klientek?**

11. **Czy treści prawne mają być edytowane w CMS, czy przechodzić przez Git review?**

12. **Czy wymagany jest WCAG 2.2 AA jako formalny target, czy tylko best effort?**

13. **Czy planowana jest wielojęzyczność?**
    Wpływa to na model slugów, locale i Sanity schemas.

14. **Jaki jest dopuszczalny budżet na Sanity, visual testing i monitoring?**

15. **Jaki package manager ma obowiązywać docelowo?**
    W okresie koegzystencji legacy powinno zachować Yarn 1; po izolacji rekomendowany jest jeden nowoczesny workspace manager dla nowego stosu.

---

## 22. Przykładowy workflow: „nowa strona z promptu i assetów”

### Wejście

Właściciel przekazuje:

```text
Cel strony
Grupa odbiorców
Oferta / lead magnet
Główny CTA
Termin kampanii
Wymagany visual system
Copy lub brief
Assety
Integracje formularza
SEO requirements
```

### Krok 1 — intake i walidacja

Agent:

- zapisuje brief jako `PageRequest`;
- sprawdza wymagane pola;
- tworzy listę braków;
- analizuje assety;
- wykrywa duplikaty;
- wymaga altów lub oznaczenia dekoracji;
- nie rozpoczyna generowania checkoutu bez `offerId`.

### Krok 2 — dobór section plan

Agent korzysta z katalogu capabilities:

```text
hero
problem
benefits
process
proof
team
offer
faq
form
final-cta
```

Tworzy plan:

```text
1. hero.lead-magnet / split
2. proof.stats / cards
3. benefits.grid / six-items
4. proof.testimonials / masonry
5. form.lead / netlify
6. faq.accordion / standard
7. cta.final / centered
```

### Krok 3 — utworzenie PageSpec

Agent generuje dane, nie dowolny JSX:

```json
{
  "slug": "nowa-kampania",
  "locale": "pl-PL",
  "theme": "training-2026",
  "seo": {},
  "sections": []
}
```

### Krok 4 — schema validation

Uruchamiane są:

```text
content schema
section union
CTA validation
asset references
SEO limits
form contract
analytics event keys
```

Unknown variant lub arbitrary class blokuje proces.

### Krok 5 — draft w Sanity

Agent:

- tworzy draft;
- uploaduje media z metadata;
- wiąże referencje do osób, testimonials i FAQ;
- nie publikuje strony.

### Krok 6 — preview

Astro renderuje draft przez ten sam `PageRenderer`, który obsługuje produkcję.

Redaktor otrzymuje:

- live preview;
- click-to-edit;
- możliwość przestawienia dozwolonych sekcji;
- czytelne ostrzeżenia o brakach.

### Krok 7 — automatyczne testy

```text
typecheck
lint
schema tests
Storybook stories
axe
Playwright E2E
visual screenshots
SEO audit
broken links
performance budget
form submission test
consent network test
```

### Krok 8 — raport agenta

Agent generuje manifest:

```text
Użyte section types
Użyte variants
Nowe assety
Nieużyte assety
SEO metadata
Form destination
Analytics events
Third-party scripts
Visual diffs
Accessibility findings
Open decisions
Rollback path
```

### Krok 9 — human approval

Wymagane zatwierdzenia:

- design;
- polski copy;
- cena i CTA;
- SEO;
- consent/legal;
- visual diffs;
- publikacja.

### Krok 10 — deploy i publikacja

- deploy preview;
- ewentualny canary;
- Sanity publish;
- Netlify route activation;
- monitoring forms, analytics i errors;
- gotowa pojedyncza reguła rollbacku.

### Gdy brakuje komponentu

Agent nie tworzy od razu jednorazowego TSX. Otwiera component RFC zawierające:

- uzasadnienie braku istniejącego section type;
- proponowany contract;
- named variants;
- supported themes;
- content extremes;
- a11y requirements;
- fixtures;
- Storybook story;
- visual baselines;
- plan wykorzystania przez co najmniej dwie strony albo uzasadnienie campaign-specific module.

---

## 23. Model wykonania: lead i implementerzy

Plan jest realizowany w modelu lead/implementerzy. Zasady poniżej obowiązują dla całej migracji; skrócona wersja operacyjna znajduje się w [AGENTS.md](./AGENTS.md).

### Role

- **Lead — Claude Code (Fable):** decyduje, co ma być zrobione. Dekomponuje fazy planu na zadania, pisze task briefy, dobiera model implementera, robi code review każdego diffa, prowadzi walidację (build, lint, visual, a11y, kontrakty) i komunikuje się z właścicielem projektu. Lead nie implementuje — całość implementacji jest delegowana. Jedynym wyjątkiem jest niedostępność Codex CLI, którą lead zgłasza jawnie.
- **Implementerzy — modele Codex (Sol / Terra / Luna) przez `codex exec`:** wykonują task briefy. Trzymają się ściśle zakresu briefu, reguł agentów z sekcji 18 oraz Implementation Rules z AGENTS.md, po czym raportują, co zmienili i jak to zwalidowali. Nie rozszerzają zakresu i nie delegują dalej.
- **Druga opinia — Sol (read-only):** recenzuje ADR-y, decyzje architektoniczne, plany faz oraz diffy o wysokiej stawce (OTO, consent, checkout, cutover). W tej roli nie edytuje plików; jego opinia jest doradcza — decyduje lead.

### Tiery modeli (oficjalny framing OpenAI z materiałów premierowych)

- **Sol (`gpt-5.6-sol`)** — tier flagowy / najbardziej capable. Najlepszy do zadań złożonych, wysokiej stawki i długohoryzontowych/agentycznych: zaawansowane rozumowanie, trudny kod, cybersecurity, science, decyzje architektoniczne, wieloetapowe workflow. Do użycia, gdy maksymalna inteligencja i niezawodność są najważniejsze. Ma najwyższe tryby effort, w tym Ultra dla multi-agent parallelism.
- **Terra (`gpt-5.6-terra`)** — zbalansowany tier "everyday" i domyślny routing. Dobra do pracy profesjonalnej, kodu o rutynowej i umiarkowanej złożoności, analiz i workflow dokumentowych. Wydajność porównywalna z wcześniejszym GPT-5.5 przy niższym koszcie.
- **Luna (`gpt-5.6-luna`)** — tier najszybszy i najtańszy. Idealny do zadań lekkich i wysokowolumenowych: szybkie podsumowania, proste wyjaśnienia, klasyfikacje, lekkie review, first-pass work, high-throughput routing agentowy. Wysoka efektywność dla pracy cost-sensitive i low-reasoning.

### Routing zadań migracji na tiery

| Rodzaj pracy | Model | Przykłady z tego planu |
| --- | --- | --- |
| Mechaniczne, wysokowolumenowe, first-pass | Luna (effort low/medium) | inwentaryzacje fazy 0 (route/asset/form audit), screenshot baselines, przenoszenie wartości stylów 1:1 do tokenów, klasyfikacja assetów, lekkie podsumowania kodu |
| Standardowa implementacja (default, gdy brak pewności) | Terra | primitives i shared sections, PageSpec i schematy sekcji, migracja route-by-route w fazie 3, Storybook stories, fixtures, testy |
| Złożone, wysokiej stawki, architektoniczne | Sol | section registry i kontrakty, theme architecture, consent manager i script registry, adaptery OTO/Stripe/EasyTools (faza 4), concurrency/idempotency, trudny debugging |

Eskalacja: jeżeli wynik Luny/Terry dwukrotnie nie przechodzi review leada, zadanie idzie tier wyżej zamiast dalszej iteracji na tym samym modelu.

### Best-of-N: kilka konkurencyjnych implementacji (tylko Luna i Terra)

Gdy lead uzna, że warto zobaczyć kilka implementacji i wybrać najlepszą — typowo przy zadaniach otwartych lub o dużej wariancji jakości (kompozycja sekcji, first-pass komponentu, kształt API kontraktu) — może odpalić konkurs N wariantów (zwykle N=2–3).

- **Tylko na tierach Luna i Terra.** Nigdy na Solu — jego rola to druga opinia i najtrudniejsze pojedyncze zadania; best-of-N na tierze flagowym jest nieuzasadnione kosztowo.
- **Wariant preferowany — równoległe `codex exec` w osobnych git worktree:** lead tworzy N worktree (`git worktree add`), odpala N równoległych runów z tym samym briefem (`< /dev/null`), robi review diffów, wybiera zwycięzcę (może przenieść najlepsze elementy z pozostałych), aplikuje do głównego worktree i usuwa worktree. Pełna izolacja — warianty nie nadpisują sobie plików.
- **Wariant w codexie — sub-agenci `multi_agent_v1`** (zweryfikowane 2026-07-11 w `codex exec`; feature `multi_agent` = stable, włączony): sesja-koordynator ma narzędzia `multi_agent_v1__spawn_agent` (schema m.in. `model`, `reasoning_effort`, `agent_type`, `fork_context`), `send_input`, `resume_agent`, `wait_agent` (timeout 10 s–60 min) i `close_agent`. `spawn_agent` przyjmuje `model`, więc koordynator (Terra) może spawnować sub-agentów przypiętych wyłącznie do `gpt-5.6-luna` / `gpt-5.6-terra`. Uwaga: sub-agenci dzielą jeden worktree — nadaje się do wariantów analitycznych/read-only albo gdy warianty piszą do rozłącznych ścieżek; do konkurencyjnych implementacji tych samych plików używać wariantu z worktree.
- **Werdykt zawsze należy do leada:** review wszystkich wariantów według briefu i reguł tego planu, wybór zwycięzcy, ewentualna synteza; przegrane warianty są odrzucane w całości.

### Pętla pracy

1. Lead robi scoping: worktree, kontekst, source of visual truth (Figma albo baseline produkcji).
2. Lead pisze brief: cel, pliki, ograniczenia (AGENTS.md + sekcja 18), definicja ukończenia, oczekiwana walidacja.
3. Delegacja: `codex exec -m <model> -s workspace-write -o <plik-raportu> "<brief>"`.
4. Lead czyta raport implementera i robi review `git diff` względem briefu.
5. Poprawki w tej samej sesji implementera: `codex exec resume --last "<feedback>"`.
6. Walidację uruchamia lead (sandboxowany implementer może nie mieć dostępu do sieci): build, lint oraz gate'y visual/SEO/form/a11y z sekcji 16 i 19.
7. Druga opinia Sola dla pracy istotnej: `codex exec review --uncommitted -m gpt-5.6-sol` albo `codex exec -m gpt-5.6-sol -s read-only "<prompt review>"`.
8. Lead raportuje z dowodami: co się zmieniło, który model implementował, wyniki review i walidacji.

### Zweryfikowane komendy (codex-cli 0.144.1, zalogowany przez ChatGPT, 2026-07-11)

- Modele: `-m gpt-5.6-sol | gpt-5.6-terra | gpt-5.6-luna` — wszystkie trzy potwierdzone smoke testem.
- Sandbox: `-s workspace-write` do implementacji, `-s read-only` do review i drugiej opinii.
- Effort: `-c model_reasoning_effort="low|medium|high|xhigh"`; tryb "ultra" Sola niezweryfikowany w CLI (CLI nie waliduje wartości po stronie klienta, więc potwierdzenie wymaga realnego, potencjalnie kosztownego runu).
- Raport końcowy: `-o <plik>`; zdarzenia JSONL: `--json`; wynik strukturalny: `--output-schema <schema.json>`.
- Kontynuacja sesji implementera: `codex exec resume --last` lub `codex exec resume <session-id>` — dlatego przy delegacji nie używamy `--ephemeral`.
- Wbudowane review: `codex exec review --uncommitted | --base <branch> | --commit <sha> [-m <model>]`.
- Repo jest `trusted` w `~/.codex/config.toml`, więc `codex exec` działa nieinteraktywnie bez promptów o zgodę.
- Uwaga operacyjna: przy delegacji przez skrypt/tło zawsze zamykać stdin (`< /dev/null`) — `codex exec` z otwartym pipe na stdin czeka na jego zamknięcie i wisi bez uruchomienia zadania.

### Wizualne QA stron (stara vs nowa apka)

Zweryfikowane 2026-07-11: plugin `browser@openai-bundled` Codexa **nie działa w headless `codex exec`** — `agent.browsers.list()` zwraca `[]`, backendy `iab` (in-app browser) i `chrome` raportują "Browser is not available". Plugin wymaga sesji aplikacji desktopowej Codex/ChatGPT, więc przeglądania stron nie da się delegować do implementerów przez `codex exec`.

Podział pracy przy porównywaniu starej (Gatsby) i nowej (Astro) wersji stron:

- **Deterministyczna regresja wizualna — implementerzy (Codex):** harness Playwright zgodnie z sekcją 16 (`toHaveScreenshot()`, breakpointy 375/768/1024/1440 px) porównujący route'y między starą a nową apką. Playwright działa headless z shella, więc Codex może go budować i uruchamiać bez pluginu browser; jednorazowy `npx playwright install` uruchamia lead (sandbox implementera może nie mieć sieci).
- **Interaktywny przegląd strona po stronie — lead (Claude Code):** lead ma własne narzędzia sterowania Chrome (Claude in Chrome) i wykonuje przegląd wizualny obu uruchomionych apek sam; to element jego roli review, nie implementacji.

---

# Jednoznaczna rekomendacja końcowa

**Migrować projekt Ada z Gatsby do Astro 7, pozostawiając React 19 wyłącznie dla islands, z Tailwind CSS 4 opartym na trójwarstwowych design tokens, Sanity jako głównym structured CMS i Netlify jako platformą wdrożeniową.**

Migrację wykonać przez pięć faz:

- **Faza 0:** audit, baselines, route/integration inventory i OTO contract tests;
- **Faza 1:** Astro/Sanity foundation, tokens, registry, Storybook i CI bez ruchu produkcyjnego;
- **Faza 2:** pilot `/meta-2026/`, następnie `/andromeda-2026/`;
- **Faza 3:** route-by-route migracja evergreen, lead-gen i niekrytycznych kampanii;
- **Faza 4:** Magic, wyzwanie, commerce, OTO i finalne wyłączenie Gatsby.

Nie przenosić numerycznych `version/part` do nowego systemu. Zastąpić je nazwanymi wariantami i semantycznymi section contracts. Nie umieszczać dowolnych klas, React nodes, raw HTML ani skryptów w CMS. Nie migrować OTO jako pierwszego fragmentu. Zachować jego domenę i kontrakty, a zmienić dopiero frameworkowe adaptery po zbudowaniu pełnych testów regresyjnych.

[1]: https://github.com/gatsbyjs/gatsby/releases "https://github.com/gatsbyjs/gatsby/releases"
[2]: https://docs.netlify.com/frameworks/astro/ "https://docs.netlify.com/frameworks/astro/"
[3]: https://astro.build/blog/astro-7/ "https://astro.build/blog/astro-7/"
[4]: https://docs.astro.build/en/guides/content-collections/ "https://docs.astro.build/en/guides/content-collections/"
[5]: https://nextjs.org/docs/app/getting-started/server-and-client-components "https://nextjs.org/docs/app/getting-started/server-and-client-components"
[6]: https://nextjs.org/docs/app/getting-started/route-handlers "https://nextjs.org/docs/app/getting-started/route-handlers"
[7]: https://nextjs.org/docs/app/guides/static-exports "https://nextjs.org/docs/app/guides/static-exports"
[8]: https://reactrouter.com/explanation/type-safety "https://reactrouter.com/explanation/type-safety"
[9]: https://www.sanity.io/docs/apis-and-sdks/sanity-typegen "https://www.sanity.io/docs/apis-and-sdks/sanity-typegen"
[10]: https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing "https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing"
[11]: https://www.storyblok.com/docs/concepts/visual-editor "https://www.storyblok.com/docs/concepts/visual-editor"
[12]: https://decapcms.org/docs/editorial-workflows/ "https://decapcms.org/docs/editorial-workflows/"
[13]: https://tailwindcss.com/docs/theme "https://tailwindcss.com/docs/theme"
[14]: https://docs.netlify.com/routing/redirects/rewrites-proxies/ "https://docs.netlify.com/routing/redirects/rewrites-proxies/"
[15]: https://docs.netlify.com/manage/forms/setup/ "https://docs.netlify.com/manage/forms/setup/"
[16]: https://shopify.dev/docs/api/usage/versioning "https://shopify.dev/docs/api/usage/versioning"
[17]: https://docs.netlify.com/storage/blobs/overview/ "https://docs.netlify.com/storage/blobs/overview/"
[18]: https://docs.stripe.com/api/idempotent_requests "https://docs.stripe.com/api/idempotent_requests"
[19]: https://developers.google.com/tag-platform/security/guides/consent "https://developers.google.com/tag-platform/security/guides/consent"
[20]: https://web.dev/articles/vitals "https://web.dev/articles/vitals"
[21]: https://www.w3.org/TR/WCAG22/ "https://www.w3.org/TR/WCAG22/"
[22]: https://playwright.dev/docs/test-snapshots "https://playwright.dev/docs/test-snapshots"
[23]: https://storybook.js.org/docs/writing-tests/visual-testing "https://storybook.js.org/docs/writing-tests/visual-testing"
