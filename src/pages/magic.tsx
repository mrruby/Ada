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
import magicZainteresowaniForm from "values/forms/magic-zainteresowani.html"

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
        <ReferencesMentoring title5 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple2">
        <MagicLastSection version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassFAQ version={5} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <section id="zainteresowani-form">
          <div
            className="max-w-2xl my-24 mx-auto"
            dangerouslySetInnerHTML={{ __html: magicZainteresowaniForm }}
          />
        </section>
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
