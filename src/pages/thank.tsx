import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import ThankBanner from "components/ThankBanner"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const ThankYouPage2 = () => {
  return (
    <Layout>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <ThankBanner version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <ThankBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicPurple5">
        <ThankBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <ThankBanner version={4} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <ThankBanner version={5} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <ThankBanner version={6} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Thank you page" />

export default ThankYouPage2
