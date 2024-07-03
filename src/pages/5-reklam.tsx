import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import WebinarBanner from "components/WebinarBanner"
import MasterclassFAQ from "components/MasterclassFAQ"
import IconText from "components/IconText"
import WebinarAbout from "components/WebinarAbout"
import ReferencesMentoring from "components/ReferencesMentoring"
import MasterclassPreparing from "components/MasterclassPreparing"
import MentoringBanner from "components/MentoringBanner"
import MasterclassAgenda from "components/MasterclassAgenda"
import MasterclassesInfo from "components/MasterclassesInfo"
import CountdownTimer from "helpers/CountdownTimer"

const AdsyAndChill = (): JSX.Element => {
  return (
    <Layout
      flowerBlue2={true}
      flowerBlue5={true}
      flowerBlue7={true}
      flowerBlue8={true}
      flowerBlue9={true}
      flowerBlue10={true}
      flowerBlue11={true}
      sun6={true}
      sunglasses2={true}
      flaps2={true}
      ball3={true}
      drinks={true}
    >
      <div className="flex flex-col items-center mt-8">
        <h2 className="lg:text-adaSubtitleThird font-bold text-center animate-bounce uppercase mt-10 pb-4">
          DO KOŃCA PRZEDSPRZEDAŻY POZOSTAŁO..
        </h2>
        <CountdownTimer targetDate={new Date("2024-07-05T18:00:00")} />
      </div>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <div className="flex flex-col items-center mt-16">
          <iframe
            className="w-full max-w-[1000px] aspect-video"
            src={
              "https://www.youtube.com/embed/vse0cr-Yk0o?si=k67c3Q0fVMesMFzb"
            }
          ></iframe>
        </div>
      </MaxWithBgColorContainer>
      <div className="opacity-0 xl:opacity-100 h-[180px] bg-wave2 absolute top-[820px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <IconText version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassAgenda version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <WebinarAbout version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <ReferencesMentoring title1 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4 mt-5">
        <MasterclassAgenda version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MentoringBanner version={6} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[5680px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4">
        <MasterclassesInfo version={1} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[7190px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassesInfo version={2} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[8800px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4">
        <MasterclassesInfo version={3} />
      </MaxWithBgColorContainer>
      <div className="h-[300px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[10250px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={7} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassPreparing version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassAgenda version={4} />
      </MaxWithBgColorContainer>
      <div className="h-[300px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[12650px] 2xl:top-[12750px]  w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassFAQ version={3} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Adsy&chill" />

export default AdsyAndChill
