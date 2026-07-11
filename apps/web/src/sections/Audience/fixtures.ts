import type { AudienceSectionInput } from "./schema"

export const audienceFixtures = [
  {
    type: "audience",
    presentation: "membership-dual",
    heading: "Dla kogo jest MAGIC",
    groups: [
      { title: "Przedsiębiorczynie", criteria: ["Chcą prowadzić marketing świadomie."] },
      { title: "Marketerki", criteria: ["Chcą rozwijać praktyczne kompetencje."] },
    ],
  },
  {
    type: "audience",
    presentation: "collective",
    heading: "Dla marek gotowych na współpracę",
    groups: [{ title: "Rosnące marki", criteria: ["Potrzebują partnerki marketingowej."] }],
  },
] satisfies AudienceSectionInput[]
