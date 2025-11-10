import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"
import React, { useEffect } from "react"
import Section from "../shared/Section"

declare global {
  interface Window {
    Koalendar: any
  }
}

const MagicSaleBanner = ({ version }: { version: number }) => {
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
        <Section padding="pt-[56px] md:pt-[72px] pb-8 px-2 md:px-12 text-ada flex flex-col items-center text-center">
          {/* <div>
            <TypingAnimation
              text="Marketing Ads Girls Inside Club"
              textStyle="text-adaTitle2 font-bold text-ada-magicOrange2"
            />
            <h1 className="text-adaTitle2 font-bold">
              {" "}
              <span className="text-ada-magicPink4">(MAGIC)</span>
            </h1>
          </div> */}

          <div className="flex items-center flex-col gap-2">
            <h1 className="text-adaTitle2 font-bold text-ada-magicOrange2">
              Marketing Ads Girls Inside Club
              <br />
            </h1>
            <h1 className="text-adaTitle2 font-bold text-ada-magicPink4 animate-magicPulse">
              (MAGIC)
            </h1>
          </div>
          <p className="mt-6 mb-8 max-w-[600px] leading-[32px] md:leading-[36px] text-black text-adaBase text-center mx-auto">
            Społeczność kobiet, które skalują swoje biznesy z pomocą reklam pod
            czujnym okiem profesjonalistek
          </p>
          <div className="flex justify-center mt-8">
            <Button
              type="button"
              text={<span>Dołączam!</span>}
              sectionId="magic-package"
              textSize="text-xs md:text-adaSubtitleSecondary uppercase font-extrabold text-black"
              btnStyle="bg-ada-magicPink4
                      tracking-wide 
                      p-6 hover:opacity-90 rounded-full min-w-[130px] h-[64px] shadow-xl"
            />
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
            <p className="md:absolute text-[80px] left-[-10px] top-[-60px]">
              🗓️
            </p>
            <p className="text-adaTitle font-bold text-white  bg-ada-magicPurple4 p-2 rounded-[24px] uppercase lg:min-w-[800px]">
              Pakiet miesięczny
            </p>
            <p className="absolute right-0 md:text-[40px] md:right-[-10px] text-black w-[140px] h-[140px] top-[-60px] bg-ada-magicYellow flex items-center justify-center rounded-[100px] font-bold">
              333zł
            </p>
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
              url="https://slowmarketing.zanfia.co/c/magic-pakiet-basic-rXx5"
              textSize="text-xs md:text-adaSubtitleSecondary uppercase font-extrabold text-black"
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
