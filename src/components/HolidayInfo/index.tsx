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
      <span className="font-bold">Dla freelancerek,</span> które chcą zwiększyć
      swoje kompetencje w zakresie tworzenia kreacji reklamowych.
    </span>,
    <span key={3}>
      <span className="font-bold">Dla marketerek,</span> które szukają
      sprawdzonych strategii budowania skutecznych reklam.
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
      tworząc efektywne kreacje reklamowe.
    </span>,
  ]

  const programDetailsList: JSX.Element[] = [
    <span key={0}>
      <span className="font-bold md:text-adaSubtitle">
        Poznasz koncepcję lejka reklamowego, <br />
      </span>
      który zamienia obserwatorów w klientów.
    </span>,
    <span key={1}>
      <span className="font-bold md:text-adaSubtitle">
        Odkryjesz praktyki reklamowe,
        <br />
      </span>{" "}
      które stosuję w wakacje.
    </span>,
    <span key={2}>
      <span className="font-bold md:text-adaSubtitle">Dowiesz się,</span> jakie
      kreacje działają w reklamach podczas letnich miesięcy!
      <br />
    </span>,
    <span key={3}>
      <span className="font-bold md:text-adaSubtitle">
        Stworzysz skuteczną i wykonalną
        <br />
      </span>{" "}
      strategię reklamową na tzw. “sezon ogórkowy”.
    </span>,
    <span key={4}>
      <span className="font-bold md:text-adaSubtitle">
        Zyskasz kontrolę nad sprzedażą
        <br />
      </span>{" "}
      w swoim biznesie na zbliżające się lato.
    </span>,
  ]

  return (
    <div className="w-full flex flex-col px-3 items-center">
      {version === 1 && (
        <>
          <div className="pt-[40px] lg:pt-[80px] pb-[40px]">
            <div className="font-bold md:text-adaBase max-w-[930px] text-center pb-[40px]">
              <p>
                ❌ To nie jest webinar, na którym siedzisz i słuchasz wykładu.
              </p>
              <p>
                ✅ To jest praktyczne spotkanie, z którego wyjdziesz z gotowymi
                pomysłami na reklamy do wdrożenia!
              </p>
            </div>
            <div className="mx-auto flex items-center flex-col">
              <div className="uppercase text-center text-adaDesc lg:text-adaTitle font-bold">
                <h2 className=" md:w-[500px] border-b-[11px] lg:mb-2 lg:border-b-[34px] border-ada-light-pink h-[20px] lg:h-[70px] animate-bounce">
                  Dla kogo jest
                </h2>
                <h2 className="md:w-[500px] border-b-[11px] lg:mb-2 lg:border-b-[34px] border-ada-light-pink h-[20px] lg:h-[70px] animate-bounce">
                  to <span className="text-ada-pink3">szkolenie</span>?
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
                textSize="md:text-adaSubtitleSecondary"
                btnStyle="md:w-[480px] md:h-[80px] bg-ada-pink3 my-6 mx-auto text-white"
                sectionId="zostaw-maila"
              />
            </div>
          </div>
        </>
      )}
      {version === 2 && (
        <>
          <div className="py-[60px] lg:pt-[150px] flex flex-col items-center">
            <div className="uppercase text-center text-adaDesc lg:text-adaTitle font-bold ">
              <h2 className=" md:w-[760px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[20px] lg:h-[70px] text-center animate-bounce">
                Dlaczego jeszcze warto
              </h2>
              <h2 className="font-bold md:w-[480px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[20px] lg:h-[70px] text-center animate-bounce mx-auto">
                wziąć udział?
              </h2>{" "}
            </div>
            <ul className="lg:max-w-[600px] pt-6 mx-auto">
              {programDetailsList.map((item, index) => (
                <li key={index} className={listItemClass}>
                  <span className="md:text-adaSubtitleThird">✅</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default HolidayInfo
