import WebinarForm from "components/WebinarForm"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import { PuzzleBlue, PuzzlePink } from "helpers/LayoutElements"
import React from "react"

const PuzzleContainsItem: React.FC<{
  title: string
  description: string
}> = ({ title, description }): JSX.Element => (
  <div className="flex items-start">
    <img
      src="/assets/small-puzzle.svg"
      alt=""
      className="w-8 h-8 mr-4 flex-shrink-0"
    />
    <div className="flex flex-col items-start">
      <div className="bg-ada-pink5 my-1">
        <h3 className="font-semibold text-lg text-left px-2">{title}</h3>
      </div>
      <p className="text-sm text-left px-2">{description}</p>
    </div>
  </div>
)

const PuzzleContains = (): JSX.Element => {
  return (
    <div className="mt-20 mb-10 flex flex-col max-w-3xl items-center text-center mx-auto">
      <h2 className="text-adaSubtitleThird font-bold text-ada-blue mb-6">
        5-Dniowe Wyzwanie Zawiera:
      </h2>

      <div className="space-y-6 max-w-2xl">
        <PuzzleContainsItem
          title="3 MINISZKOLENIA VIDEO"
          description="Poznasz kluczowe informacje dzięki którym zaprojektujesz swoją pierwszą kampanię reklamową opartą na potężnych danych o odbiorcach i zrozumiesz zasady ich efektywnego zargonu."
        />

        <PuzzleContainsItem
          title="2 DEDYKOWANE SESJE Q&A Z ADRIANNĄ PROMIS-URBAS"
          description="Ekspertką od płatnych kampanii reklamowych, która od ponad 6 lat prowadzi działania reklamowe dla klientów z Polski i zagranicy. Wydała na nie już ponad 2 000 000 złotych i wygenerowała o wiele więcej zysku."
        />

        <PuzzleContainsItem
          title="5 DNI WSPARCIA MENTORINGOWEGO"
          description="W ekskluzywnej grupie reklamowej - otrzymasz nielimitowane odpowiedzi na swoje pytania od Adrianny przez cały okres trwania wyzwania, gratulacje i motywację od wspaniałej społeczności!"
        />
      </div>

      <h2 className="font-bold text-adaSubtitle text-ada-blue mt-8 mb-4 max-w-sm">
        TO WSZYSTKO DOSTANIESZ CAŁKOWICIE BEZPŁATNIE!
      </h2>
      {/* <Button
        type="button"
        text={<span className="font-bold">MUSZĘ WZIĄĆ W TYM UDZIAŁ!</span>}
        sectionId="masterclasses"
        textSize="md:text-adaSubtitle"
        btnStyle="uppercase md:w-[480px] bg-ada-pink2 tracking-[2.90px] h-[100px] shadow-xl mx-4 md:mx-0"
      /> */}
    </div>
  )
}

export default PuzzleContains
