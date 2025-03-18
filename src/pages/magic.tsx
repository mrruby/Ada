import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicTitle from "components/MagicTitle"
import MagicBanner1 from "components/MagicBanner"
import MagicDateBanner from "components/MagicDateBanner"
import MagicWhy from "components/MagicWhy"
import ReferencesMentoring from "components/ReferencesMentoring"
import MagicBanner2 from "components/MagicBanner2"
import MagicBioBanner from "components/MagicBioBanner"
import MasterclassFAQ from "components/MasterclassFAQ"
import MagicLastSection from "components/MagicLastSection"

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
      <MaxWithBgColorContainer>
        <MagicBanner1 version={2} />
      </MaxWithBgColorContainer>
      {/* do podmiany png kalendarza */}
      {/* <MaxWithBgColorContainer bgColor="bg-ada-yellow3">
        <MagicWhy part={3} />
      </MaxWithBgColorContainer> */}
      {/* <MaxWithBgColorContainer bgColor="bg-ada-pink7">
        <MagicWhy part={4} />
      </MaxWithBgColorContainer> */}
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3 z-2 relative">
        <MagicBioBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicBanner2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3 z-2 relative">
        <ReferencesMentoring title5 version="1" />
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
