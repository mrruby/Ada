import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import PuzzleBanner from "components/PuzzleHeader"
import PuzzleContains from "components/PuzzleContains"
import PuzzleEnd from "components/PuzzleEnd"
import { StaticImage } from "gatsby-plugin-image"

const PuzzlePage = (): JSX.Element => {
  return (
    <Layout>
      <div className="absolute right-0 top-[70px] hidden lg:block -z-50">
        <StaticImage
          src={"../images/ada_puzzle.webp"}
          alt="Ada Promis - hero"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      </div>
      <MaxWithBgColorContainer>
        <PuzzleBanner />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave2 absolute top-[1020px] w-screen z-50"></div>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <PuzzleContains />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave2 absolute top-[2220px] w-screen z-50"></div>
      <MaxWithBgColorContainer>
        <PuzzleEnd />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Wyzwanie puzzlowe" />

export default PuzzlePage
