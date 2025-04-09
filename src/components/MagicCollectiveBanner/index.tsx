import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicCollectiveBanner = ({
  version,
}: {
  version: number
}): JSX.Element => {
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
            <Typography
              variant="body"
              className="mt-2 mb-6 font-courier lg:leading-[40px]"
            >
              Publikujesz regularnie, masz już swoją społeczność i zatrudniasz
              1-2 osoby. Twoje działania przynoszą efekty, ale czujesz, że
              marketing mógłby działać jeszcze lepiej.
            </Typography>
            <Typography
              variant="body"
              className="mt-12 mb-6 font-courier lg:leading-[40px] max-w-[430px]"
            >
              <span className="font-anton font-normal">
                Problem? &nbsp; &nbsp;
              </span>
              Nie masz czasu ani energii, by samodzielnie zarządzać wszystkimi
              kanałami marketingowymi. Zatrudnienie pełnego zespołu in-house to
              zbyt duża inwestycja na tym etapie.
            </Typography>
            <Typography
              variant="body"
              className="mt-14 font-courier lg:leading-[40px] max-w-[430px]"
            >
              <span className="font-anton font-normal">
                Rozwiązanie? &nbsp; &nbsp;
              </span>
              MAGIC - Twój zewnętrzny dział marketingu, który przejmie
              odpowiedzialność za kluczowe obszary promocji Twojego biznesu.
            </Typography>
          </div>
        </Section>
      )}
      {version == 2 && (
        <Section
          bgColor=""
          className="text-black overflow-hidden sm:mt-10"
          padding="py-8 px-4 md:px-8 flex justify-centeritems-center"
        >
          <div className="mx-auto md:w-[563px] bg-magic-banner2 md:h-[444px]">
            <div className="max-w-[438px] pt-9 md:pl-[130px]">
              <Typography
                variant="h3"
                className="md:m-5 text-ada-orange font-anton font-normal px-2 md:px-0"
              >
                Dlaczego MAGIC?
              </Typography>
            </div>
            <ul className="max-w-[438px] mx-auto list-disc px-2 md:px-0">
              <li className="md:mb-4 md:mt-10">
                <span className="font-bold">Działamy jako Twój zespół </span>-
                jesteśmy stałym partnerem w rozwoju Twojego biznesu
              </li>
              <li className="md:mb-4">
                <span className="font-bold">Pracujemy na poziomie premium</span>
                - skupiamy się na długoterminowych relacjach i mierzalnych
                rezultatach
              </li>
              <li className="md:mb-4">
                <span className="font-bold">
                  {" "}
                  Łączymy strategię z wykonaniem{" "}
                </span>
                - nie tylko doradzamy, ale przede wszystkim wdrażamy i
                zarządzamy
              </li>
              <li className="md:mb-8">
                <span className="font-bold">Jesteśmy ADHD friendly</span>-
                rozumiemy dynamikę kreatywnego umysłu i wspólnie z Tobą
                wypracujemy najlepszy system współpracy
              </li>
            </ul>
          </div>
        </Section>
      )}
      {version == 3 && (
        <Section
          bgColor=""
          className="text-black overflow-hidden sm:mt-10"
          padding="py-8 px-4 md:px-8 flex justify-centeritems-center"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
            <div className="w-full md:w-1/2 mt-8 animate-bounce">
              <div className="bg-ada-magicGrey border-ada-orange border rounded-3xl max-w-[360px] mx-auto">
                <Typography
                  variant="h2"
                  className="p-2 font-anton font-normal text-center text-ada-orange"
                >
                  Dla kogo jest MAGIC?
                </Typography>
              </div>
              <Typography variant="body" className="mt-4 mb-6 text-center">
                Nasze usługi są idealnym rozwiązaniem <br />
                dla przedsiębiorczyń, które:
              </Typography>
              <div className="max-w-[438px] mx-auto px-2 md:px-0">
                <div className="flex gap-2">
                  <div className="w-[40px] mt-4">
                    <StaticImage
                      src={"../../images/magicFlower.svg"}
                      alt=""
                      placeholder="blurred"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="mt-2">
                    Prowadzą <b>ustabilizowany biznes online</b>
                    <br /> (kursy, mentoring, usługi)
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="w-[40px] h-[40px] mt-4">
                    <StaticImage
                      src={"../../images/magicFlower.svg"}
                      alt=""
                      placeholder="blurred"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="mt-2">
                    <b>Regularnie publikują</b> treści <b>i budują</b>
                    <br /> swoją społeczność
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="w-[40px] h-[40px] mt-4">
                    <StaticImage
                      src={"../../images/magicFlower.svg"}
                      alt=""
                      placeholder="blurred"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="mt-2">
                    Zatrudniają minimum <b>1-2 osoby</b> w swoim zespole
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="w-[40px] h-[40px] mt-4">
                    <StaticImage
                      src={"../../images/magicFlower.svg"}
                      alt=""
                      placeholder="blurred"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="mt-2">
                    <b>Są gotowe na skalowanie biznesu</b> <br />
                    poprzez profesjonalny marketing
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end md:-mt-6 mb-4">
              <StaticImage
                src={"../../images/magic-hero2.webp"}
                alt="Ada Promis"
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
                width={410}
                height={592}
                quality={95}
              />
            </div>
          </div>
          <div className="flex justify-center -mb-6 relative">
            <a href="#umawiam-spotkanie">
              <StaticImage
                src={"../../images/magicBtn.svg"}
                alt=""
                placeholder="blurred"
                width={80}
                height={80}
              />
            </a>
          </div>
        </Section>
      )}
      {version == 4 && (
        <Section
          bgColor=""
          className="text-black overflow-hidden sm:mt-10"
          padding="py-8 px-4 md:px-8 flex justify-center items-center"
          id="umawiam-spotkanie"
        >
          <div className="text-center md:text-left mx-auto md:w-[563px] bg-magic-banner2 md:h-[444px]">
            <div className="pt-9 md:pl-[130px]">
              <Typography
                variant="body"
                className="md:m-5 text-ada-orange font-anton px-2 md:px-0 md:text-adaTitle2 font-normal"
              >
                Rozpocznij współpracę z MAGIC
              </Typography>
            </div>
            <Typography
              variant="body"
              className="md:mt-20 text-center font-bold px-2 md:px-0"
            >
              Umów bezpłatną rozmowę wstepną, podczas której:
            </Typography>
            <ul className="max-w-[438px] mx-auto px-2 md:px-0">
              <li className="md:mb-4 md:mt-10">
                ✅ Przeanalizujemy Twoją obecną sytuację marketingową
              </li>
              <li className="md:mb-4">
                ✅ Zaproponujemy rozwiązania dopasowane do Twoich potrzeb
              </li>
              <li className="md:mb-4">
                ✅ Przedstawimy plan działania i oczekiwane rezultaty
              </li>
            </ul>
          </div>
          <div className="flex justify-center mt-4 md:-mt-8">
            <Button
              type="button"
              text={
                <span className="font-normal text-ada-white font-anton md:text-adaSubtitle uppercase">
                  Umawiam spotkanie
                </span>
              }
              url="https://calendar.app.google/C4nM6qP4wtkJYCmh9"
              textSize="text-sm md:text-base"
              btnStyle="bg-ada-orange tracking-wide h-[38px] md:h-[46px] 
                       px-6 hover:opacity-90 rounded-full md:min-w-[280px]"
            />
          </div>
        </Section>
      )}
      {version == 5 && (
        <Section bgColor="" className="text-black" padding="mt-12">
          <div className="bg-white border-ada-orange border rounded-3xl max-w-[480px] mx-auto">
            <Typography
              variant="h2"
              className="p-2 font-anton font-normal text-center text-ada-orange"
            >
              Dlaczego warto wybrać MAGIC?
            </Typography>
          </div>
        </Section>
      )}
      {version == 6 && (
        <Section bgColor="" padding="mt-2 md:-mt-4 mb-6" className="text-black">
          <div className="flex flex-col md:flex-row">
            <ul className="max-w-[438px] mx-auto px-2 md:px-0 list-disc">
              <li className="md:mb-4 md:mt-10">
                <b>Oszczędzasz czas</b> - nie musisz zarządzać marketingiem
                samodzielnie
              </li>
              <li className="md:mb-4">
                <b>Redukujesz koszty </b>- zewnętrzny zespół to niższy wydatek
                niż budowa działu in-house
              </li>
            </ul>
            <ul className="max-w-[438px] mx-auto px-2 md:px-0 list-disc">
              <li className="md:mb-4 md:mt-10">
                <b>Zyskujesz ekspertyzę</b> - pracujesz z zespołem specjalistów
                z różnych dziedzin
              </li>
              <li className="md:mb-4">
                <b>Skupiasz się na tym, co kochasz</b> - my zajmujemy się
                marketingiem, Ty rozwijasz swój core business
              </li>
            </ul>
          </div>
        </Section>
      )}
      {version == 7 && (
        <Section bgColor="" className="text-black text-center my-2">
          <div className="bg-ada-magicGreen border border-ada-orange p-4 md:py-8 md:px-12 rounded-3xl max-w-[800px] mx-auto">
            <Typography
              variant="h2"
              className="p-2 font-anton font-normal text-center text-ada-orange"
            >
              MAGIC to nie tylko nazwa
            </Typography>
            <p>
              - to <b>filozofia działania</b> oparta na współpracy, kreatywności
              i mierzalnych efektach. <b>Skontaktuj się z nami</b> i przekonaj
              na własne oczy.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              type="button"
              text={
                <span className="text-ada-white font-bold uppercase">
                  Chcę dowiedzieć się, jak możecie mi pomóc
                </span>
              }
              sectionId="umawiam-spotkanie"
              textSize="text-sm"
              btnStyle="bg-ada-orange tracking-wide md:h-[46px] 
                       px-6 hover:opacity-90 rounded-full md:min-w-[280px]"
            />
          </div>
        </Section>
      )}
    </>
  )
}

export default MagicCollectiveBanner
