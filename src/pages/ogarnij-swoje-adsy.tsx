import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import IconText from "components/IconText"
import MastermindInfo3 from "components/MastermindInfo3"
import MastermindSteps from "components/MastermindSteps"
import MasterclassAgenda from "components/MasterclassAgenda"
import MasterclassFAQ from "components/MasterclassFAQ"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MentoringBanner from "components/MentoringBanner"
import ReferencesMentoring from "components/ReferencesMentoring"
import Team from "components/Team"
import WebinarAbout from "components/WebinarAbout"
import WebinarBanner from "components/WebinarBanner"
import MastermindAgenda from "components/MastermindAgenda"

const MastermindPage = (): JSX.Element => {
  return (
    <Layout flowerWhite2={true} flowerWhite3={true}>
      <WebinarBanner version={5} />
      <MaxWithBgColorContainer bgColor="bg-linear7">
        <IconText version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <WebinarAbout version={4} />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave3 absolute top-[1610px] w-screen hidden lg:block" />
      <div className="h-[200px] bg-wave3 absolute top-[3610px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer bgColor="bg-ada-yellow2">
        <MentoringBanner version={8} />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave3 absolute top-[5310px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer>
        <Team version={2} />
        <ReferencesMentoring title4 version="3" />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-leaves absolute top-[5780px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer bgColor="bg-ada-yellow2">
        <MentoringBanner version={9} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassAgenda version={8} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MastermindAgenda version={3} />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave3 absolute top-[8450px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer bgColor="bg-linear7">
        <MastermindSteps version={3} />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave3 absolute top-[10100px] w-screen hidden lg:block" />
      <div className="h-[200px] bg-wave3 absolute top-[10750px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer>
        <MasterclassAgenda version={6} />
        <MasterclassAgenda version={7} />
        <MastermindInfo3 version={3} />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-leaves absolute top-[11400px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer bgColor="bg-ada-yellow2">
        <MentoringBanner version={10} />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave3 absolute top-[12600px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer>
        <MasterclassAgenda version={5} />
        <MasterclassAgenda version={9} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow2">
        <WebinarBanner version={6} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassFAQ version={4} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Ogarnij swoje Adsy Mentoring" />

export default MastermindPage
