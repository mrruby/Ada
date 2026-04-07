import TrainingLandingPage from "components/TrainingLandingPage"
import SEO from "components/seo"
import React from "react"
import {
  ADVANTAGE_PAGE_TITLE,
  advantageBenefits,
  advantageBenefitsTitle,
  advantageDescriptionBullets,
  advantageHeroBgColor,
  advantageHeroLeft,
  advantageMockupImage,
  advantageSectionTitle,
} from "values/advantageLanding"
import formHTML from "../values/forms/form-marketerki.html"

const AdvantagePage = () => {
  return (
    <TrainingLandingPage
      heroBgColor={advantageHeroBgColor}
      formHTML={formHTML}
      descriptionBullets={advantageDescriptionBullets}
      benefits={advantageBenefits}
      sectionTitle={advantageSectionTitle}
      benefitsTitle={advantageBenefitsTitle}
      mockupImage={advantageMockupImage}
      heroLeft={advantageHeroLeft}
    />
  )
}

export const Head = () => <SEO title={ADVANTAGE_PAGE_TITLE} />

export default AdvantagePage
