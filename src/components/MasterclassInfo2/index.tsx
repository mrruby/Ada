import React from "react"
import { MasterclassInfoSection } from "helpers/MasterclassInfoSection"
import { Button } from "helpers/Button"

const listItems = [
  "Pracujesz na etacie w agencji lub w wewnętrznym dziale marketingu?",
  "Słyszysz narzekanie, że zasięgi powinny być większe, ale w głębi duszy czujesz, że sam zasięg nie wystarczy i chcesz wiedzieć, jak sprawić, aby oprócz dotarcia do klienta wywołać akcję?",
  "Chcesz zarabiać więcej, ale prześladuje Cię uczucie, że „umiesz za mało",
  "A może Twój plan na 2024 rok to poszerzenie swoich umiejętności marketingowych i zmiana pracy na lepiej płatną?",
  "Czy chcesz tworzyć skuteczne reklamy i dzięki temu zwiększyć swoje zarobki?",
]

const MasterclassInfo2 = (): JSX.Element => {
  return (
    <div
      className="w-full flex flex-col px-3 py-2 items-center mb-[85px]"
      id="pracuje-w-marketingu"
    >
      <MasterclassInfoSection title="Pracuję w marketingu" list={listItems} />
      <h3 className="md:text-adaSubtitleSecondary max-w-[1045px] text-center pt-[100px]">
        <span className="uppercase font-extrabold">
          Jeśli w Twojej głowie pojawiła się myśl: <br />
          <span className="text-ada-purple">„kurcze, no tak!” </span>
        </span>
        <br />
      </h3>
      <p className="md:text-adaSubtitle leading-8 max-w-[1045px] text-center pt-8 pb-[80px]">
        to znak, że na <span className="font-bold">warsztatach</span>{" "}
        przybliżysz się do życia, w którym pracujesz tak, jak lubisz i zarabiasz
        dzięki temu naprawdę fajne pieniądze{" "}
      </p>
      <Button
        type="button"
        text={
          <span className="font-bold">
            CHCĘ ZDOBYĆ UMIEJĘTNOŚCI, DZIĘKI KTÓRYM ZDOBĘDĘ PRACĘ NA MOICH
            WARUNKACH!{" "}
          </span>
        }
        url=""
        textSize="md:text-adaSubtitle"
        btnStyle="md:w-[858px] bg-ada-pink2 tracking-[2.90px]"
      />
    </div>
  )
}

export default MasterclassInfo2
