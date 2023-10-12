import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import ThankBanner from "components/ThankBanner"

const ThankYouPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Thank you page" />
      <MaxWithBgColorContainer>
        <ThankBanner/>
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default ThankYouPage
