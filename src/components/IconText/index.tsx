import React from "react"

const IconText = ({ version }: { version: number }): JSX.Element => {
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

  const leftList2 = [
    {
      icon: "😱",
      text: "Pół roku temu zaplanowałaś 2024 rok, ale wyszło jak zawsze — rzeczywistość?",
    },
    {
      icon: "🤔",
      text: "Zastanawiasz się, jak sprzedawać swoje produkty/usługi bez ciągłej obecności w mediach społecznościowych?",
    },
    {
      icon: "😔",
      text: "Przygotowałaś świetne posty, merytoryczne treści, a zobaczyła je zaledwie garstka Twoich obserwujących?",
    },
    {
      icon: "😎",
      text: "Szukasz systemu, który działa w tle, kiedy Ty spędzasz czas z rodziną, odpoczywasz lub oglądasz serial?",
    },
  ]

  const rightList2 = [
    {
      icon: "🤯",
      text: "Myślałaś, że przecież reklamy można ‘tak łatwo wyklikać’, a potem weszłaś do menadżera reklam i poczułaś chaos?",
    },
    {
      icon: "😬",
      text: "Chcesz zarabiać więcej, ale prześladuje Cię uczucie, że „umiesz za mało”?",
    },
    {
      icon: "🥵",
      text: "Twoje dotychczasowe reklamy nie przynosiły pożądanych efektów?",
    },

    {
      icon: "🤔",
      text: "Albo tak naprawdę nie wiesz, czego możesz oczekiwać po wynikach z reklamy?",
    },
  ]

  return (
    <section>
      {version === 1 && (
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
      )}
      {version === 2 && (
        <div className="mx-auto md:pb-10 mt-4 md:mt-10">
          <h2 className="text-adaStandard lg:text-adaSubtitleThird font-bold bg-white shadow-xl lg:max-w-[740px] px-10 mx-auto flex items-center justify-center">
            Czy Ty też tak masz?
          </h2>
          <div className="flex flex-col md:flex-row pt-8 justify-center md:gap-4">
            <ul className="gap-10 md:gap-[120px] ">
              {leftList2.map((item, index) => (
                <li className="flex gap-4 max-w-[560px] pb-4 px-3" key={index}>
                  <span className="text-adaMin md:text-adaSubtitle"> {item.icon}</span>
                  <span className="text-adaMin md:text-adaStandard">{item.text}</span>
                </li>
              ))}
            </ul>
            <ul className="gap-10 md:gap-[120px]">
              {rightList2.map((item, index) => (
                <li className="flex gap-4 max-w-[580px] pb-3 px-3" key={index}>
                  <span className="text-adaMin md:text-adaSubtitle"> {item.icon}</span>
                  <span className="text-adaMin md:text-adaStandard">
                  {item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-[780px] text-center py-[50px] mx-auto ">
            <h3 className="text-adaMin md:text-adaSubtitleSecondary font-bold pb-10">
              W TWOJEJ GŁOWIE POJAWIŁA SIĘ MYŚL:{" "}
              <span className="text-ada-purple">„KURCZE, NO TAK!”?</span>
            </h3>
            <p className="text-adaMin md:text-adaDesc">
              To znak, że dzięki{" "}
              <span className="font-bold">masterclassom</span> przybliżysz się
              do życia, w którym pracujesz tak, jak lubisz i zarabiasz dzięki
              temu naprawdę <span className="font-bold">fajne pieniądze</span>{" "}
              💸
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default IconText
