import type { ProofSectionInput } from "./schema"

export const proofFixtures = [
  {
    type: "proof",
    presentation: "case-studies",
    heading: "Historie kampanii",
    entries: [
      {
        type: "case-study",
        title: "Kampania z planem",
        summary: "Marka uporządkowała działania reklamowe.",
        figures: ["3 kanały", "1 wspólny cel"],
      },
    ],
  },
  {
    type: "proof",
    presentation: "results",
    heading: "Wyniki w liczbach",
    entries: [{ type: "result", label: "Leady", value: "+42%", context: "Po trzech miesiącach" }],
  },
  {
    type: "proof",
    presentation: "testimonials",
    heading: "Głosy klientek",
    entries: [{ type: "testimonial", quote: "W końcu wiem, co robić dalej.", person: "Marta" }],
  },
  {
    type: "proof",
    presentation: "qa-sample",
    heading: "Pytania z praktyki",
    entries: [
      {
        type: "qa",
        question: "Od czego zacząć kampanię?",
        answer: [
          {
            kind: "paragraph",
            content: [{ text: "Od jasnego celu i jednej hipotezy.", marks: [] }],
          },
        ],
      },
    ],
  },
  {
    type: "proof",
    presentation: "customer-story",
    heading: "Historia klientki",
    entries: [
      {
        type: "customer-story",
        title: "Od chaosu do planu",
        body: [
          {
            kind: "paragraph",
            content: [{ text: "Magda odzyskała pewność w marketingu.", marks: [] }],
          },
        ],
      },
    ],
  },
] satisfies ProofSectionInput[]
