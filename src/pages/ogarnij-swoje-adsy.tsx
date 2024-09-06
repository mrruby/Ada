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
    <Layout leaves1={true} leaves2={true} leaves3={true} leaves4={true} leaves5={true} leaves6={true} leaves7={true} leaves8={true} leaves9={true} leaves10={true} leaves11={true} leaves12={true} leaves13={true} leaves14={true} leaves15={true}>
      <WebinarBanner version={5} />
      <MaxWithBgColorContainer bgColor="bg-linear7">
        <IconText version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <WebinarAbout version={4} />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave3 absolute top-[1600px] w-screen hidden lg:block" />
      <div className="h-[200px] bg-wave3 absolute top-[3350px] 2xl:top-[3500px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer bgColor="bg-ada-yellow2">
        <MentoringBanner version={8} />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave3 absolute top-[5050px] 2xl:top-[5350px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer>
        <Team version={2} />
        <ReferencesMentoring title4 version="3" />
      </MaxWithBgColorContainer>
      <div className="h-[270px] bg-leaves absolute top-[5500px] 2xl:top-[5750px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer bgColor="bg-ada-yellow2">
        <MentoringBanner version={9} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassAgenda version={8} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MastermindAgenda version={3} />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave3 absolute top-[8850px] 2xl:top-[9180px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer bgColor="bg-linear7">
        <MastermindSteps version={3} />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave3 absolute top-[9750px] 2xl:top-[9990px]  w-screen hidden lg:block" />
      <div className="h-[200px] bg-wave3 absolute top-[10800px] 2xl:top-[10900px] w-screen hidden lg:block" />
      <div className="h-[200px] bg-wave3 absolute top-[11450px] 2xl:top-[11520px] w-screen hidden lg:block" />
      <div className="h-[270px] bg-leaves absolute top-[12020px] 2xl:top-[12120px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer>
        <MasterclassAgenda version={6} />
        <MasterclassAgenda version={7} />
        <MastermindInfo3 version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow2">
        <MentoringBanner version={10} />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave3 absolute top-[13280px] w-screen hidden lg:block" />
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
