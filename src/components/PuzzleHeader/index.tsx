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
        <div className="max-w-sm">
          <PuzzleForm />
        </div>
        <Button
          type="button"
          text={<span className="font-bold">Startujemy już 2 września!</span>}
          sectionId="puzzle-end"
          textSize="md:text-adaSubtitle"
          btnStyle="uppercase md:w-[480px] bg-ada-pink2 tracking-[2.90px] h-[100px] shadow-xl mx-4 md:mx-0"
        />
        <PuzzleBlue top="hidden md:block top-10" right="-right-40" />
        <PuzzlePink top=" hidden lg:block top-10" left="-left-60" />
      </div>
    </div>
  )
}

export default PuzzleBanner
