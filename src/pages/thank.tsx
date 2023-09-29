import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CustomBanner from "components/CustomBanner"
import { StaticImage } from "gatsby-plugin-image"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"

const ThankYouPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Thank you page" />
      <MaxWithBgColorContainer>
        <CustomBanner
        paragraph1={<>Sprawdź koniecznie maila!</>}
        title="Dziękuję za zapis!"
        image={<StaticImage src={"../images/thank.webp"} alt="banner"  placeholder="none"  width={690} height={690}  />}
        actionButton={false}
        btnText=""
        btnUrl=""
        />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default ThankYouPage
