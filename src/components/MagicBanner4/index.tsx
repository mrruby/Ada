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
    showArrow: true,
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
        <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 my-2">
          <p className="text-adaDesc">przyniósł</p>
          <TypingAnimation
            text="28"
            textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie leading-none"
            wrapperClassName="min-w-0 w-auto"
            as="span"
          />
          <span className="text-adaSubtitleThird md:text-[80px] leading-none">
            🛒
          </span>
          <p className="md:text-adaDesc">zakupów o wartości</p>
          <TypingAnimation
            text="69 972 zł"
            textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie leading-none"
            wrapperClassName="min-w-0 w-auto"
            as="span"
          />
        </div>
        <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
          <p className="text-adaDesc">oraz</p>
          <TypingAnimation
            text="1949"
            textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie leading-none"
            wrapperClassName="min-w-0 w-auto"
            as="span"
          />
          <p className="md:text-adaDesc">nowych subskrybentów</p>
          <span className="inline-block text-adaSubtitleThird md:text-[80px] leading-none -rotate-90">
            ☝️
          </span>
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
    showArrow: true,
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
        <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
          <span className="text-[80px] leading-none">💰</span>
          <p className="md:text-adaDesc">za mniej niż</p>
          <TypingAnimation
            text="0,43 zł"
            textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie leading-none"
            wrapperClassName="min-w-0 w-auto"
            as="span"
          />
          <p className="md:text-adaDesc">za jednego obserwatora</p>
        </div>
        <div className="flex flex-col lg:flex-row mt-4 lg:mt-0 items-start lg:items-baseline justify-center gap-y-3 lg:gap-x-4">
          <div className="flex items-baseline gap-x-2 text-left">
            <TypingAnimation
              text="40"
              textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie leading-none"
              wrapperClassName="min-w-0 w-auto"
              as="span"
            />
            <p className="text-adaDesc">osób</p>
            <span className="text-[80px] leading-none">💬</span>
          </div>
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
    title: "ROAS 50,56",
    color: "",
    showArrow: false,
    subtitle: (
      <p>
        kampania sprzedażowa <b>produktu cyfrowego</b> przyniosła
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
              text="249,84 zł"
              textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie md:w-[220px]"
            />
          </div>
        </div>
        <div className="flex md:gap-4 items-center justify-center">
          <div className="flex flex-col text-left">
            <p className="text-adaDesc -mb-4"> Przychód:</p>
            <TypingAnimation
              text="12 632 zł"
              textStyle="text-adaSubtitleThird md:text-adaTitle2 font-anie md:w-[230px]"
            />
          </div>
          <div className="text-[80px]">💸</div>
        </div>
      </div>
    ),
    description: (
      <>
        <b>Dobra strategia</b> to podstawa!
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
    <Section className="relative" padding="pt-8 md:pt-12 pb-0 px-4">
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
              showArrow={item.showArrow}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default MagicBanner4
