import TrainingLandingPage from "components/TrainingLandingPage"
import SEO from "components/seo"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import formHTML from "../values/forms/form-przedsiebiorczynie.html"

const PrzedsiebiorczniePage = () => {
  return (
    <TrainingLandingPage
      heroBgColor="bg-ada-magicOrange2"
      formHTML={formHTML}
      heroLeft={
        <StaticImage
          src="../images/reklamy.webp"
          alt="Reklamy"
          placeholder="blurred"
          className="w-full"
        />
      }
    />
  )
}

export const Head = () => <SEO title="Przedsiębiorczynie" />

export default PrzedsiebiorczniePage
