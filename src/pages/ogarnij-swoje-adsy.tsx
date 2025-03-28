import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import IconText from "components/IconText"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MasterclassAgenda from "components/MasterclassAgenda"
import MasterclassFAQ from "components/MasterclassFAQ"
import MastermindAgenda from "components/MastermindAgenda"
import MastermindInfo3 from "components/MastermindInfo3"
import MastermindSteps from "components/MastermindSteps"
import MentoringBanner from "components/MentoringBanner"
import ReferencesMentoring from "components/ReferencesMentoring"
import Team from "components/Team"
import WebinarAbout from "components/WebinarAbout"
import WebinarBanner from "components/WebinarBanner"

const MastermindPage = (): JSX.Element => {
  return (
    <Layout showHeaderAndFooter={false}>
      <WebinarBanner version={5} />
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <IconText version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <WebinarAbout version={4} />
        <ReferencesMentoring title4 version="3" />
      </MaxWithBgColorContainer>
      <div className="h-[200px] bg-wave2 absolute top-[1700px] w-screen hidden lg:block" />
      <div className="h-[200px] bg-wave2 absolute top-[3300px] 2xl:top-[3500px] w-screen hidden lg:block" />
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={9} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassAgenda version={8} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MastermindAgenda version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindSteps version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassAgenda version={6} />
        <MasterclassAgenda version={7} />
        <MastermindInfo3 version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassAgenda version={12} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={8} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <Team version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassFAQ version={4} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Ogarnij swoje Adsy Mentoring" />

export default MastermindPage
