import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import PuzzleBanner from "components/PuzzleHeader"
import PuzzleContains from "components/PuzzleContains"
import PuzzleEnd from "components/PuzzleEnd"
import PuzzleDesire from "components/PuzzleDesire"
import StaticImageComponent from "components/StaticImageComponent"
import PuzzleDays from "components/PuzzleDays"
import PuzzleAttention from "components/PuzzleAttention"
import PuzzleGood from "components/PuzzleGood"
import PuzzleDream from "components/PuzzleDream"
import PuzzlePerfect from "components/PuzzlePerfect"

const PuzzlePage = (): JSX.Element => {
  return (
    <Layout>
      <StaticImageComponent
        name="ada_puzzle.webp"
        alt="Ada Promis - hero"
        width={650}
        top="top-[215px]"
        right="right-0"
      />
      <MaxWithBgColorContainer>
        <PuzzleBanner />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave2 absolute top-[1020px] w-screen z-50 hidden lg:block" />
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <PuzzleContains />
      </MaxWithBgColorContainer>
      <StaticImageComponent
        name="ada_laptop.webp"
        alt="Ada Promis - laptop"
        width={450}
        top="top-[1575px]"
        left="left-0"
      />
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <PuzzleDesire />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave2 absolute top-[3600px] w-screen hidden lg:block" />
      <StaticImageComponent
        name="ada_puzzle_good.webp"
        alt="Ada Promis - puzzle good"
        width={500}
        top="top-[4200px]"
        left="left-0"
      />
      <MaxWithBgColorContainer bgColor="bg-linear">
        <PuzzleDays />
        <PuzzleAttention />
        <PuzzleGood />
      </MaxWithBgColorContainer>
      <StaticImageComponent
        name="ada_table.webp"
        alt="Ada Promis - puzzle couch"
        width={250}
        top="top-[4655px]"
        right="right-0"
      />
      <MaxWithBgColorContainer bgColor="bg-ada-pink2">
        <PuzzlePerfect />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave2 absolute top-[6350px] w-screen z-50 hidden lg:block" />
      <StaticImageComponent
        name="ada_couch.webp"
        alt="Ada Promis - puzzle couch"
        width={500}
        top="top-[5220px]"
        left="left-0"
      />
      <MaxWithBgColorContainer>
        <PuzzleDream />
        <PuzzleEnd />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Wyzwanie puzzlowe" />

export default PuzzlePage
