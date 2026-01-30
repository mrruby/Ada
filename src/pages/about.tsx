import AboutBanner from "components/AboutBanner"
import AdaBanner from "components/AdaBanner"
import Cooperation from "components/Cooperation"
import FeaturesAda from "components/FeaturesAda"
import HelloBanner from "components/HelloBanner"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MeetMeBanner from "components/MeetMeBanner"
import Puzzles from "components/Puzzles"
import SEO from "components/seo"
import React from "react"

const AboutPage = () => {
  return (
    <Layout twoBlueFlowers2={true}>
      <SEO title="O mnie" />
      <HelloBanner />
      <MaxWithBgColorContainer bgColor="bg-linear4">
        <AdaBanner />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer
        bgColor="bg-ada-light-pink"
        extraStyle="lg:h-[208px]"
      >
        <FeaturesAda />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-white" extraStyle="lg:h-[180px]">
        <span></span>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear5">
        <Cooperation />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MeetMeBanner />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <AboutBanner />
        <Puzzles />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default AboutPage
