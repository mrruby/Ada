import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MastermindVideo from "components/MastermindVideo"
import IconText from "components/IconText"
import MentoringBanner from "components/MentoringBanner"
import MentoringWhy from "components/MentoringWhy"
import Opinions from "components/Opinions"
import MentoringWhy2 from "components/MentoringWhy2"
import MastermindSteps from "components/MastermindSteps"
import MentoringInfo from "components/MentoringInfo"
import MentoringAbout from "components/MentoringAbout"
import ReferencesMentoring from "components/ReferencesMentoring"
import MastermindInfo3 from "components/MastermindInfo3"
import MastermindPrice from "components/MastermindPrice"
import MasterclassFAQ from "components/MasterclassFAQ"
import MastermindAgenda from "components/MastermindAgenda"

const WebinarReplayPage = (): JSX.Element => {
  return (
    <Layout flowerWhite2={true} flowerWhite3={true}>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MastermindVideo
          videoUrl="https://www.youtube.com/embed/y_HOSt8dcy4?si=aKR8v1BbLwZZ1cZq"
          buttonUrl="https://koalendar.com/e/meta-ads-master/"
          targetDate={new Date("2024-04-03T00:00:00")}
        />
      </MaxWithBgColorContainer>
      <IconText />
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MentoringWhy />
      </MaxWithBgColorContainer>
      <Opinions />
      <div className="h-[300px] bg-wave absolute top-[5180px] w-screen"></div>
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
      <MaxWithBgColorContainer>
        <ReferencesMentoring />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-wave-element">
        <MentoringBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MastermindInfo3 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindPrice version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MasterclassFAQ version={2} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Ogarnij swoje Adsy" />

export default WebinarReplayPage
