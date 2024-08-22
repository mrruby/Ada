import React from "react"
import formPuzzle from "../../values/forms/form-wyzwanie.html"

const PuzzleForm = (): JSX.Element => {
  return (
    <div
      className="px-2 xl:px-6 flex-col items-center pt-10 md:pt-20 pb-[120px]"
      id="webinar-form"
    >
      <div className="form-scale">
        <div dangerouslySetInnerHTML={{ __html: formPuzzle }} />
      </div>
    </div>
  )
}

export default PuzzleForm
