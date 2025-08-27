import { Button } from "helpers/Button"
import React from "react"

const CooperationSection = () => {
  return (
    <div className="flex px-2 lg:pl-[120px] flex-col text-ada-blue items-center text-center pb-[70px]">
      <h3 className="text-[15px] lg:text-adaSubtitle max-w-[760px] pb-6">
        {" "}
        <span className="font-bold">
          Gościnny występ w podcaście, wspólny live?
        </span>{" "}
        Napisz do mnie, a razem wymyślimy, co specjalnego możemy razem zrobić!
      </h3>
      <Button
        type="button"
        text="Piszę do Ciebie!"
        border={true}
        url="/contact"
        textSize="lg:text-adaBase"
      />
    </div>
  )
}

export default CooperationSection
