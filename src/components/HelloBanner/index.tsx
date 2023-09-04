import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const HelloBanner = (): JSX.Element => {
  return (
    <div className="w-full bg-adapromis h-[780px] flex items-center justify-center">
          <h2 className="text-adaBig lg:text-[96px] font-bold">Cześć!</h2>
    </div>
  )
}

export default HelloBanner

