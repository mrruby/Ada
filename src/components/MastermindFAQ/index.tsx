import React from "react"
import { Button } from "helpers/Button"

interface ListItem {
  question: string
  answer: string | JSX.Element
}

const MastermindFAQ = ({ version }: { version: number }): JSX.Element => {
  const listItemClass = "lg:w-[550px]"
  const listItemQuestionClass = "lg:text-adaDesc font-bold pt-5 pb-2"
  const listItemAnswerClass = "lg:text-adaDesc"

  const leftList: ListItem[] = [
    {
      question: "Kiedy będą odbywać się spotkania?",
      answer:
        "Spotykamy się co 2 tygodnie. Zaczniemy od konsultacji indywidualnej już w grudniu, na której skonfigurujemy Twojego Managera Reklam. Terminy pozostałych spotkań ustalimy wspólnie.",
    },
    {
      question: "Czy spotkania będą nagrywane?",
      answer:
        "Tak, każde spotkanie będzie nagrane i udostępnione uczestniczkom spotkania. Jeśli nie możesz dołączyć na żywo, nadrobisz materiał później.",
    },
    {
      question: "Kto weźmie udział w mentoringu?",
      answer:
        "Program to przestrzeń dla przedsiębiorczyń i solopreneurek. Dlatego to nie tylko szansa na omówienie kampanii, ale również wspólne rozwiązywanie problemów, które spotykamy, prowadząc własne biznesy.",
    },
  ]

  const rightList: ListItem[] = [
    {
      question: "Czy na pewno będzie czas dla mnie?",
      answer: (
        <>
          Tak, na każdym spotkaniu możesz wskoczyć na „gorące krzesełko” i
          przedstawić swój problem, zadać pytania. Spotykamy się w grupie
          maksymalnie 7 osób, aby każdy znalazł czas dla siebie. <br /> ❌ To
          NIE są spotkania, na których jedna osoba mówi, a druga słucha. <br />{" "}
          ✅ To są spotkania, na których każdy może zabrać głos i znaleźć
          przestrzeń dla siebie.
        </>
      ),
    },
    {
      question: "Nie umiem w techniczne rzeczy, czy dam sobie radę?",
      answer:
        "Na konsultacjach (jeszcze przed pierwszym spotkaniem w ramach mentoringu) poukładamy Twój menedżer reklam, piksel i ustawimy zabezpieczenia. Przekonasz się, że techniczne tematy nie są takie straszne, jak się wydają.",
    },
  ]
  const renderList = (list: ListItem[]) => {
    return list.map((item, index) => (
      <li className={listItemClass} key={index}>
        <h3 className={listItemQuestionClass}>{item.question}</h3>
        <p className={listItemAnswerClass}> &#10003; {item.answer}</p>
      </li>
    ))
  }

  const leftList2: ListItem[] = [
    {
      question: "Kiedy będą odbywać się spotkania?",
      answer:
        "Spotkania tematyczne w ramach programu mentoringowego będą odbywać się w środy w godzinach 12:30-15:00, 10, 17, 24 kwietnia, 8, 15, 22, 29 maja, 12, 19 czerwca. Czekamy tez na Was w każdy poniedziałek o 10:00 na office hour!",
    },
    {
      question: "Czy spotkania będą nagrywane?",
      answer:
        "Tak, każde spotkanie będzie nagrane i udostępnione uczestniczkom spotkania. Jeśli nie możesz dołączyć na żywo, nadrobisz materiał później.",
    },
    {
      question: "Kto weźmie udział w programie mentoringowym?",
      answer: (
        <>
          Program to przestrzeń dla Social Media Managerek, Specjalistek ds.
          marketingu i Wirtualnych Asystentek. Jednym słowem: dla osób, które
          pracują online i chcą poszerzyć zakres swoich usług o prowadzenie
          kampanii reklamowych.
          <br />
          Podczas spotkań nie tylko nauczysz się prowadzić kampanie reklamowe!
          Uczestniczki poprzednich edycji chwalą możliwość rozmowy z osobami,
          które w codziennej pracy spotykają się z podobnymi wyzwaniami.
        </>
      ),
    },
  ]

  const rightList2: ListItem[] = [
    {
      question: "Czy na pewno będzie czas dla mnie?",
      answer: (
        <>
          Tak, na każdym spotkaniu możesz wskoczyć na „gorące krzesełko” i
          przedstawić swój problem, zadać pytania. Spotykamy się w grupie
          maksymalnie 7 osób, aby każdy znalazł czas dla siebie. <br /> ❌ To
          NIE są spotkania, na których jedna osoba mówi, a druga słucha. <br />{" "}
          ✅ To są spotkania, na których każdy może zabrać głos i znaleźć
          przestrzeń dla siebie.
        </>
      ),
    },
    {
      question: "Nie umiem w techniczne rzeczy, czy dam sobie radę?",
      answer:
        "Oczywiście! W czasie programu przekonasz się, że techniczne tematy nie są takie straszne, jak się wydają. Pierwsze spotkanie w całości poświęcimy tematom dotyczącym ustawień menadżera reklam oraz dobrym praktykom we współpracy z klientem. Dowiesz się, jak sprawnie ustawić kwestie techniczne i wytłumaczyć klientowi, czego od niego potrzebujesz.",
    },
  ]

  return (
    <div className="flex flex-col text-ada-blue items-center px-3">
      {version === 1 && (
        <>
          <div className="relative flex flex-col md:flex-row gap-[90px] items-center w-full justify-center">
            <div className="pt-[60px] lg:pt-[76px] z-0">
              <div className="hidden md:flex bg-faq w-full h-[200px] mb-[-10px] -z-10"></div>
              <h2 className="text-[20px] lg:text-adaTitle font-bold w-[80px] md:w-[152px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce">
                FAQ
              </h2>
              <div className="pt-[30px] flex flex-col md:flex-row lg:gap-[60px]">
                <ul className="gap-10 md:gap-[120px] ">
                  {renderList(leftList)}
                </ul>
                <ul className="gap-10 md:gap-[140px]">
                  {renderList(rightList)}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-10 pb-10 md:pb-[118px]">
            <h3 className="md:text-adaSubtitle max-w-[1024px] mx-auto font-medium pt-[90px]">
              To jak:{" "}
              <span className="font-bold">
                dołączasz teraz i szlifujesz kampanie,
              </span>{" "}
              aby zobaczyć realny wzrost wyników, czy czekasz do kolejnej
              edycji?
            </h3>
            <Button
              type="button"
              text={
                <span className="font-bold">
                  Dołączam teraz, bo też chcę rozwijać siebie i biznes!
                </span>
              }
              url="https://koalendar.com/e/ogarnij-swoje-adsy-konsultacja/"
              textSize="md:text-adaSubtitle"
              btnStyle="md:w-[740px] bg-white border-b-4 border-ada-pink"
              iconCalender
            />
          </div>
        </>
      )}
      {version === 2 && (
        <>
          <div className="flex flex-col md:flex-row gap-[90px] items-center w-full justify-center">
            <div className="pt-[60px] lg:pt-[76px]">
              <h3 className="text-adaSubtitle lg:text-adaTitle text-ada-grey uppercase text-center font-bold">
                Masz pytania?
              </h3>
              <h2 className="text-[20px] lg:text-adaTitle font-bold w-[80px] md:w-[152px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce text-center mx-auto">
                FAQ
              </h2>
              <div className="pt-[30px] flex flex-col flex-wrap lg:flex-row lg:gap-[60px]">
                <ul className="gap-10 md:gap-[120px] ">
                  {renderList(leftList2)}
                </ul>
                <ul className="gap-10 md:gap-[140px]">
                  {renderList(rightList2)}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-10 pb-10 md:pb-[118px]">
            <p className="md:text-adaBase max-w-[914px] mx-auto font-medium pt-[90px]">
              <span className="font-bold">
                Zawsze możesz też wpaść na office hour,
              </span>{" "}
              czyli konsultacje grupowe, które odbywają się w każdy poniedziałek
              od 10 do 11, aby rozwiać wątpliwości i zyskać wsparcie w
              technicznych tematach!
            </p>
            <p className="md:text-adaBase max-w-[914px] mx-auto font-medium pt-2">
              <span className="font-bold">
                Powitalne office hour odbędą się 8 kwietnia,
              </span>{" "}
              czyli przed pierwszym spotkaniem mentoringowym. Wpadnij i postaw
              pierwsze kroki w menadżerze reklam!
            </p>
            <h4 className="md:text-adaSubtitle max-w-[868px] mx-auto font-medium py-[90px]">
              To jak?{" "}
              <span className="font-bold">
                Dołączasz teraz i szlifujesz kampanie
              </span>{" "}
              aby za 4 miesiące zobaczyć wzrost wyników, czy czekasz do kolejnej
              edycji?
            </h4>
            <Button
              type="button"
              text={
                <span className="font-bold uppercase">
                  Dołączam teraz, bo też chcę zdobywać nowych klientów i
                  zarabiać więcej!
                </span>
              }
              url="/"
              textSize="md:text-adaSubtitleSecondary"
              btnStyle="md:w-[810px] bg-ada-pink2"
              iconCalender
            />
          </div>
        </>
      )}
    </div>
  )
}

export default MastermindFAQ
