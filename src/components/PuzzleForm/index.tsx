import React from "react"
import formPuzzle from "../../values/forms/form-wyzwanie.html"

const PuzzleForm = () => {
  return (
    <div className="items-center pt-10 md:pt-20 pb-10" id="puzzle-form">
      <div className="form-scale">
        <div dangerouslySetInnerHTML={{ __html: formPuzzle }} />
      </div>
    </div>
  )
}

export default PuzzleForm
