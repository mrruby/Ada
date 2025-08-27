import { SmallPuzzlePink } from "helpers/LayoutElements"
import React from "react"

const PuzzleDream: React.FC = () => {
  return (
    <div className="mt-28 md:ml-40 relative flex justify-center w-full my-10 z-10 bg-ada-purple p-6 rounded-lg">
      <div className="text-white max-w-2xl">
        <p className="text-adaSubtitleSecondary font-bold">
          Jeśli marzysz o biznesie, który przynosi Ci stabilne pieniądze nawet
          gdy nie pracujesz...
        </p>
        <p className="mt-4 text-adaBase">
          odbierz dostęp do <span className="font-bold">3 miniszkoleń</span> i w{" "}
          <span className="font-bold">5 dni</span> stwórz pod moim okiem
          strukturę swojej pierwszej dochodowej kampanii reklamowej
        </p>
      </div>
      <SmallPuzzlePink
        top="hidden xl:block rotate-12 w-20"
        right="right-40 2xl:right-60"
      />
      <SmallPuzzlePink
        top="hidden xl:block -rotate-12 w-20 top-40"
        right="right-40 2xl:right-40"
      />
    </div>
  )
}

export default PuzzleDream
