import { Accordion } from "helpers/Accordion"
import React from "react"

type ListItem = {
  question: string
  answer: string | JSX.Element
}

const MagicWebinar11 = ({ version = 1 }: { version?: number }): JSX.Element => {
  const faqList: ListItem[] = [
    {
      question: "Czy będzie nagranie?",
      answer: "Tak, przez 7 dni.",
    },
    {
      question: "Muszę znać Ads Managera?",
      answer:
        "Nie - warsztaty to przygotowanie i rozpisanie planu na kampanię reklamową. Potem zaprosimy Cię do kontynuacji i wspólnej nauki reklam: ale bez względu na to, czy zdecydujesz się na dalszą współpracę, wyniesiesz ze spotkania mnóstwo wiedzy!",
    },
    {
      question: "Naprawdę 0 zł?",
      answer: "Tak. Wersja płatna po 28 maja jest opcjonalna.",
    },
    {
      question: "Nie mogę być na żywo?",
      answer: "Zapisz się, otrzymasz link do nagrania na 7 dni.",
    },
    {
      question: "Jak długo będą trwały warsztaty?",
      answer: "Około 90 minut.",
    },
    {
      question: "Czy warsztat jest odpowiedni dla początkujących?",
      answer:
        "Pewnie! Przedstawimy strategie w sposób przystępny, bez żargonu. Niezależnie od Twojego poziomu wiedzy, wyniesiesz wartościowe wskazówki",
    },
  ]

  const renderList = (list: ListItem[]) => {
    return list.map((item, index) => (
      <Accordion key={index} question={item.question} answer={item.answer} />
    ))
  }

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col text-ada-blue items-center px-3">
      <div className="flex flex-col md:flex-row gap-[90px] items-center w-full justify-center text-ada-black">
        <div className="pt-[60px] lg:pt-[76px]">
          <h2 className="text-[20px] lg:text-adaTitle font-bold lg:mb-2 animate-bounce text-center mx-auto">
            FAQ
          </h2>
          <ul className="gap-10 md:gap-[120px] text-adaMin md:text-adaStandard">
            {renderList(faqList)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar11
