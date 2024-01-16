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
  "przeanalizowanymi statystykami z Twojego profilu/menedżera reklam (jeśli z nich korzystałaś w 2023 roku) - nawet jesli myślisz, że jesteś nietechniczna 👩‍💻",
  "poczuciem, że wiesz co działało, rozwijasz to i skalujesz w 2024 🎆",
  "zaplanowanym lejkiem reklam na 2024 rok ✨",
  "co najmniej 10 pomysłami na kreacje do przetestowania w reklamach! 😎",
]

const MasterclassAgenda = (): JSX.Element => {
  return (
    <div
      className="w-full flex flex-col px-3 pb-2 items-center mb-[85px]"
      id="prowadze-wlasny-biznes"
    >
      <h3 className="md:text-adaSubtitleSecondary font-semibold pb-10 max-w-[1085px] text-center">
        Gdy w zeszłym roku prowadziłam rekrutację do programu mentoringowego,
        słyszałam:{" "}
      </h3>
      <ul className="flex flex-wrap gap-[10px] max-w-[1200px] mx-auto justify-center mb-10">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center md:flex-row max-w-[480px] md:min-w-[480px] md:text-adaBase"
          >
            <div className="animate-spin-slow">
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
      <h3 className="md:text-adaSubtitleSecondary pb-10 max-w-[940px] text-center">
        I własnie dla takich osób (kto wie, może wśród nich jesteś Ty?)
        przygotowałam{" "}
        <span className="font-bold">
          2-godzinny warsztat strategiczno-reklamowy,
        </span>{" "}
        po którym wyjdziesz z:{" "}
      </h3>
      <ul>
        {listItems2.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row gap-2 items-center px-2 max-w-[800px] md:text-adaBase"
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
