import React from "react"

const MastermindInfo3 = ({ version }: { version: number }): JSX.Element => {
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

  const leftWhatYouGetList2: JSX.Element[] = [
    <span key={0}>
      <span className="font-bold">Zdobędziesz wiedzę i umiejętności,</span>{" "}
      które zwrócą Ci się wielokrotnie, gdy weźmiesz pod swoje skrzydła nowych,
      dochodowych klientów.
    </span>,
    <span key={1}>
      Nauczysz się
      <span className="font-bold"> przyciągać klientów</span> na Twoje social
      media, webinary i listy e-mail na zawołanie.
    </span>,
    <span key={2}>
      Wreszcie{" "}
      <span className="font-bold">napełnisz swoje lejki marketingowe</span>{" "}
      odpowiednimi klientami.
    </span>,
    <span key={3}>
      Przestaniesz się frustrować{" "}
      <span className="font-bold">przepalonym budżetem</span>
    </span>,
  ]

  const rightWhatYouGetList2: JSX.Element[] = [
    <span key={0}>
      <span className="font-bold">Dodatkowo: </span>
      nauczysz się jak prowadzić działania reklamowe dla własnej marki osobistej
      i pozyskasz dla siebie nowych klientów
    </span>,
    <span key={1}>
      Twoje świetnie ustawione reklamy będą docierać do
      <span className="font-bold"> nowych potencjalnych klientów.</span>
    </span>,
    <span key={2}>
      Będziesz spokojna, że pieniądze, które Twoi klienci zainwestowali w
      reklamy{" "}
      <span className="font-bold"> pracują na siebie, nawet gdy śpisz</span>{" "}
      odpowiednimi klientami.
    </span>,
    <span key={3}>
      <span className="font-bold">
        Wyćwiczysz swoją intuicję w prowadzeniu reklam:{" "}
      </span>{" "}
      będziesz wiedzieć, jaki podjąć następny krok, aby wyszlifować wyniki
    </span>,
  ]

  const leftProgramDetailsList2: JSX.Element[] = [
    <span key={0}>
      <span className="font-bold">9 spotkań</span> w czasie rzeczywistym
      <span className="font-bold">
        {" "}
        po 2,5 godziny o łącznej wartości 7312 złotych
      </span>
    </span>,
    <span key={1}>
      <span className="font-bold">60-minutowa konsultacja indywidualna</span> do
      wykorzystania w dowolnym momencie trwania kampanii
      <span className="font-bold">o wartości 325 złotych</span>
    </span>,
    <span key={2}>
      <span className="font-bold">bieżący kontakt i wsparcie na grupie</span> na
      Facebooku oraz czacie na Messegerze lub Instagramie (kanał do ustalenia w
      pierwszym tygodniu trwania programu)
      <span className="font-bold"> o wartości 697 złotych</span>
    </span>,
  ]
  const rightProgramDetailsList2: JSX.Element[] = [
    <span key={0}>
      <span className="font-bold">12 godzin office hour, </span>
      czyli grupowych konsultacji reklamowych{" "}
      <span className="font-bold">o łącznej wartości 3900 złotych</span>
    </span>,
    <span key={1}>
      <span className="font-bold">
        6 bonusów o łącznej wartości 1529 złotych
      </span>
      <br />
    </span>,
    <span key={2}>
      <span className="font-bold">nagrania ze wszystkich spotkań na żywo </span>
      dostępne bez ograniczeń. Każde spotkanie to
      <span className="font-bold"> godzina tematu przewodniego + Q&A </span>i
      możliwość, wskoczenia na hot seat ze swoim problemem – bezcenne 😊
    </span>,
  ]

  return (
    <div className="w-full flex flex-col px-3 items-center">
      {version === 1 && (
        <>
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
        </>
      )}
      {version === 2 && (
        <>
          <div className="pt-[60px] lg:pt-[150px]">
            <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce uppercase">
              Co dostajesz w ramach programu?
            </h2>
            <div className="flex flex-col md:flex-row justify-between">
              <ul className="lg:max-w-[500px] pt-6">
                {leftWhatYouGetList2.map((item, index) => (
                  <div className="flex gap-4">
                    <span className="text-[44px] font-extrabold">
                      &#10003;{" "}
                    </span>{" "}
                    <li key={index} className={listItemClass}>
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
              <ul className="lg:max-w-[500px] pt-6">
                {rightWhatYouGetList2.map((item, index) => (
                  <div className="flex gap-4">
                    <span className="text-[44px] font-extrabold">
                      &#10003;{" "}
                    </span>{" "}
                    <li key={index} className={listItemClass}>
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-[60px] lg:pt-[76px] pb-[100px]">
            <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce uppercase max-w-[500px] mx-auto">
              W programie
            </h2>
            <div className="flex flex-col md:flex-row justify-between pt-4">
              <ul className="lg:max-w-[500px] pt-6">
                {leftProgramDetailsList2.map((item, index) => (
                  <div className="flex gap-4">
                    <span className="text-[44px] font-extrabold">&#10003;</span>
                    <li key={index} className={listItemClass}>
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
              <ul className="lg:max-w-[500px] pt-6">
                {rightProgramDetailsList2.map((item, index) => (
                  <div className="flex gap-4">
                    <span className="text-[44px] font-extrabold">&#10003;</span>
                    <li key={index} className={listItemClass}>
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MastermindInfo3
