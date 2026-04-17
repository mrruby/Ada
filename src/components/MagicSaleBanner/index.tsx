import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"
import React from "react"
import Section from "../shared/Section"

const MagicSaleBanner = ({
  version,
  url,
  column2BgColor = "bg-ada-white3",
  column3BgColor = "bg-ada-white3",
}: {
  version: number
  url?: string
  column2BgColor?: string
  column3BgColor?: string
}) => {
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
                  Marketing Ads Girls
                  <br />
                  Inside Club
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
      {version == 2 && (
        <Section padding="py-8 px-6 md:px-12 text-ada flex flex-col items-center text-center">
          <TypingAnimation
            text="Dołącz do MAGIC:"
            textStyle="text-adaTitle text-black font-bold"
            as="h2"
          />

          {/* 3-column pricing grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[1200px] mt-8">
            {/* Column 1: Pakiet miesięczny */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6 w-full">
                <p className="md:absolute text-[60px] left-[-10px] top-[-50px] -rotate-12">
                  🗓️
                </p>
                <p className="text-adaSubtitle font-bold text-white bg-ada-magicPurple4 p-2 rounded-[24px] uppercase">
                  TESTUJ Z MAGIC
                </p>
                <div className="absolute right-[-10px] text-black w-[100px] h-[100px] top-[-30px] bg-ada-magicYellow flex flex-col items-center justify-center rounded-[100px] font-bold rotate-12">
                  <p className="text-[24px] leading-tight">557 zł</p>
                </div>
              </div>
              <div className="xl:text-adaDesc flex flex-col bg-ada-white3 rounded-[24px] text-black text-left p-8 shadow-xl flex-1 w-full">
                <p className="pb-4">
                  👩‍💻 <b>konsultacje pisemne</b> z ekspertkami
                </p>
                <p className="pb-4">
                  🎥 <b>materiały szkoleniowe video</b> z ustawiania kampanii
                  reklamowych i nie tylko
                </p>
                <p className="pb-4">
                  🚀 dostęp do <b>wewnętrznej bazy wiedzy</b>
                </p>
                <p className="pb-4">
                  🗓️ udział w dwóch{" "}
                  <b>1,5-godzinnych sesjach konsultacji grupowych</b> miesięcznie
                </p>
                <p className="pb-4">
                  💡 udział w dwóch <b>autorskich warsztatach tematycznych</b> w
                  miesiącu
                </p>
                <p>
                  👀 <b>nielimitowany dostęp do nagrań</b> ze wszystkich spotkań
                </p>
              </div>
              <div className="mt-6">
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
            </div>

            {/* Column 2: Buduj z MAGIC */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6 w-full">
                <p className="md:absolute text-[60px] left-[-10px] top-[-50px] -rotate-12">
                  🏗️
                </p>
                <p className="text-adaSubtitle font-bold text-white bg-ada-magicPurple4 p-2 rounded-[24px] uppercase">
                  Buduj z MAGIC
                </p>
              </div>
              <div className={`xl:text-adaDesc flex flex-col ${column2BgColor} rounded-[24px] text-black text-left p-8 shadow-xl flex-1 w-full`}>
                <p className="pb-4">
                  👩‍💻 <b>konsultacje pisemne</b> z ekspertkami
                </p>
                <p className="pb-4">
                  🎥 <b>materiały szkoleniowe video</b> z ustawiania kampanii
                  reklamowych i nie tylko
                </p>
                <p className="pb-4">
                  🚀 dostęp do <b>wewnętrznej bazy wiedzy</b>
                </p>
                <p className="pb-4">
                  🗓️ udział w dwóch{" "}
                  <b>1,5-godzinnych sesjach konsultacji grupowych</b> miesięcznie
                </p>
                <p className="pb-4">
                  💡 udział w dwóch <b>autorskich warsztatach tematycznych</b> w
                  miesiącu
                </p>
                <p>
                  👀 <b>nielimitowany dostęp do nagrań</b> ze wszystkich spotkań
                </p>
              </div>
              <div className="mt-6">
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
            </div>

            {/* Column 3: Skaluj z MAGIC */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6 w-full">
                <p className="md:absolute text-[60px] left-[-10px] top-[-50px] -rotate-12">
                  🚀
                </p>
                <p className="text-adaSubtitle font-bold text-white bg-ada-magicPurple4 p-2 rounded-[24px] uppercase">
                  Skaluj z MAGIC
                </p>
              </div>
              <div className={`xl:text-adaDesc flex flex-col ${column3BgColor} rounded-[24px] text-black text-left p-8 shadow-xl flex-1 w-full`}>
                <p className="pb-4">
                  👩‍💻 <b>konsultacje pisemne</b> z ekspertkami
                </p>
                <p className="pb-4">
                  🎥 <b>materiały szkoleniowe video</b> z ustawiania kampanii
                  reklamowych i nie tylko
                </p>
                <p className="pb-4">
                  🚀 dostęp do <b>wewnętrznej bazy wiedzy</b>
                </p>
                <p className="pb-4">
                  🗓️ udział w dwóch{" "}
                  <b>1,5-godzinnych sesjach konsultacji grupowych</b> miesięcznie
                </p>
                <p className="pb-4">
                  💡 udział w dwóch <b>autorskich warsztatach tematycznych</b> w
                  miesiącu
                </p>
                <p>
                  👀 <b>nielimitowany dostęp do nagrań</b> ze wszystkich spotkań
                </p>
              </div>
              <div className="mt-6">
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
