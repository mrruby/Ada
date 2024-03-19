import React from "react"

const IconText = (): JSX.Element => {
  const leftList = [
    {
      icon: "🔥",
      text: "Słyszałaś, że teraz jest boom na reklamy i faktycznie — dostajesz zapytania, ale zamiast podpisywać nowe umowy, odsyłasz do konkurencji?",
    },
    {
      icon: "👶",
      text: "Ustawiasz już pierwsze kampanie dla swoich klientów, ale czujesz, że błądzisz jak dziecko we mgle?",
    },
    {
      icon: "💸",
      text: "Ogarniasz podstawy, ale czujesz, że budżet reklamowy trochę przecieka Ci przez palce?",
    },
    {
      icon: "💎",
      text: "Chciałabyś dotrzeć do nowych odbiorców i skutecznie przekonać ich do skorzystania z oferty, którą reklamujesz?",
    },
    {
      icon: "👀",
      text: "Słyszysz narzekanie, że zasięgi powinny być większe? W głębi duszy czujesz, że sam zasięg nie wystarczy? ",
    },
  ]

  const rightList = [
    {
      icon: "🤯",
      text: "Twoi klienci wywierają presję na wyniki, a Ty już nie wiesz, co robić i jak spełnić oczekiwania?",
    },
    {
      icon: "👀",
      text: "Potrzebujesz spojrzenia z zewnątrz i wyjścia z bańki marketingowej, do której trafiłaś?",
    },
    {
      icon: "‍👩‍🎓",
      text: "Chcesz się rozwijać, ale kursy video i e-booki nie pozwalają Ci na konfrontowanie wiedzy z wynikami oraz przemyślaną praktykę?",
    },
    {
      icon: "💰",
      text: "Chcesz tworzyć skuteczne i bardziej zaawansowane lejki reklamowe, za które Twoi klienci będą Cię świetnie wynagradzać?",
    },
    {
      icon: "👀",
      text: "Chcesz wiedzieć, jak sprawić, aby oprócz dotarcia do klienta wywołać akcję?",
    },
  ]

  return (
    <section>
      <div className="mx-auto pb-10 mt-10">
        <div className="flex flex-col md:flex-row pt-8 justify-center md:gap-4">
          <ul className="gap-10 md:gap-[120px] ">
            {leftList.map((item, index) => (
              <li className="flex gap-4 max-w-[560px] pb-4 px-3" key={index}>
                <span className="text-adaSubtitle"> {item.icon}</span>
                <span className="md:text-adaBase">{item.text}</span>
              </li>
            ))}
          </ul>
          <ul className="gap-10 md:gap-[120px] ">
            {rightList.map((item, index) => (
              <li className="flex gap-4 max-w-[560px] pb-8 px-3" key={index}>
                <span className="text-adaSubtitle"> {item.icon}</span>
                <span className="md:text-adaBase">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default IconText
