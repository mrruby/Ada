import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import BuyChillButton from "components/BuyChillButton"
import CountdownTimer from "helpers/CountdownTimer"

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

const listItems7 = [
  "Zdobędziesz wiedzę i umiejętności, które zwrócą Ci się wielokrotnie w Twoim biznesie",
  "Nauczysz się przyciągać klientów na Twoje social media, webinary i listy e-mail na zawołanie",
  "Wreszcie napełnisz swoje lejki marketingowe odpowiednimi klientami",
]

const listItems8 = [
  "Przestaniesz mówić wciąż do tych samych osób, Twoje świetnie ustawione reklamy będą docierać do nowych potencjalnych klientów",
  "Będziesz spokojna, że Twoje pieniądze zainwestowane w reklamę pracują na siebie, nawet gdy śpisz",
  "Przestaniesz się frustrować przepalonym budżetem",
]

const listItems9 = [
  <p>
    <span className="font-bold">podkręcisz wyniki swojego biznesu</span> i
    nauczysz się docierać do osób zainteresowanych ofertą, którą reklamujesz
  </p>,
  <p>
    <span className="font-bold">
      stworzysz bardziej zaawansowane kampanie reklamowe
    </span>{" "}
    i dowiesz się, jak je optymalizować, aby — a jakże! — zarabiać więcej
  </p>,
  <p>
    wybierzesz najlepsze materiały do reklam
    <span className="font-bold">
      {" "}
      — stworzysz chwytliwe grafiki i błyskotliwe teksty reklamowe
    </span>
  </p>,
]

const listItems10 = [
  <p>
    <span className="font-bold">zrozumiesz ścieżkę Twojego klienta</span> i
    dowiesz się, co zrobić, jeśli kampanie nie działają
  </p>,
  <p>
    zderzysz swoje wątpliwości z osobami, które mają podobne problemy w
    zdobywaniu nowych klientów i przekonasz się, że{" "}
    <span className="font-bold">rozwiązanie jest bliżej niż myślisz </span>—
    wystarczy wiedzieć, gdzie go szukać!
  </p>,
]

const plusListItems1 = [
  <p>
    <span className="font-bold">Twoje cele w kampaniach reklamowych to:</span>{" "}
    pozyskanie obserwujących, zbudowanie listy newsletterowej, sprzedaż
    produktów i usług
  </p>,
  <p>
    zależy Ci na <span className="font-bold">osiąganiu lepszych wyników</span>{" "}
    dzięki kampaniom reklamowym
  </p>,
  <p>
    chcesz{" "}
    <span className="font-bold">
      rozwijać swoją wiedzę, umiejętności i biznes
    </span>
  </p>,
  <p>
    <span className="font-bold">
      skuteczny marketing to patrzenie na liczby + kreatywna głowa
    </span>{" "}
    i chcesz działać w ten sposób
  </p>,
]

const plusListItems2 = [
  <p>
    <span className="font-bold">
      możesz regularnie przeznaczyć czas na kampanie
    </span>{" "}
    — zdajesz sobie sprawę, że tutaj nie wystarczy zerknięcie z doskoku
  </p>,
  <p>
    <span className="font-bold">znasz podstawową obsługę Managera reklam</span>{" "}
    — nie musisz wyklikiwać kampanii z zamkniętymi oczami, ale wiedza, gdzie
    kliknąć, aby ustawić kampanię i stworzyć zestaw reklam to must have
  </p>,
  <p>
    <span className="font-bold">
      jesteś gotowa na pracę, testowanie, analizę, modyfikacje, świętowanie
    </span>{" "}
    (tak, na to też przyjdzie czas, gdy zobaczysz rosnące wyniki)
  </p>,
  <p>
    <span className="font-bold">nie chcesz lub nie masz budżetu,</span> aby
    zlecić kampanie reklamowe agencji lub freelancerowi
  </p>,
]

const minusListItems1 = [
  <p>
    masz nadzieję, że
    <span className="font-bold"> wyniki zrobią się „same” </span>w menadżerze
    reklam
  </p>,
  <p>
    <span className="font-bold">nie masz czasu</span> na regularną pracę nad
    kampaniami, przygotowywanie materiałów i optymalizację
  </p>,
  <p>
    <span className="font-bold">
      myślisz, że 100 zł wrzucone do Managera Reklam wystarczy
    </span>{" "}
    Niestety, to za mało — minimalny budżet, przy którym zbudujesz lejek i Twoje
    możliwości finansowe omówimy na wirtualnej kawce
  </p>,
]

