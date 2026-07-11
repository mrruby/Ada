import type { HeroSectionInput } from "./schema"

export const heroFixtures = [
  {
    type: "hero",
    presentation: "membership",
    heading: "MAGIC dla marketerów i przedsiębiorczyń",
    body: [
      {
        kind: "paragraph",
        content: [{ text: "Ucz się marketingu we własnym tempie.", marks: [] }],
      },
    ],
    primaryCta: {
      label: "Poznaj MAGIC",
      href: "#oferta",
      analyticsKey: "magic.hero.membership",
    },
    decorations: {
      heading: {
        src: "/images/magic-star.png",
        alt: "",
        width: 160,
        height: 152,
      },
      afterCta: {
        src: "/images/magic-star.png",
        alt: "",
        width: 160,
        height: 152,
      },
    },
    media: {
      src: "/images/magic-membership-hero.jpg",
      alt: "Członkinie społeczności MAGIC",
      width: 1600,
      height: 900,
    },
  },
  {
    type: "hero",
    presentation: "collective",
    heading: "Marketing, który działa razem z Twoją marką",
    body: [
      {
        kind: "paragraph",
        content: [{ text: "Kolektyw wspiera marki w odpowiedzialnym wzroście.", marks: [] }],
      },
    ],
    primaryCta: {
      label: "Umów rozmowę",
      href: "#konsultacja",
      analyticsKey: "magic.hero.collective",
    },
    logo: {
      src: "/images/magic-kolektyw-logo.png",
      alt: "MAGIC Kolektyw",
      width: 600,
      height: 312,
    },
    decorations: {
      afterCta: {
        src: "/images/magic-arrow.svg",
        alt: "",
        width: 22,
        height: 34,
      },
    },
    media: {
      src: "/images/magic-collective-hero.jpg",
      alt: "Zespół MAGIC przy wspólnej pracy",
      width: 1600,
      height: 900,
    },
  },
] satisfies HeroSectionInput[]
