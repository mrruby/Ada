import React from "react"
import { MasterclassInfoSection } from "helpers/MasterclassInfoSection"

const listItems = [
  "Pracujesz na własny rachunek, ale gdy zaczynałaś, nikt nie powiedział Ci, że praca na swoim to wciąż obsługiwanie klientów — tylko nie ma płatnych urlopów ani L4?",
  "Chciałabyś oferować swoim klientom szerszy zakres usług, aby móc podnosić stawki i dyktować warunki?",
  "Słyszałaś, że teraz jest boom na reklamy i faktycznie — dostajesz zapytania, ale zamiast podpisywać nowe umowy, odsyłasz do konkurencji?",
  "Masz podstawową wiedzę na temat reklam, ale nie wiesz, jak je zaplanować, aby w kampaniach sprzedażowych pojawiały się kolejne zakupy?",
  "Potrzebujesz wsparcia i empatycznego wytłumaczenia, od czego zacząć reklamy?",
  "Marzysz o umiejętnościach, dzięki którym zaczniesz pracować tak, jak lubisz, bo klienci będą chętnie korzystać z Twoich usług reklamowych?",
]

const MasterclassInfo3 = (): JSX.Element => {
  return (
    <div
      className="w-full flex flex-col px-3 py-2 items-center mb-[85px]"
      id="obsluguje-klientow"
    >
      <MasterclassInfoSection title="Obsługuję klientów" list={listItems} />
    </div>
  )
}

export default MasterclassInfo3
