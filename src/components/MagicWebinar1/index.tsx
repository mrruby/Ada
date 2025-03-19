import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import {
  MagicSunDark,
  MagicUnion,
  MagicUnion2,
  MagicUnionDark,
  Vector,
} from "helpers/LayoutElements"
import TypingAnimation from "helpers/TypingAnimation"
import React from "react"

const MagicWebinar1 = (): JSX.Element => {
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
      <div className="flex-grow bg-pink-100 px-6 md:px-12">
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 mt-10  md:mb-0">
              <div className="mb-4">
                <Typography
                  variant="h1"
                  className="text-ada-magicOrange text-3xl md:text-4xl"
                >
                  OD PASJI DO ZYSKU:
                </Typography>
              </div>

              <div className="mb-6">
                <Typography
                  variant="h1"
                  className="text-ada-magicPurple text-3xl md:text-5xl leading-tight"
                >
                  Zwiększ sprzedaż bez wydawania tysięcy złotych na marketing 🚀
                </Typography>
              </div>
              <div className="mb-6 max-w-[520px]">
                <TypingAnimation
                  text={[
                    {
                      text: "Bezpłatny webinar ",
                      style: "text-ada-magicOrange text-xl font-bold inline",
                    },
                    {
                      text: "dla ambitnych przedsiębiorczyń, które wreszcie chcą przestać zgadywać i zacząć zarabiać",
                      style: "text-ada-magicPurple text-lg inline",
                    },
                  ]}
                />
              </div>
              <Button
                type="button"
                text={
                  <span className="text-ada-magicPurple uppercase">
                    REZERWUJE MIEJSCE
                  </span>
                }
                textSize="text-xl md:text-2xl"
                btnStyle="bg-white hover:bg-ada-magicPurple/90 text-xl font-bold py-6 mb-6 px-12 rounded-full border-none"
              />
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[400px] h-[600px]">
                <div className="z-10 absolute bottom-20">
                  <StaticImage
                    loading="eager"
                    src="../../images/ada_purple.webp"
                    alt="Ada w telefonie"
                    placeholder="blurred"
                    width={600}
                    height={805}
                  />
                </div>
                <MagicSunDark
                  mobileTop="top-[240px]"
                  mobileLeft="left-[35px]"
                  width="110px"
                  zIndex="z-0"
                />
                <MagicUnion2
                  mobileBottom="top-[160px]"
                  mobileRight="right-[-25px]"
                  width="200px"
                  zIndex="z-0"
                />
                <MagicUnion
                  mobileTop="bottom-48"
                  mobileRight="left-[-80px]"
                  width="130px"
                  zIndex="z-0"
                />
                <MagicUnionDark
                  mobileBottom="bottom-20"
                  mobileLeft="left-[50px]"
                  width="80px"
                  zIndex="z-0"
                />
                <Vector
                  mobileBottom="bottom-20"
                  mobileRight="right-0"
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
