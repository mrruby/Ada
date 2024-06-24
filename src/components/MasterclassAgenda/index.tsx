import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"

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
  "wykorzystać znane ‘hot’ narzędzie, które jest na topie i na pewno Ty też widzisz je wszędzie",
  "krok po kroku ustawić 3 typy kampanii reklamowych: z wykorzystaniem manychata, na budowanie listy mailingowej, remarketingowe & sprzedażowe",
]

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
  "Nauczysz się ustawiać kampanie reklamowe od podstaw — nawet jeśli jeszcze nigdy tego nie robiłaś.,",
  "To najniższa możliwa cena. W sprzedaży regularnej dostęp do jednego masterclassu będzie kosztował 199 złotych. Nigdy nie będzie taniej niż teraz.",
  "Tylko teraz dostajesz dostęp do Q&A na żywo.",
]

const plusBasicList = [
  "Dostęp do masterclassu „Ustaw reklamę z manychatem“",
  "Dostęp do masterclassu „Ustaw reklamę na listę mailingową”",
  "Dostęp do masterclassu „Ustaw reklamę na sprzedaż”",
  "Dostęp do grupy na Facebooku",
]
const minusBasicList = [
  "Sesja Q&A na żywo",
  "Konsultacja 1:1 na Google Meets (60 minut) o wartości 650 złotych",
]

const plusVIPList = [
  "Dostęp do masterclassu „Ustaw reklamę z manychatem“",
  "Dostęp do masterclassu „Ustaw reklamę na listę mailingową”",
  "Dostęp do masterclassu „Ustaw reklamę na sprzedaż””",
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
      )}
      {version === 2 && (
        <div
          className="w-full flex flex-col px-3 pb-2 items-center mb-[40px] md:pt-12"
          id="dlaczego"
        >
          <div className="flex flex-col md:flex-row md:gap-20">
            <div className="max-w-[780px]">
              <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary uppercase font-bold bg-ada-pink2 shadow-xl lg:max-w-[640px] px-8 h-[84px] mx-auto flex items-center justify-center">
                Dlaczego ADSY&CHILL?
              </h2>
              <p className="pt-6 md:text-adaDesc">
                Przygotowałam ten produkt z myślą o przedsiębiorczyniach i
                freelancerkach, które chcą zbudować stabilny proces pozyskiwania
                klientów dzięki reklamom. Wiem, że dobrze przygotowane kampanie
                reklamowe zarabiają prawie same.
              </p>
              <p className="pt-6 md:text-adaDesc">
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
                placeholder="none"
                width={466}
                height={721}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>

          <div>
            <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary uppercase font-bold bg-ada-pink2 shadow-xl lg:max-w-[740px] px-8 h-[84px] mx-auto flex items-center justify-center">
              MASTERCLASSY ADSY&CHILL
            </h2>
            <p className="text-center md:text-adaDesc pt-4">
              to niezawodny sposób na wejście w świat kampanii <br />
              reklamowych. <span className="font-bold">Dowiesz się jak:</span>
            </p>
            <ul className="flex flex-wrap gap-[10px] max-w-[1200px] mx-auto justify-center mb-10 pt-4">
              {listItems3.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center md:flex-row max-w-[480px] md:min-w-[480px] md:text-adaDesc"
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
          </div>
          <h3 className="md:text-adaSubtitle font-bold uppercase mx-auto max-w-[600px] text-center">
            To jak, wchodzisz do gry po{" "}
            <span className="text-ada-purple">nowych klientów,</span> których
            zdobędziesz dzięki reklamom?
          </h3>
          <Button
            type="button"
            text={<span className="font-bold uppercase">Chcę ADSY&CHILL!</span>}
            textSize="md:text-adaSubtitle"
            btnStyle="md:w-[410px] md:h-[90px] bg-ada-pink2 my-10 mx-auto"
            sectionId="zostaw-maila"
          />
        </div>
      )}
      {version === 3 && (
        <div
          className="w-full flex flex-col px-3 pb-2 items-center mb-5 md:pt-12"
          id="dlaczego"
        >
          <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary pb-10">
            <span className="font-bold">Adsy&chill</span> to idealna opcja dla
            Ciebie, jeśli:
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between mx-auto">
            <ul className="flex flex-wrap gap-[10px] mx-auto mb-10">
              {listItems4.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center md:flex-row max-w-[680px] xl:min-w-[480px] md:text-adaDesc"
                >
                  <div className="mr-2">
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
            <ul className="flex flex-wrap gap-[10px] max-w-[800px] mx-auto mb-10">
              {listItems5.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center md:flex-row max-w-[680px] xl:min-w-[480px] md:text-adaDesc"
                >
                  <div className="mr-2">
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
        </div>
      )}
      {version === 4 && (
        <div
          className="w-full flex flex-col px-3 pb-2 items-center mb-5 md:pt-12"
          id="price"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="max-w-[460px] flex flex-col items-center">
              <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary py-5 px-10 text-center font-bold bg-white mb-4">
                Pakiet BASIC
              </h2>
              <ul className="flex flex-col gap-[10px] mx-auto mb-10">
                {plusBasicList.map((item, index) => (
                  <li key={index} className="flex flex-col md:flex-row">
                    <div className="mr-2">✅</div>
                    {item}
                  </li>
                ))}
                {minusBasicList.map((item, index) => (
                  <li key={index} className="flex flex-col  md:flex-row">
                    <div className="mr-2">❌</div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-center font-bold text-adaBase">Cena: 427 zł</p>
              <Button
                type="button"
                text={<span className="font-bold uppercase">korzystam</span>}
                textSize="md:text-adaSubtitle"
                btnStyle="md:w-[300px] md:h-[60px] bg-ada-pink2 my-10 mx-auto"
                sectionId="zostaw-maila"
              />
            </div>
            <div className="max-w-[460px] flex flex-col items-center relative">
              <div className="absolute left-[40px] top-[-60px]">
                <StaticImage
                  src={"../../images/crown.svg"}
                  alt=""
                  placeholder="none"
                  width={134}
                  height={99}
                  style={{ width: "134px", height: "99px" }}
                />
              </div>
              <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary py-5 px-10 text-center font-bold bg-ada-purple mb-4 text-white">
                Pakiet VIP
              </h2>
              <ul className="flex flex-col gap-[10px] mx-auto mb-10">
                {plusVIPList.map((item, index) => (
                  <li key={index} className="flex flex-col md:flex-row">
                    <div className="mr-2">✅</div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-center font-bold text-adaBase">Cena: 876 zł</p>
              <Button
                type="button"
                text={<span className="font-bold uppercase">korzystam</span>}
                textSize="md:text-adaSubtitle"
                btnStyle="md:w-[300px] md:h-[60px] bg-ada-pink2 my-10 mx-auto"
                sectionId="zostaw-maila"
              />
            </div>
          </div>
          <div>
            <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary pt-10 pb-10 font-bold text-center">
              Dlaczego jeszcze warto dołączyć?
            </h2>
            <ul className="flex flex-col gap-[10px] mx-auto mb-10">
              {listItems5.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center md:flex-row max-w-[880px] xl:min-w-[880px] md:text-adaDesc"
                >
                  <div className="mr-2">
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
        </div>
      )}
    </>
  )
}

export default MasterclassAgenda
