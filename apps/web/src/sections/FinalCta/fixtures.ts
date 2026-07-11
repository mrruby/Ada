import type { FinalCtaSectionInput } from "./schema"

export const finalCtaFixtures = [
  {
    type: "final-cta",
    presentation: "membership",
    heading: "Wejdź do świata MAGIC",
    body: [
      {
        kind: "paragraph",
        content: [{ text: "Wybierz pakiet i zacznij działać.", marks: [] }],
      },
    ],
    primaryCta: { label: "Dołącz teraz", href: "#pakiety", analyticsKey: "magic.final.membership" },
  },
  {
    type: "final-cta",
    presentation: "collective",
    heading: "Porozmawiajmy o Twojej marce",
    body: [
      {
        kind: "paragraph",
        content: [{ text: "Poznajmy się i sprawdźmy, czy pasujemy.", marks: [] }],
      },
    ],
    primaryCta: { label: "Umów rozmowę", href: "#konsultacja", analyticsKey: "magic.final.collective" },
    socialLinks: [{ label: "Instagram", href: "https://www.instagram.com" }],
  },
] satisfies FinalCtaSectionInput[]
