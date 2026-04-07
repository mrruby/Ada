import TrainingLandingPage from "components/TrainingLandingPage"
import SEO from "components/seo"
import React from "react"
import {
  ANDROMEDA_PAGE_TITLE,
  andromedaBenefits,
  andromedaDescriptionBullets,
  andromedaHeroBgColor,
  andromedaHeroLeft,
} from "values/andromedaLanding"
import formHTML from "../values/forms/form-marketerki.html"

const Andromeda2026Page = () => {
  return (
    <>
      <TrainingLandingPage
        heroBgColor={andromedaHeroBgColor}
        formHTML={formHTML}
        descriptionBullets={andromedaDescriptionBullets}
        benefits={andromedaBenefits}
        heroLeft={andromedaHeroLeft}
      />
    </>
  )
}

export const Head = () => <SEO title={ANDROMEDA_PAGE_TITLE} />

export default Andromeda2026Page
