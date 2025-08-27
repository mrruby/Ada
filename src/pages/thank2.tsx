import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import ThankBanner2 from "components/ThankBanner2"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const ThankYouPage = () => {
  return (
    <Layout>
      <MaxWithBgColorContainer>
        <ThankBanner2 />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Thank you page" />

export default ThankYouPage