const minusListItems2 = [
  <p>
    wiesz, że<span className="font-bold"> Ty wszystko zrobisz najlepiej</span> j
    i nie interesują Cię inne perspektywy
  </p>,
  <p>
    <span className="font-bold">
      nigdy nie widziałaś na oczy menadżera reklam,
    </span>{" "}
    albo słyszysz o nim pierwszy raz - w takim wypadku proponuję, abyś
    najbliższe miesiące spędziła na przeklikaniu się przez system i dołączyła do
    kolejnej edycji
  </p>,
  <p>
    jesteś super wymiataczką{" "}
    <span className="font-bold">
      — tworzysz kampanie z ROAS-em 20 i wiesz, że ogarniasz. Brawo!
    </span>
  </p>,
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

const pakietStartList = [
  "6 szkoleń video",
  "16h office Hours",
  "8 spotkań ustawianie kampanii na żywo",
  "Szkolenie: „Hot Jar + strona”",
  "Poradnik: „Canva - tips & tricks”",
  "E-book „Dobre praktyki na Instagramie”",
  "E-book „Jak tworzyć materiały reklamowe dla branży beauty?”",
  "E-book „Slow Marketing a reklama na Facebooku i Instagramie”",
  "Społeczność",
]

const pakietStandardList = [
  "6 szkoleń video",
  "16h office Hours",
  "8 spotkań ustawianie kampanii na żywo",
  "Szkolenie: „Hot Jar + strona”",
  "Poradnik: „Canva - tips & tricks”",
  "E-book „Dobre praktyki na Instagramie”",
  "E-book „Jak tworzyć materiały reklamowe dla branży beauty?”",
  "E-book „Slow Marketing a reklama na Facebooku i Instagramie”",
  "Społeczność",
  "Certyfikat",
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

const MasterclassAgenda = ({
  version,
  endsAt,
}: {
  version: number
  endsAt?: string | null
}): JSX.Element => {
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
          {endsAt && (
            <div className="flex flex-col items-center pt-10">
              <CountdownTimer
                text="Skorzystaj z oferty specjalnej przez"
                targetDate={new Date(endsAt)}
              />
            </div>
          )}
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
                Cena:{" "}
                {endsAt && (
                  <>
                    <span className="line-through">597 zł</span>{" "}
                  </>
                )}
                <span className={endsAt ? "text-adaSubtitle" : ""}>
                  {endsAt ? "497 zł" : "597 zł"}
                </span>
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
      {version === 5 && (
        <div
          className="w-full flex flex-col px-3 pb-2 items-center mb-5 pt-4 md:pt-12 text-ada-black"
          id="dlaczego"
        >
          <div className="flex flex-col md:flex-row items-start justify-between mx-auto">
            <ul className="flex flex-wrap gap-[10px] mx-auto mb-10">
              {listItems7.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-start max-w-[680px] xl:min-w-[480px] text-adaMin md:text-adaDesc"
                >
                  <div className="mr-2">✅</div>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-[10px] max-w-[800px] mx-auto mb-10">
              {listItems8.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-start max-w-[680px] xl:min-w-[480px] text-adaMin md:text-adaDesc"
                >
                  <div className="mr-2">✅</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="text-adaStandard lg:text-adaSubtitleSecondary pb-10 font-bold uppercase text-center">
            ...abyś lepiej niż kiedykolwiek zadbała o swój biznes i przepływ
            klientów!
          </h2>
        </div>
      )}
      {version === 6 && (
        <div className="w-full flex flex-col px-3 pb-2 items-center mb-5 pt-4 md:pt-12 text-ada-black">
          <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center text-ada-brown lg:mb- animate-bounce uppercase pb-10">
            Program jest <br /> dla Ciebie, jeśli…
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between mx-auto">
            <ul className="flex flex-wrap gap-[10px] mx-auto mb-10">
              {plusListItems1.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-start max-w-[640px] xl:min-w-[400px] text-adaMin md:text-adaDesc"
                >
                  <div className="mr-3">
                    <StaticImage
                      src={"../../images/plus.svg"}
                      alt="Ada Promis"
                      placeholder="blurred"
                      width={61}
                      height={61}
                      style={{ width: "61px", height: "61px" }}
                    />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-[10px] max-w-[800px] mx-auto mb-10">
              {plusListItems2.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-start max-w-[640px] xl:min-w-[400px] text-adaMin md:text-adaDesc"
                >
                  <div className="mr-5">
                    <StaticImage
                      src={"../../images/plus.svg"}
                      alt="Ada Promis"
                      placeholder="blurred"
                      width={61}
                      height={61}
                      style={{ width: "61px", height: "61px" }}
                    />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {version === 7 && (
        <div className="w-full flex flex-col px-3 pb-2 items-center mb-5 pt-4 md:pt-12 text-ada-black">
          <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center text-ada-brown lg:mb- animate-bounce uppercase pb-10">
            NIE jest dla Ciebie, jeśli…
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between mx-auto">
            <ul className="flex flex-wrap gap-[10px] mx-auto mb-10">
              {minusListItems1.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-start max-w-[640px] xl:min-w-[400px] text-adaMin md:text-adaDesc"
                >
                  <div className="mr-3">
                    <StaticImage
                      src={"../../images/minus.svg"}
                      alt="Ada Promis"
                      placeholder="blurred"
                      width={59}
                      height={61}
                      style={{ width: "59px", height: "61px" }}
                    />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-[10px] max-w-[800px] mx-auto mb-10">
              {minusListItems2.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-start max-w-[640px] xl:min-w-[400px] text-adaMin md:text-adaDesc"
                >
                  <div className="mr-3">
                    <StaticImage
                      src={"../../images/minus.svg"}
                      alt="Ada Promis"
                      placeholder="blurred"
                      width={59}
                      height={61}
                      style={{ width: "59px", height: "61px" }}
                    />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {version === 8 && (
        <div className="w-full flex flex-col px-3 pb-2 items-center mb-5 pt-4 md:pt-12 text-ada-black">
          <div className="flex flex-col md:flex-row items-start justify-between mx-auto">
            <ul className="flex flex-wrap gap-[10px] mx-auto mb-10">
              {listItems9.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-start max-w-[760px] xl:min-w-[400px] text-adaMin md:text-adaDesc"
                >
                  <div className="mr-3">
                    <StaticImage
                      src={"../../images/check2.svg"}
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
              {listItems10.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-start max-w-[760px] xl:min-w-[400px] text-adaMin md:text-adaDesc"
                >
                  <div className="mr-3">
                    <StaticImage
                      src={"../../images/check2.svg"}
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
          <div className="w-full pb-14 flex flex-col items-center">
            <h3 className="md:text-adaSubtitle py-3 px-10 font-bold mx-auto mb-14 max-w-[600px] text-ada-black text-center">
              TAK mówią osoby, które uczyłam prowadzenia reklam:
            </h3>
            <div className="flex flex-col w-full gap-4 mb-16">
              <div className="flex flex-col md:flex-row w-full gap-4">
                {[
                  {
                    src: "Z1kNvVbH0Fo?si=Cy50UinrlhTXrsrt",
                    title: "Opinia Darii",
                  },
                  {
                    src: "7lzW5EFaw0s?si=Wth13qSXVyTrqDwp",
                    title: "Opinia Izy",
                  },
                  {
                    src: "Sn_ABVhbia0?si=w0U17jQsCyyrq15e",
                    title: "Opinia Emili",
                  },
                  {
                    src: "nLC4Ak_uQNA?si=AcsToMv-vdQsw3jd",
                    title: "Opinia Ani",
                  },
                  {
                    src: "JCRyTa6yyj8?si=37-xABtP7b0ufhWY",
                    title: "Opinia Pauliny",
                  },
                ].map((video, index) => (
                  <div key={index} className="w-full md:w-1/5">
                    <div className="relative pb-[177.78%] h-0 overflow-hidden max-w-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.src}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full md:w-full md:h-full sm:w-3/4 sm:h-3/4"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="md:text-adaSubtitle py-3 px-10 font-bold mx-auto mb-14 max-w-[710px] text-ada-black text-center">
              To jak, dołączasz do programu „Ogarnij swoje adsy!” i robisz krok
              w stronę zdobywania nowych klientów dzięki kampaniom reklamowym?
            </h3>
            <Button
              type="button"
              text={<span className="font-bold">Chcę dołączyć!</span>}
              sectionId="offert"
              textSize="text-adaMin md:text-adaSubtitleThird"
              btnStyle="uppercase w-[187px] md:w-[490px] bg-ada-orange text-ada-white md:tracking-[2.90px] md:h-[100px] shadow-xl"
            />
          </div>
        </div>
      )}
      {version === 9 && (
        <div
          className="w-full flex flex-col px-3 py-2 items-center mb-3 md:mb-[300px] md:pt-12"
          id="offert"
        >
          <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center text-ada-brown animate-bounce uppercase pb-2">
            Jak dołączyć?
          </h2>
          <h3 className="text-adaDesc font-bold text-center text-ada-brown animate-bounce uppercase pb-10">
            Wybierz dla siebie pakiet uczestnictwa, który najbardziej Ci
            odpowiada:
          </h3>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:flex-row gap-10 text-ada-black">
              <div className="max-w-[415px] flex flex-col">
                <h3 className="text-adaMin md:text-adaBase lg:text-adaSubtitle uppercase w-full text-center font-bold border-black border-[1px] bg-ada-orange2 py-2">
                  Pakiet <br />
                  start
                </h3>
                <ul className="flex flex-col gap-[10px] mx-auto my-2 p-5 border-black border-[1px] bg-ada-orange2">
                  {pakietStartList.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row text-adaMin md:text-adaStandard font-medium"
                    >
                      <div className="mr-2">✅</div>
                      {item}
                    </li>
                  ))}
                  <li className="flex flex-row text-adaMin md:text-adaStandard font-medium">
                    <span className="mr-2">❌</span>Certyfikat
                  </li>
                  <li className="flex flex-row text-adaMin md:text-adaStandard font-medium">
                    <span className="mr-2">❌</span>KONSULTACJE 1:1
                  </li>
                </ul>
                <p className="text-center font-bold text-adaMin md:text-adaStandard uppercase p-2 border-black border-[1px] bg-ada-orange2">
                  2700 zł netto <br />
                  <span className="font-medium">
                    Płatność w ratach: <br />
                  </span>
                  4 x 675 zł netto
                </p>
                <Button
                  type="button"
                  text={<span className="font-bold">Chcę dołączyć!</span>}
                  url="https://koalendar.com/e/ogarnij-swoje-adsy"
                  textSize="text-adaMin md:text-adaBase"
                  btnStyle="uppercase text-ada-black w-full md:tracking-[2.90px] bg-ada-orange3 my-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 text-ada-black relative">
              <div className="max-w-[415px] flex flex-col md:mx-8">
                <div className="text-adaMin md:text-adaBase lg:text-adaSubtitle uppercase w-full text-center font-bold border-black border-[1px] bg-ada-yellow2 py-2 ">
                  <span className="text-ada-orange text-adaMin md:text-adaStandard">
                    Najkorzystniejsza cena
                  </span>
                  <br />
                  <h3>
                    Pakiet <br />
                    Standard
                  </h3>
                  <div className="absolute -top-4 left-0">
                    <StaticImage
                      src="../../images/sunflower.svg"
                      alt="Sunflower"
                      placeholder="blurred"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="absolute -top-4 right-0">
                    <StaticImage
                      src="../../images/sunflower.svg"
                      alt="Sunflower"
                      placeholder="blurred"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <ul className="flex flex-col gap-[10px] mx-auto my-2 p-5 border-black border-[1px] bg-ada-yellow2">
                  {pakietStandardList.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row text-adaMin md:text-adaStandard font-medium"
                    >
                      <div className="mr-2">✅</div>
                      {item}
                    </li>
                  ))}
                  <li className="flex flex-row text-adaMin md:text-adaStandard font-medium">
                    <span className="mr-2 text-adaDesc font-bold">2</span>
                    KONSULTACJE 1:1 
                  </li>
                </ul>
                <p className="text-center font-bold text-adaMin md:text-adaStandard uppercase p-2 border-black border-[1px] bg-ada-yellow2">
                  3000 zł netto <br />
                  <span className="font-medium">
                    Płatność w ratach: <br />
                  </span>
                  4 x 750 zł netto
                </p>
                <Button
                  type="button"
                  text={<span className="font-bold">Chcę dołączyć!</span>}
                  url="https://koalendar.com/e/ogarnij-swoje-adsy"
                  textSize="text-adaMin md:text-adaBase"
                  btnStyle="uppercase text-ada-black w-full md:tracking-[2.90px] bg-ada-orange my-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 text-ada-black">
              <div className="max-w-[415px] flex flex-col">
                <h3 className="text-adaMin md:text-adaBase lg:text-adaSubtitle uppercase w-full text-center font-bold border-black border-[1px] bg-ada-orange2">
                  Pakiet <br />
                  VIP
                </h3>
                <ul className="flex flex-col gap-[10px] mx-auto my-2 p-5 border-black border-[1px] bg-ada-orange2">
                  {pakietStandardList.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row text-adaMin md:text-adaStandard font-medium"
                    >
                      <div className="mr-2">✅</div>
                      {item}
                    </li>
                  ))}
                  <li className="flex flex-row text-adaMin md:text-adaStandard font-medium">
                    <span className="mr-2 text-adaDesc font-bold">4</span>
                    KONSULTACJE 1:1 
                  </li>
                </ul>
                <p className="text-center font-bold text-adaMin md:text-adaStandard uppercase p-2 border-black border-[1px] bg-ada-orange2">
                  4000 zł netto <br />
                  <span className="font-medium">
                    Płatność w ratach: <br />
                  </span>
                  4 x 1000 zł netto
                </p>
                <Button
                  type="button"
                  text={<span className="font-bold">Chcę dołączyć!</span>}
                  url="https://koalendar.com/e/ogarnij-swoje-adsy"
                  textSize="text-adaMin md:text-adaBase"
                  btnStyle="uppercase text-ada-black w-full md:tracking-[2.90px] bg-ada-orange3 my-2"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MasterclassAgenda
