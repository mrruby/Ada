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
        "Spotykamy się co czwartek od 10:30 do 13:00. We wtorki o 10:30 odbywają się godzinne konsultacje office hour, na które zawsze możesz przyjść z pytaniami. Nie są obowiązkowe, ale uczestniczki poprzednich edycji przyznają, że warto na nie przychodzić nawet jeśli nie ma się pytań :)",
    },
    {
      question: "Czy spotkania będą nagrywane?",
      answer:
        "Tak, każde spotkanie będzie nagrane i udostępnione uczestniczkom spotkania. Jeśli nie możesz dołączyć na żywo, nadrobisz materiał później.",
    },
    {
      question: "Jaki jest minimalny budżet reklamowy?",
      answer:
        "Dobre pytanie! Oczywiście, aby prowadzić kampanie reklamowe, musimy wpłacić pieniądze na konto reklamowe. Wysokość budżetu zaczyna się od kilkuset złotych miesięcznie… ale na szczęście nie wszystko zależy od budżetu! Twoje możliwości finansowe przedyskutujemy na wirtualnej kawce.",
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
    {
      question: "Jak mogę dołączyć do programu?",
      answer:
        "Dbam o przemyślaną rekrutację uczestniczek programu, dlatego zanim zdecydujesz się dołączyć, chcę umówić się z Tobą na 20-minutowe spotkanie online (tzw. „wirtualną kawkę”), na której porozmawiamy o Twoich potrzebach i udziale w programie. Wirtualne kawki są niezobowiązujące, a dają Tobie i mi pewność, że Twój udział w programie mentoringowym zaboostuje Twój biznes.",
    },
    {
      question: "✓ Do kiedy mogę dołączyć do programu?",
      answer:
        "Zbieram chętnych do 24 maja lub do momentu zarezerwowania wszystkich miejsc. Podejmij decyzję i startujemy już na początku czerwca!",
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
          To jak, chcesz podkręcić swój biznes jeszcze przed wakacjami dzięki
          reklamom?
        </h3>
        <Button
          type="button"
          text={
            <span className="font-bold">Umawiam się na wirtualną kawkę!</span>
          }
          sectionId="zostaw-maila"
          textSize="md:text-adaSubtitle"
          btnStyle="md:w-[540px] bg-white border-b-4 border-ada-pink"
          iconCalender
        />
      </div>
    </div>
  )
}

export default MastermindFAQ
