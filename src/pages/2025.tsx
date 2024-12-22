import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicTitle from "components/MagicTitle"
import HolidayFormTop from "components/HolidayFormTop"
import MagicBanner1 from "components/MagicBanner"
import MagicDateBanner from "components/MagicDateBanner"
import MagicBioBanner from "components/MagicBioBanner"
import MagicApproachSection from "components/MagicApproachSection"
import MagicLastSection from "components/MagicLastSection"

const MasterclassPage = (): JSX.Element => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MaxWithBgColorContainer bgColor="bg-ada-newPurple">
        <MagicTitle />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicBanner1 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicDateBanner />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink6">
        <MagicBioBanner />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple2">
        <MagicApproachSection />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3">
        <MagicLastSection />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Warsztat - Niech kampanie pracują na moje wakacje!" />
)

export default MasterclassPage
