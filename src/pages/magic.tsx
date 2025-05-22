import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner1 from "components/MagicBanner"
import MagicBanner2 from "components/MagicBanner2"
import MagicBioBanner from "components/MagicBioBanner"
import MagicDateBanner from "components/MagicDateBanner"
import MagicLastSection from "components/MagicLastSection"
import MagicTitle from "components/MagicTitle"
import MagicWhy from "components/MagicWhy"
import MasterclassFAQ from "components/MasterclassFAQ"
import ReferencesMentoring from "components/ReferencesMentoring"
import SEO from "components/seo"
import React from "react"

const MasterclassPage = (): JSX.Element => {

  return (
    <Layout showHeaderAndFooter={false}>
      <MaxWithBgColorContainer bgColor="bg-ada-newPurple">
        <MagicTitle version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicBanner1 version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink7">
        <MagicWhy part={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="">
        <MagicWhy part={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3">
        <MagicDateBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink7">
        <MagicWhy part={5} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicWhy part={6} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicWhy part={7} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicBanner1 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3">
        <MagicWhy part={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink7">
        <MagicWhy part={4} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3 z-2 relative">
        <MagicBioBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicBanner2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3 z-2 relative">
        <ReferencesMentoring title5 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple2">
        <MagicLastSection version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassFAQ version={5} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Magic: Poznaj… Meta Ads Girls Inside Club"
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default MasterclassPage
