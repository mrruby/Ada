import { parsePageSpec } from "../../page-spec/parse-page-spec"
import type { PageSpecInput } from "../../page-spec/page.schema"
import { audienceFixtures } from "../../sections/Audience/fixtures"
import { faqFixtures } from "../../sections/Faq/fixtures"
import { finalCtaFixtures } from "../../sections/FinalCta/fixtures"
import { heroFixtures } from "../../sections/Hero/fixtures"
import { learningPathFixtures } from "../../sections/LearningPath/fixtures"
import { mediaFixtures } from "../../sections/Media/fixtures"
import { offerFixtures } from "../../sections/Offer/fixtures"
import { problemSolutionFixtures } from "../../sections/ProblemSolution/fixtures"
import { proofFixtures } from "../../sections/Proof/fixtures"
import { stickyCtaFixtures } from "../../sections/StickyCta/fixtures"
import { teamFixtures } from "../../sections/Team/fixtures"

export const magicPageInput = {
  schemaVersion: 1,
  path: "/magic/",
  locale: "pl-PL",
  brand: "magic",
  seo: {
    title: "MAGIC — marketingowa społeczność",
    description: "Reprezentacyjny PageSpec dla społeczności MAGIC.",
  },
  sections: [
    stickyCtaFixtures[0],
    heroFixtures[0],
    proofFixtures[0],
    audienceFixtures[0],
    problemSolutionFixtures[1],
    learningPathFixtures[0],
    learningPathFixtures[1],
    teamFixtures[0],
    mediaFixtures[0],
    proofFixtures[1],
    offerFixtures[0],
    proofFixtures[3],
    proofFixtures[4],
    faqFixtures[0],
    finalCtaFixtures[0],
  ],
} satisfies PageSpecInput

export const magicPageSpec = parsePageSpec(magicPageInput)
