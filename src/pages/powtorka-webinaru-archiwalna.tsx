import AboutBanner2 from "components/AboutBanner2"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MastermindAgenda from "components/MastermindAgenda"
import MastermindFAQ from "components/MastermindFAQ"
import MastermindInfo1 from "components/MastermindInfo1"
import MastermindInfo2 from "components/MastermindInfo2"
import MastermindInfo3 from "components/MastermindInfo3"
import MastermindPrice from "components/MastermindPrice"
import MastermindSteps from "components/MastermindSteps"
import MastermindVideo from "components/MastermindVideo"
import MastermindWhy1 from "components/MastermindWhy1"
import MastermindWhy2 from "components/MastermindWhy2"
import Questions from "components/Questions"
import References from "components/References"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const WebinarReplayPageArchive = () => {
  return (
    <Layout flowerWhite2={true} flowerWhite3={true}>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MastermindVideo
          videoUrl="https://www.youtube.com/embed/T8BlrsS4lLE?si=Cd2vxXE0l7xTJDKE"
          buttonUrl="https://koalendar.com/e/ogarnij-swoje-adsy-konsultacja/"
          targetDate={new Date("2023-12-05T00:00:00")}
        />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindInfo1 />
        <MastermindWhy1 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindAgenda version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindSteps version={1} />
        <MastermindWhy2 />
        <References title2 />
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
    </Layout>
  )
}

export const Head = () => <SEO title="Ogarnij swoje Adsy" />

export default WebinarReplayPageArchive
