import IconText from "components/IconText"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MasterclassFAQ from "components/MasterclassFAQ"
import MastermindAgenda from "components/MastermindAgenda"
import MastermindInfo3 from "components/MastermindInfo3"
import MastermindPrice from "components/MastermindPrice"
import MastermindSteps from "components/MastermindSteps"
import MentoringAbout from "components/MentoringAbout"
import MentoringBanner from "components/MentoringBanner"
import MentoringInfo from "components/MentoringInfo"
import MentoringWhy from "components/MentoringWhy"
import MentoringWhy2 from "components/MentoringWhy2"
import Opinions from "components/Opinions"
import ReferencesMentoring from "components/ReferencesMentoring"
import SEO from "components/seo"
import React from "react"

const WebinarReplayPage = () => {
  return (
    <Layout flowerWhite2={true} flowerWhite3={true}>
      <SEO title="Ogarnij swoje Adsy" />
      <MaxWithBgColorContainer bgColor="bg-linear2">
        {/* <MastermindVideo
          videoUrl="https://www.youtube.com/embed/y_HOSt8dcy4?si=aKR8v1BbLwZZ1cZq"
          buttonUrl="https://koalendar.com/e/meta-ads-master/"
          targetDate={new Date("2024-04-04T23:59:59")}
        /> */}
        <div className="text-center mt-20 mb-10 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-semibold">
            Twój dostęp do nagrania się skończył, ale rekrutacja do Meta Ads
            Masters Mentoring wciąż trwa! Nie przegap i zarezerwuj termin
            niezobowiązującego spotkania do 4 kwietnia do końca dnia.
          </p>
        </div>
      </MaxWithBgColorContainer>
      <IconText version={1} />
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

export default WebinarReplayPage
