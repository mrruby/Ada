import HomePageList from "components/HomePageList"
import HomePageNewBanner from "components/HomePageNewBanner"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import SEO from "components/seo"
import React from "react"

const IndexPage = () => {
  return (
    <Layout>
      <MaxWithBgColorContainer bgColor="bg-magic-grid relative">
        <HomePageNewBanner />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <HomePageList />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Home" />

export default IndexPage
