import TypingAnimation from "helpers/TypingAnimation"
import React, { JSX } from "react"
import Section from "../shared/Section"
import MagicInfoBox from "./MagicInfoBox"

type MagicBanner4Props = {
  version?: 1 | 2 | 3
}

const magicInfoContentV1 = [
  {
    title: "69 972 zł ",
    color: "green",
    subtitle: <></>,
    subtitle2: (
      <>
        <b>przychodu z kampanii, </b>
        <br />
        której celem nie był zakup.
      </>
    ),
    content: (
      <div className="flex flex-col items-center mx-auto py-6">
        <div className="flex gap-4 items-center">
          <div className="text-adaSubtitleThird md:text-[80px]">💰</div>
          <div className="flex flex-col text-left">
            <p className="text-adaDesc -mb-4"> Budżet</p>
            <TypingAnimation
              text="6 892,61 zł"
              textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie md:w-[320px]"
            />
          </div>
        </div>
        <div className="flex md:gap-2 items-center my-2">
          <div className="flex flex-col text-left">
            <p className="text-adaDesc -mb-4"> przyniósł</p>
            <TypingAnimation
              text="28"
              textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie w-[100px]"
            />
          </div>
          <div className="text-adaSubtitleThird md:text-[80px]">🛒</div>
          <p className="md:text-adaDesc mb-2 md:ml-2">zakupów o wartości</p>
          <TypingAnimation
            text="69 972 zł"
            textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie md:w-[300px] -ml-4"
          />
        </div>
        <div className="flex md:gap-2 items-center">
          <div className="flex text-left items-end">
            <div>
              <p className="text-adaDesc -mb-4"> oraz</p>
              <TypingAnimation
                text="1949"
                textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie md:w-[100px]"
              />
            </div>

            <p className="md:text-adaDesc mb-6 ml-1 md:ml-2">
              nowych subskrybentów
            </p>
          </div>
          <div className="text-adaSubtitleThird md:text-[80px] -rotate-90">
            ☝️
          </div>
        </div>
      </div>
    ),
    description: (
      <>
        <b>Produkty premium sprzedają się bardzo dobrze - </b>
        <br />
        jeśli wiesz, jaką strategię wdrożyć.{" "}
      </>
    ),
  },
]

const magicInfoContentV2 = [
  {
    title: "11 125",
    color: "",
    subtitle: (
      <p>
        Dzięki <b>kampanii kierującej na Instagrama</b> Monika zyskała
      </p>
    ),
    subtitle2: (
      <>
        <b>nowych obserwujących</b>
      </>
    ),
    content: (
      <div className="flex flex-col items-center mx-auto py-6">
        <div className="flex gap-4 items-center">
          <div className="text-[80px]">💰</div>
          <div className="flex flex-col text-left">
            <p className="md:text-adaDesc -mb-4"> za mniej niż</p>
            <TypingAnimation
              text="0,43 zł"
              textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie md:w-[160px]"
            />
          </div>
          <div className="md:text-adaDesc">za jednego obserwatora</div>
        </div>
        <div className="flex md:gap-4 items-center">
          <div className="flex flex-col text-left">
            <TypingAnimation
              text="40"
              textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie md:w-[100px]"
            />
            <p className="text-adaDesc -mb-4">osób</p>
          </div>
          <div className="text-[80px]">💬</div>
          <p className="md:text-adaDesc max-w-[300px] text-left">
            przesłało <b>zapytanie o współpracę</b> bezpośrednio
            <b> po odwiedzeniu profilu na Instagramie</b>
          </p>
        </div>
      </div>
    ),
    description: (
      <>
        To się nazywają <b>wartościowe kontakty!</b>
      </>
    ),
  },
]

const magicInfoContentV3 = [
  {
    title: "ROAS 19,15",
    color: "green",
    subtitle: (
      <p>
        <b>5-dniowa</b> kampania <br /> sprzedażowa przyniosła
      </p>
    ),
    subtitle2: <></>,
    content: (
      <div className="flex flex-col items-center mx-auto py-6">
        <div className="flex gap-4 items-center">
          <div className="text-[80px]">💰</div>
          <div className="flex flex-col text-left">
            <p className="text-adaDesc -mb-4"> Wydana kwota:</p>
            <TypingAnimation
              text="203,72 zł"
              textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie md:w-[220px]"
            />
          </div>
        </div>
        <div className="flex md:gap-4 items-center">
          <div className="flex flex-col text-left">
            <p className="text-adaDesc -mb-4"> Przychód:</p>
            <TypingAnimation
              text="3900,80 zł"
              textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie md:w-[230px]"
            />
          </div>
          <div className="text-[80px]">💸</div>
        </div>
      </div>
    ),
    description: (
      <>
        <b>Z małym budżetem</b> też się da!
      </>
    ),
  },
]

const MagicBanner4 = ({ version = 1 }: MagicBanner4Props): JSX.Element => {
  let content

  switch (version) {
    case 2:
      content = magicInfoContentV2
      break
    case 3:
      content = magicInfoContentV3
      break
    case 1:
    default:
      content = magicInfoContentV1
  }

  return (
    <Section>
      <div className="text-center">
        <div className="flex flex-col pt-2 justify-center">
          {content.map((item, i) => (
            <MagicInfoBox
              key={i}
              title={item.title}
              color={item.color}
              subtitle={item.subtitle}
              subtitle2={item.subtitle2}
              content={item.content}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default MagicBanner4
