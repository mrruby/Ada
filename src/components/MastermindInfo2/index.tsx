import React from "react"

const MastermindInfo2 = (): JSX.Element => {
  const listItemClass =
    "text-[15px] lg:text-adaDesc leading-tight font-medium py-2 leading-tight"

  return (
    <div className="w-full flex flex-col px-3 items-center">
      <div className="pt-[60px] lg:pt-[76px]">
        <h2 className="text-[20px] lg:text-adaTitle font-bold md:w-[774px] border-b-[12px] lg:mb-2 lg:border-b-[34px] border-ada-light-pink h-[24px] lg:h-[60px]">
          Program jest dla Ciebie, jeśli…
        </h2>
        <ul className="md:max-w-[1084px] pt-6">
          <li className={listItemClass}>
            &#10003; Twoje cele w kampaniach reklamowych to:{" "}
            <span className="font-bold">
              pozyskanie obserwujących, zbudowanie listy newsletterowej,
              sprzedaż produktów i usług,
            </span>
          </li>
          <li className={listItemClass}>
            &#10003; jesteś w stanie przeznaczyć{" "}
            <span className="font-bold">minimum 700 zł </span>miesięcznie na
            budżet reklamowy Meta,
          </li>
          <li className={listItemClass}>
            &#10003; zależy Ci na osiąganiu lepszych wyników dzięki kampaniom
            reklamowym,
          </li>
          <li className={listItemClass}>
            &#10003; chcesz{" "}
            <span className="font-bold">
              rozwijać swoją wiedzę, umiejętności i biznes,{" "}
            </span>
          </li>
          <li className={listItemClass}>
            &#10003; wiesz, że{" "}
            <span className="font-bold"> skuteczny marketing </span>to patrzenie
            na liczby + kreatywna głowa i chcesz działać w ten sposób,
          </li>
          <li className={listItemClass}>
            &#10003; możesz regularnie przeznaczyć czas na kampanie — zdajesz
            sobie sprawę, że tutaj nie wystarczy zerknięcie z doskoku,
          </li>
          <li className={listItemClass}>
            &#10003;
            <span className="font-bold">znasz podstawową obsługę </span>
            Managera reklam — nie musisz wyklikiwać kampanii z zamkniętymi
            oczami, ale wiedza, gdzie kliknąć, aby ustawić kampanię i stworzyć
            zestaw reklam to must have,
          </li>
          <li className={listItemClass}>
            &#10003; jesteś gotowa na{" "}
            <span className="font-bold">
              pracę, testowanie, analizę, modyfikacje{" "}
            </span>
            świętowanie (tak, na to też przyjdzie czas, gdy zobaczysz rosnące
            wyniki).
          </li>
        </ul>
      </div>
      <div className="pt-[60px] lg:pt-[76px] flex">
        <div className="lg:h-[480px] lg:w-[310px] bg-puzzles lg:mr-10"></div>
        <div>
          <h2 className="text-[20px] lg:text-adaTitle font-bold md:w-[658px] border-b-[12px] lg:mb-2 lg:border-b-[34px] border-ada-light-pink h-[24px] lg:h-[60px]">
            Nie jest dla Ciebie, jeśli…
          </h2>
          <ul className="md:max-w-[750px] pt-6">
            <li className={listItemClass}>
              &#10003; masz nadzieję, że{" "}
              <span className="font-bold">wyniki zrobią się „same”</span> w
              Managerze Reklam
            </li>
            <li className={listItemClass}>
              &#10003;
              <span className="font-bold">nie masz czasu </span> na regularną
              pracę nad kampaniami, przygotowywanie materiałów i optymalizację,
            </li>
            <li className={listItemClass}>
              &#10003; myślisz, że{" "}
              <span className="font-bold">
                że 100 zł wrzucone do Managera Reklam wystarczy.
              </span>
              Niestety, to za mało — minimalny budżet, przy którym zbudujesz
              lejek z pomocą kampanii to 700 zł,
            </li>
            <li className={listItemClass}>
              &#10003; wiesz, że{" "}
              <span className="font-bold">Ty wszystko zrobisz najlepiej </span>i
              nie interesują Cię inne perspektywy
            </li>
            <li className={listItemClass}>
              &#10003;
              <span className="font-bold">
                nigdy nie widziałaś na oczy Managera Reklam,{" "}
              </span>
              albo słyszysz o nim pierwszy raz. W takim wypadku proponuję, abyś
              najbliższe miesiące spędziła na przeklikaniu się przez system i
              dołączyła do drugiej edycji.
            </li>
            <li className={listItemClass}>
              &#10003;
              <span className="font-bold"> jesteś super wymiataczką</span>—
              tworzysz kampanie z ROAS-em 20 i wiesz, że już nie może być
              lepiej. Brawo!
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MastermindInfo2
