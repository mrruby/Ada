import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"
import React, { useEffect } from "react"
import Section from "../shared/Section"

declare global {
  interface Window {
    Koalendar: any
  }
}

const MagicSaleBanner = ({
  version,
  url,
}: {
  version: number
  url?: string
}) => {
  // Load Koalendar script for version 5
  useEffect(() => {
    if (version === 5) {
      // Load Koalendar script
      const script1 = document.createElement("script")
      script1.innerHTML = `window.Koalendar=window.Koalendar||function(){(Koalendar.props=Koalendar.props||[]).push(arguments)};`
      document.body.appendChild(script1)

      const script2 = document.createElement("script")
      script2.src = "https://koalendar.com/assets/widget.js"
      script2.async = true
      document.body.appendChild(script2)

      script2.onload = () => {
        // Initialize Koalendar after script loads
        if (window.Koalendar) {
          window.Koalendar("inline", {
            url: "https://koalendar.com/e/porozmawiajmy-o-wspolpracy",
            selector: "#inline-widget-porozmawiajmy-o-wspolpracy",
          })
        }
      }

      // Cleanup
      return () => {
        document.body.removeChild(script1)
        document.body.removeChild(script2)
      }
    }
  }, [version])

  return (
    <>
      {version == 1 && (
        <Section padding="pt-[56px] md:pt-[72px] pb-8 px-4 md:px-12">
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
            <div className="lg:block order-1 lg:order-2 lg:-mb-10">
              <StaticImage
                src="../../images/ada-magic-1.webp"
                alt="Marketing Ads Girls Inside Club"
                placeholder="blurred"
                quality={90}
                className="w-full h-auto rounded-[24px]"
              />
            </div>
          </div>
        </Section>
      )}
      {version == 2 && (
        <Section padding="py-8 px-2 md:px-12 text-ada flex flex-col items-center text-center">
          <TypingAnimation
            text="Dołącz do MAGIC:"
            textStyle="text-adaTitle text-black font-bold"
          />
          <div className="relative my-6">
            <p className="md:absolute text-[80px] left-[-10px] top-[-60px] -rotate-12">
              🗓️
            </p>
            <p className="text-adaTitle font-bold text-white  bg-ada-magicPurple4 p-2 rounded-[24px] uppercase lg:min-w-[800px]">
              Pakiet miesięczny
            </p>
            <div className="absolute right-0 md:right-[-10px] text-black w-[140px] h-[140px] top-[6px] lg:top-[-60px] bg-ada-magicYellow flex flex-col items-center justify-center rounded-[100px] font-bold rotate-12">
              <p className="text-[12px]">tylko do 2.02</p>
              <p className="text-[32px] leading-tight">353 zł</p>
              <p className="text-[16px] line-through opacity-60">557 zł</p>
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
              {/* Bonus removed per brief */}
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

          <div className="flex justify-center mt-8">
            <Button
              type="button"
              text={<span>Tak, dołączam!</span>}
              url={
                url ||
                "https://slowmarketing.zanfia.co/c/magic-pakiet-basic-rXx5"
              }
              textSize="text-xs md:text-adaSubtitleSecondary uppercase !font-extrabold text-black"
              btnStyle="bg-ada-magicPink4
                      tracking-wide
                      p-3 hover:opacity-90 rounded-full min-w-[130px] h-[64px] shadow-xl"
            />
          </div>
        </Section>
      )}
      {version == 6 && (
        <Section padding="py-8 px-2 md:px-12 text-ada flex flex-col items-center text-center">
          <h1 className="text-adaTitle2 font-bold text-ada-magicOrange2">
            Nagranie nie jest już dostępne, ale wciąż możesz dołączyć do MAGIC!
          </h1>
        </Section>
      )}
    </>
  )
}

export default MagicSaleBanner
