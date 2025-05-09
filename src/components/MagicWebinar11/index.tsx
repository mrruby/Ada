import { Accordion } from "helpers/Accordion"
import React from "react"

type ListItem = {
  question: string
  answer: string | JSX.Element
}

const MagicWebinar11 = ({ version = 1 }: { version?: number }): JSX.Element => {
  const faqList: ListItem[] = [
    {
      question: "Czy webinar jest płatny?",
      answer: "Nie, webinar jest całkowicie bezpłatny!",
    },
    {
      question: "Jak długo będzie trwał webinar?",
      answer: "Około 60 minut + dodatkowy czas na sesję Q&A",
    },
    {
      question: "Czy na webinarze będzie sprzedaż?",
      answer:
        "Tak, na końcu przedstawimy ofertę dla osób, które będą chciały kontynuować pracę z nami, ale 90% webinaru to czysta wartość merytoryczna, którą możesz wdrożyć samodzielnie.",
    },
    {
      question: "Czy webinar jest odpowiedni dla początkujących?",
      answer:
        "Absolutnie! Przedstawimy strategie w sposób przystępny, bez żargonu. Niezależnie od Twojego poziomu wiedzy, wyniesiesz wartościowe wskazówki.",
    },
    {
      question: "Jak długo będzie dostępne nagranie?",
      answer:
        "Nagranie będzie dostępne przez 7 dni po webinarze, wyłącznie dla zarejestrowanych uczestniczek.",
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
