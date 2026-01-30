import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicApproachSection from "components/MagicApproachSection"
import MagicBanner1 from "components/MagicBanner"
import MagicBioBanner from "components/MagicBioBanner"
import MagicDateBanner from "components/MagicDateBanner"
import MagicLastSection from "components/MagicLastSection"
import MagicTitle from "components/MagicTitle"
import ReferencesMentoring from "components/ReferencesMentoring"
import SEO from "components/seo"
import React from "react"

const MasterclassPage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <SEO
        title="WEBINAR: 3 zmiany w reklamach Twojego biznesu, które zadziałają w 2025 roku"
        image="https://adrianna.com.pl/img/ada_purple.webp"
      />
      <MaxWithBgColorContainer bgColor="bg-ada-newPurple">
        <MagicTitle version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicBanner1 version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <ReferencesMentoring title3 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicDateBanner version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink6">
        <MagicBioBanner version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple2">
        <MagicApproachSection version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3">
        <MagicLastSection version={1} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default MasterclassPage
