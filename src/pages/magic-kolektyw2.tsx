import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner3 from "components/MagicBanner3"
import MagicCollectiveBanner from "components/MagicCollectiveBanner"
import MagicTitle from "components/MagicTitle"

import SEO from "components/seo"
import React from "react"

const MagicCollective2Page = (): JSX.Element => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicTitle version={5} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-pink">
        <div className="max-w-6xl mx-auto">
          <div className="bg-ada-white2 py-8 px-4 md:px-8 z-100">
            <MagicCollectiveBanner version={30} />
          </div>
        </div>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={31} />
      </MaxWithBgColorContainer>
      <div id="info">
        <MaxWithBgColorContainer bgColor="bg-magic-grid relative">
          <MagicBanner3 version={2} />
        </MaxWithBgColorContainer>
      </div>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={32} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-pink">
        <MagicCollectiveBanner version={33} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={34} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicCollectiveBanner version={35} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-grid relative">
        <MagicCollectiveBanner version={36} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-pink">
        <MagicCollectiveBanner version={37} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={38} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicCollectiveBanner version={39} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={40} />
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

export default MagicCollective2Page
