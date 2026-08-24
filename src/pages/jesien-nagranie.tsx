import JesienNagranie from "components/JesienNagranie"
import SEO from "components/seo"
import React from "react"
import {
  JESIEN_NAGRANIE_DESCRIPTION,
  JESIEN_NAGRANIE_TITLE,
} from "values/jesienLanding"

const JesienNagraniePage = () => <JesienNagranie />

export const Head = () => (
  <>
    <SEO
      title={JESIEN_NAGRANIE_TITLE}
      description={JESIEN_NAGRANIE_DESCRIPTION}
      image="https://adrianna.com.pl/img/ada_purple.webp"
    />
    {/* Strona dostępna tylko z linku w mailu — nie indeksujemy. */}
    <meta name="robots" content="noindex, nofollow" />
  </>
)

export default JesienNagraniePage
