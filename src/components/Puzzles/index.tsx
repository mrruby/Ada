import React from "react"
import { PuzzleBox } from "helpers/PuzzleBox"

const Puzzles = (): JSX.Element => {
  const PuzzleBoxData = [
    {
      text: "Darmowe materiały o slow marketingu i kampaniach reklamowych.",
      btnText: "Korzystam!",
      url: "/materials",
    },
    {
      text: "Sklep z produktami, dzięki którym nauczysz się robić reklamy w rytmie slow.",
      btnText: "Sprawdzam!",
      url: "https://sklep.adrianna.com.pl/",
    },
  ]

  return (
    <div className=" text-ada-blue flex gap-[80px] flex-col md:flex-row items-center justify-center pt-[40px] pb-[40px] md:pb-[180px]">
      <div className="flex flex-row md:flex-col ">
        <h2 className="text-[20px] lg:text-adaTitle font-bold max-w-[560px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] mr-1">
          Przygotowałam{" "}
        </h2>
        <h2 className="text-[20px] lg:text-adaTitle font-bold max-w-[278px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px]">
          dla Ciebie
        </h2>
      </div>
      {PuzzleBoxData.map((puzzle, index) => (
        <PuzzleBox
          key={index}
          text={puzzle.text}
          btnText={puzzle.btnText}
          url={puzzle.url}
        />
      ))}
    </div>
  )
}

export default Puzzles
