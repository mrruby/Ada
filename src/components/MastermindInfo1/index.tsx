import React from "react"

const MastermindInfo1 = (): JSX.Element => {
  const listItemClass =
    "text-[15px] lg:text-adaDesc leading-tight font-medium py-2 leading-tight"

  return (
    <div className="w-full flex flex-col px-3 py-2" id="mastermind">
      <h2 className="text-adaSubtitle lg:text-adaBig font-bold text-center text-ada-white40 mb-[-10px]">
        Prowadzisz własny biznes?
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:gap-[50px] pt-10 md:pt-[60px]">
        <ul className="max-w-[530px]">
          <li className={listItemClass}>
            &#10003; Budujesz markę osobistą i chcesz być bardziej widoczna w
            social mediach?
          </li>
          <li className={listItemClass}>
            &#10003; Jesteś specjalistką w swojej dziedzinie i chcesz z
            lekkością pozyskiwać nowych klientów na swoje usługi?
          </li>
          <li className={listItemClass}>
            &#10003; Przekopałaś już całego Facebooka w poszukiwaniu nowych
            klientów, ale zamiast spektakularnych efektów czujesz zmęczenie i
            rezygnację?
          </li>
          <li className={listItemClass}>
            &#10003; Wiesz, że wiele osób chętnie skorzystałoby z Twojej oferty,
            ale nie wiesz, jak do nich dotrzeć?
          </li>
          <li className={listItemClass}>
            &#10003; Chcesz wypromować swój e-book, webinar, kurs online?
          </li>
          <li className={listItemClass}>
            &#10003; Planujesz kampanię sprzedażową i chcesz wreszcie przebić
            szklany sufit swoich przychodów?
          </li>
        </ul>
        <ul className="max-w-[536px]">
          <li className={listItemClass}>
            &#10003; Zrobiłaś już milion kursów, ale nie do końca wiesz, jak
            wdrożyć te wszystkie „genialne metody na sukces” w życie?
          </li>
          <li className={listItemClass}>
            &#10003; Nie chcesz powierzać swojego marketingu agencji reklamowej
            — chcesz samodzielnie dotrzeć do swoich klientów?
          </li>
          <li className={listItemClass}>
            &#10003; Masz dość walki z algorytmem Instagrama i Facebooka?
          </li>
          <li className={listItemClass}>
            &#10003; Czujesz się sfrustrowana, gdy Twoje wartościowe treści są
            przykryte przez czyjeś wygłupy i tańce?
          </li>
          <li className={listItemClass}>
            &#10003; A może prowadzisz własny sklep i ciągle sprzedajesz, a na
            spotkaniach z bliskimi czujesz się jak konsultantka z Avonu?
          </li>
        </ul>
      </div>
      <h3 className="md:text-adaSubtitle max-w-[1024px] mx-auto font-medium pt-[90px] pb-[30px]">
        Wiem, jak się teraz czujesz.
        <span className="font-bold"> Rozczarowanie. Frustracja. </span>Chęć
        zmiany, ale również niepewność — skąd masz wiedzieć, czy to, co robisz,
        ma sens?
      </h3>
    </div>
  )
}

export default MastermindInfo1
