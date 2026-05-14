import React from "react"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicCaseStudies from "components/MagicCaseStudies"
import MagicVideo from "components/MagicVideo"
import MagicBanner from "components/MagicBanner"
import MagicDateBanner from "components/MagicDateBanner"
import MagicBioBanner from "components/MagicBioBanner"
import MagicWhy from "components/MagicWhy"

const MainContent = () => {
  return (
    <>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicCaseStudies />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicVideo />
      </MaxWithBgColorContainer>
      <div className="bg-ada-white3">
        <MagicBanner version={4} />
      </div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicDateBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicDateBanner version={4} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicBioBanner version={3} />
      </MaxWithBgColorContainer>
      <div className="bg-magic">
        <MaxWithBgColorContainer bgColor="bg-transparent">
          <MagicWhy part={12} />
        </MaxWithBgColorContainer>
      </div>
    </>
  )
}

export default MainContent
