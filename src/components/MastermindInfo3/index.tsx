import React from "react"

const MastermindInfo3 = ({ version }: { version: number }) => {
  const listItemClass =
    "text-[15px] lg:text-adaDesc leading-tight font-medium py-2 leading-tight"

  const programDetailsList = [
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

  const leftWhatYouGetList2 = [
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

  const rightWhatYouGetList2 = [
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
      <span className="font-bold"> pracują na siebie, nawet gdy śpisz.</span>
    </span>,
    <span key={3}>
      <span className="font-bold">
        Wyćwiczysz swoją intuicję w prowadzeniu reklam:{" "}
      </span>{" "}
      będziesz wiedzieć, jaki podjąć następny krok, aby wyszlifować wyniki
    </span>,
  ]

  const leftProgramDetailsList2 = [
    <span key={0}>
      <span className="font-bold">12 praktycznych spotkań grupowych</span> z
      ustawiania kampanii na żywo
    </span>,
    <span key={1}>
      <span>
        konsultacje indywidualne do wykorzystania w dowolnym momencie trwania
        programu (w zależności od pakietu)
      </span>
    </span>,
    <span key={2}>
      <span>
        bieżący kontakt i wsparcie na grupie na Facebooku oraz dedykowanym
        komunikatorze
      </span>
    </span>,
  ]
  const rightProgramDetailsList2 = [
    <span key={0}>
      <span>
        21 godzin office hour, czyli grupowych konsultacji reklamowych
      </span>
    </span>,
    <span key={1}>
      7 bonusów o łącznej wartości ponad 1000 zł złotych
      <br />
    </span>,
    <span key={2}>
      <span className="font-bold">nagrania ze wszystkich spotkań na żywo </span>
      dostępne bez ograniczeń. Każde spotkanie to
      <span className="font-bold"> godzina tematu przewodniego + Q&A </span>i
      możliwość, wskoczenia na hot seat ze swoim problemem – bezcenne 😊
    </span>,
  ]

  const listItemClass2 =
    "text-[15px] lg:text-[1.75rem] font-bold bg-ada-pink3 inline-block px-2 py-1"

  const leftProgramDetailsList3 = [
    <div key={0}>
      <p className={listItemClass2}>🎥 6 szkoleń:</p>
      <p className="mt-2">
        video dotyczących lejka reklamowego (1 szkolenie), kreacji reklamowych
        (1 szkolenie) oraz kampanii reklamowych (4 szkolenia)
      </p>
    </div>,
    <div key={1}>
      <p className={listItemClass2}>💻 8 spotkań:</p>
      <p className="mt-2">w czasie rzeczywistym na ustawianie reklamy + Q&A</p>
    </div>,
    <div key={2}>
      <p className={listItemClass2}>💼 16 spotkań office hours:</p>
      <p className="mt-2">
        na których możesz szybko rozwiązać problemy z reklamami lub
        zoptymalizować je pod czujnym okiem mojego zespołu
      </p>
    </div>,
  ]

  const rightProgramDetailsList3 = [
    <div key={0}>
      <p className={listItemClass2}>💪 bieżący kontakt</p>
      <p className="mt-2">i wsparcie na grupie na Facebooku</p>
    </div>,
    <div key={1}>
      <p className={listItemClass2}>👀 nagrania</p>
      <p className="mt-2">
        ze wszystkich spotkań na żywo dostępne bez ograniczeń
      </p>
    </div>,
    <div key={2}>
      <p className={listItemClass2}>🔥 nielimitowane konsultacje</p>
      <p className="mt-2">
        Twoich kampanii, tekstów, grafik i pomysłów na reklamy ze mną i całym
        zespołem
      </p>
    </div>,
  ]

  return (
    <div className="w-full flex flex-col px-3 items-center">
      {version === 1 && (
        <>
          <div className="pt-[60px] lg:pt-0">
            <h2 className="text-adaDesc lg:text-adaTitle font-bold md:w-[878px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce">
              Co dostajesz w ramach programu?
            </h2>
            <ul className="lg:max-w-[1084px] pt-6">
              {programDetailsList.map((item, index) => (
                <li key={index} className={listItemClass}>
                  &#10003; {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-[60px] lg:w-[1084px] hidden">
            <h2 className="text-adaDesc lg:text-adaTitle font-bold border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce max-w-[200px] md:max-w-[400px]">
              Ile to kosztuje?
            </h2>
            <p className={listItemClass}>
              Udział w programie kosztuje{" "}
              <span className="font-bold">2550 zł netto.</span> Możesz też
              zapłacić w 2 ratach po 1350 zł netto.
            </p>
          </div>
        </>
      )}
      {version === 2 && (
        <>
          <div className="pt-[60px] lg:pt-[76px] pb-[100px]">
            <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce uppercase max-w-[500px] mx-auto">
              W programie
            </h2>
            <div className="flex flex-col md:flex-row justify-between pt-4">
              <ul className="lg:max-w-[500px] pt-6">
                {leftProgramDetailsList2.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-[44px] font-extrabold">&#10003;</span>
                    <li className={listItemClass}>{item}</li>
                  </div>
                ))}
              </ul>
              <ul className="lg:max-w-[500px] pt-6">
                {rightProgramDetailsList2.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-[44px] font-extrabold">&#10003;</span>
                    <li className={listItemClass}>{item}</li>
                  </div>
                ))}
              </ul>
            </div>
            <p className="text-[15px] lg:text-adaDesc leading-tight font-medium py-2 m-auto">
              ...abyś lepiej niż kiedykolwiek zadbała o swoje zarobki i biznesy
              swoich klientów!
            </p>
          </div>
          <div className="pt-[60px] lg:pt-0">
            <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce uppercase">
              Co zyskasz, uczestnicząc
            </h2>
            <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce uppercase">
              w Meta Ads Masters Mentoring?
            </h2>
            <div className="flex flex-col md:flex-row justify-between">
              <ul className="lg:max-w-[500px] pt-6">
                {leftWhatYouGetList2.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-[44px] font-extrabold">
                      &#10003;{" "}
                    </span>{" "}
                    <li className={listItemClass}>{item}</li>
                  </div>
                ))}
              </ul>
              <ul className="lg:max-w-[500px] pt-6">
                {rightWhatYouGetList2.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-[44px] font-extrabold">
                      &#10003;{" "}
                    </span>{" "}
                    <li className={listItemClass}>{item}</li>
                  </div>
                ))}
              </ul>
            </div>
            <p className="text-[15px] lg:text-adaDesc leading-tight font-medium py-2 m-auto">
              …i zaczniesz zarabiać lepsze pieniądze, pracując mądrzej, a nie
              więcej!
            </p>
          </div>
        </>
      )}
      {version === 3 && (
        <>
          <div className="pt-[60px] lg:pt-0 lg:pb-10 text-ada-black">
            <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center text-purple-800 lg:mb- animate-bounce uppercase">
              Co dostajesz <br /> w ramach programu?
            </h2>
            <div className="flex flex-col md:flex-row justify-between">
              <ul className="lg:max-w-[510px] pt-6 lg:mr-8">
                {leftProgramDetailsList3.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <li className={listItemClass}>{item}</li>
                  </div>
                ))}
              </ul>
              <ul className="lg:max-w-[510px] pt-6">
                {rightProgramDetailsList3.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <li className={listItemClass}>{item}</li>
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
