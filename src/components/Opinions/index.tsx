import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Opinions = (): JSX.Element => {
  const commonClassNames = "w-[400px] md:w-[600px] mx-4"

  return (
    <div className="overflow-hidden bg-gray-200">
      <div className="flex">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          <div className={commonClassNames}>
            <StaticImage
              src="../../images/opinia1.webp"
              alt="Ada Promis"
              placeholder="none"
              width={1414}
              height={2000}
            />
          </div>
          <div className={commonClassNames}>
            <StaticImage
              src="../../images/opinia2.webp"
              alt="Ada Promis"
              placeholder="none"
              width={1414}
              height={2000}
            />
          </div>
          <div className={commonClassNames}>
            <StaticImage
              src="../../images/opinia3.webp"
              alt="Ada Promis"
              placeholder="none"
              width={1414}
              height={2000}
            />
          </div>
        </div>
        <div className="flex items-center animate-marquee2 whitespace-nowrap">
          <div className={commonClassNames}>
            <StaticImage
              src="../../images/opinia1.webp"
              alt="Ada Promis"
              placeholder="none"
              width={1414}
              height={2000}
            />
          </div>
          <div className={commonClassNames}>
            <StaticImage
              src="../../images/opinia2.webp"
              alt="Ada Promis"
              placeholder="none"
              width={1414}
              height={2000}
            />
          </div>
          <div className={commonClassNames}>
            <StaticImage
              src="../../images/opinia3.webp"
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
