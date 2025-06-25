import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"
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
      {version == 1 && null}
      {version == 2 && (
        <Section
          bgColor=""
          className="text-black overflow-hidden sm:mt-10"
          padding="py-8 px-4 md:px-8 flex justify-centeritems-center"
        >
          <div className="mx-auto md:w-[563px] bg-magic-banner2 min-h-[390px] md:h-[444px]">
            <div className="max-w-[438px] pt-6 md:pt-8 pl-[80px] md:pl-[130px]">
              <TypingAnimation
                text="Dlaczego MAGIC?"
                textStyle="mt-[6px] md:m-5 text-ada-orange font-anton font-normal px-4 md:px-0 text-adaNav md:text-adaBase"
              />
            </div>
            <ul className="max-w-[438px] mx-auto list-disc px-10 md:px-0">
              <li className="md:mb-4 mt-14 md:mt-6 text-adaMin md:text-adaStandard">
                <span className="font-bold">Działamy jako Twój zespół </span>-
                jesteśmy stałym partnerem w rozwoju Twojego biznesu
              </li>
              <li className="md:mb-4 text-adaMin md:text-adaStandard">
                <span className="font-bold">Pracujemy na poziomie premium</span>
                - skupiamy się na długoterminowych relacjach i mierzalnych
                rezultatach
              </li>
              <li className="md:mb-4 text-adaMin md:text-adaStandard">
                <span className="font-bold">
                  {" "}
                  Łączymy strategię z wykonaniem{" "}
                </span>
                - nie tylko doradzamy, ale przede wszystkim wdrażamy i
                zarządzamy
              </li>
              <li className="md:mb-8 text-adaMin md:text-adaStandard">
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
                      class="animate-spin-slow"
                    />
                  </div>
                  <p className="mt-2">
                    Prowadzą <b>biznes online</b>
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
                      class="animate-spin-slow"
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
                      class="animate-spin-slow"
                    />
                  </div>
                  <p className="mt-2">
                    Współpracują z <b>podwykonawcami</b>,<br /> np. wirtualnymi
                    asystentkami
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
                      class="animate-spin-slow"
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
          <div className="flex justify-center -mb-6 relative animate-spin-slow">
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
          <div className="text-center md:text-left mx-auto md:w-[567px] bg-magic-banner2 min-h-[370px] md:h-[444px]">
            <div className="pt-6 md:pt-9 md:pl-[130px]">
              <TypingAnimation
                text="Rozpocznij współpracę z MAGIC"
                textStyle="m-1 md:m-5 text-ada-orange font-anton px-2 md:px-0 text-adaMin md:text-adaDesc font-normal"
              />
            </div>
            <Typography
              variant="body"
              className="mt-4 md:mt-10 text-center font-bold px-8 md:px-0"
            >
              Umów bezpłatną rozmowę wstepną, podczas której:
            </Typography>
            <ul className="max-w-[438px] mx-auto px-8 md:px-0">
              <li className="md:mb-4 mt-2 md:mt-10">
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
                  Wypełniam ankietę!
                </span>
              }
              url="https://forms.gle/21QLQXWozG9EYQvt8"
              textSize="text-sm md:text-base"
              btnStyle="bg-ada-orange tracking-wide h-[38px] md:h-[46px] 
                       px-6 hover:opacity-90 rounded-full md:min-w-[280px]"
            />
          </div>
        </Section>
      )}
      {version == 5 && (
        <Section bgColor="" className="text-black" padding="my-12">
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
            <ul className="max-w-[438px] mx-auto px-8 md:px-0 list-disc">
              <li className="md:mb-4 md:mt-10">
                <b>Oszczędzasz czas</b> - nie musisz zarządzać marketingiem
                samodzielnie
              </li>
              <li className="md:mb-4">
                <b>Redukujesz koszty </b>- zewnętrzny zespół to niższy wydatek
                niż budowa działu in-house
              </li>
            </ul>
            <ul className="max-w-[438px] mx-auto px-8 md:px-0 list-disc">
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
        <Section bgColor="" className="text-black text-center my-10">
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
                       px-6 hover:opacity-90 rounded-full max-w-[240px] md:min-w-[280px]"
            />
          </div>
        </Section>
      )}
    </>
  )
}

export default MagicCollectiveBanner
