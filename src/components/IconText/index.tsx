import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React, { useState } from "react"

const IconText = ({ version }: { version: number }) => {
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleMouseEnter = () => {
    if (!hasAnimated) setHasAnimated(true)
  }

  const leftList = [
    {
      icon: "🔥",
      text: "słyszałaś, że teraz jest boom na reklamy i faktycznie dostajesz zapytania, ale zamiast podpisywać nowe umowy, odsyłasz do konkurencji?",
    },
    {
      icon: "👶",
      text: "ustawiasz już pierwsze kampanie dla swoich klientów, ale czujesz, że błądzisz jak dziecko we mgle?",
    },
    {
      icon: "💸",
      text: "ogarniasz podstawy, ale czujesz, że budżet reklamowy trochę przecieka Ci przez palce?",
    },
    {
      icon: "💎",
      text: "chciałabyś dotrzeć do nowych odbiorców i skutecznie przekonać ich do skorzystania z oferty, którą reklamujesz?",
    },
    {
      icon: "👀",
      text: "słyszysz narzekanie, że zasięgi powinny być większe? W głębi duszy czujesz, że sam zasięg nie wystarczy?",
    },
  ]

  const rightList = [
    {
      icon: "🤯",
      text: "Twoi klienci wywierają presję na wyniki, a Ty już nie wiesz, co robić i jak spełnić oczekiwania?",
    },
    {
      icon: "👀",
      text: "potrzebujesz spojrzenia z zewnątrz i wyjścia z bańki marketingowej, do której trafiłaś?",
    },
    {
      icon: "‍👩‍🎓",
      text: "chcesz się rozwijać, ale kursy video i e-booki nie pozwalają Ci na konfrontowanie wiedzy z wynikami oraz przemyślaną praktyką?",
    },
    {
      icon: "💰",
      text: "chcesz tworzyć skuteczne i bardziej zaawansowane lejki reklamowe, za które Twoi klienci będą Cię świetnie wynagradzać?",
    },
    {
      icon: "👀",
      text: "chcesz wiedzieć, jak sprawić, aby oprócz dotarcia do klienta wywołać akcję?",
    },
  ]

  const leftList2 = [
    {
      icon: "😱",
      text: "Pół roku temu zaplanowałaś 2025 rok, ale wyszło jak zawsze. Brzmi znajomo?",
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
      text: "Myślałaś, że przecież reklamy można 'tak łatwo wyklikać', a potem weszłaś do menadżera reklam i poczułaś chaos?",
    },
    {
      icon: "😬",
      text: "Chcesz zarabiać więcej, ale prześladuje Cię uczucie, że 'umiesz za mało'?",
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
  const iconTextList = [
    {
      icon: "💼",
      text: "Masz swój biznes - sprzedajesz produkty cyfrowe, usługi lub produkty fizyczne",
    },
    {
      icon: "👀",
      text: "Jesteś specjalistką w swojej dziedzinie i chcesz z lekkością pozyskiwać nowych klientów na swoje usługi",
    },
    {
      icon: "💰",
      text: "Chcesz wypromować e-book, webinar lub kurs online i wreszcie przebić szklany sufit swoich przychodów",
    },
    {
      icon: "🤔",
      text: "Przerobiłaś już milion kursów o reklamach, ale dalej nie wiesz, jak je prowadzić i jak na nich zarabiać",
    },
    {
      icon: "🤯",
      text: "Masz dość walki z algorytmem Instagrama i Facebooka",
    },
    {
      icon: "😡",
      text: "Czujesz się sfrustrowana, gdy Twoje wartościowe treści są przykryte przez czyjeś wygłupy i tańce",
    },
    {
      icon: "💎",
      text: "Wiesz, że wiele osób chętnie skorzystałoby z Twojej oferty i szukasz sposobu, aby do nich dotrzeć",
    },
    {
      icon: "😩",
      text: "Przekopałaś już całego Facebooka w poszukiwaniu nowych klientów, ale zamiast spektakularnych efektów czujesz zmęczenie i rezygnację…",
    },
  ]

  const leftList4 = [
    {
      icon: "🤔",
      text: (
        <>
          Chcesz w końcu zrealizować swoje <b>biznesowe plany</b> bez odkładania{" "}
          <b>na później?</b>
        </>
      ),
    },
    {
      icon: "😎",
      text: (
        <>
          Uważasz, że <b>Twoje wartościowe treści</b> zasługują na dotarcie do{" "}
          <b>szerszej grupy idealnych klientów?</b>
        </>
      ),
    },
  ]

  const rightList4 = [
    {
      icon: "🤔",
      text: (
        <>
          Pragniesz <b> systemu, który zarabia dla Ciebie,</b> gdy spędzasz czas
          z bliskimi?
        </>
      ),
    },
    {
      icon: "💪",
      text: (
        <>
          Jesteś gotowa opanować reklamy i <b> przekształcić chaos</b> w
          klarowną strategię?
        </>
      ),
    },
    {
      icon: "💪",
      text: (
        <>
          Chcesz pewnie <b> inwestować w reklamy,</b> znając dokładnie
          oczekiwane rezultaty?
        </>
      ),
    },
  ]

  const leftList5 = [
    {
      icon: "🤔",
      text: (
        <>
          Wiesz, że reklamy mogłyby pomóc Twojemu biznesowi, ale nie chcesz
          wydawać fortuny na agencję?
        </>
      ),
    },
    {
      icon: "👀",
      text: (
        <>
          Czujesz, że Twoja oferta jest wartościowa, ale nie dociera do
          właściwych osób?
        </>
      ),
    },
    {
      icon: "😎",
      text: (
        <>
          Masz ochotę nauczyć się czegoś nowego, co realnie rozwinie Twój
          biznes?
        </>
      ),
    },
  ]

  const rightList5 = [
    {
      icon: "🤔",
      text: (
        <>
          Widzisz, jak inne kobiety skutecznie promują swoje biznesy i
          zastanawiasz się, jak one to robią?
        </>
      ),
    },
    {
      icon: "💪",
      text: (
        <>
          Chciałabyś w końcu zrozumieć, jak poruszać się po menedżerze reklam i
          dlaczego zadziała lepiej niż przycisk “promuj post”?
        </>
      ),
    },
    {
      icon: "📊",
      text: (
        <>
          Szukasz sprawdzonego sposobu na dotarcie do swoich wymarzonych
          klientek - bez zgadywania i stresu?
        </>
      ),
    },
  ]

  const leftList3 = iconTextList.slice(0, 4)
  const rightList3 = iconTextList.slice(4)

  return (
    <section>
      {version === 1 && (
        <div className="mx-auto pb-10 mt-10">
          <h2 className="text-adaStandard lg:text-adaSubtitleThird font-bold bg-white shadow-xl lg:max-w-7xl px-10 mx-auto flex items-center justify-center">
            Zastanawiasz się czy Meta Ads Masters Mentoring jest dla Ciebie? A
            czy…
          </h2>
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
                  <span className="text-adaMin md:text-adaSubtitle">
                    {" "}
                    {item.icon}
                  </span>
                  <span className="text-adaMin md:text-adaStandard">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="gap-10 md:gap-[120px]">
              {rightList2.map((item, index) => (
                <li className="flex gap-4 max-w-[580px] pb-3 px-3" key={index}>
                  <span className="text-adaMin md:text-adaSubtitle">
                    {" "}
                    {item.icon}
                  </span>
                  <span className="text-adaMin md:text-adaStandard">
                    {item.text}
                  </span>
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
      {version === 3 && (
        <>
          <div className="flex flex-col md:flex-row md:gap-20">
            <div className="md:mt-[-180px] md:ml-[-200px]">
              <StaticImage
                loading="eager"
                src={"../../images/ada-why.webp"}
                alt="Ada Promis"
                width={557}
                height={837}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="max-w-4xl px-2 mr-4">
              <h2 className="md:mt-40 text-adaStandard lg:text-adaSubtitleSecondary uppercase font-bold bg-ada-purple text-white w-screen py-4 pl-4 pr-10 md:h-[84px] flex items-center">
                Dzięki reklamom w programie mentoringowym:
              </h2>
              <p className="pt-6 text-adaMin md:text-adaDesc text-ada-black">
                🧭 Otrzymasz kompas do działania na następne 4 miesiące:
                poprowadzę Cię przez rękę przez świat kont reklamowych,
                wskaźników i kreacji
              </p>
              <p className="pt-6 text-adaMin md:text-adaDesc text-ada-black">
                💸 Zbudujesz stabilność swojej firmy dzięki lepszym wynikom
                reklamowym
              </p>
              <p className="pt-6 text-adaMin md:text-adaDesc text-ada-black">
                🚀 Nauczysz się tworzyć skuteczne kampanie reklamowe bez
                potrzeby zatrudniania agencji i zobowiązujących umów
              </p>
              <p className="pt-6 text-adaMin md:text-adaBase font-bold text-ada-black">
                W programie mentoringowym nauczysz się tworzyć kampanie
                reklamowe od zera.
              </p>
            </div>
          </div>
          <div className="mx-auto md:pb-10 text-ada-black">
            <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center text-ada-purple lg:mb- animate-bounce uppercase pb-10">
              Dla kogo jest <br />
              ten program?
            </h2>
            <h2 className="text-adaStandard lg:text-adaSubtitleSecondary font-bold px-10 mx-auto flex items-center justify-center">
              Ten program jest idealny dla Ciebie, jeśli:
            </h2>
            <div className="flex flex-col md:flex-row pt-8 justify-center md:gap-4">
              <ul className="gap-10 md:gap-[120px] ">
                {leftList3.map((item, index) => (
                  <li
                    className="flex gap-4 max-w-[560px] pb-4 px-3"
                    key={index}
                  >
                    <span className="text-adaMin md:text-adaSubtitle">
                      {" "}
                      {item.icon}
                    </span>
                    <span className="text-adaMin md:text-adaStandard">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="gap-10 md:gap-[120px]">
                {rightList3.map((item, index) => (
                  <li
                    className="flex gap-4 max-w-[580px] pb-3 px-3"
                    key={index}
                  >
                    <span className="text-adaMin md:text-adaSubtitle">
                      {" "}
                      {item.icon}
                    </span>
                    <span className="text-adaMin md:text-adaStandard">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col px-3 py-2 text-ada-black">
            <div className="mx-auto mt-14">
              <div className="flex flex-col md:flex-row justify-between w-full">
                <StaticImage
                  loading="eager"
                  src={"../../images/ada-a.webp"}
                  alt="Ada Promis"
                  width={814}
                  height={814}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
                <div className="max-w-[750px]">
                  <h2 className="text-[20px] lg:text-adaTitle font-bold  animate-bounce">
                    Pewnie wiesz, że...
                  </h2>
                  <p className="lg:text-adaBase pt-[24px] font-medium leading-tight">
                    Działania organiczne są ograniczone. Oczywiście możesz
                    tworzyć posty, projektować karuzele, nagrywać rolki i
                    patrzeć, jak po kilku godzinach zostają przykryte przez inne
                    materiały.
                  </p>
                  <p className="lg:text-adaBase pt-[24px] font-medium leading-tight">
                    W ten sposób pozyskasz jednego klienta, drugiego, trzeciego,
                    ale jeśli chcesz iść w dziesiątki czy setki… <br />
                    ❌ zamiast przeznaczać wiele czasu na tworzenie kolejnych
                    postów <br />✅ zbuduj przemyślany lejek marketingowy i
                    wdrażaj płatne promocje przemyślanych treści.
                  </p>
                  <p className="lg:text-adaBase pt-[24px] font-medium leading-tight pb-10">
                    Chyba nie muszę Ci mówić, która opcja jest przyszłościowa,
                    można ją skalować i optymalizować jej potencjał? 😉
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between w-full">
                <div className="max-w-[750px] md:ml-20">
                  <h2 className="text-[20px] lg:text-adaTitle font-bold  animate-bounce">
                    Dlatego...
                  </h2>
                  <p className="lg:text-adaBase pt-[24px] font-medium leading-tight pb-10">
                    przygotowałam dla Ciebie program mentoringowy{" "}
                    <span className="font-bold">„Ogarnij swoje adsy!”</span> w
                    którym nauczysz się tworzyć od podstaw skuteczne kampanie
                    reklamowe i osiągać rezultaty, o jakich dotąd tylko
                    marzyłaś!
                  </p>
                  <Button
                    type="button"
                    text={<span className="font-bold">Wchodzę w to!</span>}
                    sectionId="offert"
                    textSize="text-adaMin md:text-adaSubtitleThird"
                    btnStyle="uppercase w-[187px] md:w-[490px] bg-ada-purple text-ada-white md:tracking-[2.90px] md:h-[100px] shadow-xl"
                  />
                </div>
                <StaticImage
                  loading="eager"
                  src={"../../images/ada-a2.webp"}
                  alt="Ada Promis"
                  width={320}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                  className="lg:mr-[-200px] lg:mb-[-8px]"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {version === 4 && (
        <div className="mx-auto md:pb-10 mt-4 md:mt-10">
          <h2 className="text-adaStandard lg:text-adaSubtitleThird font-bold bg-white shadow-xl lg:max-w-[740px] px-10 mx-auto flex items-center justify-center">
            Czy Ty też...
          </h2>
          <div className="flex flex-col md:flex-row pt-8 justify-center md:gap-4">
            <ul className="gap-10 md:gap-[120px] ">
              {leftList4.map((item, index) => (
                <li className="flex gap-4 max-w-[560px] pb-4 px-3" key={index}>
                  <span className="text-adaMin md:text-adaSubtitle">
                    {" "}
                    {item.icon}
                  </span>
                  <span className="text-adaMin md:text-adaStandard">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="gap-10 md:gap-[120px]">
              {rightList4.map((item, index) => (
                <li className="flex gap-4 max-w-[580px] pb-3 px-3" key={index}>
                  <span className="text-adaMin md:text-adaSubtitle">
                    {" "}
                    {item.icon}
                  </span>
                  <span className="text-adaMin md:text-adaStandard">
                    {item.text}
                  </span>
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
      {version === 5 && (
        <div
          className="mx-auto md:pb-10 mt-4 md:mt-10 px-2"
          onMouseOver={handleMouseEnter}
        >
          <h2 className="text-adaSubtitleSecondary md:text-adaSubtitleThird px-10 py-4 mx-auto flex items-center justify-center text-ada-magicOrange rounded-full font-anton">
            Czy Ty też...
          </h2>

          <div className="flex flex-col md:flex-row pt-8 justify-center md:gap-4">
            <ul className="gap-10 md:gap-[120px] text-black">
              {leftList5.map((item, index) => {
                const isDesktop =
                  typeof window !== "undefined" && window.innerWidth >= 768
                const animationClass =
                  hasAnimated && isDesktop
                    ? "animate-slideInFromLeft"
                    : "opacity-100"

                return (
                  <li
                    key={index}
                    className={`flex gap-4 max-w-[500px] h-[120px] px-6 py-8 bg-ada-white2 border border-ada-magicOrange rounded-[24px] shadow-xl mb-6 items-center transition-all duration-500 relative text-center lg:text-start ${animationClass}`}
                    style={{
                      animationDelay:
                        hasAnimated && isDesktop ? `${index * 0.3}s` : "0s",
                      animationFillMode: "forwards",
                    }}
                  >
                    <span
                      className="
                  absolute 
                  top-[4px] left-1/2 
                  -translate-x-1/2 -translate-y-1/2
                  md:static md:translate-x-0 md:translate-y-0
                  text-adaSubtitleThird
                "
                    >
                      {item.icon}
                    </span>
                    <span className="text-adaNav md:text-adaStandard">
                      {item.text}
                    </span>
                  </li>
                )
              })}
            </ul>

            <ul className="gap-10 md:gap-[120px] text-black">
              {rightList5.map((item, index) => {
                const isDesktop =
                  typeof window !== "undefined" && window.innerWidth >= 768
                const animationClass =
                  hasAnimated && isDesktop
                    ? "animate-slideInFromRight"
                    : "opacity-100"

                return (
                  <li
                    key={index}
                    className={`flex gap-4 max-w-[500px] h-[120px] px-6 py-8 bg-ada-white2 border border-ada-magicOrange rounded-[24px] shadow-xl mb-6 items-center transition-all duration-500 relative text-center lg:text-start ${animationClass}`}
                    style={{
                      animationDelay:
                        hasAnimated && isDesktop ? `${index * 0.3}s` : "0s",
                      animationFillMode: "forwards",
                    }}
                  >
                    <span
                      className="
                  absolute 
                  top-[4px] left-1/2 
                  -translate-x-1/2 -translate-y-1/2
                  md:static md:translate-x-0 md:translate-y-0
                  text-adaSubtitleThird
                "
                    >
                      {item.icon}
                    </span>
                    <span className="text-adaNav md:text-adaStandard">
                      {item.text}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex justify-center items-center -translate-y-6 mt-8 mb-2 mx-auto w-full">
            <a href="#pakiety" aria-label="Przejdź do sekcji pakiety">
              <StaticImage
                src={"../../images/magicBtn.svg"}
                alt=""
                placeholder="blurred"
                width={80}
                height={80}
              />
            </a>
          </div>

          <div className="max-w-[480px] text-center py-[50px] mx-auto">
            <h3 className="text-adaSubtitleSecondary pb-10 text-ada-magicOrange font-anton">
              W TWOJEJ GŁOWIE POJAWIŁA SIĘ MYŚL:{" "}
              <span className="text-ada-magicPink2">„KURCZE, NO TAK!”?</span>
            </h3>
            <p className="text-adaDesc text-black">
              Świetnie! Dzięki <b>ADSY&CHILL</b> przybliżysz się do życia w
              biznesie, który działa nie tylko wtedy gdy pracujesz i publikujesz
              treści na Instagramie{" "}
              <b>- możesz zarabiać więcej dzięki reklamom!</b>
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default IconText
