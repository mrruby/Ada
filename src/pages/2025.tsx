import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicTitle from "components/MagicTitle"
import MagicBanner1 from "components/MagicBanner"
import MagicDateBanner from "components/MagicDateBanner"
import MagicBioBanner from "components/MagicBioBanner"
import MagicApproachSection from "components/MagicApproachSection"
import MagicLastSection from "components/MagicLastSection"
import ReferencesMentoring from "components/ReferencesMentoring"

const MasterclassPage = (): JSX.Element => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MaxWithBgColorContainer bgColor="bg-ada-newPurple">
        <MagicTitle version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicBanner1 version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <ReferencesMentoring title3 version="1" />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicDateBanner version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink6">
        <MagicBioBanner />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple2">
        <MagicApproachSection version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3">
        <MagicLastSection />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="WEBINAR: 3 zmiany w reklamach Twojego biznesu, które zadziałają w 2025 roku"
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default MasterclassPage
