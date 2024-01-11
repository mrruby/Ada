import React from "react"
import { MasterclassInfoSection } from "helpers/MasterclassInfoSection"
import { Button } from "helpers/Button"

const listItems = [
  "Podsumowałaś 2023 rok, myślisz o planach w 2024 i zastanawiasz się, jak to wszystko ogarnąć bez ciągłej obecności w mediach społecznościowych?",
  "Przygotowałaś świetne posty, merytoryczne treści, a zobaczyła je zaledwie garstka Twoich obserwujących?",
  "Twoja firma żyje w chaosie - w którym dotychczas nie było przestrzeni na przemyślane reklamy?",
  "Szukasz systemu, który działa w tle, kiedy Ty spędzasz czas z rodziną, odpoczywasz lub oglądasz serial?",
]

const MasterclassInfo1 = (): JSX.Element => {
  return (
    <div
      className="w-full flex flex-col px-3 py-2 items-center pt-16 mb-[85px]"
      id="prowadze-wlasny-biznes"
    >
      <MasterclassInfoSection
        title="Prowadzę własny biznes / Jestem freelancerką"
        list={listItems}
      />
      <h3 className="md:text-adaSubtitleSecondary font-bold max-w-[945px] text-center py-[100px]">
        Jeśli odpowiedziałaś <span className="text-ada-purple">tak</span> na co
        najmniej jedną „kropkę”, to warsztaty{" "}
        <span className="text-ada-purple">
          „KEVIN SAM W MENEDŻERZE REKLAM: STWÓRZ LEJEK REKLAMOWY NA 2024 ROK!”
        </span>{" "}
        są dla Ciebie!
      </h3>
      <h3 className="md:text-adaSubtitleThird uppercase font-extrabold pb-10">
        Bez względu na to, czy:
      </h3>
      <ul className="md:text-adaSubtitle max-w-[860px]">
        <li className="mb-5 flex">
          <span className="inline-block w-6 h-6 bg-ada-pink2 rounded-xl mr-4 flex-shrink-0"></span>
          Już prowadzisz kampanie reklamowe i w 2024 roku chcesz wycisnąć je jak
          cytrynkę 🍋
        </li>
        <li className="mb-5 flex">
          <span className="inline-block w-6 h-6 bg-ada-pink2 rounded-xl mr-4 flex-shrink-0"></span>
          Jeszcze nigdy nie inwestowałaś w płatne reklamy, ale zastanawiasz się,
          jakie działania mogłabyś wdrożyć, aby zobaczyć wzrost sprzedaży w
          swoim biznesie 📈
        </li>
        <li className="mb-[70px] flex">
          <span className="inline-block w-6 h-6 bg-ada-pink2 rounded-xl mr-4 flex-shrink-0"></span>
          Nie prowadzisz reklam samodzielnie, a je zlecasz 🚀
        </li>
      </ul>
      <Button
        type="button"
        text={
          <span className="font-bold">
            CHCĘ SKUTECZNIE ROZWINĄĆ MÓJ BIZNES <br /> W 2024 ROKU!
          </span>
        }
        url="/"
        textSize="md:text-adaSubtitle"
        btnStyle="md:w-[858px] bg-ada-pink2 tracking-[2.90px]"
      />
    </div>
  )
}

export default MasterclassInfo1
