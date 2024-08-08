import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import BuyChillButton from "components/BuyChillButton"

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

const listItems3 = [
  "zaplanować kampanie reklamowe na wakacje",
  "wykorzystać automatyzację w reklamach i oszczędzać czas",
]

const listItems3A = (
  <>
    krok po kroku ustawić 3 typy kampanii reklamowych:
    <br />- z wykorzystaniem bezpłatnego narzędzia Make,
    <br />- budujące stabilną i kaloryczną listę mailingową,
    <br />- sprzedażowe: remarketingowe!
  </>
)

const listItems4 = [
  "nie masz czasu na długie spotkania i miesiące nauki,",
  "chcesz spróbować czy reklamy to coś dla Ciebie bez wydawania na start dużego budżetu,",
  "czujesz, że wiesz jeszcze zbyt mało o reklamach,",
  "ustawiałaś już pierwsze kampanie reklamowe i czujesz, że nadszedł czas na bardziej skomplikowane działania,",
  "potrzebujesz dokładnej instrukcji od podstaw i pokazania, w co i gdzie kliknąć,",
]

const listItems5 = [
  "chcesz nauczyć się, jak krok po kroku ustawiać i optymalizować kampanie reklamowe na Facebooku i Instagramie i dzięki nim skutecznie pozyskiwać klientów,",
  "lubisz optymalizować swoją pracę, pracować mniej i mądrzej i w ten sposób chcesz prowadzić reklamy,",
  "chcesz uczyć się online, w dowolnym miejscu i czasie,",
  "masz dość teoretycznych kursów — chcesz poznać praktykę i szybko zacząć dzięki niej zarabiać,",
  "traktujesz udział w masterclassach jako inwestycję w rozwój i pieniądze.",
]

const listItems6 = [
  "Zdobędziesz konkretną wiedzę o reklamach z instrukcją krok po kroku i wskazaniem palcem co i jak.",
  "Dostajesz możliwość odtworzenia nagrania w dowolnym czasie.",
  "Korzystasz z masterclassów przez 12 miesięcy tyle razy, ile potrzebujesz.",
  "Nauczysz się ustawiać kampanie reklamowe od podstaw — nawet jeśli jeszcze nigdy tego nie robiłaś.",
]

const plusBasicList = [
  <p>
    Masterclassu
    <span className="font-bold"> „Ustaw reklamę na listę mailingową”</span>
  </p>,
  <p>
    Masterclassu
    <span className="font-bold"> „Ułatw sobie reklamy z automatyzacją”</span>
  </p>,
  <p>
    Masterclassu<span className="font-bold"> „Ustaw reklamę na sprzedaż”</span>
  </p>,
  <p className="font-bold">Grupy na Facebooku</p>,
]

const minusBasicList = [
  "Sesja Q&A na żywo",
  "Konsultacja 1:1 na Google Meets (60 minut)",
]

const plusVIPList = [
  "Dostęp do masterclassu „Ułatw sobie reklamy z automatyzacją”",
  "Dostęp do masterclassu „Ustaw reklamę na listę mailingową”",
  "Dostęp do masterclassu „Ustaw reklamę na sprzedaż”",
  "Dostęp do grupy na Facebooku",
  "Sesja Q&A na żywo",
  "Konsultacja 1:1 na Google Meets (60 minut) o wartości 650 złotych",
]

