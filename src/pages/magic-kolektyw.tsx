import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner3 from "components/MagicBanner3"
import MagicBioBanner2 from "components/MagicBioBanner2"
import MagicCollectiveBanner from "components/MagicCollectiveBanner"
import MagicTitle from "components/MagicTitle"
import ReferencesMentoring from "components/ReferencesMentoring"
import SEO from "components/seo"
import React from "react"

const MagicCollectivePage = (): JSX.Element => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MaxWithBgColorContainer bgColor="bg-ada-white2 reltive">
        <div className="z-10 relative">
          <MagicTitle version={3} />
        </div>
        <div className="bg-magic-pink2"></div>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple3 z-10 relative">
        <MagicCollectiveBanner version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-green">
        <MagicCollectiveBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple3">
        <MagicCollectiveBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicBioBanner2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-grid">
        <MagicBanner3 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-pink">
        <MagicCollectiveBanner version={5} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicCollectiveBanner version={6} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicPink">
        <MagicCollectiveBanner version={4} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <ReferencesMentoring title6 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicPink2 bg-magicWave">
        <MagicCollectiveBanner version={7} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Magic: Marketing Ads Girls Inside Collective"
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default MagicCollectivePage
