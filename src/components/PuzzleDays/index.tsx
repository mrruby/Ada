import { Button } from "helpers/Button"
import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const PuzzleItem: React.FC<{
  day: string
  date: string
  title: string
  description: string
  icon: string
  isAlternate: boolean
}> = ({ day, date, title, description, icon, isAlternate }) => (
  <ScrollAnimation animateIn="fadeInUp" animateOnce>
    <div className="relative">
      <div className="flex flex-col md:flex-row items-start mb-8">
        <div
          className={`absolute ${
            isAlternate ? "-left-40" : "-left-28"
          } -top-2 z-10`}
        >
          <div className="relative">
            <img
              src={icon}
              alt={`Puzzle Icon ${day}`}
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 font-bold text-adaSubtitle">
              <span>{day}</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className="mt-10 p-8 rounded-lg flex-grow bg-ada-pink2 pl-32">
          <h3 className="text-ada-blue font-bold mb-2">{title}</h3>
          <p className="text-ada-blue">{description}</p>
        </div>
      </div>
    </div>
  </ScrollAnimation>
)

const PuzzleDays: React.FC = () => {
  const puzzleItems = [
    {
      day: "DZIEŃ 1",
      date: "2.09",
      title: "Jak obliczyć konwersję?",
      description:
        "Dogłębnie zrozum istotę konwersji i oblicz, do ilu osób musisz dotrzeć, aby Twoje kampanie reklamowe zawsze przynosiły zysk. Poznaj kluczowe wskaźniki, które pomogą Ci się koncentrować swojej wysiłki marketingowe, aby maksymalizować zyski z inwestycji.",
      icon: "../assets/puzzle-1.svg",
    },
    {
      day: "DZIEŃ 2",
      date: "3.09",
      title: "Sesja Q&A",
      description:
        "To Twoja szansa na bezpośredni kontakt z praktyczną wiedzą o reklamach! Zadajesz pytania otrzymujesz odpowiedzi, natychmiastowo skonsultujesz się od ekspertki, aby skutecznie zdobyć wiedzę zdobytą podczas wyzwania.",
      icon: "../assets/puzzle-2.svg",
    },
    {
      day: "DZIEŃ 3",
      date: "4.09",
      title: "Jak zbadać i zrozumieć dane?",
      description:
        "Dowiedz się jak gromadzić i analizować dane dotyczące Twoich odbiorców, co pozwoli Ci precyzyjnie dostosować swoje działania. W tym dniu przeniesiesz analizę do poziomu zaawansowanej skutecznej strategii reklamowej.",
      icon: "../assets/puzzle-3.svg",
    },
    {
      day: "DZIEŃ 4",
      date: "5.09",
      title: "Sesja Q&A",
      description:
        "To Twoja szansa na bezpośredni kontakt z praktyczną wiedzą o reklamach! Zadajesz pytania otrzymujesz odpowiedzi, natychmiastowo skonsultujesz się od ekspertki, aby skutecznie zdobyć wiedzę zdobytą podczas wyzwania.",
      icon: "../assets/puzzle-4.svg",
    },
    {
      day: "DZIEŃ 5",
      date: "6.09",
      title: "Jak rozplanować Twoją pierwszą kampanię reklamową?",
      description:
        "Wspólnie zaplanujemy skuteczną i udoskonaloną strukturę kampanii reklamowej. Nauczysz się jak tworzyć reklamy, które trafiają do Twoich idealnych klientów i generują zyski. Nareszcie, z łatwością i zyskiem.",
      icon: "../assets/puzzle-5.svg",
    },
  ]

  return (
    <div className="mx-auto mt-20 mb-10 flex flex-col max-w-5xl items-start px-4">
      <div className="space-y-8 ml-28">
        {puzzleItems.map((item, index) => (
          <PuzzleItem
            key={index}
            day={item.day}
            date={item.date}
            title={item.title}
            description={item.description}
            icon={item.icon}
            isAlternate={index % 2 !== 0}
          />
        ))}
      </div>
      <div className="flex justify-center w-full my-10 z-10">
        <Button
          type="button"
          text={
            <span className="font-bold">
              Odbieram dostęp do szkoleń i ekskluzywnej grupy!
            </span>
          }
          sectionId="puzzle-end"
          textSize="md:text-adaSubtitle"
          btnStyle="uppercase md:w-[600px] bg-ada-pink2 tracking-[2.90px] h-[100px] shadow-xl mx-4 md:mx-0"
        />
      </div>
    </div>
  )
}

export default PuzzleDays
