import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import FeaturesAda from "components/FeaturesAda"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import NewsletterBanner from "components/NewsletterBanner"
import AdaBanner from "components/AdaBanner"
import HelloBanner from "components/HelloBanner"

const AboutPage = (): JSX.Element => {
  return (
    <Layout
      twoBlueFlowers2={true}
    >
      <SEO title="O mnie" />
        <HelloBanner />      
      <MaxWithBgColorContainer bgColor="bg-linear4">
        <AdaBanner />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <FeaturesAda />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
          <NewsletterBanner 
            title2
            twoParagraphs
          />
      </MaxWithBgColorContainer>      
    </Layout>
  )
}

export default AboutPage
