import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import WebinarForm from "components/WebinarForm"

const HolidayForm = (): JSX.Element => {
  return (
    <section
      className="w-full flex flex-col items-center text-center py-20"
      id="zostaw-maila"
    >
      <div className="md:text-adaSubtitle max-w-[900px]">
        <p className="font-bold">
          Chcesz zaprojektować takie przemyślane & skuteczne kampanie reklamowe
          pod moim okiem?
        </p>
        <p className="pt-4">Zarezerwuj miejsce na warsztacie:</p>
      </div>
      <div className="flex flex-col md:flex-row py-6">
        <div className="md:min-w-[560px]">
          <StaticImage
            loading="eager"
            src={"../../images/mentoring.webp"}
            alt="Ada Promis - hero"
            placeholder="blurred"
            width={448}
            height={500}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </div>
        <WebinarForm />
      </div>
    </section>
  )
}

export default HolidayForm
