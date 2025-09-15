import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import {
  MagicSunDark,
  MagicSunYellow,
  MagicUnion,
  MagicUnion2,
  MagicUnion2Pink,
  MagicUnionDark,
  MagicUnionPink,
  Vector,
  VectorPink,
} from "helpers/LayoutElements"
import TypingAnimation from "helpers/TypingAnimation"
import React, { useEffect } from "react"
import magicWebinarForm22 from "../../values/forms/magic-form-jesien.html"
import magicWebinarForm from "../../values/forms/magic-webinar.html"

interface DecorationProps {
  mobileTop?: string
  mobileBottom?: string
  mobileLeft?: string
  mobileRight?: string
  width?: string
  zIndex?: string
}

const MagicWebinar1 = ({ version = 1 }: { version?: number }) => {
  const isPinkVersion = version === 2
  const bgColor = isPinkVersion ? "bg-ada-newPurple" : "bg-pink-100"
  const headerBgColor = isPinkVersion
    ? "bg-ada-magicPink3"
    : "bg-ada-magicPurple"
  const logoSrc = isPinkVersion ? "/assets/magic-2.svg" : "/assets/magic.svg"
  const formHtml = isPinkVersion ? magicWebinarForm22 : magicWebinarForm

  useEffect(() => {
    const form = document.querySelector(".ml-block-form") as HTMLFormElement
    if (!form) return

    // Remove target attribute to avoid new tab
    form.removeAttribute("target")

    // Add a submit event listener to intercept submission
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = new FormData(form)
      fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            window.location.href = "https://adrianna.com.pl/thank/"
          } else {
            console.error("Submission failed:", data)
          }
        })
        .catch((error) => console.error("Error:", error))
    })
  }, [])

  const createDecoration = (
    Component: React.ComponentType<DecorationProps>,
    position: DecorationProps,
    width: string,
    zIndex: string
  ) => <Component {...position} width={width} zIndex={zIndex} />

  const renderDecorations = (position: string, isPink: boolean) => {
    if (position === "top") {
      const Component = isPink ? MagicSunYellow : MagicSunDark
      return createDecoration(
        Component,
        { mobileTop: "top-[20%]", mobileLeft: "left-[5%]" },
        "110px",
        "z-0"
      )
    }

    if (position === "middle") {
      const Union = isPink ? MagicUnionPink : MagicUnion
      const Union2 = isPink ? MagicUnion2Pink : MagicUnion2

      return (
        <>
          {createDecoration(
            Union2,
            { mobileBottom: "top-[15%]", mobileRight: "right-[5%]" },
            "180px",
            "z-0"
          )}
          {createDecoration(
            Union,
            { mobileTop: "bottom-[40%]", mobileRight: "left-[10%]" },
            "130px",
            "z-0"
          )}
        </>
      )
    }

    // Bottom position
    const Vector1 = isPink ? VectorPink : Vector

    return (
      <>
        {createDecoration(
          MagicUnionDark,
          { mobileBottom: "bottom-[0]", mobileLeft: "left-[15%]" },
          "80px",
          "z-0"
        )}
        {createDecoration(
          Vector1,
          { mobileBottom: "bottom-[15%]", mobileRight: "right-[5%]" },
          "110px",
          "z-20"
        )}
      </>
    )
  }

  const renderPinkContent = () => (
    <div className="mb-4 max-w-[600px]">
      <Typography
        variant="h1"
        className="mb-4 md:pt-20 text-ada-yellow3 text-4xl md:text-5xl uppercase font-bold"
      >
        JESIENNY RE-START:
        <span className="text-ada-pink7">
          OGARNIAM REKLAMY SPRZEDAŻOWE W MAŁYM BIZNESIE!
        </span>
      </Typography>
      {/* removed outdated live date/time */}
      <Typography variant="body" className="mb-6 max-w-[400px] text-white">
        Najlepszy czas na działanie jest teraz: pod okiem ekspertki przygotujesz
        swój biznes do kampanii reklamowej Meta Ads.
      </Typography>
      <Button
        type="button"
        text={
          <span className="font-extrabold text-ada-newPurple uppercase">
            ODBIERAM DOSTĘP!
          </span>
        }
        sectionId="top"
        textSize="text-sm md:text-base "
        btnStyle="uppercase bg-white 
              font-extrabold tracking-wide h-[48px] md:h-[60px] 
              px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]"
      />
    </div>
  )

  const renderDefaultContent = () => (
    <>
      <div className="mb-4">
        <Typography
          variant="h1"
          className="text-ada-magicOrange text-3xl md:text-4xl font-bold"
        >
          OD PASJI DO ZYSKU:
        </Typography>
      </div>

      <div className="mb-6">
        <Typography
          variant="h1"
          className="text-ada-magicPurple text-3xl md:text-5xl leading-tight font-bold"
        >
          Zwiększ sprzedaż{" "}
          <TypingAnimation
            text="bez ciągłego podnoszenia budżetu reklamowego"
            textStyle="text-ada-magicPurple text-3xl md:text-5xl leading-tight inline"
            speed={100}
          />
          🚀
        </Typography>
      </div>
      <div className="mb-8 max-w-[600px]">
        <Typography
          variant="body"
          className="text-ada-magicOrange text-xl font-bold inline"
        >
          Bezpłatny webinar
        </Typography>
        <Typography
          variant="body"
          className="text-ada-magicPurple text-lg inline"
        >
          {" "}
          dla ambitnych przedsiębiorczyń, które wreszcie chcą przestać zgadywać
          i zacząć zarabiać
        </Typography>
      </div>

      <FormSection html={formHtml} />
    </>
  )

  const FormSection = ({ html }: { html: string }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-ada-magicOrange">
      <div className="mb-6" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="flex items-center bg-ada-magicPurple/10 p-3 rounded">
        <div className="bg-ada-magicPurple px-2 py-1 text-white font-bold mr-3 rounded">
          UWAGA!
        </div>
        <Typography variant="body" className="text-ada-magicPurple font-bold">
          Ten produkt jest dostępny za 0zł jedynie do 17.09 - zdecyduj się teraz!
        </Typography>
      </div>
    </div>
  )

  const renderContent = () =>
    isPinkVersion ? renderPinkContent() : renderDefaultContent()

  const renderForm = () => null

  return (
    <div id="top" className="flex flex-col min-h-screen">
      <header className={`text-white py-4 px-6 md:px-12 ${headerBgColor}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logoSrc} alt="Magic" className="h-12" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className={`flex-grow ${bgColor} px-6 md:px-12 py-8 md:py-16`}>
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Text and Form Content */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col">
              {renderContent()}
              <section id="form">{renderForm()}</section>
            </div>

            {/* Image or Form Content */}
            <div className="lg:col-span-5 order-3 lg:order-2 flex justify-center lg:-mt-16">
              {isPinkVersion ? (
                <div className="w-full pt-20 md:pt-24">
                  <FormSection html={magicWebinarForm22} />
                </div>
              ) : (
                <div className="relative w-full max-w-[500px] aspect-[3/4]">
                  <div className="z-10 absolute inset-0 flex items-end justify-center">
                    <StaticImage
                      loading="eager"
                      src="../../images/ada_purple.webp"
                      alt="Ada w telefonie"
                      placeholder="blurred"
                      width={500}
                      height={670}
                      className="object-contain"
                    />
                  </div>
                  {["top", "middle", "bottom"].map((pos) =>
                    renderDecorations(pos, isPinkVersion)
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar1
