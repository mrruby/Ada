import IconText from "components/IconText"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MasterclassAgenda from "components/MasterclassAgenda"
import MasterclassesInfo from "components/MasterclassesInfo"
import MasterclassFAQ from "components/MasterclassFAQ"
import MasterclassPreparing from "components/MasterclassPreparing"
import MentoringBanner from "components/MentoringBanner"
import ReferencesMentoring from "components/ReferencesMentoring"
import WebinarAbout from "components/WebinarAbout"
import { Button } from "helpers/Button"
import CountdownTimer from "helpers/CountdownTimer"
import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { checkAndGenerateDiscountCode } from "../utils/api"

const AdsyAndChill = () => {
  const [endsAt, setEndsAt] = useState<string | null>(null)

  useEffect(() => {
    const fetchEndsAt = async () => {
      const storedEndsAt = localStorage.getItem("endsAt")
      const isExpired = storedEndsAt && new Date(storedEndsAt) < new Date()

      if (isExpired && typeof window !== "undefined") {
        window.location.href = "/5-reklam"
        return
      }

      const newEndsAt =
        storedEndsAt || (await checkAndGenerateDiscountCode("49088728006997"))
      setEndsAt(newEndsAt)
    }

    fetchEndsAt()
  }, [])

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
      showHeaderAndFooter={false}
    >
      <SEO title="Adsy&chill 5 reklam oto" />
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <div className="flex flex-col items-center mt-16">
          <iframe
            className="w-full max-w-[1000px] aspect-video"
            src={"https://www.youtube.com/embed/BLMDf4LVNnc"}
          ></iframe>
        </div>
        {endsAt && (
          <div className="flex flex-col items-center pt-10">
            <CountdownTimer
              text="Skorzystaj z oferty specjalnej przez"
              targetDate={new Date(endsAt)}
            />
            <Button
              type="button"
              text={<span className="font-extrabold uppercase">SPRAWDZAM</span>}
              textSize="text-adaSubtitle"
              btnStyle="md:w-[410px] md:h-[90px] bg-ada-pink2 my-10"
              sectionId="pricing"
            />
          </div>
        )}
      </MaxWithBgColorContainer>
      <div className="opacity-0 xl:opacity-100 h-[180px] bg-wave2 absolute top-[1020px] w-screen z-0"></div>
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
        <ReferencesMentoring title3 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4 mt-5">
        <MasterclassAgenda version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MentoringBanner version={6} />
      </MaxWithBgColorContainer>
      <div
        className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[5180px] w-screen z-0"
        id="masterclasses"
      ></div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4">
        <MasterclassesInfo version={1} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[6690px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassesInfo version={2} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[8100px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4">
        <MasterclassesInfo version={3} />
      </MaxWithBgColorContainer>
      <div className="h-[300px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[9450px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={7} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassPreparing version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassAgenda version={4} endsAt={endsAt} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassFAQ version={3} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default AdsyAndChill
