import React from "react"

const MastermindInfo3 = (): JSX.Element => {
  const listItemClass =
    "text-[15px] lg:text-adaDesc leading-tight font-medium py-2 leading-tight"

  const whatYouGetList: JSX.Element[] = [
    <span key={0}>
      Zdobędziesz wiedzę i umiejętności, które{" "}
      <span className="font-bold">
        zwrócą Ci się wielokrotnie w Twoim biznesie.
      </span>
    </span>,
    <span key={1}>
      Nauczysz się
      <span className="font-bold"> przyciągać klientów</span> na Twoje social
      media, webinary i listy e-mail na zawołanie.
    </span>,
    <span key={2}>
      Wreszcie napełnisz swoje lejki marketingowe odpowiednimi klientami.
    </span>,
    <span key={3}>
      Przestaniesz mówić wciąż do{" "}
      <span className="font-bold">tych samych osób</span>, Twoje świetnie
      ustawione reklamy będą docierać do nowych potencjalnych klientów.
    </span>,
    <span key={4}>
      Będziesz spokojna, że Twoje pieniądze zainwestowane w reklamę pracują na
      siebie, nawet gdy śpisz.
    </span>,
    <span key={5} className="font-bold">
      Przestaniesz się frustrować przepalonym budżetem.
    </span>,
  ]

  const programDetailsList: JSX.Element[] = [
    <span key={0}>
      6 spotkań w czasie rzeczywistym po{" "}
      <span className="font-bold">2,5 godziny,</span>
    </span>,
    <span key={1}>
      na start: <span className="font-bold">konsultacja indywidualna</span> (60
      minut) dotycząca kampanii reklamowych,
    </span>,
    <span key={2}>
      bieżący kontakt i wsparcie na{" "}
      <span className="font-bold">grupie na Facebooku,</span>
    </span>,
    <span key={3}>
      nagrania ze wszystkich spotkań na żywo dostępne{" "}
      <span className="font-bold">bez ograniczeń,</span>
    </span>,
    <span key={4}>
      każde spotkanie to godzina tematu przewodniego +{" "}
      <span className="font-bold">Q&A</span> i możliwość, wskoczenia na hot seat
      ze swoim problemem,
      <br />
    </span>,
    <span key={5}>
      co tydzień: <span className="font-bold">office hours</span>, podczas
      których możesz szybko rozwiązać bieżący problem z reklamami lub
      zoptymalizować je pod moim czujnym okiem
    </span>,
  ]

  return (
    <div className="w-full flex flex-col px-3 items-center ">
      <div className="pt-[60px] lg:pt-[150px]">
        <h2 className="text-adaDesc lg:text-adaTitle font-bold md:w-[878px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce">
          Co dostajesz w ramach programu?
        </h2>
        <ul className="lg:max-w-[1084px] pt-6">
          {whatYouGetList.map((item, index) => (
            <li key={index} className={listItemClass}>
              &#10003; {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-[60px] lg:pt-[76px]">
        <h2 className="text-[20px] lg:text-adaTitle font-bold w-[150px]  md:w-[350px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce">
          W programie
        </h2>
        <ul className="md:max-w-[1084px] pt-6">
          {programDetailsList.map((item, index) => (
            <li key={index} className={listItemClass}>
              &#10003; {item}
            </li>
          ))}
          <li className={listItemClass}>
            ...abyś lepiej niż kiedykolwiek
            <span className="font-bold">
              {" "}
              zadbała o swój biznes i przepływ klientów!
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MastermindInfo3
