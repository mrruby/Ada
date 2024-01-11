import React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  title: string
  list: string[]
}
export const MasterclassInfoSection: React.FC<Props> = ({ title, list }) => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-adaSubtitle lg:text-adaSubtitleThird font-bold text-center bg-ada-light-pink shadow-xl lg:min-w-[793px] px-8 h-[124px] flex items-center justify-center mx-auto ">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:gap-[20px] pt-10 md:pt-[60px]">
        <ul className="flex flex-wrap gap-[50px] max-w-[1200px] mx-auto justify-center">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center md:flex-row max-w-[560px] px-2 md:text-adaBase"
            >
              <div className="animate-spin-slow">
                <StaticImage
                  src={"../../images/flower-blue.svg"}
                  alt="Ada Promis"
                  placeholder="none"
                  width={100}
                  height={100}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
