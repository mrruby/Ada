import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"

const MastermindWhy1 = (): JSX.Element => {
  const listItemClass = "lg:text-adaBase leading-tight py-2 leading-tight"

  return (
    <div className="flex flex-col text-ada-blue items-center px-3">
      <div className="relative flex flex-col md:flex-row gap-[60px] xl:gap-[90px] items-center w-full justify-center">
        <div className="lg:w-[736px] pt-[60px] lg:pt-[76px] z-0">
          <h2 className="text-[20px] lg:text-adaTitle font-bold w-[140px] md:w-[300px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px]">
            Dlatego...
          </h2>
          <p className="lg:text-adaBase lg:w-[574px] pt-[24px] font-medium leading-tight">
            przygotowałam dla Ciebie program mentoringowy
            <span className="font-bold">„Ogarnij swoje adsy!”</span>
          </p>
          <p className="lg:text-adaBase lg:w-[530px] pt-10 font-medium leading-tight">
            To bezpieczna przestrzeń, w której:
          </p>
          <ul className="md:max-w-[688px]">
            <li className={listItemClass}>
              &#10003;
              <span className="font-bold">
                podkręcisz wyniki swojego biznesu
              </span>
              i nauczysz się docierać do osób zainteresowanych ofertą, którą
              reklamujesz,
            </li>
            <li className={listItemClass}>
              &#10003; stworzysz{" "}
              <span className="font-bold">
                bardziej zaawansowane kampanie reklamowe
              </span>
              i dowiesz się, jak je optymalizować, aby — a jakże! — zarabiać
              więcej,
            </li>
            <li className={listItemClass}>
              &#10003; wybierzesz{" "}
              <span className="font-bold">najlepsze materiały do reklam</span> —
              stworzysz chwytliwe grafiki i błyskotliwe teksty reklamowe,
            </li>
            <li className={listItemClass}>
              &#10003;
              <span className="font-bold">
                zrozumiesz ścieżkę Twojego klienta{" "}
              </span>
              i dowiesz się, co zrobić, jeśli kampanie nie działają,
            </li>
            <li className={listItemClass}>
              &#10003; zderzysz swoje wątpliwości z osobami, które mają podobne
              problemy w zdobywaniu nowych klientów i przekonasz się, że
              rozwiązanie jest bliżej niż myślisz —
              <span className="font-bold">
                wystarczy wiedzieć, gdzie go szukać!
              </span>
            </li>
          </ul>
        </div>
        <div className="min-w-[448px] md:mr-[-130px]">
          <StaticImage
            src={"../../images/ada_mastermind1.webp"}
            alt="Ada Promis - hero"
            placeholder="none"
            width={448}
            height={553}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-10 pb-10 md:pb-[118px]">
        <h3 className="md:text-adaSubtitle max-w-[1024px] mx-auto font-medium pt-[90px]">
          Dołącz do programu „Ogarnij swoje adsy!” i zrób krok w stronę
          <span className="font-bold">zdobywania nowych klientów</span> dzięki
          kampaniom reklamowym.
        </h3>
        <Button
          type="button"
          text={
            <span className="font-bold">
              Dołączam i pracuję nad kampaniami!
            </span>
          }
          url="/"
          textSize="md:text-adaSubtitle font-bold"
          btnStyle="md:w-[561px]"
        />
      </div>
    </div>
  )
}

export default MastermindWhy1
