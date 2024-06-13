import React from "react"
import { Button } from "helpers/Button"

const HolidayInfo = ({ version }: { version: number }): JSX.Element => {
  const listItemClass =
    "text-[15px] lg:text-adaDesc leading-tight font-medium py-2 leading-tight flex gap-4"

  const whatYouGetList: JSX.Element[] = [
    <span key={0}>
      <span className="font-bold">Dla przedsiębiorczyń,</span> które chcą
      wykorzystać okres wakacyjny do zwiększenia sprzedaży w swoim biznesie bez
      kolejnych godzin pracy.
    </span>,
    <span key={1}>
      <span className="font-bold"> Dla właścicielek małych firm,</span> które
      chcą pozyskiwać klientów bez konieczności ciągłej obecności w mediach
      społecznościowych.
    </span>,
    <span key={2}>
      <span className="font-bold">Dla freelancerek,</span> którzy chcą zwiększyć
      swoje kompetencje w zakresie tworzenia lejków reklamowych.
    </span>,
    <span key={3}>
      <span className="font-bold">Dla marketerek,</span> które szukają
      sprawdzonych strategii budowania skutecznych kampanii reklamowych.
    </span>,
    <span key={4}>
      <span className="font-bold">
        Dla osób, które pragną strategicznie zaplanować swoje działania
        reklamowe
      </span>{" "}
      i mieć więcej czasu na odpoczynek.
    </span>,
    <span key={5}>
      <span className="font-bold">
        Dla wszystkich, którzy chcą przygotować swoje biznesy na sezon letni,
      </span>{" "}
      tworząc efektywne strategie reklamowe.
    </span>,
  ]

  const programDetailsList: JSX.Element[] = [
    <span key={0}>
      <span className="font-bold md:text-adaSubtitle">
        Poznasz koncepcję lejka reklamowego,{" "}
      </span>
      który zamienia obserwatorów w klientów.
    </span>,
    <span key={1}>
      <span className="font-bold md:text-adaSubtitle">
        Odkryjesz praktyki reklamowe,
      </span>{" "}
      które są fundamentem skutecznych kampanii.
    </span>,
    <span key={2}>
      <span className="font-bold md:text-adaSubtitle">Dowiesz się,</span> na
      których etapach lejka reklamowego zastosować automatyzację.
    </span>,
    <span key={3}>
      <span className="font-bold md:text-adaSubtitle">Nauczysz się,</span> jak
      projektować strategię kampanii, która działa, gdy Ty odpoczywasz.
    </span>,
    <span key={4}>
      <span className="font-bold md:text-adaSubtitle">
        Stworzysz skuteczną i wykonalną
      </span>{" "}
      strategię reklamową dla swojego biznesu.
    </span>,
    <span key={5}>
      <span className="font-bold md:text-adaSubtitle">
        Zyskasz kontrolę nad sprzedażą
      </span>{" "}
      w swoim biznesie na zbliżające się lato.
    </span>,
  ]

  return (
    <div className="w-full flex flex-col px-3 items-center">
      {version === 1 && (
        <>
          <div className="pt-[40px] lg:pt-[80px] pb-[40px]">
            <div className="font-bold md:text-adaSubtitle max-w-[930px] text-center pb-[40px]">
              <p>
                ❌ To nie jest webinar, na którym siedzisz i słuchasz wykładu 
              </p>
              <p>
                ✅ To jest praktyczne spotkanie, z którego wyjdziesz z gotowym
                lejkiem reklamowym i strategią działania
              </p>
            </div>
            <div className="mx-auto flex items-center flex-col">
              <div className="uppercase text-center text-adaDesc lg:text-adaTitle3 font-bold">
                <h2 className=" md:w-[680px] border-b-[11px] lg:mb-2 lg:border-b-[34px] border-ada-light-pink h-[24px] lg:h-[80px] animate-bounce">
                  Dla kogo jest
                </h2>
                <h2 className="md:w-[680px] border-b-[11px] lg:mb-2 lg:border-b-[34px] border-ada-light-pink h-[24px] lg:h-[80px] animate-bounce">
                  ten <span className="text-ada-pink3">warsztat</span>?
                </h2>
              </div>
              <ul className="lg:w-[680px] pt-6">
                {whatYouGetList.map((item, index) => (
                  <li key={index} className={listItemClass}>
                    <span className="md:text-adaTitle">&#10003;</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <Button
                type="button"
                text={<span className="font-bold uppercase">Dla Ciebie!</span>}
                textSize="md:text-adaSubtitleThird"
                btnStyle="md:w-[580px] md:h-[90px] bg-ada-pink3 my-20 mx-auto text-white"
                sectionId="zostaw-maila"
              />
            </div>
          </div>
        </>
      )}
      {version === 2 && (
        <>
          <div className="py-[60px] lg:pt-[150px] flex flex-col items-center">
            <div className="uppercase text-adaDesc lg:text-adaTitle font-bold flex flex-col items-center">
              <h2 className=" md:w-[808px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] text-center animate-bounce">
                Dlaczego jeszcze warto
              </h2>
              <h2 className="font-bold md:w-[520px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] text-center animate-bounce">
                wziąć udział?
              </h2>{" "}
            </div>
            <ul className="lg:max-w-[600px] pt-6 mx-auto">
              {programDetailsList.map((item, index) => (
                <li key={index} className={listItemClass}>
                  <span className="md:text-adaTitle">✅</span> {item}
                </li>
              ))}
            </ul>
            <Button
              type="button"
              text={
                <span className="font-bold uppercase">
                  Chcę zarabiać nawet na wakacjach!
                </span>
              }
              textSize="md:text-adaSubtitleThird"
              btnStyle="md:w-[580px] md:h-[134px] bg-ada-pink2 my-20 mx-auto"
              sectionId="zostaw-maila"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default HolidayInfo
