import { describe, expect, it } from "vitest"

import { magicKolektywPageInput } from "../../src/content/pages/magic-kolektyw"
import { magicPageInput } from "../../src/content/pages/magic"
import {
  PageSectionSchema,
  PageSpecSchema,
  pageSectionTypes,
} from "../../src/page-spec/page.schema"
import { sectionRegistry } from "../../src/page-builder/registry"
import { audienceFixtures } from "../../src/sections/Audience/fixtures"
import { benefitGridFixtures } from "../../src/sections/BenefitGrid/fixtures"
import { consultationFixtures } from "../../src/sections/Consultation/fixtures"
import { faqFixtures } from "../../src/sections/Faq/fixtures"
import { finalCtaFixtures } from "../../src/sections/FinalCta/fixtures"
import { heroFixtures } from "../../src/sections/Hero/fixtures"
import { learningPathFixtures } from "../../src/sections/LearningPath/fixtures"
import { mediaFixtures } from "../../src/sections/Media/fixtures"
import { offerFixtures } from "../../src/sections/Offer/fixtures"
import { problemSolutionFixtures } from "../../src/sections/ProblemSolution/fixtures"
import { proofFixtures } from "../../src/sections/Proof/fixtures"
import { stickyCtaFixtures } from "../../src/sections/StickyCta/fixtures"
import { teamFixtures } from "../../src/sections/Team/fixtures"

const allFixtures = [
  ...stickyCtaFixtures,
  ...heroFixtures,
  ...problemSolutionFixtures,
  ...benefitGridFixtures,
  ...audienceFixtures,
  ...learningPathFixtures,
  ...teamFixtures,
  ...mediaFixtures,
  ...proofFixtures,
  ...offerFixtures,
  ...consultationFixtures,
  ...faqFixtures,
  ...finalCtaFixtures,
]

describe("PageSpec v1", () => {
  it("parses both pilot specs", () => {
    expect(PageSpecSchema.safeParse(magicPageInput).success).toBe(true)
    expect(PageSpecSchema.safeParse(magicKolektywPageInput).success).toBe(true)
  })

  it("parses every section fixture", () => {
    for (const fixture of allFixtures) {
      expect(PageSectionSchema.safeParse(fixture).success).toBe(true)
    }
  })

  it("keeps registry keys equal to the closed section union", () => {
    expect(Object.keys(sectionRegistry).sort()).toEqual([...pageSectionTypes].sort())
  })

  it("rejects an unknown section type", () => {
    const result = PageSpecSchema.safeParse({
      ...magicPageInput,
      sections: [{ type: "unknown-section" }],
    })

    expect(result.success).toBe(false)
  })

  it("rejects invalid asset and CTA data", () => {
    const invalidAsset = {
      ...heroFixtures[0],
      media: {
        ...heroFixtures[0].media,
        src: "",
      },
    }
    const invalidCta = {
      ...stickyCtaFixtures[0],
      targetCta: {
        ...stickyCtaFixtures[0].targetCta,
        analyticsKey: "magic invalid cta",
      },
    }

    expect(PageSectionSchema.safeParse(invalidAsset).success).toBe(false)
    expect(PageSectionSchema.safeParse(invalidCta).success).toBe(false)
  })

  it("parses optional visual artwork and rejects incomplete artwork", () => {
    expect(PageSectionSchema.safeParse(audienceFixtures[1]).success).toBe(true)
    expect(PageSectionSchema.safeParse(learningPathFixtures[0]).success).toBe(true)
    expect(PageSectionSchema.safeParse(proofFixtures[0]).success).toBe(true)

    const invalidArtwork = {
      ...audienceFixtures[1],
      artwork: {
        ...audienceFixtures[1].artwork,
        height: 0,
      },
    }

    expect(PageSectionSchema.safeParse(invalidArtwork).success).toBe(false)
  })

  it("rejects invalid hero identity assets", () => {
    const invalidLogo = {
      ...heroFixtures[1],
      logo: {
        src: "/images/magic-kolektyw-logo.png",
        alt: "MAGIC Kolektyw",
        width: 0,
        height: 312,
      },
    }

    expect(PageSectionSchema.safeParse(invalidLogo).success).toBe(false)
  })

  it("rejects provider form references in hero content", () => {
    const heroWithLeadForm = {
      ...heroFixtures[1],
      leadFormId: "magic-kolektyw-webinar",
    }

    expect(PageSectionSchema.safeParse(heroWithLeadForm).success).toBe(false)
  })
})
