import React from "react"
import { PuzzlePink } from "helpers/LayoutElements"
import { StaticImage } from "gatsby-plugin-image"

const PuzzleAttention: React.FC = () => {
  const items = [
    "Pragniesz spokoju i pewności, że Twoje działania są oparte na solidnych danych, a nie domysłach.",
    "Wiesz, że masz już dane, które mogą poprowadzić Twój biznes do sukcesu – teraz chcesz je zrozumieć i skutecznie wykorzystać.",
    "Szukasz precyzyjnych instrukcji, które krok po kroku poprowadzą Cię do stabilnego wzrostu i sukcesu Twojej firmy.",
    "Wiesz, że to koniec: organizujesz się bardziej nie urośniesz, nadadzą cię, aby zainwestować w rozwój Twojej firmy.",
    "Korzystasz z setek newsletterów i materiałów o rozwoju biznesu w Internecie i sprzedaży, jednak ciągle nie wiesz.",
  ]

  return (
    <div className="relative flex flex-col items-center p-4 text-ada-blue  mx-auto mb-20">
      <h2 className="text-adaSubtitleSecondary font-bold mb-6 bg-ada-pink5 px-2 py-1 inline-block rounded-sm">
        UWAGA!
      </h2>
      <p className="text-adaBase font-medium text-ada-blue text-center mb-6 max-w-2xl">
        Jeśli dotyczy Cię któryś z poniższych punktów, to 3-dniowe wyzwanie jest
        dla Ciebie!
      </p>
      <ul className="list-none pl-0 space-y-8 max-w-xl mt-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-4">
            <StaticImage
              src={"../../images/check.svg"}
              alt="Ada Promis"
              placeholder="blurred"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <p className="text-left">{item}</p>
          </li>
        ))}
      </ul>
      <PuzzlePink
        top="hidden xl:block top-10 rotate-12"
        left="left-20 2xl:left-40"
      />
      <PuzzlePink
        top="hidden xl:block top-96 -rotate-12"
        right="right-20 2xl:right-40"
      />
    </div>
  )
}

export default PuzzleAttention
