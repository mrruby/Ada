import { parsePageSpec } from "../../page-spec/parse-page-spec"
import type { PageSpecInput } from "../../page-spec/page.schema"
import { audienceFixtures } from "../../sections/Audience/fixtures"
import { benefitGridFixtures } from "../../sections/BenefitGrid/fixtures"
import { consultationFixtures } from "../../sections/Consultation/fixtures"
import { faqFixtures } from "../../sections/Faq/fixtures"
import { finalCtaFixtures } from "../../sections/FinalCta/fixtures"
import { heroFixtures } from "../../sections/Hero/fixtures"
import { problemSolutionFixtures } from "../../sections/ProblemSolution/fixtures"
import { proofFixtures } from "../../sections/Proof/fixtures"
import { teamFixtures } from "../../sections/Team/fixtures"

export const magicKolektywPageInput = {
  schemaVersion: 1,
  path: "/magic-kolektyw/",
  locale: "pl-PL",
  brand: "magic",
  seo: {
    title: "MAGIC Kolektyw — marketing dla marek",
    description: "Reprezentacyjny PageSpec dla usług MAGIC Kolektyw.",
  },
  sections: [
    heroFixtures[1],
    benefitGridFixtures[0],
    problemSolutionFixtures[0],
    benefitGridFixtures[1],
    audienceFixtures[1],
    teamFixtures[1],
    {
      type: "offer",
      presentation: "service-packages",
      heading: "Zakresy współpracy",
      offers: [
        { name: "Single", features: ["Jedna konkretna potrzeba"] },
        { name: "Marketing Partner", features: ["Stałe wsparcie strategiczne"] },
        { name: "Growth Intensive", features: ["Intensywny sprint wzrostu"] },
        { name: "Newsletter Master", features: ["Strategia i redakcja newslettera"] },
      ],
    },
    proofFixtures[1],
    benefitGridFixtures[3],
    consultationFixtures[0],
    {
      type: "proof",
      presentation: "case-studies",
      heading: "Trzy historie kampanii",
      entries: [
        {
          type: "case-study",
          title: "Kampania pierwsza",
          summary: "Działania rozpoczęliśmy od strategicznego porządku.",
          figures: ["1 wspólny cel"],
        },
        {
          type: "case-study",
          title: "Kampania druga",
          summary: "Zespół otrzymał jasny plan testów.",
          figures: ["2 aktywne kanały"],
        },
        {
          type: "case-study",
          title: "Kampania trzecia",
          summary: "Wyniki omawialiśmy na podstawie danych.",
          figures: ["3 decyzje oparte na danych"],
        },
      ],
    },
    proofFixtures[2],
    finalCtaFixtures[1],
    faqFixtures[1],
  ],
} satisfies PageSpecInput

export const magicKolektywPageSpec = parsePageSpec(magicKolektywPageInput)
