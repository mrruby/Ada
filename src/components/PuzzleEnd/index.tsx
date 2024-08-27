import PuzzleForm from "components/PuzzleForm"
import PuzzleOpinions from "components/PuzzleOpinions"
import React from "react"

const PuzzleEnd = (): JSX.Element => {
  return (
    <div
      id="puzzle-end"
      className="mb-10 flex flex-col max-w-4xl items-center text-center mx-auto"
    >
      <PuzzleForm />

      <h2 className="text-adaSubtitleThird max-w-3xl font-bold text-ada-blue mb-6">
        Nie mogę się doczekać Twoich efektów!
      </h2>
      <PuzzleOpinions />
    </div>
  )
}

export default PuzzleEnd
