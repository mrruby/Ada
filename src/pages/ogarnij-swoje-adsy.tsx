import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import AboutBanner2 from "components/AboutBanner2"
import Questions from "components/Questions"
import MastermindBanner from "components/MastermindBanner"
import MastermindSteps from "components/MastermindSteps"
import MastermindWhy1 from "components/MastermindWhy1"
import MastermindWhy2 from "components/MastermindWhy2"
import MastermindInfo1 from "components/MastermindInfo1"
import MastermindInfo2 from "components/MastermindInfo2"
import MastermindInfo3 from "components/MastermindInfo3"
import MastermindAgenda from "components/MastermindAgenda"
import Team from "components/Team"
import MasterclassAgenda from "components/MasterclassAgenda"
import Opinions from "components/Opinions"
import MentoringBanner from "components/MentoringBanner"
import IconText from "components/IconText"
import WebinarBanner from "components/WebinarBanner"
import MasterclassFAQ from "components/MasterclassFAQ"
import WebinarAbout from "components/WebinarAbout"

const MastermindPage = (): JSX.Element => {
  return (
    <Layout flowerWhite2={true} flowerWhite3={true}>
      <WebinarBanner version={5} />
      <MaxWithBgColorContainer bgColor="bg-linear7">
        <IconText version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <WebinarAbout version={4}/>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow2">
        <MentoringBanner version={8} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <Team version={2}/>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow2">
        <MentoringBanner version={9} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassAgenda version={8} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MastermindAgenda version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear7">
        <MastermindSteps version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassAgenda version={6} />
        <MasterclassAgenda version={7} />
        <MastermindInfo3 version={3}/>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow2">
        <MentoringBanner version={10} />
      </MaxWithBgColorContainer>
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
