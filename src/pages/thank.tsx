import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CustomBanner from "components/CustomBanner"
import { StaticImage } from "gatsby-plugin-image"

const ThankYouPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Thank you page" />
      <CustomBanner
        paragraph1="Sprawdź koniecznie maila!"
        title="Dziękuję za zapis!"
        image={<StaticImage src={"../images/thank.webp"} alt="banner" />}
      />
    </Layout>
  )
}

export default ThankYouPage
