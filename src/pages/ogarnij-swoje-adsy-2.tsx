import AboutBanner2 from "components/AboutBanner2"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MastermindAgenda from "components/MastermindAgenda"
import MastermindBanner from "components/MastermindBanner"
import MastermindFAQ from "components/MastermindFAQ"
import MastermindInfo1 from "components/MastermindInfo1"
import MastermindInfo2 from "components/MastermindInfo2"
import MastermindInfo3 from "components/MastermindInfo3"
import MastermindPrice from "components/MastermindPrice"
import MastermindSteps from "components/MastermindSteps"
import MastermindWhy1 from "components/MastermindWhy1"
import MastermindWhy2 from "components/MastermindWhy2"
import MentoringForm from "components/MentoringForm"
import Opinions from "components/Opinions"
import Questions from "components/Questions"
import ReferencesMentoring from "components/ReferencesMentoring"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const MastermindPage = () => {
  return (
    <Layout flowerWhite2={true} flowerWhite3={true}>
      <SEO title="Ogarnij swoje Adsy Mentoring" />
      <MastermindBanner version={1} />
      <MaxWithBgColorContainer bgColor="bg-linear6">
        <MastermindInfo1 />
      </MaxWithBgColorContainer>
      <Opinions title2 />
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindWhy1 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindAgenda version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindSteps version={1} />
        <MastermindWhy2 />
        <ReferencesMentoring title1 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MastermindInfo2 />
        <Questions />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <AboutBanner2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MastermindInfo3 version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindPrice version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MastermindFAQ />
      </MaxWithBgColorContainer>
      <div className="mt-16 mb-10" id="zostaw-maila">
        <MentoringForm version={2} />
      </div>
    </Layout>
  )
}

export default MastermindPage
