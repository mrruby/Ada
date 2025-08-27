import React from "react"

const MentoringInfo = () => {
  const listItemClass =
    "text-[15px] lg:text-adaDesc leading-tight font-medium py-2 leading-tight"

  const leftYesList = [
    <span key={0}>
      pracujesz w marketingu lub jesteś Wirtualną Asystentką i chcesz poszerzyć
      wachlarz swoich usług o kampanie reklamowe z celami:
      <span className="font-bold">
        {" "}
        pozyskanie obserwujących, zbudowanie listy newsletterowej, sprzedaż
        produktów i usług
      </span>
    </span>,
    <span key={1}>
      prowadzisz już pierwsze proste kampanie reklamowe lub promujesz posty na
      IG i <span className="font-bold"> chcesz wykorzystać potencjał</span> tego
      sposobu zdobywania klientów na 110%
    </span>,
    <span key={2}>
      chcesz{" "}
      <span className="font-bold">
        {" "}
        rozwijać swoją wiedzę, umiejętności i biznesy swoich klientów,
      </span>{" "}
      a dzięki temu zarabiać więcej
    </span>,
    <span key={3}>
      wiesz, że
      <span className="font-bold"> skuteczny marketing </span>
      to patrzenie na liczby + kreatywna głowa i chcesz działać w ten sposób
    </span>,
  ]

  const rightYesList = [
    <span key={0}>
      możesz
      <span className="font-bold">
        {" "}
        regularnie przeznaczyć czas na kampanie —{" "}
      </span>
      zdajesz sobie sprawę, że tutaj nie wystarczy zerknięcie z doskoku
    </span>,
    <span key={1}>
      <span className="font-bold">
        {" "}
        znasz podstawową obsługę menadżera reklam
      </span>{" "}
      — nie musisz wyklikiwać kampanii z zamkniętymi oczami, ale wiedza, gdzie
      kliknąć, aby ustawić kampanię i stworzyć zestaw reklam to must have{" "}
    </span>,
    <span key={2}>
      <span className="font-bold">jesteś gotowa </span> na pracę, testowanie,
      analizę, modyfikacje i świętowanie (tak, na to też przyjdzie czas, gdy
      zobaczysz rosnące wyniki)
    </span>,
  ]

  const leftNoList = [
    <span key={0}>
      masz nadzieję, że
      <span className="font-bold"> wyniki zrobią się „same” </span>w menadżerze
      reklam
    </span>,
    <span key={1}>
      nie masz czasu na regularną pracę nad kampaniami, przygotowywanie
      materiałów i optymalizację
    </span>,
    <span key={2}>
      <span className="font-bold">wiesz, że </span>
      Ty wszystko zrobisz najlepiej{" "}
      <span className="font-bold"> i nie interesują Cię inne perspektywy</span>
    </span>,
  ]
  const rightNoList = [
    <span key={0}>
      nigdy nie widziałaś na oczy menadżerze reklam, albo słyszysz o nim
      pierwszy raz. W takim wypadku proponuję, abyś najbliższe miesiące spędziła
      na przeklikaniu się przez system i dołączyła do drugiej edycji.
    </span>,
    <span key={1}>
      jesteś super wymiataczką —
      <span className="font-bold">
        tworzysz kampanie z ROAS-em 20 i wiesz, że ogarniasz.{" "}
      </span>
      Brawo!
    </span>,
  ]

  return (
    <div className="flex flex-col text-ada-blue items-center px-3 pb-16">
      <div className="pt-[60px] lg:pt-[150px]">
        <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce uppercase">
          Program jest dla Ciebie, jeśli…{" "}
        </h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-8">
          <ul className="lg:max-w-[500px] pt-6">
            {leftYesList.map((item, index) => (
              <div className="flex gap-4">
                <span className="text-[44px] font-extrabold">&#10003; </span>{" "}
                <li key={index} className={listItemClass}>
                  {item}
                </li>
              </div>
            ))}
          </ul>
          <ul className="lg:max-w-[500px] pt-6">
            {rightYesList.map((item, index) => (
              <div className="flex gap-4">
                <span className="text-[44px] font-extrabold">&#10003; </span>{" "}
                <li key={index} className={listItemClass}>
                  {item}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-[60px] lg:pt-[76px] pb-[100px]">
        <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce uppercase max-w-[800px] mx-auto">
          NIE jest dla Ciebie, jeśli…{" "}
        </h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-8 pt-4">
          <ul className="lg:max-w-[500px] pt-6">
            {leftNoList.map((item, index) => (
              <div className="flex gap-4">
                <span className="text-[44px] font-extrabold">&#10007;</span>
                <li key={index} className={listItemClass}>
                  {item}
                </li>
              </div>
            ))}
          </ul>
          <ul className="lg:max-w-[500px] pt-6">
            {rightNoList.map((item, index) => (
              <div className="flex gap-4">
                <span className="text-[44px] font-extrabold">&#10007;</span>
                <li key={index} className={listItemClass}>
                  {item}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MentoringInfo
