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
    artwork: {
      src: "src/images/audience.webp",
      alt: "Przykładowa ilustracja odbiorczyń",
      width: 640,
      height: 640,
    },
    decoration: {
      src: "src/images/audience-decoration.svg",
      alt: "",
      width: 40,
      height: 40,
    },
  },
] satisfies AudienceSectionInput[]
