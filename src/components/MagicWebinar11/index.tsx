import { Accordion } from "helpers/Accordion"
import { Button } from "helpers/Button"
import React from "react"

type ListItem = {
  question: string
  answer: string | React.JSX.Element
}

const MagicWebinar11 = () => {
  const faqList: ListItem[] = [
    {
      question: "Do kiedy dostępne jest nagranie?",
      answer: "Do 17.09.",
    },
    {
      question: "Muszę znać Ads Managera?",
      answer:
        "Nie - warsztaty to przygotowanie i rozpisanie planu na kampanię reklamową. Potem zaprosimy Cię do kontynuacji i wspólnej nauki reklam: ale bez względu na to, czy zdecydujesz się na dalszą współpracę, wyniesiesz ze spotkania mnóstwo wiedzy!",
    },
    {
      question: "Naprawdę 0 zł?",
      answer: "Tak. Wersja płatna po 17 września jest opcjonalna.",
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
      <li key={index}>
        <Accordion question={item.question} answer={item.answer} />
      </li>
    ))
  }

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col text-ada-blue items-center px-3 pb-16">
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

      {/* Button and text section */}
      <div className="mt-16 flex flex-col items-center">
        <Button
          type="button"
          text={
            <span className="font-bold text-ada-yellow3 uppercase">
              REZERWUJĘ MIEJSCE!
            </span>
          }
          sectionId="top"
          textSize="text-lg md:text-xl"
          btnStyle="bg-ada-pink7 hover:bg-ada-pink7/90 px-8 py-4 rounded-full uppercase font-bold shadow-lg"
        />

        <div className="mt-6 text-center">
          <span className="bg-ada-newPurple text-white px-2 py-1 rounded font-bold">
            Uwaga:
          </span>
          <span className="text-black ml-2">
            Ilość miejsc ograniczona - zdecyduj się teraz!
          </span>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar11
