import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const HelloBanner = () => {
  return (
    <div className="grid h-[500px] md:h-[690px] xl:h-[850px]">
      <StaticImage
        className="row-start-1 col-start-1"
        layout="fullWidth"
        alt=""
        src={"../../images/bg-adapromis.png"}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
      <div className="row-start-1 col-start-1 grid justify-center items-center pt-40">
        <div className="flex flex-col items-center z-20">
          <h2 className="text-adaSubtitleThird lg:text-[96px] font-bold text-center animate-bounce">
            Cześć, tu Ada Promis!
          </h2>
          <p className="max-w-[726px] text-center font-medium text-[14px] md:text-adaBase mx-auto">
            Pracuję z biznesami, które dbają o dobrostan psychiczny i fizyczny:
            praktykuję slow marketing, przemyślany, wartościowy, zbudowany na
            relacjach
          </p>
        </div>
      </div>
    </div>
  )
}

export default HelloBanner
