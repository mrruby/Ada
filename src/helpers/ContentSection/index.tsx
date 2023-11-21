import React from "react"
import { ContentBox } from "helpers/ContentBox"

type ContentBoxProps = {
  title: string
  description: string
  url?: string
  btnText: string
  actionButton?: boolean
}

type ContentSectionProps = {
  title: string
  headingTextStyle?: string
  heading?: string
  description?: string
  data: ContentBoxProps[]
  actionButtonBoxes: boolean
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  headingTextStyle = "text-adaSubtitleSecondary lg:text-adaBig text-ada-grey",
  heading,
  description,
  data,
  actionButtonBoxes,
}) => {
  return (
    <div
      className=" text-ada-blue flex flex-col items-center py-6 lg:pt-[68px] lg:pb-[40px]"
      id="uslugi"
    >
      <div className="flex flex-col items-center text-center">
        <p className={`${headingTextStyle} font-bold`}>{heading}</p>
        <h2 className="px-6 text-adaTitle font-bold mt-[-30px] md:mt-[-50px]">
          {title}
        </h2>
        {description && <p className="text-adaBase py-8">{description}</p>}
      </div>
      <div className="flex gap-4 lg:gap-[58px] flex-col md:flex-row">
        {actionButtonBoxes
          ? data.map((item, index) => (
              <ContentBox
                key={index}
                title={item.title}
                description={item.description}
                url={item.url}
                btnText={item.btnText}
                actionButton={true}
              />
            ))
          : data.map((item, index) => (
              <ContentBox
                key={index}
                title={item.title}
                description={item.description}
                btnText={item.btnText}
                actionButton={false}
              />
            ))}
      </div>
    </div>
  )
}

export default ContentSection
