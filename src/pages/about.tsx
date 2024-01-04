import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import FeaturesAda from "components/FeaturesAda"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import AboutBanner from "components/AboutBanner"
import AdaBanner from "components/AdaBanner"
import HelloBanner from "components/HelloBanner"
import Cooperation from "components/Cooperation"
import MeetMeBanner from "components/MeetMeBanner"
import Puzzles from "components/Puzzles"
import MasterclassBanner from "components/MasterclassBanner"
import MasterclassInfo1 from "components/MasterclassInfo1"
import MasterclassInfo2 from "components/MasterclassInfo2"
import MasterclassInfo3 from "components/MasterclassInfo3"
import MasterclassInfo4 from "components/MasterclassInfo4"
const AboutPage = (): JSX.Element => {
  return (
    <Layout twoBlueFlowers2={true}>
      {/* <MaxWithBgColorContainer> */}
      <MasterclassBanner />
      {/* </MaxWithBgColorContainer> */}
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassInfo1 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassInfo2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassInfo3 />
        <MasterclassInfo4 />
      </MaxWithBgColorContainer>
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

export const Head = () => <SEO title="O mnie" />

export default AboutPage
