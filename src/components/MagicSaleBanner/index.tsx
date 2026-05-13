import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"
import React from "react"
import Section from "../shared/Section"
import StarBadge from "../shared/StarBadge"

const MagicSaleBanner = ({
  version,
  url,
  column2BgColor,
  column3BgColor,
}: {
  version: number
  url?: string
  column2BgColor?: string
  column3BgColor?: string
}) => {
  const useThreeColumnLayout = column2BgColor || column3BgColor

  return (
    <>
      {version == 1 && (
        <Section padding="pt-[56px] md:pt-[72px] pb-8 px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left column - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Big heading */}
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <h1 className="font-montserrat font-extrabold text-[40px] md:text-[56px] lg:text-[64px] leading-[100%] text-ada-magicOrange2 mb-6">
                  Marketing Ads
                  <br />
                  Girls Inside Club
                </h1>
                <StaticImage
                  src="../../images/star-pink.webp"
                  alt=""
                  width={48}
                  height={48}
                  placeholder="blurred"
                  className="flex-shrink-0 mt-2"
                />
              </div>

              {/* Subtext */}
              <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-black mb-8 max-w-[500px] mx-auto lg:mx-0">
                Społeczność kobiet, które skalują swoje biznesy z pomocą reklam
                pod czujnym okiem profesjonalistek
              </p>

              {/* Button */}
              <div className="flex justify-center lg:justify-start mb-6">
                <Button
                  type="button"
                  text={<span>DOŁĄCZAM</span>}
                  sectionId="magic-package"
                  textSize="font-montserrat !font-extrabold text-[24px] leading-[100%] uppercase text-black"
                  btnStyle="bg-ada-pink8 hover:opacity-90 hover:shadow-xl rounded-full py-6 px-12"
                />
              </div>

              {/* Bottom text */}
              <div className="font-montserrat font-bold text-[20px] md:text-[24px] leading-[100%] text-ada-magicOrange2 flex items-center justify-center lg:justify-start gap-2">
                <StaticImage
                  src="../../images/star-pink.webp"
                  alt=""
                  width={24}
                  height={24}
                  placeholder="blurred"
                />
                <span>MAGIC</span>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="lg:block order-1 lg:order-2 lg:-mb-10 w-full max-w-[560px] mx-auto lg:mx-0">
              <StaticImage
                src="../../images/ada-magic-1.webp"
                alt="Marketing Ads Girls Inside Club"
                placeholder="blurred"
                quality={100}
                width={560}
                height={509}
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 92vw"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto rounded-[24px] max-w-[560px]"
              />
            </div>
          </div>
        </Section>
      )}
      {version == 2 && !useThreeColumnLayout && (
        <Section padding="py-8 px-6 md:px-12 text-ada flex flex-col items-center text-center">
          <TypingAnimation
            text="Dołącz do MAGIC:"
            textStyle="text-adaTitle text-black font-bold"
            as="h2"
          />
          <div className="relative my-6">
            <p className="md:absolute text-[80px] left-[-10px] top-[-60px] -rotate-12">
              🗓️
            </p>
            <p className="text-adaTitle font-bold text-white  bg-ada-magicPurple4 p-2 rounded-[24px] uppercase lg:min-w-[800px]">
              Pakiet miesięczny
            </p>
            <div className="absolute right-0 md:right-[-10px] text-black w-[140px] h-[140px] top-[6px] lg:top-[-60px] bg-ada-magicYellow flex flex-col items-center justify-center rounded-[100px] font-bold rotate-12">
              <p className="text-[32px] leading-tight">557 zł</p>
            </div>
          </div>
          <div className="xl:text-adaDesc flex flex-col md:flex-row bg-ada-white3 rounded-[24px] text-black text-left p-12 shadow-xl">
            <div>
              <p className="pb-4">
                👩‍💻 <b>konsultacje pisemne</b> z ekspertkami
              </p>
              <p className="pb-4">
                🎥 <b>materiały szkoleniowe video</b> z ustawiania kampanii
                reklamowych i nie tylko
              </p>
              <p>
                🚀 dostęp do <b>wewnętrznej bazy wiedzy </b>
              </p>
            </div>
            <div>
              <p className="pb-4">
                🗓️ udział w dwóch{" "}
                <b>1,5-godzinnych sesjach konsultacji grupowych</b>
                miesięcznie
              </p>
              <p className="pb-4">
                💡 udział w dwóch <b> autorskich warsztatach tematycznych</b> w
                miesiącu
              </p>
              <p>
                👀 <b>nielimitowany dostęp do nagrań</b> ze wszystkich spotkań
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 w-full px-4 md:px-0">
            <Button
              type="button"
              text={<span>Tak, dołączam!</span>}
              url={
                url ||
                "https://slowmarketing.zanfia.co/c/magic-pakiet-basic-rXx5"
              }
              textSize="text-base md:text-adaSubtitleSecondary uppercase !font-extrabold text-black"
              btnStyle="bg-ada-magicPink4
                      tracking-wide
                      p-3 md:p-3 hover:opacity-90 rounded-full w-full md:w-auto md:min-w-[130px] h-[64px] shadow-xl"
            />
          </div>
        </Section>
      )}
      {version == 2 && useThreeColumnLayout && (
        <Section padding="py-8 px-6 md:px-12 text-ada flex flex-col items-center text-center">
          <TypingAnimation
            text="Dołącz do MAGIC:"
            textStyle="text-adaTitle text-black font-bold"
            as="h2"
          />
          <p className="text-adaSubtitle mt-4 text-[#000000]">
            <span className="bg-[#FFD1F0] px-4 py-2 rounded-lg inline-block">
              <b>3 opcje czasowe subskrypcji</b> - wybierz model najlepszy dla
              Ciebie!
            </span>
          </p>

          {/* 3-column pricing grid */}
          <div className="grid w-full max-w-[1200px] grid-cols-1 gap-x-6 gap-y-14 mt-10 md:gap-y-16 lg:grid-cols-3 lg:gap-y-6">
            {/* Column 1: Pakiet miesięczny */}
            <div className="flex flex-col items-center">
              <div className="xl:text-adaDesc flex flex-col bg-ada-white3 rounded-[24px] text-black text-left p-8 shadow-xl flex-1 w-full border border-black">
                <div className="mb-4 text-left">
                  <p className="text-adaDesc">subskrypcja miesięczna</p>
                  <p className="text-adaSubtitleThird font-bold uppercase">
                    TESTUJ
                    <br />Z MAGIC
                  </p>
                  <p className="text-adaDesc">cena</p>
                  <p>
                    <span className="text-adaSubtitleThird font-bold">509</span>{" "}
                    <span className="text-adaDesc font-bold">ZŁ/MIESIĄC</span>
                  </p>
                </div>
                <div className="mb-6 text-center">
                  <Button
                    type="button"
                    text={<span>DOŁĄCZAM!</span>}
                    url={
                      url ||
                      "https://slowmarketing.zanfia.co/c/magic-pakiet-basic-rXx5"
                    }
                    textSize="text-base md:text-adaSubtitleSecondary uppercase !font-extrabold text-black"
                    btnStyle="bg-ada-magicPink4 tracking-wide p-3 hover:opacity-90 rounded-full min-w-[180px] h-[56px] shadow-xl"
                  />
                </div>
                <hr className="border-t border-black mb-4 w-[calc(100%+4rem)] -ml-8" />
                <p className="pb-4 text-sm">
                  👩‍💻 <b>konsultacje pisemne</b> z ekspertkami
                </p>
                <p className="pb-4 text-sm">
                  🎥 <b>materiały szkoleniowe video</b> z ustawiania kampanii
                  reklamowych i nie tylko
                </p>
                <p className="pb-4 text-sm">
                  🚀 dostęp do <b>wewnętrznej bazy wiedzy</b>
                </p>
                <p className="pb-4 text-sm">
                  🗓️ udział w dwóch{" "}
                  <b>1,5-godzinnych sesjach konsultacji grupowych</b>{" "}
                  miesięcznie
                </p>
                <p className="pb-4 text-sm">
                  💡 udział w dwóch <b>autorskich warsztatach tematycznych</b> w
                  miesiącu
                </p>
                <p className="text-sm">
                  👀 <b>nielimitowany dostęp do nagrań</b> ze wszystkich spotkań
                </p>
              </div>
            </div>

            {/* Column 2: Buduj z MAGIC */}
            <div className="flex flex-col items-center relative">
              <StarBadge
                label={"top\nwybór!"}
                variant="yellow"
                className="left-1/2 top-0 translate-x-[41%] -translate-y-[42%] rotate-[10deg] lg:translate-x-[45%] lg:-translate-y-[50%]"
                sizeClassName="h-[112px] w-[112px] md:h-[122px] md:w-[122px] lg:h-[118px] lg:w-[118px]"
                labelClassName="max-w-[74px] -translate-x-[12px] -translate-y-[1px] text-[17px] md:text-[20px]"
              />
              <div
                className={`xl:text-adaDesc flex flex-col ${column2BgColor || "bg-ada-white3"} rounded-[24px] text-black text-left p-8 shadow-xl flex-1 w-full border border-black`}
              >
                <div className="mb-4 text-left">
                  <p className="text-adaDesc">subskrypcja 3-miesięczna</p>
                  <p className="text-adaSubtitleThird font-bold uppercase">
                    BUDUJ
                    <br />Z MAGIC
                  </p>
                  <p className="text-adaDesc">cena</p>
                  <p>
                    <span className="text-adaSubtitleThird font-bold">409</span>{" "}
                    <span className="text-adaDesc font-bold">ZŁ/MIESIĄC</span>
                  </p>
                </div>
                <div className="mb-6 text-center">
                  <Button
                    type="button"
                    text={<span>DOŁĄCZAM!</span>}
                    url={
                      url ||
                      "https://slowmarketing.zanfia.co/c/magic-pakiet-basic-rXx5"
                    }
                    textSize="text-base md:text-adaSubtitleSecondary uppercase !font-extrabold text-black"
                    btnStyle="bg-ada-magicPink4 tracking-wide p-3 hover:opacity-90 rounded-full min-w-[180px] h-[56px] shadow-xl"
                  />
                </div>
                <hr className="border-t border-black mb-4 w-[calc(100%+4rem)] -ml-8" />
                <p className="pb-4 text-sm">
                  👩‍💻 <b>konsultacje pisemne</b> z ekspertkami
                </p>
                <p className="pb-4 text-sm">
                  🎥 <b>materiały szkoleniowe video</b> z ustawiania kampanii
                  reklamowych i nie tylko
                </p>
                <p className="pb-4 text-sm">
                  🚀 dostęp do <b>wewnętrznej bazy wiedzy</b>
                </p>
                <p className="pb-4 text-sm">
                  🗓️ udział w dwóch{" "}
                  <b>1,5-godzinnych sesjach konsultacji grupowych</b>{" "}
                  miesięcznie
                </p>
                <p className="pb-4 text-sm">
                  💡 udział w dwóch <b>autorskich warsztatach tematycznych</b> w
                  miesiącu
                </p>
                <p className="text-sm">
                  👀 <b>nielimitowany dostęp do nagrań</b> ze wszystkich spotkań
                </p>
              </div>
            </div>

            {/* Column 3: Skaluj z MAGIC */}
            <div className="flex flex-col items-center relative">
              <StarBadge
                label="najtaniej!"
                variant="pink"
                className="right-0 top-0 translate-x-[41%] -translate-y-[34%] -rotate-[11deg] md:right-0 md:translate-x-[45%] md:-translate-y-[38%] lg:right-0 lg:translate-x-[47%] lg:-translate-y-[44%]"
                sizeClassName="h-[88px] w-[88px] md:h-[98px] md:w-[98px]"
                labelClassName="max-w-[72px] -translate-x-[11px] -translate-y-[2px] text-[14px] md:text-[16px]"
              />
              <div
                className={`xl:text-adaDesc flex flex-col ${column3BgColor || "bg-ada-white3"} rounded-[24px] text-black text-left p-8 shadow-xl flex-1 w-full border border-black`}
              >
                <div className="mb-4 text-left">
                  <p className="text-adaDesc">subskrypcja 6-miesięczna</p>
                  <p className="text-adaSubtitleThird font-bold uppercase">
                    SKALUJ
                    <br />Z MAGIC
                  </p>
                  <p className="text-adaDesc">cena</p>
                  <p>
                    <span className="text-adaSubtitleThird font-bold">379</span>{" "}
                    <span className="text-adaDesc font-bold">ZŁ/MIESIĄC</span>
                  </p>
                </div>
                <div className="mb-6 text-center">
                  <Button
                    type="button"
                    text={<span>DOŁĄCZAM!</span>}
                    url={
                      url ||
                      "https://slowmarketing.zanfia.co/c/magic-pakiet-basic-rXx5"
                    }
                    textSize="text-base md:text-adaSubtitleSecondary uppercase !font-extrabold text-black"
                    btnStyle="bg-ada-magicPink4 tracking-wide p-3 hover:opacity-90 rounded-full min-w-[180px] h-[56px] shadow-xl"
                  />
                </div>
                <hr className="border-t border-black mb-4 w-[calc(100%+4rem)] -ml-8" />
                <p className="pb-4 text-sm">
                  👩‍💻 <b>konsultacje pisemne</b> z ekspertkami
                </p>
                <p className="pb-4 text-sm">
                  🎥 <b>materiały szkoleniowe video</b> z ustawiania kampanii
                  reklamowych i nie tylko
                </p>
                <p className="pb-4 text-sm">
                  🚀 dostęp do <b>wewnętrznej bazy wiedzy</b>
                </p>
                <p className="pb-4 text-sm">
                  🗓️ udział w dwóch{" "}
                  <b>1,5-godzinnych sesjach konsultacji grupowych</b>{" "}
                  miesięcznie
                </p>
                <p className="pb-4 text-sm">
                  💡 udział w dwóch <b>autorskich warsztatach tematycznych</b> w
                  miesiącu
                </p>
                <p className="text-sm">
                  👀 <b>nielimitowany dostęp do nagrań</b> ze wszystkich spotkań
                </p>
              </div>
            </div>
          </div>
        </Section>
      )}
      {version == 6 && (
        <Section padding="py-8 px-6 md:px-12 text-ada flex flex-col items-center text-center">
          <h1 className="text-adaTitle2 font-bold text-ada-magicOrange2">
            Nagranie nie jest już dostępne, ale wciąż możesz dołączyć do MAGIC!
          </h1>
        </Section>
      )}
    </>
  )
}

export default MagicSaleBanner
