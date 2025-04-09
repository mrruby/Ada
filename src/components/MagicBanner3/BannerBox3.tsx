// BannerBox2tsx
import React from "react"

type BannerBox2Props = {
  bgColor: string
  title: string
  description: string | JSX.Element
  styles?: string
  url?: string
}

const BannerBox3 = ({
  bgColor,
  title,
  description,
  styles,
  url,
}: BannerBox2Props) => {
  const content = (
    <div
      className={`${bgColor} text-left rounded-3xl p-4 md:p-8 flex flex-col border border-ada-orange ${styles}`}
    >
      <p className="font-bold">{title}</p>
      <div className="text-sm md:text-base leading-relaxed mt-2">
        {description}
      </div>
    </div>
  )

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  )
}

export default BannerBox3
