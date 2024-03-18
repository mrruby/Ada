import React from "react"
import { FeatureBox } from "helpers/FeatureBox"
import { BonusBox } from "helpers/BonusBox"
import { StaticImage } from "gatsby-plugin-image"

const MastermindSteps = ({ version }: { version: number }): JSX.Element => {
  const featuresDataFirtstRow = [
    {
      text: "Start! Układamy swój lejek, analizujemy ścieżkę swojego biznesu.",
      number: "1",
    },
    {
      text: "Grafiki & teksty: jak je przygotować? Spotkanie z ekspertkami z mojego zespołu!",
      number: "2",
    },
    {
      text: "Kampanie na obserwacje na IG/FB: jak pozyskiwać wartościowych odbiorców?",
      number: "3",
    },
  ]

  const featuresDataSecondRow = [
    {
      text: "Lead magnet i newsletter: jak stworzyć kampanie reklamowe na zapis do newslettera?",
      number: "4",
    },
    {
      text: "Strona www: kampanie reklamowe na Twoją stronę internetową",
      number: "5",
    },
    {
      text: "Remarketing: wszystko, co musisz wiedzieć o najskuteczniejszych kampaniach reklamowych",
      number: "6",
    },
  ]

  const featuresDataFirtstRow2 = [
    {
      text: "Menedżer reklam+ skuteczna współpraca z klientem",
      text2: "10 kwietnia, 12:30",
      number: "1",
    },
    {
      number: "2",
      text: (
        <>
          Lejek marketingowy:
          <br />
          <span className="font-medium">
            układanie i planowanie. Przeanalizuj swoją relację z odbiorcami w
            kampaniach reklamowych, przejdź przez ścieżkę i załataj dziury!
          </span>
        </>
      ),
      text2: "17 kwietnia, 12:30",
    },
    {
      number: "3",
      text: (
        <>
          Grupa docelowa:
          <br />
          <span className="font-medium">
            jak ją wybrać, jak segmentować, jak poszukiwać?
          </span>
        </>
      ),
      text2: "24 kwietnia, 12:30",
    },
    {
      number: "4",
      text: (
        <>
          Kampanie na budowanie społeczności (IG&FB):
          <br />
          <span className="font-medium">
            jak pozyskiwać wartościowych odbiorców?
          </span>
        </>
      ),
      text2: "8 maja, 12:30",
    },
    {
      number: "5",
      text: (
        <>
          Teksty: <br />
          <span className="font-medium">
            jak pozyskiwać wartościowych odbiorców?
          </span>
        </>
      ),
      text2: "15 maja, 12:30",
    },
  ]

  const featuresDataSecondRow2 = [
    {
      number: "6",
      text: (
        <>
          Grafiki do kampanii reklamowych:
          <br />
          <span className="font-medium">tips & trick + Q&A z graficzką</span>
        </>
      ),
      text2: "22 maja, 12:30",
    },
    {
      number: "7",
      text: (
        <>
          Lead magnet i newsletter:
          <br />
          <span className="font-medium">
            jak stworzyć kampanie reklamowe na zapis do newslettera?
          </span>
        </>
      ),
      text2: "29 maja, 12:30",
    },
    {
      number: "8",
      text: (
        <>
          Konwersje <br />
          <span className="font-medium">
            kampanie na www i kampanie sprzedażowe{" "}
          </span>
        </>
      ),
      text2: "12 czerwca, 12:30",
    },
    {
      number: "9",
      text: (
        <>
          Optymalizacja: <br />
          <span className="font-medium">
            co robić, gdy kampania nie działa i na jakie wskaźniki zwrócić
            uwagę? +{" "}
          </span>{" "}
          <br />
          Automatyzacje
          <span className="font-medium">w kampaniach reklamowych</span>
        </>
      ),
      text2: "19 czerwca, 12:30",
    },
  ]

  const bonusDataFirtRow = [
    {
      image: (
        <>
          <StaticImage
            loading="eager"
            src={"../../images/www.svg"}
            alt=""
            placeholder="none"
            width={116}
            height={108}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </>
      ),
      text: (
        <>
          <span className="font-bold">Hot Jar + strona</span> <br />w jaki
          sposób WWW może mieć wpływ na skuteczność Twoich kampanii i co warto
          poprawić (nagranie wideo)
        </>
      ),
      text2: (
        <>
          o wartości
          <span className="font-bold"> 197 zł</span>
        </>
      ),
    },
    {
      image: (
        <>
          <StaticImage
            loading="eager"
            src={"../../images/raport.svg"}
            alt=""
            placeholder="none"
            width={114}
            height={110}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </>
      ),
      text: (
        <>
          Szablon
          <span className="font-bold">
            {" "}
            raportu <br /> z kampanii reklamowych
          </span>
        </>
      ),
      text2: (
        <>
          o wartości
          <span className="font-bold"> 247 zł</span>
        </>
      ),
    },
    {
      image: (
        <>
          <StaticImage
            loading="eager"
            src={"../../images/szablon.svg"}
            alt=""
            placeholder="none"
            width={93}
            height={110}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </>
      ),
      text: (
        <>
          Szablon
          <span className="font-bold">
            {" "}
            portfolio
            <br /> kampanii reklamowych
          </span>
        </>
      ),
      text2: (
        <>
          o wartości
          <span className="font-bold"> 247 z</span>
        </>
      ),
    },
    {
      image: (
        <>
          <StaticImage
            loading="eager"
            src={"../../images/Canva.png"}
            alt=""
            placeholder="none"
            width={108}
            height={108}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </>
      ),
      text: (
        <>
          <span className="font-bold">Canva: </span> <br /> tips & tricks
        </>
      ),
      text2: (
        <>
          o wartości
          <span className="font-bold"> 97 zł</span>
        </>
      ),
    },
  ]

  const bonusDataSecondRow = [
    {
      image: (
        <>
          <StaticImage
            loading="eager"
            src={"../../images/docs.svg"}
            alt=""
            placeholder="none"
            width={175}
            height={145}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </>
      ),
      text: (
        <>
          <span className="font-bold">Dobre praktyki na Instagramie</span>{" "}
          <br /> (dokument pdf)
        </>
      ),
      text2: (
        <>
          o wartości
          <span className="font-bold"> 97 zł</span>
        </>
      ),
    },
    {
      image: (
        <>
          <StaticImage
            loading="eager"
            src={"../../images/docs2.svg"}
            alt=""
            placeholder="none"
            width={137}
            height={130}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </>
      ),
      text: (
        <>
          <span className="font-bold">
            Jak tworzyć materiały reklamowe dla branży beauty?
          </span>{" "}
          (dokument pdf)
        </>
      ),
      text2: (
        <>
          o wartości
          <span className="font-bold"> 397 zł</span>
        </>
      ),
    },
    {
      image: (
        <>
          <StaticImage
            loading="eager"
            src={"../../images/certyfikat.svg"}
            alt=""
            placeholder="none"
            width={152}
            height={117}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </>
      ),
      text: (
        <>
          <span className="font-bold">
            Certyfikat ukończenia programu dla każdej uczestniczki!
          </span>
          <br />
          Warunkiem otrzymania certyfikatu jest obecność na co najmniej 7
          spotkaniach w środy i ustawienie każdego omawianego na programie
          mentoringowym typu kampanii.
        </>
      ),
    },
  ]

  return (
    <>
      {version === 1 && (
        <section className="text-center pt-10" id="steps">
          <h2 className="font-bold lg:h-[58px] text-adaTitle lg:text-adaTitle2 text-ada-grey -mb-2 lg:-mb-4">
            Nad czym będziemy
          </h2>
          <h2 className="px-6 text-adaTitle font-bold animate-bounce">
            pracować?
          </h2>
          <div className="flex flex-col mx-auto items-center justify-center pb-10">
            <div className="flex flex-col md:flex-row gap-10 md:gap-[90px]">
              {featuresDataFirtstRow.map((feature, index) => (
                <FeatureBox
                  key={index}
                  text={feature.text}
                  number={feature.number}
                  styleText="font-medium"
                />
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-[90px]">
              {featuresDataSecondRow.map((feature, index) => (
                <FeatureBox
                  key={index}
                  text={feature.text}
                  number={feature.number}
                  styleText="font-medium"
                />
              ))}
            </div>
          </div>
        </section>
      )}
      {version === 2 && (
        <section className="text-center pt-10 pb-10" id="steps">
          <h2 className="font-bold lg:h-[58px] text-adaTitle lg:text-adaTitle2 text-ada-grey uppercase">
            Nad czym będziemy
          </h2>
          <h2 className="px-6 text-adaTitle font-bold animate-bounce uppercase">
            pracować?
          </h2>
          <div className="flex flex-col mx-auto items-center justify-center pb-10">
            <div className="flex flex-col lg:flex-row justify-center flex-wrap xl:flex-nowrap">
              {featuresDataFirtstRow2.map((feature, index) => (
                <FeatureBox
                  key={index}
                  text={feature.text}
                  text2={feature.text2}
                  number={feature.number}
                  styleText="font-bold max-w-[310px]"
                  styleParagraph="pt-4"
                  flowerColor="white"
                />
              ))}
            </div>
            <div className="flex flex-col lg:flex-row justify-center flex-wrap mt-10">
              {featuresDataSecondRow2.map((feature, index) => (
                <FeatureBox
                  key={index}
                  text={feature.text}
                  text2={feature.text2}
                  number={feature.number}
                  styleText="font-bold max-w-[320px]"
                  flowerColor="white"
                />
              ))}
            </div>
          </div>
          <div className="py-20">
            <div className="text-[128px]">🎁</div>
            <div className="md:text-adaSubtitleThird py-3 px-10 bg-ada-pink2 font-bold max-w-fit mx-auto mb-20">
              BONUSY:
            </div>
            <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-[30px] flex-wrap">
              {bonusDataFirtRow.map((feature, index) => (
                <BonusBox
                  key={index}
                  text={feature.text}
                  text2={feature.text2}
                  image={feature.image}
                />
              ))}
            </div>
            <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-[50px] flex-wrap">
              {bonusDataSecondRow.map((feature, index) => (
                <BonusBox
                  key={index}
                  text={feature.text}
                  text2={feature.text2}
                  image={feature.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default MastermindSteps
