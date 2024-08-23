import React from "react"

const PuzzleItem: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <div className="flex items-start mb-4">
    <span className="text-2xl mr-3 flex-shrink-0">✅</span>
    <p className="text-ada-blue text-lg">{children}</p>
  </div>
)

const PuzzleDesire: React.FC = () => {
  const puzzleItems = [
    <>
      <span className="font-bold">Poukładać swój biznes</span> bazując na
      twardych danych i realnych liczbach, a nie domysłach i przypadkowo
      znalezionych materiałach
    </>,
    <>
      <span className="font-bold">Lepiej</span> zrozumieć swoich odbiorców i{" "}
      <span className="font-bold">precyzyjnie</span> do nich dotrzeć
    </>,
    <>
      <span className="font-bold">Zaplanować kampanię reklamową</span>, która
      konsekwentnie wzmacnia Twój biznes
    </>,
    <>
      <span className="font-bold">Zapewnić sobie stabilność finansową</span>,
      niezależnie od sezonu czy Twojej aktywności
    </>,
  ]

  return (
    <div className="mx-auto mt-20 mb-10 flex flex-col max-w-3xl items-start px-4 md:pl-52">
      <h2 className="text-adaSubtitle font-bold text-ada-purple mb-6 bg-ada-purple text-white px-2 py-1 inline-block rounded-sm">
        Jeśli pragniesz...
      </h2>

      <div className="w-full">
        {puzzleItems.map((item, index) => (
          <PuzzleItem key={index}>{item}</PuzzleItem>
        ))}
        <p className="text-ada-blue text-lg mt-6">
          To wszystko jest możliwe dzięki odpowiedniej strategii reklamowej,
          którą możesz przygotować{" "}
          <span className="font-bold">tu i teraz, </span>
          bazując na danych, które już masz!
        </p>
      </div>
    </div>
  )
}

export default PuzzleDesire
