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
import magicWebinarForm from "../../values/forms/magic-webinar.html"

const MagicWebinar1 = ({ version = 1 }: { version?: number }): JSX.Element => {
  useEffect(() => {
    const form = document.querySelector(".ml-block-form") as HTMLFormElement
    if (!form) return

    // Remove target attribute to avoid new tab
    form.removeAttribute("target")

    // Add a submit event listener to intercept submission
    form.addEventListener("submit", (e) => {
      e.preventDefault() // Prevent the default behavior

      const formData = new FormData(form)
      fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Redirect on success
            window.location.href = "https://adrianna.com.pl/thank/"
          } else {
            // Optionally, handle errors here
            console.error("Submission failed:", data)
          }
        })
        .catch((error) => console.error("Error:", error))
    })
  }, [])

  const isPinkVersion = version === 2
  const bgColor = isPinkVersion ? "bg-ada-newPurple" : "bg-pink-100"
  const headerBgColor = isPinkVersion ? "bg-pink-100" : "bg-ada-magicPurple"
  const logoSrc = isPinkVersion ? "/assets/magic-2.svg" : "/assets/magic.svg"

  const renderDecorations = (position: string, isPink: boolean) => {
    if (position === "top") {
      return isPink ? (
        <MagicSunYellow
          mobileTop="top-[20%]"
          mobileLeft="left-[5%]"
          width="110px"
          zIndex="z-0"
        />
      ) : (
        <MagicSunDark
          mobileTop="top-[20%]"
          mobileLeft="left-[5%]"
          width="110px"
          zIndex="z-0"
        />
      )
    }

    if (position === "middle") {
      return isPink ? (
        <>
          <MagicUnion2Pink
            mobileBottom="top-[15%]"
            mobileRight="right-[5%]"
            width="180px"
            zIndex="z-0"
          />
          <MagicUnionPink
            mobileTop="bottom-[40%]"
            mobileRight="left-[10%]"
            width="130px"
            zIndex="z-0"
          />
        </>
      ) : (
        <>
          <MagicUnion2
            mobileBottom="top-[15%]"
            mobileRight="right-[5%]"
            width="180px"
            zIndex="z-0"
          />
          <MagicUnion
            mobileTop="bottom-[40%]"
            mobileRight="left-[10%]"
            width="130px"
            zIndex="z-0"
          />
        </>
      )
    }

    return isPink ? (
      <>
        <MagicUnionDark
          mobileBottom="bottom-[0]"
          mobileLeft="left-[15%]"
          width="80px"
          zIndex="z-0"
        />
        <VectorPink
          mobileBottom="bottom-[15%]"
          mobileRight="right-[5%]"
          width="110px"
          zIndex="z-20"
        />
      </>
    ) : (
      <>
        <MagicUnionDark
          mobileBottom="bottom-[0]"
          mobileLeft="left-[15%]"
          width="80px"
          zIndex="z-0"
        />
        <Vector
          mobileBottom="bottom-[15%]"
          mobileRight="right-[5%]"
          width="110px"
          zIndex="z-20"
        />
      </>
    )
  }

  const renderContent = () => {
    if (isPinkVersion) {
      return (
        <div className="mb-4 max-w-[400px]">
          <Typography variant="h1" className="mb-4 md:pt-20 text-ada-yellow3">
            Adsy Starter Pack: Ogarniam kampanię reklamową w małej firmie!
            <br />
            <span className="text-ada-pink7 uppercase">Warsztat za 0 zł</span>
          </Typography>
          <Typography variant="body" className="mb-6 text-white">
            Najlepszy czas na działanie jest teraz: wspólnie z 3 ekspertkami,
            przygotujesz swój biznes do kampanii reklamowej Meta Ads.
          </Typography>
          <Button
            type="button"
            text={
              <span className="font-bold text-ada-yellow3 uppercase">
                Rezerwuję miejsce!
              </span>
            }
            sectionId="pakiety"
            textSize="text-sm md:text-base "
            btnStyle="uppercase bg-ada-pink7 
                  font-semibold tracking-wide h-[48px] md:h-[60px] 
                  px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]"
          />
        </div>
      )
    }

    return (
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
            dla ambitnych przedsiębiorczyń, które wreszcie chcą przestać
            zgadywać i zacząć zarabiać
          </Typography>
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-ada-magicOrange">
          <div
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: magicWebinarForm }}
          />
          <div className="flex items-center bg-ada-magicPurple/10 p-3 rounded">
            <div className="bg-ada-magicPurple px-2 py-1 text-white font-bold mr-3 rounded">
              Uwaga:
            </div>
            <Typography
              variant="body"
              className="text-ada-magicPurple font-bold"
            >
              Ilość miejsc ograniczona - zdecyduj się teraz!
            </Typography>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`text-white py-4 px-6 md:px-12 ${headerBgColor}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src={logoSrc} alt="Magic" className="h-12" />
            </div>
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

              {/* Form Section */}
              <div className="bg-white shadow-lg rounded-lg mt-2 p-6 border-t-4 border-ada-magicOrange">
                <div
                  className="mb-6"
                  dangerouslySetInnerHTML={{ __html: magicWebinarForm }}
                />
                <div className="flex items-center bg-ada-magicPurple/10 p-3 rounded">
                  <div className="bg-ada-magicPurple px-2 py-1 text-white font-bold mr-3 rounded">
                    Uwaga:
                  </div>
                  <Typography
                    variant="body"
                    className="text-ada-magicPurple font-bold"
                  >
                    Ilość miejsc ograniczona - zdecyduj się teraz!
                  </Typography>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:-mt-16">
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
                {renderDecorations("top", isPinkVersion)}
                {renderDecorations("middle", isPinkVersion)}
                {renderDecorations("bottom", isPinkVersion)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar1
