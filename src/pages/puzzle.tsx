import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import PuzzleBanner from "components/PuzzleHeader"
import PuzzleContains from "components/PuzzleContains"
import PuzzleEnd from "components/PuzzleEnd"

const PuzzlePage = (): JSX.Element => {
  return (
    <Layout>
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
