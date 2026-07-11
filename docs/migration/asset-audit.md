# Asset audit

Mechanical snapshot of `src/images` and `static/assets`, collected 2026-07-11. Commands used included `find`, `du`, `md5`, `wc`, targeted `rg`/grep-style filename scans, and `sips` for the largest raster files. The reference scan searched each asset basename literally in `src/` and files matching `gatsby-*`.

## Inventory

| Directory | Files | Bytes | `du -sh` |
| --- | ---: | ---: | ---: |
| `src/images` | 380 | 85,737,790 | 82M |
| `static/assets` | 73 | 7,918,659 | 7.7M |
| **Total** | **453** | **93,656,449** | — |

### File counts and bytes by extension

| Extension | Files | Bytes |
| --- | ---: | ---: |
| `.webp` | 319 | 70,470,608 |
| `.svg` | 105 | 13,811,076 |
| `.png` | 28 | 9,368,617 |
| `.DS_Store` | 1 | 6,148 |

### 20 largest files

Sizes are bytes. Raster dimensions came from `sips`; `sips` did not report dimensions for SVG files.

| Rank | File | Bytes | Dimensions |
| ---: | --- | ---: | --- |
| 1 | `src/images/sunflower.svg` | 3,198,720 | not reported by `sips` (SVG) |
| 2 | `src/images/ada-kampanie.webp` | 3,047,962 | 3375×3375 |
| 3 | `src/images/ada_homepage.webp` | 2,978,572 | 2584×2753 |
| 4 | `src/images/contact-ada.png` | 2,744,942 | 1662×1286 |
| 5 | `src/images/coffee.svg` | 2,547,127 | not reported by `sips` (SVG) |
| 6 | `static/assets/coffee.svg` | 2,547,127 | not reported by `sips` (SVG) |
| 7 | `static/assets/leaves1.svg` | 2,310,679 | not reported by `sips` (SVG) |
| 8 | `src/images/homeImage.webp` | 1,815,410 | 1815×1815 |
| 9 | `src/images/kapibara-barbara-photo.png` | 1,811,293 | 1024×1024 |
| 10 | `src/images/magic-hero2.webp` | 1,588,774 | 1353×1947 |
| 11 | `src/images/chill4.webp` | 1,489,110 | 1940×1952 |
| 12 | `src/images/masterclass4.webp` | 1,469,526 | 1788×3124 |
| 13 | `src/images/adsyOpinie2.webp` | 1,444,558 | 2606×1792 |
| 14 | `src/images/autumn.webp` | 1,354,106 | 2403×2567 |
| 15 | `src/images/adsyOpinie1.webp` | 1,294,142 | 2607×1752 |
| 16 | `src/images/masterclass5.webp` | 1,282,358 | 1562×2365 |
| 17 | `src/images/magic_adsy3.webp` | 1,271,092 | 1546×1402 |
| 18 | `src/images/protip3.webp` | 1,231,320 | 1214×1700 |
| 19 | `src/images/magic-landing-2026-experts-transparent.webp` | 1,091,090 | 5760×2089 |
| 20 | `src/images/hompage2.webp` | 1,087,854 | 1144×1180 |

## Duplicate detection

`md5` was run across both directories. The following matching-hash groups are byte-identical according to the command output:

| MD5 | Files |
| --- | --- |
| `1ea853a0b62eaf30b3724b0ee0b3c030` | `src/images/kapibara_barbara_portrait.webp`; `src/images/magic_kapibara.webp` |
| `2d0440567b0d19137480ac117ad494c4` | `src/images/arrow-right.svg`; `static/assets/arrow-right.svg` |
| `38e9e9eb93cf9a0824840fb848d3defb` | `src/images/arrow-left.svg`; `static/assets/arrow-left.svg` |
| `ad6b679c568699de93003cb893538c1d` | `src/images/magicOpinion2.webp`; `src/images/magic_webinar3.webp` |
| `bbb210b83c42b7fe9b1749a480da7f95` | `src/images/magda2.webp`; `src/images/magda2d.webp` |
| `f139104ad01dd2026161fb6d78b22fd1` | `src/images/coffee.svg`; `static/assets/coffee.svg` |

This is 6 duplicate groups and 12 file entries. Files not listed above had no matching MD5 in this scan.

## Reference check

The scan searched each basename as a literal string in `src/` and `gatsby-browser.js`, `gatsby-config.js`, `gatsby-node.js`, and `gatsby-ssr.js`. It found 351 assets with at least one filename match and 102 with zero matches. The zero-match set is a removal-candidate list only; it is not proof that an asset is unused. CMS content, runtime-generated URLs, hard-coded/static URLs in external systems, or filename transformations can reference an asset without a matching source filename.

### Zero code-reference candidates

