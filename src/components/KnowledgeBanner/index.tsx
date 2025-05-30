import React from "react"
import { Button } from "helpers/Button"

const KnowledgeBanner = (): JSX.Element => {
  return (
    <div className="flex px-2 flex-col items-center text-center text-ada-blue md:pb-[150px]">
      <div className="pt-[60px] lg:pt-[160px] z-0 pb-[30px]">
        <h2 className="text-adaBig lg:text-[96px] font-bold animate-bounce">
          Baza wiedzy
        </h2>
        <p className="lg:text-adaSubtitle lg:w-[900px] pt-[12px] font-medium leading-tight">
          Dobrze, że tutaj jesteś, bo… <br />
          to miejsce, w którym znajdziesz dużo dobroci specjalnie dla
          Ciebie!{" "}
        </p>
      </div>
      <Button
        type="button"
        text="Wchodzę i chłonę wiedzę!"
        border={true}
        sectionId="knowledge"
        textSize="lg:text-adaBase"
        btnStyle="h-50 md:w-[388px]"
      />
    </div>
  )
}

export default KnowledgeBanner
