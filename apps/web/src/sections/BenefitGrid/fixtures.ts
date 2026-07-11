import type { BenefitGridSectionInput } from "./schema"

export const benefitGridFixtures = [
  {
    type: "benefit-grid",
    presentation: "value-proposition",
    heading: "Marketing z sensem",
    items: [{ title: "Strategia", body: "Łączymy cele marki z działaniami." }],
  },
  {
    type: "benefit-grid",
    presentation: "principles",
    heading: "Tak pracuje MAGIC",
    items: [{ title: "Partnerstwo", body: "Działamy transparentnie i uważnie." }],
  },
  {
    type: "benefit-grid",
    presentation: "membership-benefits",
    heading: "Co daje członkostwo",
    items: [{ title: "Praktyka", body: "Materiały pomagają wdrażać wiedzę." }],
  },
  {
    type: "benefit-grid",
    presentation: "service-benefits",
    heading: "Co zyskuje Twoja marka",
    items: [{ title: "Spójność", body: "Zespół działa według wspólnego planu." }],
  },
] satisfies BenefitGridSectionInput[]
