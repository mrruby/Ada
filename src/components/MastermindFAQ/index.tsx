import React from "react"
import { Button } from "helpers/Button"

interface ListItem {
  question: string
  answer: string | JSX.Element
}

const MastermindFAQ = (): JSX.Element => {
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

  return (
    <div className="flex flex-col text-ada-blue items-center px-3">
      <div className="relative flex flex-col md:flex-row gap-[90px] items-center w-full justify-center">
        <div className="pt-[60px] lg:pt-[76px] z-0">
          <div className="hidden md:flex bg-faq w-full h-[200px] mb-[-10px] -z-10"></div>
          <h2 className="text-[20px] lg:text-adaTitle font-bold w-[80px] md:w-[152px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce">
            FAQ
          </h2>
          <div className="pt-[30px] flex flex-col md:flex-row lg:gap-[60px]">
            <ul className="gap-10 md:gap-[120px] ">{renderList(leftList)}</ul>
            <ul className="gap-10 md:gap-[140px]">{renderList(rightList)}</ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-10 pb-10 md:pb-[118px]">
        <h3 className="md:text-adaSubtitle max-w-[1024px] mx-auto font-medium pt-[90px]">
          To jak:{" "}
          <span className="font-bold">
            dołączasz teraz i szlifujesz kampanie,
          </span>{" "}
          aby przed końcem roku zobaczyć wzrost wyników, czy czekasz do kolejnej
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
          btnStyle="md:w-[710px] bg-white"
        />
      </div>
    </div>
  )
}

export default MastermindFAQ
