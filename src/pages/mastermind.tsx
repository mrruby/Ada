import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import AboutBanner2 from "components/AboutBanner2"
import References from "components/References"
import Questions from "components/Questions"
import MastermindBanner from "components/MastermindBanner"
import MastermindSteps from "components/MastermindSteps"
import MastermindWhy1 from "components/MastermindWhy1"
import MastermindWhy2 from "components/MastermindWhy2"
import MastermindInfo1 from "components/MastermindInfo1"
import MastermindInfo2 from "components/MastermindInfo2"
import MastermindAgenda from "components/MastermindAgenda"

const MastermindPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Ogarnij swoje Adsy" />
      <MastermindBanner />
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindInfo1 />
        <MastermindWhy1 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindAgenda />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindSteps />
      </MaxWithBgColorContainer>
      <MastermindWhy2 />
      <MaxWithBgColorContainer>
        <References title2 />
        <MastermindInfo2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <Questions />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <AboutBanner2 />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default MastermindPage
