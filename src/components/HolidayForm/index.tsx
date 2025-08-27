import WakacjeForm from "components/WakacjeForm"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const HolidayForm = () => {
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
        <p className="pt-4">
          Odbierz natychmiastowy dostęp do szkolenia za 0 zł
        </p>
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
        <WakacjeForm />
      </div>
    </section>
  )
}

export default HolidayForm
