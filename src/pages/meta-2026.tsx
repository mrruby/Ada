import TrainingLandingPage from "components/TrainingLandingPage"
import SEO from "components/seo"
import React from "react"
import {
  META_2026_PAGE_TITLE,
  meta2026Benefits,
  meta2026DescriptionBullets,
  meta2026HeroBgColor,
  meta2026HeroLeft,
} from "values/meta2026Landing"
import formHTML from "../values/forms/form-przedsiebiorczynie.html"

const Meta2026Page = () => {
  return (
    <TrainingLandingPage
      heroBgColor={meta2026HeroBgColor}
      formHTML={formHTML}
      descriptionBullets={meta2026DescriptionBullets}
      benefits={meta2026Benefits}
      heroLeft={meta2026HeroLeft}
    />
  )
}

export const Head = () => <SEO title={META_2026_PAGE_TITLE} />

export default Meta2026Page
