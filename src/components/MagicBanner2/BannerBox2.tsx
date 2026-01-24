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
    <div className="relative md:mt-0 h-full">
      <div className="absolute left-1/2 -top-6 -translate-x-1/2 text-5xl z-10">
        ✅
      </div>
      <div
        className={`${bgColor} rounded-2xl p-5 md:p-6 pt-10 md:pt-10 text-center flex flex-col items-center justify-center min-h-[140px] h-full ${styles}`}
      >
        <Typography variant="h2" className="mb-2">
          {title}
        </Typography>
        <p className="text-base md:text-lg leading-relaxed">{description}</p>
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
