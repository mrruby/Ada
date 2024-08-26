import React from "react"

const PuzzleItem: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <div className="flex items-start mb-4">
    <span className="text-2xl mr-3 flex-shrink-0">✅</span>
    <p className="text-ada-blue text-lg">{children}</p>
  </div>
)

const PuzzlePerfect: React.FC = () => {
  const puzzleItems = [
    <>
      Black Friday to tylko jeden dzień w roku, a Ty możesz zbudować kampanie,
      które będą przynosiły zyski przez cały rok
    </>,
    <>
      Zamiast wydawać pieniądze w ciemno, nauczysz się, jak mądrze inwestować,
      aby każda złotówka pracowała na Twój sukces
    </>,
    <>
      Organizacyjny rozwój ma swoje ograniczenia, a Ty zasłużysz na skalowanie
      biznesu i przyciąganie nowych klientów każdego dnia
    </>,
    <>
      Skuteczna sprzedaż nie musi oznaczać tworzenia ogromnych ilości treści;
      możesz działać mniej, a zarabiać więcej
    </>,
    <>
      Otrzymasz pełne wsparcie i konkretne instrukcje, które pomogą Ci
      zaplanować reklamę w Meta, nawet jeśli to dla Ciebie nowość
    </>,
  ]

  return (
    <div className="mx-auto mt-20 mb-10 flex flex-col max-w-4xl items-start px-4 md:pr-52">
      <h2 className="text-adaSubtitle font-bold mb-6 px-2 py-1 inline-block rounded-sm">
        To ja powiem Ci, że to wyzwanie jest dla Ciebie idealne, ponieważ...
      </h2>

      <div className="w-full">
        {puzzleItems.map((item, index) => (
          <PuzzleItem key={index}>{item}</PuzzleItem>
        ))}
      </div>
    </div>
  )
}

export default PuzzlePerfect
