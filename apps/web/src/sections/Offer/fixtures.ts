import type { OfferSectionInput } from "./schema"

export const offerFixtures = [
  {
    type: "offer",
    presentation: "membership-packages",
    heading: "Wybierz pakiet MAGIC",
    offers: [
      {
        name: "Miesięczny",
        features: ["Dostęp do materiałów", "Społeczność"],
        price: { label: "Cena", value: "od 99 zł" },
        cta: { label: "Dołącz", href: "#dolacz", analyticsKey: "magic.offer.membership" },
      },
    ],
  },
  {
    type: "offer",
    presentation: "service-packages",
    heading: "Wybierz zakres współpracy",
    offers: [
      {
        name: "Marketing Partner",
        features: ["Strategia", "Stałe wsparcie"],
        cta: { label: "Porozmawiajmy", href: "#konsultacja", analyticsKey: "magic.offer.service" },
      },
    ],
  },
] satisfies OfferSectionInput[]
