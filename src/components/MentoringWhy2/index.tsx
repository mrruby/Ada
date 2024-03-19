import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"

const MentoringWhy2 = (): JSX.Element => {
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
        <StaticImage
          loading="eager"
          src={"../../images/ada_about2.webp"}
          alt="Ada Promis - hero"
          placeholder="none"
          width={435}
          height={435}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
        <h3 className="md:text-adaSubtitleThird font-bold max-w-[860px] mx-auto my-8">
          <span className="text-ada-pink3">
            Rozwiązaniem jest program mentoringowy{" "}
          </span>
          <br />
          „Meta Ads Masters Mentoring!”
        </h3>
        <StaticImage
          loading="eager"
          src={"../../images/arrowdown.svg"}
          alt=""
          placeholder="none"
          width={62}
          height={54}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
        <h2 className="text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] lg:mt-20 mx-auto">
          To bezpieczna przestrzeń, w której:
        </h2>
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
                {" "}
                <span className="text-[44px] font-extrabold">&#10003;</span>
                <span className="md:text-adaBase">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center mb-20 px-3">
        <h2 className="text-adaBase lg:text-adaTitle font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[30px] border-ada-light-pink lg:h-[68px] lg:mt-10 mx-auto uppercase text-center">
          Dołącz do programu „Meta Ads Masters Mentoring!”{" "}
        </h2>
        <p className="md:text-adaSubtitle pb-8 max-w-[1000px] text-center mt-14">
          i zrób krok w stronę zdobywania nowych klientów, którzy chętnie
          wynagrodzą Cię za świetnie wykonaną pracę!
        </p>
        <Button
          type="button"
          text={
            <span className="font-bold">
              Dołączam i pracuję <br />
              nad kampaniami!
            </span>
          }
          url="https://koalendar.com/e/meta-ads-master"
          textSize="md:text-adaSubtitle uppercase"
          btnStyle="md:w-[460px] bg-ada-pink2"
        />
      </div>
    </section>
  )
}

export default MentoringWhy2
