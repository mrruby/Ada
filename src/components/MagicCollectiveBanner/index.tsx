import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicCollectiveBanner = ({ version }: { version: number }): JSX.Element => {
  const scrollToWebinarForm = () => {
    const element = document.getElementById("webinar-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPackages = () => {
    const element = document.getElementById("pakiety")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {version == 1 && (
        <Section
          bgColor="bg-magic-banner1"
          className="text-black overflow-hidden sm:mt-10 lg:backdrop:h-[756px] flex justify-center mb-6"
          padding="py-8 px-4 md:px-8"
        >
          <div className="max-w-[510px] pl-[20px] md:pl-[50px]">
          <Typography variant="h3" className="mt-11 font-anton font-normal">
              Prowadzisz rozwijający się biznes online. 
          </Typography>
          <Typography variant="body" className="mt-2 mb-6 font-courier lg:leading-[40px]">
          Publikujesz regularnie, masz już swoją społeczność i zatrudniasz 1-2 osoby. Twoje działania przynoszą efekty, ale czujesz, że marketing mógłby działać jeszcze lepiej.
            </Typography>
          <Typography variant="body" className="mt-12 mb-6 font-courier lg:leading-[40px] max-w-[430px]">
            <span className="font-anton font-normal">Problem?  &nbsp; &nbsp;</span>
          Nie masz czasu ani energii, by samodzielnie zarządzać wszystkimi kanałami marketingowymi. Zatrudnienie pełnego zespołu in-house to zbyt duża inwestycja na tym etapie.
            </Typography>
            <Typography variant="body" className="mt-14 font-courier lg:leading-[40px] max-w-[430px]">
            <span className="font-anton font-normal">Rozwiązanie?  &nbsp; &nbsp;</span>
            MAGIC - Twój zewnętrzny dział marketingu, który przejmie odpowiedzialność za kluczowe obszary promocji Twojego biznesu.
            </Typography>
            </div>
        </Section>
      )}
      {version == 2 && (
        <Section
        bgColor=""
        className="text-black overflow-hidden sm:mt-10"
        padding="py-8 px-4 md:px-8 flex justify-centeritems-center">
        <div className="mx-auto md:w-[563px] bg-magic-banner2 md:h-[444px]">
          <div className="max-w-[438px] pt-9 md:pl-[130px]">
        <Typography variant="h3" className="md:m-5 text-ada-orange font-courier px-2 md:px-0">
          Dlaczego MAGIC?
        </Typography>
        </div>
        <ul className="max-w-[438px] mx-auto list-disc px-2 md:px-0">
          <li className="md:mb-4 md:mt-10">
            <span className="font-bold">Działamy jako Twój zespół </span>
            - jesteśmy stałym partnerem w rozwoju Twojego biznesu</li>
            <li className="md:mb-4">
            <span className="font-bold">Pracujemy na poziomie premium</span>
             - skupiamy się na długoterminowych relacjach i mierzalnych rezultatach</li>
             <li className="md:mb-4">
            <span className="font-bold"> Łączymy strategię z wykonaniem </span>
           - nie tylko doradzamy, ale przede wszystkim wdrażamy i zarządzamy</li>
           <li className="md:mb-8">
            <span className="font-bold">Jesteśmy ADHD friendly</span>
             - rozumiemy dynamikę kreatywnego umysłu i wspólnie z Tobą wypracujemy najlepszy system współpracyu</li>
        </ul>
        </div>
      </Section>
      )}
    </>
  )
}

export default MagicCollectiveBanner
