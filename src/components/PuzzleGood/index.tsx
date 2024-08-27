import React from "react"

const PuzzleGood: React.FC = () => {
  const paragraphClasses = "text-ada-blue text-lg mb-4"

  return (
    <div className="mt-20 mb-10 flex flex-col max-w-xl lg:max-w-3xl items-start px-4 mx-auto lg:pl-60 2xl:pl-0 xl:mr-20 xl:mr-60">
      <div className="w-full">
        <p className={paragraphClasses}>
          Jeśli to brzmi jak Ty, prawdopodobnie robisz wszystko „dobrze”. Jednak
          czasami „dobrze” nie wystarcza, aby sprzedawać.
        </p>
        <p className={paragraphClasses}>
          Dobra wiadomość jest taka, że wcale nie musisz robić więcej i więcej.
          Wystarczy, że to, co robiłaś do tej pory, będziesz robić inaczej.
        </p>
        <p className={paragraphClasses}>
          W takiej samej sytuacji jak Ty jest wiele przedsiębiorczyń. Ty masz
          jedną przewagę: jesteś teraz w miejscu, w którym możesz świadomie
          zdecydować, że przyszedł czas na krok dalej.
        </p>
        <p className={`${paragraphClasses} font-bold`}>
          Jeśli Twoja sprzedaż jest ostatnio na niewystarczającym poziomie (lub
          zawsze taka była), to wyzwanie może być najważniejszym wydarzeniem, w
          którym weźmiesz udział w 2024 roku.
        </p>
      </div>
    </div>
  )
}

export default PuzzleGood
