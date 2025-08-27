// BannerBox2tsx
import React from "react"
import Typography from "../shared/Typography"

type BannerBox2Props = {
  bgColor: string
  title?: string
  description: string | React.JSX.Element
  styles?: string
  url?: string
}

const BannerBox2 = ({
  bgColor,
  title,
  description,
  styles,
  url,
}: BannerBox2Props) => {
  const content = (
    <div className="relative md:mt-0">
      <div className="absolute left-1/2 -top-8 md:-top-3 -translate-x-1/2 text-adaSubtitleThird">
        ✅
      </div>
      <div
        className={`${bgColor} rounded-3xl p-4 md:p-5 text-center flex flex-col items-center justify-center shadow-lg md:pt-16 ${styles}`}
      >
        <Typography variant="h2" className="mb-2">
          {title}
        </Typography>
        <p className="text-sm md:text-base leading-relaxed">{description}</p>
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

export default BannerBox2
