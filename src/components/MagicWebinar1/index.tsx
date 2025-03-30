import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import {
  MagicSunDark,
  MagicUnion,
  MagicUnion2,
  MagicUnionDark,
  Vector,
} from "helpers/LayoutElements"
import TypingAnimation from "helpers/TypingAnimation"
import React, { useEffect } from "react"
import magicWebinarForm from "../../values/forms/magic-webinar.html"

const MagicWebinar1 = (): JSX.Element => {
  useEffect(() => {
    const form = document.querySelector(".ml-block-form") as HTMLFormElement
    if (form) {
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
            console.log("Response:", data)
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
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-ada-magicPurple text-white py-4 px-6 md:px-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src="/assets/magic.svg" alt="Magic" className="h-12" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow bg-pink-100 px-6 md:px-12 py-8 md:py-16">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Text and Form Content */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col">
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
                <MagicSunDark
                  mobileTop="top-[20%]"
                  mobileLeft="left-[5%]"
                  width="110px"
                  zIndex="z-0"
                />
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
                <MagicUnionDark
                  mobileBottom="bottom-[25%]"
                  mobileLeft="left-[35%]"
                  width="80px"
                  zIndex="z-0"
                />
                <Vector
                  mobileBottom="bottom-[15%]"
                  mobileRight="right-[5%]"
                  width="110px"
                  zIndex="z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar1
