import React from "react"

const MastermindInfo2 = (): JSX.Element => {
  const listItemClass =
    "text-[15px] lg:text-adaDesc leading-tight font-medium py-2 leading-tight"

  const programList: JSX.Element[] = [
    <span key={0}>
      Twoje cele w kampaniach reklamowych to:{" "}
      <span className="font-bold">
        pozyskanie obserwujących, zbudowanie listy newsletterowej, sprzedaż
        produktów i usług,
      </span>
    </span>,
    <span key={1}>
      jesteś w stanie przeznaczyć{" "}
      <span className="font-bold">minimum 700 zł </span>miesięcznie na budżet
      reklamowy Meta,
    </span>,
    <span key={2}>
      zależy Ci na osiąganiu lepszych wyników dzięki kampaniom reklamowym,
    </span>,
    <span key={3}>
      chcesz{" "}
      <span className="font-bold">
        rozwijać swoją wiedzę, umiejętności i biznes,{" "}
      </span>
    </span>,
    <span key={4}>
      skuteczny marketing to patrzenie na liczby + kreatywna głowa i chcesz
      działać w ten sposób,
    </span>,
    <span key={5}>
      możesz regularnie przeznaczyć czas na kampanie — zdajesz sobie sprawę, że
      tutaj nie wystarczy zerknięcie z doskoku,
    </span>,
    <span key={6}>
      <span className="font-bold">znasz podstawową obsługę </span>Managera
      reklam — nie musisz wyklikiwać kampanii z zamkniętymi oczami, ale wiedza,
      gdzie kliknąć, aby ustawić kampanię i stworzyć zestaw reklam to must have,
    </span>,
    <span key={7}>
      jesteś gotowa na{" "}
      <span className="font-bold">
        pracę, testowanie, analizę, modyfikacje{" "}
      </span>
      świętowanie (tak, na to też przyjdzie czas, gdy zobaczysz rosnące wyniki).
    </span>,
  ]

  const notForYouList: JSX.Element[] = [
    <span key={0}>
      masz nadzieję, że{" "}
      <span className="font-bold">wyniki zrobią się „same”</span> w Managerze
      Reklam
    </span>,
    <span key={1}>
      <span className="font-bold">nie masz czasu </span>na regularną pracę nad
      kampaniami, przygotowywanie materiałów i optymalizację,
    </span>,
    <span key={2}>
      myślisz, że{" "}
      <span className="font-bold">
        że 100 zł wrzucone do Managera Reklam wystarczy.
      </span>{" "}
      Niestety, to za mało — minimalny budżet, przy którym zbudujesz lejek z
      pomocą kampanii to 700 zł,
    </span>,
    <span key={3}>
      wiesz, że{" "}
      <span className="font-bold">Ty wszystko zrobisz najlepiej </span>i nie
      interesują Cię inne perspektywy
    </span>,
    <span key={4}>
      <span className="font-bold">
        nigdy nie widziałaś na oczy Managera Reklam,{" "}
      </span>
      albo słyszysz o nim pierwszy raz. W takim wypadku proponuję, abyś
      najbliższe miesiące spędziła na przeklikaniu się przez system i dołączyła
      do drugiej edycji.
    </span>,
    <span key={5}>
      <span className="font-bold">jesteś super wymiataczką</span>— tworzysz
      kampanie z ROAS-em 20 i wiesz, że już nie może być lepiej. Brawo!
    </span>,
  ]

  return (
    <div className="w-full flex flex-col px-3 items-center">
      <div className="pt-[60px] lg:pt-[76px]">
        <h2 className="text-[20px] lg:text-adaTitle font-bold md:w-[774px] border-b-[12px] lg:mb-2 lg:border-b-[34px] border-ada-light-pink h-[24px] lg:h-[60px]">
          Program jest dla Ciebie, jeśli…
        </h2>
        <ul className="md:max-w-[1084px] pt-6">
          {programList.map((item, index) => (
            <li key={index} className={listItemClass}>
              &#10003; {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-[60px] lg:pt-[76px] flex">
        <div className="lg:h-[480px] lg:w-[310px] bg-puzzles lg:mr-10"></div>
        <div>
          <h2 className="text-[20px] lg:text-adaTitle font-bold md:w-[658px] border-b-[12px] lg:mb-2 lg:border-b-[34px] border-ada-light-pink h-[24px] lg:h-[60px]">
            Nie jest dla Ciebie, jeśli…
          </h2>
          <ul className="md:max-w-[750px] pt-6">
            {notForYouList.map((item, index) => (
              <li key={index} className={listItemClass}>
                &#10003; {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MastermindInfo2
