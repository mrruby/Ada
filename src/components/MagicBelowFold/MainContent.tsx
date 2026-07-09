import React from "react"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicCaseStudies from "components/MagicCaseStudies"
import MagicVideo from "components/MagicVideo"
import MagicBanner from "components/MagicBanner"
import MagicDateBanner from "components/MagicDateBanner"
import MagicBioBanner from "components/MagicBioBanner"
import MagicCommunityOpinions from "components/MagicCommunityOpinions"
import MagicWhy from "components/MagicWhy"

const MainContent = () => {
  return (
    <>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicCaseStudies />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicYellow">
        <MagicWhy part={9} />
      </MaxWithBgColorContainer>
      <div className="bg-ada-white3">
        <MagicBanner version={4} />
      </div>
      <MaxWithBgColorContainer bgColor="bg-ada-magicYellow">
        <MagicDateBanner version={5} />
      </MaxWithBgColorContainer>
      <div className="bg-magic -mt-12">
        <MaxWithBgColorContainer bgColor="bg-transparent">
          <MagicWhy part={12} />
        </MaxWithBgColorContainer>
      </div>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicBioBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicVideo />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicYellow">
        <MagicCommunityOpinions showResults />
      </MaxWithBgColorContainer>
    </>
  )
}

export default MainContent
