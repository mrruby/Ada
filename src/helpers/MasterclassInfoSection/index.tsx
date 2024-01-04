import React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  title: string
  list: string[]
}
export const MasterclassInfoSection: React.FC<Props> = ({ title, list }) => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-adaSubtitle lg:text-[40px] font-bold text-center bg-ada-light-pink shadow-xl lg:min-w-[793px] px-8 h-[124px] flex items-center justify-center mx-auto ">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:gap-[50px] pt-10 md:pt-[60px]">
        <ul className="flex flex-wrap gap-[50px] max-w-[1200px] mx-auto justify-center">
          {list.map((item, index) => (
            <li key={index} className="flex max-w-[500px] gap:4 md:gap-6">
              <div>
                <StaticImage
                  src={"../../images/flower-blue.svg"}
                  alt="Ada Promis"
                  placeholder="none"
                  width={80}
                  height={80}
                  style={{ width: "80px", height: "80px" }}
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