const MasterclassAgenda = ({ version }: { version: number }): JSX.Element => {
  return (
    <>
      {version === 1 && (
        <div
          className="w-full flex flex-col px-3 pb-2 items-center mb-[85px]"
          id="prowadze-wlasny-biznes"
        >
          <h3 className="md:text-adaSubtitleSecondary font-semibold pb-10 max-w-[1085px] text-center">
            Gdy w zeszłym roku prowadziłam rekrutację do programu
            mentoringowego, słyszałam:{" "}
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
                    placeholder="blurred"
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
                className="flex flex-row gap-2 items-center px-2 max-w-[800px] md:text-adaBase"
              >
                <div>
                  <StaticImage
                    src={"../../images/check.svg"}
                    alt="Ada Promis"
                    placeholder="blurred"
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
      )}
      {version === 2 && (
        <div
          className="w-full flex flex-col px-3 pb-2 items-center md:pt-12"
          id="dlaczego"
        >
          <div className="flex flex-col md:flex-row md:gap-20">
            <div className="max-w-[780px]">
              <h2 className="text-adaStandard lg:text-adaSubtitleSecondary uppercase font-bold bg-ada-pink2 shadow-xl lg:max-w-[640px] px-8 py-4 md:h-[84px] mx-auto flex items-center justify-center">
                Dlaczego ADSY&CHILL?
              </h2>
              <p className="pt-6 text-adaMin md:text-adaDesc">
                Przygotowałam ten produkt z myślą o przedsiębiorczyniach i
                freelancerkach, które chcą zbudować stabilny proces pozyskiwania
                klientów dzięki reklamom.
                <br />
                Wiem, że dobrze przygotowane kampanie reklamowe zarabiają prawie
                same.
              </p>
              <p className="pt-6 text-adaMin md:text-adaDesc">
                W tym czasie Ty możesz chillować tak, jak lubisz. <br />
                <span className="font-bold">
                  W końcu nie po to rzucałaś etat, aby spędzać 8 godzin dziennie
                  przy komputerze, prawda? 🙂
                </span>
              </p>
            </div>
            <div className="md:mt-[-220px] md:mr-[-300px]">
              <StaticImage
                loading="eager"
                src={"../../images/chill2.webp"}
                alt="Ada Promis - chill"
                width={466}
                height={721}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>

          <div>
            <h2 className="text-adaMin lg:text-adaSubtitleSecondary uppercase font-bold bg-ada-pink2 shadow-xl lg:max-w-[740px] px-8 py-4 md:h-[84px] mx-auto flex items-center justify-center">
              MASTERCLASSY ADSY&CHILL
            </h2>
            <p className="text-center text-adaMin md:text-adaDesc pt-4">
              to niezawodny sposób na wejście w świat kampanii <br />
              reklamowych. <span className="font-bold">Dowiesz się jak:</span>
            </p>
            <ul className="flex flex-col md:flex-row">
              <div className="flex flex-col gap-[10px] mx-auto justify-center mb-10 pt-4">
                {listItems3.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center md:flex-row max-w-[480px] text-adaMin md:text-adaDesc"
                  >
                    <div className="animate-spin-slow">
                      <StaticImage
                        src={"../../images/flower-blue.svg"}
                        alt="Ada Promis"
                        placeholder="blurred"
                        width={80}
                        height={80}
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    {item}
                  </li>
                ))}
              </div>
              <li className="flex flex-col items-center md:items-start md:flex-row max-w-[480px] md:min-w-[580px] text-adaMin md:text-adaDesc pt-10 mb-8">
                <div className="animate-spin-slow">
                  <StaticImage
                    src={"../../images/flower-blue.svg"}
                    alt="Ada Promis"
                    placeholder="blurred"
                    width={80}
                    height={80}
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>{" "}
                {listItems3A}
              </li>
            </ul>
          </div>
          <h3 className="text-adaMin md:text-adaSubtitle font-bold uppercase mx-auto max-w-[600px] text-center">
            Przeprowadzę Cię przez proces krok po kroku. To jak:{" "}
            <span className="text-ada-yellow">działamy i czilujemy?</span>
          </h3>
          <Button
            type="button"
            text={
              <span className="font-extrabold uppercase">Chcę ADSY&CHILL!</span>
            }
            textSize="text-adaSubtitle"
            btnStyle="md:w-[410px] md:h-[90px] bg-ada-pink2 my-10 mx-auto"
            sectionId="pricing"
          />
        </div>
      )}
      {version === 3 && (
        <div
          className="w-full flex flex-col px-3 pb-2 items-center mb-5 pt-4 md:pt-12"
          id="dlaczego"
        >
          <h2 className="text-adaStandard lg:text-adaSubtitleSecondary pb-10 text-center">
            <span className="font-bold">Adsy&chill</span> to idealna opcja dla
            Ciebie, jeśli:
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between mx-auto">
            <ul className="flex flex-wrap gap-[10px] mx-auto mb-10">
              {listItems4.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-start max-w-[680px] xl:min-w-[480px] text-adaMin md:text-adaDesc"
                >
                  <div className="mr-2">
                    <StaticImage
                      src={"../../images/check.svg"}
                      alt="Ada Promis"
                      placeholder="blurred"
                      width={44}
                      height={46}
                      style={{ width: "44px", height: "46px" }}
                    />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-[10px] max-w-[800px] mx-auto mb-10">
              {listItems5.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-start max-w-[680px] xl:min-w-[480px] text-adaMin md:text-adaDesc"
                >
                  <div className="mr-2">
                    <StaticImage
                      src={"../../images/check.svg"}
                      alt="Ada Promis"
                      placeholder="blurred"
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
        </div>
      )}
      {version === 4 && (
        <div
          className="w-full flex flex-col px-3 py-2 items-center mb-5 md:pt-12"
          id="pricing"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="max-w-[560px] flex flex-col">
              <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary py-5 px-10 text-center font-bold mb-4">
                Co dostaniesz <br /> w Adsy&Chill?
              </h2>
              <h3 className="text-adaMin md:text-adaBase lg:text-adaSubtitle py-5">
                Dostęp do:
              </h3>
              <ul className="flex flex-col gap-[10px] mx-auto mb-6">
                {plusBasicList.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row text-adaMin md:text-adaStandard"
                  >
                    <div className="mr-2">✅</div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-center font-bold text-adaBase pt-4">
                Cena: 597 zł
              </p>
              <div className="flex justify-center">
                <BuyChillButton />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary pt-10 pb-10 font-bold text-center">
              Dlaczego jeszcze warto dołączyć?
            </h2>
            <ul className="flex flex-col gap-[10px] mx-auto mb-10">
              {listItems6.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center max-w-[880px] xl:min-w-[880px] text-adaMin md:text-adaDesc"
                >
                  <div className="mr-2">
                    <StaticImage
                      src={"../../images/check.svg"}
                      alt="Ada Promis"
                      placeholder="blurred"
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
        </div>
      )}
    </>
  )
}

export default MasterclassAgenda
