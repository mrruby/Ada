import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Opinions = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-gray-200">
      <div className="flex">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          <div className="w-[600px] mx-4">
            <StaticImage
              src="../../images/opinia1.png"
              alt="Ada Promis"
              placeholder="none"
              width={1414}
              height={2000}
            />
          </div>
          <div className="w-[600px] mx-4">
            <StaticImage
              src="../../images/opinia2.png"
              alt="Ada Promis"
              placeholder="none"
              width={1414}
              height={2000}
            />
          </div>
          <div className="w-[600px] mx-4">
            <StaticImage
              src="../../images/opinia3.png"
              alt="Ada Promis"
              placeholder="none"
              width={1414}
              height={2000}
            />
          </div>
        </div>
        <div className="flex items-center animate-marquee2 whitespace-nowrap">
          <div className="w-[600px] mx-4">
            <StaticImage
              src="../../images/opinia1.png"
              alt="Ada Promis"
              placeholder="none"
              width={1414}
              height={2000}
            />
          </div>
          <div className="w-[600px] mx-4">
            <StaticImage
              src="../../images/opinia2.png"
              alt="Ada Promis"
              placeholder="none"
              width={1414}
              height={2000}
            />
          </div>
          <div className="w-[600px] mx-4">
            <StaticImage
              src="../../images/opinia3.png"
              alt="Ada Promis"
              placeholder="none"
              width={1414}
              height={2000}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opinions
