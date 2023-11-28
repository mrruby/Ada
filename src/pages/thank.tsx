import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import ThankBanner from "components/ThankBanner"

const ThankYouPage2 = (): JSX.Element => {
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
