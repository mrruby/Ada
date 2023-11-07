import React from "react"
import { Button } from "helpers/Button"

const MastermindBanner = (): JSX.Element => {
  return (
    <div className="w-full bg-mastermind h-[500px] md:h-[690px] xl:h-[850px] flex flex-col items-center justify-center">
      <div className="max-w-[1072px] flex flex-col items-center">
        <h1 className="text-adaBase lg:text-adaTitle font-bold text-center leading-tight">
          Chcesz, aby więcej osób kupowało Twoje produkty i korzystało z Twoich
          usług?
        </h1>
        <p className="max-w-[980px] mx-auto text-center font-medium text-[14px] md:text-adaSubtitle leading-tight">
          Dołącz do programu mentoringowego „Ogarnij swoje adsy!” i osiągaj w
          kampaniach reklamowych wyniki, na widok których aż przetrzesz oczy!
          Dobrze zaplanowane kampanie reklamowe pracują „same”. Przyciągną do
          Ciebie nowych klientów nawet wtedy, gdy śpisz, jesteś na urlopie czy
          gdy spędzasz czas z rodziną.
        </p>
        <p className="p-[30px] max-w-[980px] mx-auto text-center font-medium text-[14px] md:text-adaSubtitle leading-tight">
          Świetne wyniki reklamowe = lepsze pieniądze = lepsze życie, prawda? ;)
        </p>
        <Button
          type="button"
          text="Chcę ulepszyć moje kampanie!"
          url="/"
          textSize="md:text-adaSubtitle"
          btnStyle="md:w-[425px]"
        />
      </div>
    </div>
  )
}

export default MastermindBanner