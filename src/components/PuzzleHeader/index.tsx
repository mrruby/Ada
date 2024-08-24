import PuzzleForm from "components/PuzzleForm"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import { PuzzleBlue, PuzzlePink } from "helpers/LayoutElements"
import React from "react"

const PuzzleBanner = (): JSX.Element => {
  return (
    <div className="relative">
      <div className="mt-20 mb-10 flex flex-col items-center md:items-start max-w-3xl text-center mx-auto relative">
        <h1 className="text-adaTitle font-extrabold tracking-wider leading-tight text-ada-blue mb-4 text-left">
          UŁÓŻ <span className="text-ada-pink5">PUZZLE</span> SWOJEGO BIZNESU Z
          REKLAMAMI!
        </h1>
        <p className="text-adaDesc font-medium text-ada-blue mb-6 text-left">
          Odbierz <span className="font-bold">darmowy dostęp</span> do 3
          minilekcji wideo, które odkryją przed Tobą potencjał reklamowy Twojego
          biznesu.
        </p>
        <p className="text-adaBase font-medium text-ada-blue text-left">
          Naucz się, jak zrozumieć dane o swoich odbiorcach i zaprojektować
          kampanię, która przekształci ich w Twoich klientów
        </p>
        <div className="max-w-sm md:pl-4">
          <PuzzleForm />
        </div>
        <h2 className="text-adaSubtitle md:text-adaSubtitleThird leading-3 font-bold md:border-b-[30px] border-ada-pink2 mt-6 text-center max-w-[844px] ">
          STARTUJEMY JUŻ 2 WRZEŚNIA!
        </h2>
        <PuzzleBlue top="hidden md:block top-10" right="-right-40" />
        <PuzzlePink top=" hidden lg:block top-10" left="-left-60" />
      </div>
    </div>
  )
}

export default PuzzleBanner
