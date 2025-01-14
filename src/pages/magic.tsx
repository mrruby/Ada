import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicTitle from "components/MagicTitle"
import MagicBanner1 from "components/MagicBanner"
import MagicDateBanner from "components/MagicDateBanner"
import MagicWhy from "components/MagicWhy"
import MagicApproachSection from "components/MagicApproachSection"
import MagicLastSection from "components/MagicLastSection"
import ReferencesMentoring from "components/ReferencesMentoring"

const MasterclassPage = (): JSX.Element => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MaxWithBgColorContainer bgColor="bg-ada-newPurple">
        <MagicTitle version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicBanner1 version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink6">
        <MagicWhy />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicBanner1 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3">
        <MagicDateBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-grey">
        <MagicApproachSection version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple2">
        <MagicApproachSection version={2} />
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
