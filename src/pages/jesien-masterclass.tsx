import JesienMasterclass from "components/JesienMasterclass"
import SEO from "components/seo"
import React from "react"
import {
  JESIEN_MASTERCLASS_DESCRIPTION,
  JESIEN_MASTERCLASS_TITLE,
} from "values/jesienMasterclass"

// Alias: ta sama strona co /masterclass-jesien, dostępna też pod /jesien-masterclass.
const JesienMasterclassPage = () => <JesienMasterclass />

export const Head = () => (
  <SEO
    title={JESIEN_MASTERCLASS_TITLE}
    description={JESIEN_MASTERCLASS_DESCRIPTION}
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default JesienMasterclassPage
