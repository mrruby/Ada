import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import React from "react"
import Carousel from "react-multi-carousel"
import { responsive } from "values/const"
import Question from "../../helpers/Question"

type IQuestionsList = {
  question: string
  answer: string
}

const questionsList: IQuestionsList[] = [
  {
    question: "Czy znajdę czas na udział w spotkaniach?",
    answer:
      "Według raportu Digital 2023: Poland przeciętny użytkownik Internetu spędza w nim 6 godzin i 42 minuty dziennie, w tym 2 godziny w mediach społecznościowych. Pewnie Tobie też raz na jakiś czas zdarza się zapomnieć i spędzić kilka godzin z telefonem w ręce? ;) W czasie programu spotykamy się na 2,5 godziny raz na 2 tygodnie. To prawie 19 razy mniej niż czas, który spędzasz w sieci. Przyznaj: czas na wspólnej pracy nad reklamami to dużo lepiej wykorzystany czas niż scrollowanie Instagrama?",
  },
  {
    question: "Kiedy odbywają się spotkania?",
    answer:
      "Spotykamy się raz na tydzień na 2,5 godziny na spotkania tematyczne. Do tego podczas trwania programu możesz wziąć udział w office hours, które trwają godzinkę oraz umówić się na konsultację indywidualną (termin ustalimy wspólnie).",
  },
  {
    question:
      "Czy wiem wystarczająco dużo o reklamach, aby wziąć udział w mentoringu?",
    answer:
      "Poziom wiedzy i doświadczenia uczestniczek jest różny i to jest dodatkowa wartość naszych spotkań! Dzięki temu uczestniczki mają swobodę dzielenia się wiedzą i zdobywania nowych umiejętności. Nie ukrywam, że program jest skierowany do osób, które mają już doświadczenie w ustawianiu reklam. Wystarczy, że wiesz, gdzie kliknąć, aby stworzyć kampanię i wiesz, gdzie szukać ustawień grupy docelowej. Jeśli możesz o sobie powiedzieć: „coś już wyklikałam w managerze reklam”, dołącz!",
  },
  {
    question: "Co jeśli nie będę mogła pojawić się na którymś spotkaniu?",
    answer:
      "Nasze spotkania będą nagrywane i udostępnione tylko dla osób uczestniczących w programie. Jeśli nie dotrzesz na któreś spotkanie, będziesz mogła nadrobić materiał. Z zadaniem pytań nie musisz czekać do kolejnego spotkania — będziesz mogła zadać je na dedykowanej grupie na Facebooku, gdzie będziemy w stałym kontakcie!",
  },
]

const Questions = () => {
  return (
    <div className="pt-[120px] text-center pb-10 px-4">
      <h2 className="font-bold lg:h-[58px] text-adaSubtitle lg:text-adaTitle2 text-ada-grey -mb-4">
        Pewnie teraz się{" "}
      </h2>
      <h2 className="px-6 text-adaSubtitle lg:text-adaTitle font-bold">
        zastanawiasz...
      </h2>
      {questionsList && (
        <Carousel
          responsive={responsive}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          ssr={true}
        >
          {questionsList.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </Carousel>
      )}
    </div>
  )
}

export default Questions
