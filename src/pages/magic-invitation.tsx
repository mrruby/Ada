import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner4 from "components/MagicBanner4"
import MagicBioBanner3 from "components/MagicBioBanner3"
import MagicCollectiveBanner from "components/MagicCollectiveBanner"
import MagicOpinions from "components/MagicOpinions"
import SEO from "components/seo"
import React from "react"

const MagicInvitationPage2 = (): JSX.Element => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={15} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-grid relative">
        <MagicCollectiveBanner version={13} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-pink">
        <div className="max-w-4xl mx-auto">
          <div className="bg-ada-magicGreen py-8 px-4 md:px-20">
            <MagicCollectiveBanner version={16} />
          </div>
        </div>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicBanner4 version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicBanner4 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicBanner4 version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={17} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicBioBanner3 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicOpinions />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-pink">
        <div className="max-w-4xl mx-auto">
          <div className="bg-ada-magicGreen py-8 px-4 md:px-20">
            <MagicCollectiveBanner version={18} />
          </div>
        </div>
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

export default MagicInvitationPage2