```text
src/images/.DS_Store
src/images/AgnieszkaOdp.webp
src/images/AgnieszkaPrzyklad.webp
src/images/AgnieszkaPyt.webp
src/images/KolektywOppinia2.webp
src/images/KolektywOppinia4.webp
src/images/MagOdp.webp
src/images/MagPyt.webp
src/images/Magdalena-pytanie.webp
src/images/MonOdp.webp
src/images/MonPyt.webp
src/images/ada-magic-1.webp
src/images/ada_about2.webp
src/images/ada_homepage.webp
src/images/ada_portrait_backup.webp
src/images/ada_thank.webp
src/images/arrow-1.png
src/images/arrow-2.png
src/images/arrow-3.png
src/images/arrow-4.png
src/images/arrow-left.svg
src/images/arrow-right.svg
src/images/arrowdown.svg
src/images/calendarMagic.png
src/images/canva.png
src/images/check2.svg
src/images/checkMagic.webp
src/images/coffee.svg
src/images/comment1a.webp
src/images/comment1b.webp
src/images/comment1ba.webp
src/images/comment2a.webp
src/images/comment2b.webp
src/images/comment3a.webp
src/images/comment3b.webp
src/images/commentIcon1a.png
src/images/commentIcon1b.png
src/images/commentIcon2a.png
src/images/commentIcon2b.png
src/images/commentIcon3a.png
src/images/commentIcon3b.png
src/images/crown.svg
src/images/flaming.png
src/images/instagram.webp
src/images/kapibara_barbara_portrait.webp
src/images/magda2.webp
src/images/magic-hero-2026.webp
src/images/magic-hero.webp
src/images/magic-landing-2026-experts.webp
src/images/magic-landing-2026-opinions-a.webp
src/images/magic-landing-2026-unique-design.webp
src/images/magic-logo.svg
src/images/magic-unique-2026.webp
src/images/magic1.webp
src/images/magic2.webp
src/images/magic3.webp
src/images/magic4.webp
src/images/magicOpinia1.webp
src/images/magicOpinia2.webp
src/images/magicOpinia3.webp
src/images/magicOpinia4.webp
src/images/magicOpinia5.webp
src/images/magicOpinia6.webp
src/images/magic_kapibara.webp
src/images/magic_reference_sell_11.webp
src/images/magic_reference_sell_12.webp
src/images/magic_reference_sell_7.webp
src/images/magic_reference_sell_8.webp
src/images/magic_reference_sell_9.webp
src/images/masterclass3M.webp
src/images/opinionAdsy1.webp
src/images/opinionAdsy2.webp
src/images/opinionAdsy3.webp
src/images/preapering.webp
src/images/pyt1.webp
src/images/pyt2.webp
src/images/pyt3.webp
src/images/pyt4.webp
src/images/pyt5.webp
src/images/pyt6.webp
src/images/reklamy.webp
src/images/sunflower.svg
src/images/thank.webp
src/images/wyniki.png
src/images/wyzwanie-hero-combined.webp
src/images/wyzwanie-laptop.webp
src/images/wyzwanie-phone.webp
static/assets/arrow-left.svg
static/assets/arrow-right.svg
static/assets/arrow.svg
static/assets/coffee.svg
static/assets/puzzle-1.svg
static/assets/puzzle-2.svg
static/assets/puzzle-3.svg
static/assets/puzzle-4.svg
static/assets/puzzle-5.svg
static/assets/wave.svg
static/assets/waves2.svg
static/assets/waves3.svg
static/assets/waves4.svg
static/assets/waves5.svg
static/assets/waves6.svg
```

## Usage patterns in `src`

These are rough textual occurrence counts, not rendered usage counts:

| Pattern | Count |
| --- | ---: |
| `StaticImage` | 515 |
| Raw opening `<img` tags | 4 |
| `background-image: url(...)` | 63 |

The CSS background matches are concentrated in `src/styles/global.css`; the scan counts declarations/occurrences, so repeated use of one URL is counted repeatedly.

## Two-directory split

The repository keeps assets in both `src/images` (380 files) and `static/assets` (73 files), with 6 MD5 duplicate groups spanning or within those directories. This is the split problem described in PLAN.md §1.7: there is no single manifest, similar resources can have different names or locations, and content, decoration, and social-proof assets are mixed. The split also matters operationally: `src/images` is processed by Gatsby imports, while `static/assets` is served as static-path content and is referenced by CSS with paths such as `../../static/assets/...`.

## Uncertainties

- The audit is a source-text audit. It does not crawl the built site, inspect browser network requests, query CMS data, or check deployment/CDN logs.
- A zero filename match is only a removal candidate. CMS/static URLs, runtime URL construction, aliases, generated data, external embeds, or filename transformations may still use an asset.
- Matching by basename can produce false positives (a filename mentioned in a comment or unrelated text) and does not prove that every match is a live render path.
- `sips` reported raster dimensions for the raster files in the top-20 list, but did not report dimensions for the SVG files. No SVG viewBox dimensions were inferred.
- MD5 matching was used as requested. The duplicate list reports matching hashes as byte-identical for this mechanical audit; it is not a broader semantic-similarity analysis.
- `.DS_Store` is included because `find` reported it as a file under `src/images`; it is not treated as an image asset.
