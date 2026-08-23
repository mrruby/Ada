import JesienLanding from "components/JesienLanding"
import SEO from "components/seo"
import React from "react"
import {
  JESIEN_PAGE_DESCRIPTION,
  JESIEN_PAGE_TITLE,
} from "values/jesienLanding"

const JesienPage = () => <JesienLanding />

export const Head = () => (
  <SEO
    title={JESIEN_PAGE_TITLE}
    description={JESIEN_PAGE_DESCRIPTION}
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default JesienPage
