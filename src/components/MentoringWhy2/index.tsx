import React from "react"

const MentoringWhy2 = () => {
  const leftList = [
    {
      text: (
        <>
          <span className="font-bold">
            podkręcisz wyniki kampanii reklamowych{" "}
          </span>
          Twoich i Twoich klientów oraz nauczysz się skutecznie docierać do osób
          zainteresowanych ofertą, którą reklamujesz
        </>
      ),
    },
    {
      text: (
        <>
          stworzysz
          <span className="font-bold"> zaawansowane kampanie reklamowe </span>i
          dowiesz się, jak je optymalizować
        </>
      ),
    },
    {
      text: (
        <>
          wybierzesz
          <span className="font-bold"> najlepsze materiały do reklam </span>i -
          stworzysz chwytliwe grafiki i błyskotliwe teksty reklamowe{" "}
        </>
      ),
    },
  ]

  const rightList = [
    {
      text: (
        <>
          <span className="font-bold">zrozumiesz ścieżkę użytkownika </span>i
          dowiesz się, co zrobić, jeśli kampanie nie działają — wszystko po to,
          aby Twoi klienci wiedzieli, że mają w Tobie oparcie nawet w czasach
          kryzysu
        </>
      ),
    },
    {
      text: (
        <>
          zderzysz swoje wątpliwości z osobami, które mają podobne problemy w
          zdobywaniu nowych klientów i przekonasz się, że{" "}
          <span className="font-bold">
            rozwiązanie jest bliżej niż myślisz —
          </span>
          wystarczy wiedzieć, gdzie go szukać!
        </>
      ),
    },
  ]

  return (
    <section id="solution">
      <div className="flex flex-col items-center text-center">
        <div className="text-adaDesc lg:text-adaTitle font-bold lg:mt-20 mx-auto  text-center lg:mb-2">
          <h2 className="z-10 sticky px-2">
            Meta Ads Masters Mentoring to bezpieczna przestrzeń, w której:
          </h2>
        </div>
        <div className="flex flex-col md:flex-row pt-8 justify-center md:gap-4 pb-10 px-3">
          <ul className="gap-10 md:gap-[120px] ">
            {leftList.map((item, index) => (
              <li
                className="flex gap-4 max-w-[540px] pb-4 text-start"
                key={index}
              >
                <span className="text-[44px] font-extrabold">&#10003;</span>
                <span className="md:text-adaBase">{item.text}</span>
              </li>
            ))}
          </ul>
          <ul className="gap-10 md:gap-[120px] ">
            {rightList.map((item, index) => (
              <li
                className="flex gap-4 max-w-[540px] pb-4 text-start"
                key={index}
              >
                <span className="text-[44px] font-extrabold">&#10003;</span>
                <span className="md:text-adaBase">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center mb-20 px-3">
        <div className="text-adaBase lg:text-adaTitle font-bold lg:h-[68px] lg:mt-10 mx-auto uppercase text-center animated-border">
          <h2 className="z-10 sticky px-2">Dołącz do programu „Meta Ads</h2>
        </div>
        <div className="text-adaBase lg:text-adaTitle font-bold lg:mb-2 lg:h-[68px] mx-auto uppercase text-center animated-border">
          <h2 className="z-10 sticky px-2">Masters Mentoring!”</h2>
        </div>
        <p className="md:text-adaSubtitle pb-8 max-w-[1000px] text-center mt-14">
          i zrób krok w stronę zdobywania nowych klientów, którzy chętnie
          wynagrodzą Cię za świetnie wykonaną pracę!
        </p>
      </div>
    </section>
  )
}

export default MentoringWhy2
