import PuzzleOpinions from "components/PuzzleOpinions"
import { Button } from "helpers/Button"
import { PuzzleBlue } from "helpers/LayoutElements"
import React from "react"

const ListItem: React.FC<{ emoji: string; text: string }> = ({
  emoji,
  text,
}) => (
  <li className="flex items-start">
    <span className="mr-4 text-adaTitle">{emoji}</span>
    <span className="text-base font-medium">{text}</span>
  </li>
)

const PuzzleSame = () => {
  const listItems = [
    {
      emoji: "🤔",
      text: "Poczekać na Black Friday i przedświąteczne szaleństwo — bo myślisz, że wtedy sprzedaż ruszy z automatu",
    },
    {
      emoji: "😡",
      text: "Zrezygnować z inwestycji w reklamy, bo boisz się, że to tylko kolejny wydatek, który się nie zwróci",
    },
    {
      emoji: "😔",
      text: "Wrócić do strategii organicznego rozwoju, choć wiesz, że ten sposób już nie przynosi efektów",
    },
    {
      emoji: "😩",
      text: "Skupić się na tworzeniu kolejnych postów i treści, zamiast zająć się skuteczną sprzedażą",
    },
    {
      emoji: "😰",
      text: "Odłożyć na później wdrożenie płatnych kampanii, bo czujesz się przytłoczona całą logistyką i technologią",
    },
  ]

  return (
    <div className="relative mb-10 flex flex-col max-w-4xl items-center text-center mx-auto">
      <h2 className="text-adaSubtitleSecondary max-w-2xl font-bold text-ada-blue my-10 leading-tight">
        TE PRZEDSIĘBIORCZNIE RÓWNIEŻ DOŚWIADCZAŁY PODOBNYCH PROBLEMÓW, ZANIM
        PODJĘŁY ZE MNĄ WSPÓŁPRACĘ REKLAMOWĄ:
      </h2>
      <PuzzleOpinions />
      <Button
        type="button"
        text={
          <span className="font-bold">
             Rezerwuję miejsce na wyzwaniu TERAZ!!
          </span>
        }
        sectionId="puzzle-end"
        textSize="md:text-adaSubtitle"
        btnStyle="mt-10 uppercase md:w-[480px] bg-ada-pink2 tracking-[2.90px] h-[100px] shadow-xl mx-4 md:mx-0"
      />
      <h3 className="text-adaSubtitle font-bold text-ada-purple my-10 bg-ada-purple  px-2 py-1 inline-block rounded-sm">
        Jeśli kusi Cię teraz, aby:
      </h3>
      <ul className="text-left space-y-4 max-w-xl">
        {listItems.map((item, index) => (
          <ListItem key={index} emoji={item.emoji} text={item.text} />
        ))}
      </ul>
      <PuzzleBlue
        top="hidden lg:block top-1/2 -rotate-12"
        right="-right-20 xl:-right-60"
      />
      <PuzzleBlue
        top="hidden lg:block top-2/3 rotate-12"
        left="-left-20 xl:-left-60"
      />
      <PuzzleBlue
        top="hidden lg:block bottom-10 rotate-3"
        left="-right-20 xl:-right-60"
      />
    </div>
  )
}

export default PuzzleSame
