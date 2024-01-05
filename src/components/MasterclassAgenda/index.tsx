import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const listItems = [
  "Ada, ile czasu muszę przeznaczyć na udział w 3-miesięcznym programie?",
  "Chciałabym wziąć udział, ale na razie mnie nie stać?",
  "Nie wiem, czy wiem wystarczająco dużo o reklamach?",
  "Nie wiem, czy dam sobie radę?",
  "Czy to się zwróci?",
  "Gdy zamknęłam drzwi do programu, pojawiały się głosy: już koniec zapisów? Czy mogę jeszcze dołączyć?",
]

const listItems2 = [
  "przeanalizujemy statystyki z Twojego profilu lub wyniki z menadżera reklam z 2023 roku (jeśli korzystasz z płatnych reklam)",
  "sprawdzimy, co u Ciebie działa, a co nie do końca",
  "zaplanujemy lejek marketingowy na działania w 2024 roku w reklamach",
  "wymyślimy co najmniej 10 kreacji do przetestowania w kampaniach",
]

const MasterclassAgenda = (): JSX.Element => {
  return (
    <div
      className="w-full flex flex-col px-3 py-2 items-center pt-16 mb-[85px]"
      id="prowadze-wlasny-biznes"
    >
      <h3 className="md:text-adaSubtitleSecondary font-semibold pb-10 max-w-[1085px] text-center">
        Gdy w zeszłym roku prowadziłam rekrutację do programu mentoringowego,
        słyszałam:{" "}
      </h3>
      <ul className="flex flex-wrap gap-[50px] max-w-[1200px] mx-auto justify-center">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="mb-5 flex flex-col items-center md:flex-row max-w-[560px] md:min-w-[560px]"
          >
            <div>
              <StaticImage
                src={"../../images/flower-blue.svg"}
                alt="Ada Promis"
                placeholder="none"
                width={80}
                height={80}
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            {item}
          </li>
        ))}
      </ul>
      <StaticImage
        src={"../../images/screen-mastermind.webp"}
        alt="Ada Promis"
        placeholder="none"
        width={1023}
        height={684}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
      <h3 className="md:text-adaSubtitleSecondary pb-10 max-w-[940px] text-center">
        I właśnie dla takich osób (kto wie, może wśród nich jesteś Ty?)
        przygotowałam{" "}
        <span className="font-bold">
          2-godzinny warsztat strategiczno-reklamowy,
        </span>{" "}
        na którym:
      </h3>
      <ul>
        {listItems2.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row gap-2 items-center px-2"
          >
            <div>
              <StaticImage
                src={"../../images/check.svg"}
                alt="Ada Promis"
                placeholder="none"
                width={44}
                height={46}
                style={{ width: "44px", height: "46px" }}
              />
            </div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MasterclassAgenda
