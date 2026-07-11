# Faza 0 — podsumowanie (lead)

Stan: 2026-07-11. Wszystkie artefakty fazy 0 możliwe do wykonania bez decyzji właściciela są ukończone i przeszły review leada. Wykonanie: model lead/implementerzy per PLAN.md §23 (implementacja: Codex Luna/Terra/Sol; review i walidacja: Claude Code).

## Artefakty

| Artefakt | Plik | Implementer | Status |
| --- | --- | --- | --- |
| Route inventory (29 stron + 3 funkcje OTO) | `docs/migration/route-inventory.md` | Luna | ✅ (1 poprawka po review) |
| Audyt formularzy i skryptów | `docs/migration/forms-scripts-audit.md` | Luna | ✅ |
| Audyt commerce (Shopify/Stripe/EasyTools) | `docs/migration/commerce-audit.md` | Luna | ✅ |
| Audyt assetów (453 pliki, ~94 MB) | `docs/migration/asset-audit.md` | Luna | ✅ |
| Testy kontraktowe OTO (42 testy, offline) | `src/server/oto/__tests__/`, `vitest.config.mjs` | Sol | ✅ 42/42 green |
| Harness screenshot baselines | `scripts/screenshot-baseline/` | Terra | ✅ (2 poprawki po review) |
| Screenshot baselines (116 PNG, 4 breakpointy) | `baselines/` (poza gitem) | — (przebieg: lead) | ✅ 116/116 |
| Baseline SEO z builda | `docs/migration/seo-baseline.md` | Luna | ✅ |

## Kluczowe ustalenia

- **Brak CMS w repo** (zweryfikowane: brak `static/admin` i pluginu CMS). Deklaracja "Netlify CMS" w starym AGENTS.md była nieaktualna. Treści publikowane są wyłącznie przez Git. Zamyka §21 pyt. 3 na poziomie kodu.
- **Shopify to martwy kod**: zależności i env vars bez jednego wywołania z pages/components. Kandydat do usunięcia po potwierdzeniu właściciela (§21 pyt. 6/7).
- **Stripe/OTO bez idempotency key** — ryzyko z PLAN.md §15 potwierdzone w kodzie i utrwalone w testach kontraktowych (nazwy testów `CURRENT CONTRACT:`).
- **SEO**: zero canonicali, zero robots meta, zero JSON-LD; jedna wspólna meta description na wszystkich 29 stronach; 7 stron Magic dzieli identyczny title. To baseline parity — i zarazem lista tanich wygranych na migracji.
- **Consent**: bramka obejmuje tylko GA/GTM/Pixel. Hotjar (`/adsy-chill/`), Google Forms POST (bez checkboxa zgody), embeddy YouTube/Vimeo/Koalendar/Google Calendar — poza bramką.
- **Assety**: 102 pliki bez referencji w kodzie (kandydaci do usunięcia), 6 grup bajtowych duplikatów, pojedyncze pliki do 3,2 MB.
- **Formularze**: provider to MailerLite (nie "MailingR") — 22 pliki raw HTML, kilka nieosiągalnych z żadnej strony.
- **Brak programowych route'ów i redirectów** w gatsby-node/gatsby-config — manifest migracji jest zamknięty i prosty.

## Uwagi środowiskowe

- Globalny Node to 26.5.0 — **za nowy dla Gatsby 5.16** (wymaga <26). Symlinki brew `node@23/24/25` są zepsute (celują w 26.5.0). Działa **node@22 (22.23.1)**: `env PATH="/opt/homebrew/opt/node@22/bin:$PATH" yarn <cmd>`. Zalecenie: dodać `.nvmrc`/pin lub naprawić brew.
- `codex exec` w skryptach zawsze z `< /dev/null` (inaczej wisi na stdin) — szczegóły w PLAN.md §23.
- Baselines odtwarzalne: `yarn build && yarn serve`, potem `yarn baseline:capture` (wznawia przerwane przebiegi).

## Do zamknięcia fazy 0 potrzebne od właściciela (PLAN.md §21 — priorytety)

1. Statusy route'ów: które aktywne/archiwalne/sezonowe; czy `/meta-2026/` jest bezpiecznym pilotem (pyt. 5, 8).
2. Zgoda na usunięcie Shopify z kodu + docelowe role Stripe/EasyTools (pyt. 6, 7).
3. Źródło prawdy wizualnej: Figma (brak linków w repo) czy obecna produkcja (pyt. 2).
4. CMS: czy redakcja potrzebuje visual editing/drag-drop; budżet Sanity vs prostsza opcja (pyt. 4, 14).
5. Właściciele treści/integracji i zatwierdzanie copy/SEO/consent (pyt. 9, 11).

Bez odpowiedzi 1–4 nie startujemy fazy 1 (scaffold, tokens, CMS) — wybór CMS i pilotażu od nich zależy.
