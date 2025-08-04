// BannerBox2tsx
import { Button } from "helpers/Button"
import React from "react"

type BannerBox2Props = {
  bgColor: string
  title: string | JSX.Element
  subtitle?: string
  description: string | JSX.Element
  styles?: string
  url?: string
  btn?: JSX.Element
  showDefaultButton?: boolean
}

const BannerBox3 = ({
  bgColor,
  title,
  subtitle,
  description,
  styles,
  url,
  btn,
  showDefaultButton = true,
}: BannerBox2Props) => {
  const content = (
    <div
      className={`${bgColor} text-left rounded-3xl p-4 mt-4 md:p-8 flex flex-col border border-ada-orange ${styles}`}
    >
      <h3 className="font-bold text-xl md:text-2xl text-black text-left mb-4">
        {title}
      </h3>
      {subtitle && (
        <p className="text-sm md:text-base font-bold mb-6">{subtitle}</p>
      )}
      <div className="text-sm md:text-base leading-relaxed mb-4">
        {description}
      </div>
      {btn}
      {showDefaultButton && (
        <div className="flex justify-center -mb-8 md:-mb-16">
          <Button
            type="button"
            text={
              <span className="font-normal font-anton text-md md:text-lg text-center">
                <span className="text-ada-orange block">
                  SPRAWDŹ, CZY TO PAKIET DLA CIEBIE
                </span>
                <span className="text-ada-magicPink2 block">
                  BEZPŁATNA KONSULTACJA 30 MIN
                </span>
              </span>
            }
            url="https://koalendar.com/e/porozmawiajmy-o-wspolpracy/?month=2025-07&duration=30&date=2025-07-03"
            textSize="text-sm"
            btnStyle="bg-ada-white2
            tracking-wide h-auto py-3 
            px-6 hover:opacity-90 rounded-full min-w-[200px] md:min-w-[400px] border-ada-orange border"
          />
        </div>
      )}
    </div>
  )

  return content
}

export default BannerBox3
