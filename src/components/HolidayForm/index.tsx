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
      <div className="flex flex-col md:flex-row gap-0 py-6">
        <StaticImage
          loading="eager"
          src={"../../images/mentoring.webp"}
          alt="Ada Promis - hero"
          placeholder="none"
          width={766}
          height={818}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
        <WebinarForm />
      </div>
      <div className="md:text-adaSubtitle font-bold">
        <p>Pssst! Warto dołączyć na żywo, aby wziąć udział w sesji Q&A.</p>
        <p>Nie możesz w tym terminie?</p>
        <p>Zapisz się, a po warsztatach dostaniesz nagranie.</p>
      </div>
    </section>
  )
}

export default HolidayForm
