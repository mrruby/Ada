import React from "react"
import { Button } from "helpers/Button"

const ThankBanner = (): JSX.Element => {
  return (
    <div className="flex px-2 pt-[140px] flex-col items-center text-center text-ada-blue relative min-h-[50vh] md:min-h-[85vh]">
      <h1 className="text-[20px] lg:text-adaTitle2 font-bold">
        Sprawdź skrzynkę <br /> i potwierdź zapis na newsletter.
      </h1>
    </div>
  )
}

export default ThankBanner
