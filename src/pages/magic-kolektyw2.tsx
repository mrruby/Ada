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
            <MagicCollectiveBanner version={11} />
          </div>
        </div>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={12} />
      </MaxWithBgColorContainer>
      <div id="info">
        <MaxWithBgColorContainer bgColor="bg-magic-grid relative">
          <MagicBanner3 version={2} />
        </MaxWithBgColorContainer>
      </div>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={13} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-pink">
        <MagicCollectiveBanner version={14} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={15} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicCollectiveBanner version={16} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-grid relative">
        <MagicCollectiveBanner version={17} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-pink">
        <MagicCollectiveBanner version={18} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={19} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicCollectiveBanner version={20} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={21} />
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
