import React from "react"

import IconText from "components/IconText"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MasterclassAgenda from "components/MasterclassAgenda"
import MasterclassFAQ from "components/MasterclassFAQ"
import MastermindAgenda from "components/MastermindAgenda"
import MastermindBanner from "components/MastermindBanner"
import MastermindInfo3 from "components/MastermindInfo3"
import MastermindSteps from "components/MastermindSteps"
import MentoringAbout from "components/MentoringAbout"
import MentoringBanner from "components/MentoringBanner"
import MentoringInfo from "components/MentoringInfo"
import MentoringWhy from "components/MentoringWhy"
import MentoringWhy2 from "components/MentoringWhy2"
import Opinions from "components/Opinions"
import OpinionVideos from "components/OpinionVideos"
import ReferencesMentoring from "components/ReferencesMentoring"
import Team from "components/Team"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const MentoringPage = () => {
  return (
    <Layout
      flowerBlue={true}
      flowerBlue2={true}
      flowerBlue4={true}
      flowerBlue5={true}
      flowerBlue6={true}
      flowerBlue7={true}
      flowerBlue8={true}
      flowerBlue9={true}
      flowerBlue10={true}
      flowerBlue11={true}
    >
      <MastermindBanner version={2} />
      <IconText version={1} />
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MentoringWhy />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={9} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <OpinionVideos />
      </MaxWithBgColorContainer>
      <Opinions title1 />
      <div className="h-[300px] bg-wave absolute top-[4080px] w-screen"></div>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MentoringWhy2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MastermindAgenda version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindSteps version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MentoringInfo />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-wave-element">
        <MentoringBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MentoringAbout />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={8} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <Team version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <ReferencesMentoring title1 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-wave-element">
        <MentoringBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MastermindInfo3 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassAgenda version={11} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MasterclassFAQ version={2} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Meta Ads Masters Mentoring" />

export default MentoringPage
