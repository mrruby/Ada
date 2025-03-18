import { StaticImage } from "gatsby-plugin-image"
import {
  MagicSunDark,
  MagicUnion,
  MagicUnion2,
  MagicUnionDark,
  Vector,
} from "helpers/LayoutElements"
import TypingAnimation from "helpers/TypingAnimation"
import React from "react"
import Typography from "../shared/Typography"

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
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="text-ada-magicOrange text-3xl md:text-4xl font-bold mb-4">
                <TypingAnimation
                  text="OD PASJI DO ZYSKU:"
                  textStyle="text-ada-magicOrange"
                />
              </div>

              <div className="text-ada-magicPurple text-3xl md:text-5xl font-bold leading-tight mb-6">
                <TypingAnimation
                  text="Zwiększ sprzedaż bez wydawania tysięcy złotych na marketing 🚀 🚀"
                  textStyle="text-ada-magicPurple"
                />
              </div>
              <div className="mb-6">
                <Typography
                  variant="body"
                  className="text-ada-magicOrange text-xl font-bold inline"
                >
                  Bezpłatny webinar
                </Typography>{" "}
                <Typography
                  variant="body"
                  className="text-ada-magicPurple text-lg inline"
                >
                  <span>
                    dla ambitnych przedsiębiorczyń, które wreszcie chcą przestać
                    zgadywać i zacząć zarabiać
                  </span>
                </Typography>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[400px] h-[600px]">
                <div className="z-10 absolute ">
                  <StaticImage
                    loading="eager"
                    src="../../images/ada_purple.webp"
                    alt="Ada w telefonie"
                    placeholder="blurred"
                    width={400}
                    height={600}
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
                  mobileTop="bottom-[80px]"
                  mobileRight="left-[-80px]"
                  width="130px"
                  zIndex="z-0"
                />
                <MagicUnionDark
                  mobileBottom="bottom-0"
                  mobileLeft="left-[50px]"
                  width="80px"
                  zIndex="z-0"
                />
                <Vector
                  mobileBottom="bottom-[-10px]"
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
