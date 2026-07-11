import Audience from "../sections/Audience/Audience.astro"
import BenefitGrid from "../sections/BenefitGrid/BenefitGrid.astro"
import Consultation from "../sections/Consultation/Consultation.astro"
import Faq from "../sections/Faq/Faq.astro"
import FinalCta from "../sections/FinalCta/FinalCta.astro"
import Hero from "../sections/Hero/Hero.astro"
import LearningPath from "../sections/LearningPath/LearningPath.astro"
import Media from "../sections/Media/Media.astro"
import Offer from "../sections/Offer/Offer.astro"
import ProblemSolution from "../sections/ProblemSolution/ProblemSolution.astro"
import Proof from "../sections/Proof/Proof.astro"
import StickyCta from "../sections/StickyCta/StickyCta.astro"
import Team from "../sections/Team/Team.astro"
import type { PageSection } from "../page-spec/page.schema"

export const sectionRegistry = {
  "sticky-cta": StickyCta,
  hero: Hero,
  "problem-solution": ProblemSolution,
  "benefit-grid": BenefitGrid,
  audience: Audience,
  "learning-path": LearningPath,
  team: Team,
  media: Media,
  proof: Proof,
  offer: Offer,
  consultation: Consultation,
  faq: Faq,
  "final-cta": FinalCta,
} satisfies Record<PageSection["type"], typeof StickyCta>
