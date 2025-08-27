import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import ThankBanner from "components/ThankBanner"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const ThankYouPage2 = () => {
  return (
    <Layout>
      <MaxWithBgColorContainer>
        <ThankBanner />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Thank you page" />

export default ThankYouPage2
