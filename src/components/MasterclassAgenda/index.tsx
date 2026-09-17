import BuyChillButton from "components/BuyChillButton"
import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import OpinionVideos from "components/OpinionVideos"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import CountdownTimer from "helpers/CountdownTimer"
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { responsive } from "values/const"
import Package from "../../helpers/Package"

import Package2 from "helpers/Package2"
import metaAdsZainteresowani from "values/forms/meta-ads-zainteresowani.html"
import ogarnijSwojeAdsyZainteresowani from "values/forms/ogarnij-swoje-adsy-zainteresowani.html"

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
    <br />- dzięki którym zbudujesz dochodową społeczność,
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
  "masz dość teoretycznych kursów, chcesz poznać praktykę i szybko zacząć dzięki niej zarabiać,",
  "traktujesz udział w masterclassach jako inwestycję w rozwój i pieniądze.",
]

const listItems6 = [
  "Zdobędziesz konkretną wiedzę o reklamach z instrukcją krok po kroku i wskazaniem palcem co i jak.",
  "Dostajesz możliwość odtworzenia nagrania w dowolnym czasie.",
  "Korzystasz z masterclassów przez 12 miesięcy tyle razy, ile potrzebujesz.",
  "Nauczysz się ustawiać kampanie reklamowe od podstaw, nawet jeśli jeszcze nigdy tego nie robiłaś.",
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

const plusListItems1 = [
  <p key="goal">
    <span className="font-bold">Twoje cele w kampaniach reklamowych to:</span>{" "}
    pozyskanie obserwujących, zbudowanie listy newsletterowej, sprzedaż
    produktów i usług
  </p>,
  <p key="results">
    zależy Ci na <span className="font-bold">osiąganiu lepszych wyników</span>{" "}
    dzięki kampaniom reklamowym
  </p>,
  <p key="develop">
    chcesz{" "}
    <span className="font-bold">
      rozwijać swoją wiedzę, umiejętności i biznes
    </span>
  </p>,
  <p key="marketing">
    <span className="font-bold">
      skuteczny marketing to patrzenie na liczby + kreatywna głowa
    </span>{" "}
    i chcesz działać w ten sposób
  </p>,
]

const plusListItems2 = [
  <p key="time">
    <span className="font-bold">
      możesz regularnie przeznaczyć czas na kampanie
    </span>
    , zdajesz sobie sprawę, że tutaj nie wystarczy zerknięcie z doskoku
  </p>,
  <p key="knowledge">
    <span className="font-bold">znasz podstawową obsługę Managera reklam</span>,
    nie musisz wyklikiwać kampanii z zamkniętymi oczami, ale wiedza, gdzie
    kliknąć, aby ustawić kampanię i stworzyć zestaw reklam to must have
  </p>,
  <p key="ready">
    <span className="font-bold">
      jesteś gotowa na pracę, testowanie, analizę, modyfikacje, świętowanie
    </span>{" "}
    (tak, na to też przyjdzie czas, gdy zobaczysz rosnące wyniki)
  </p>,
  <p key="budget">
    <span className="font-bold">nie chcesz lub nie masz budżetu,</span> aby
    zlecić kampanie reklamowe agencji lub freelancerowi
  </p>,
]

const minusListItems1 = [
  <p key="hope">
    masz nadzieję, że
    <span className="font-bold"> wyniki zrobią się „same" </span>w menadżerze
    reklam
  </p>,
  <p key="notime">
    <span className="font-bold">nie masz czasu</span> na regularną pracę nad
    kampaniami, przygotowywanie materiałów i optymalizację
  </p>,
  <p key="budget100">
    <span className="font-bold">
      myślisz, że 100 zł wrzucone do Managera Reklam wystarczy
    </span>{" "}
    Niestety, to za mało. Minimalny budżet, przy którym zbudujesz lejek i Twoje
    możliwości finansowe omówimy na wirtualnej kawce
  </p>,
]

const minusListItems2 = [
  <p key="knowbest">
    wiesz, że<span className="font-bold"> Ty wszystko zrobisz najlepiej</span> j
    i nie interesują Cię inne perspektywy
  </p>,
  <p key="never">
    <span className="font-bold">
      nigdy nie widziałaś na oczy menadżera reklam,
    </span>{" "}
    albo słyszysz o nim pierwszy raz - w takim wypadku proponuję, abyś
    najbliższe miesiące spędziła na przeklikaniu się przez system i dołączyła do
    kolejnej edycji
  </p>,
  <p key="expert">
    jesteś super wymiataczką,{" "}
    <span className="font-bold">
      tworzysz kampanie z ROAS-em 20 i wiesz, że ogarniasz. Brawo!
    </span>
  </p>,
]

const plusBasicList = [
  <p key="ig-ads">
    Masterclass{" "}
    <span className="font-bold">
      „Reklamy IG, które budują zaangażowaną społeczność"
    </span>
  </p>,
  <p key="email-list">
    Masterclass{" "}
    <span className="font-bold">„Lista mailowa, która przyciąga klientów"</span>
  </p>,
  <p key="auto-ads">
    Masterclass{" "}
    <span className="font-bold">„Reklamy, które sprzedają na automacie"</span>
  </p>,
]

const masterclassList = [
  <span key="mc-follow">
    <span className="font-bold">
      Masterclass "Wartościowe follow na Instagramie": <br />
    </span>
    przystępne omówienie teorii i przygotowania strategicznego <br />+ nagranie
    krok po kroku w menedżerze reklam
  </span>,
  <span key="mc-mailing">
    <span className="font-bold">
      Masterclass "Kampania, która buduje listę mailingową": <br />
    </span>
    przystępne omówienie teorii i przygotowania strategicznego <br />+ nagranie
    krok po kroku w menedżerze reklam
  </span>,
  <span key="mc-remarketing">
    <span className="font-bold">
      Masterclass "Reklamy remarketingowe, które sprzedają": <br />
    </span>
    przystępne omówienie teorii i przygotowania strategicznego <br />+ nagranie
    krok po kroku w menedżerze reklam
  </span>,
  <span key="bonus-szablony">
    <span className="font-bold">BONUS: gotowe szablony graficzne reklam </span>
    do kampanii na pozyskanie obserwujących, budowanie listy mailowej i sprzedaż
    remarketingową{" "}
  </span>,
  <span key="bonus-lejek">
    <span className="font-bold">BONUS: lejek na urlop, wakacje i święta </span>
    dla e-commerce, usług i produktów cyfrowych{" "}
  </span>,
  <span key="bonus-slowniczek">
    <span className="font-bold">
      BONUS: słowniczek pojęć w menedżerze reklam,{" "}
    </span>
    które ułatwią Ci życie z reklamami{" "}
  </span>,
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
]

const pakieBasicList = [
  "11 szkoleń wideo",
  "18 godzin szkoleń grupowych z tworzenia reklam",
  "warsztaty z pisania tekstów reklamowych i warsztaty z tworzenia grafik",
  "21 spotkań grupowych office hours",
]

const pakietProList = [
  "11 szkoleń wideo",
  "18 godzin szkoleń grupowych z tworzenia reklam",
  "warsztaty z pisania tekstów reklamowych i warsztaty z tworzenia grafik",
  "21 spotkań grupowych office hours",
  "4 x konsultacje 1:1",
  "spotkania mastermind (udział w maksymalnie 4 - osobowych grupach)",
  "certyfikat uczestnictwa",
]

const newlistItems1 = [
  <p key="instruction">
    Otrzymasz konkretną instrukcję krok po kroku ze wskazaniem "co i jak"
  </p>,
  <p key="access">
    Dostęp do nagrań przez 12 miesięcy - oglądasz kiedy chcesz, ile razy
    potrzebujesz
  </p>,
]

const newlistItems2 = [
  <p key="learn">
    Nauczysz się kampanii od podstaw, nawet jeśli dopiero zaczynasz
  </p>,
  <p key="setup">
    Ustawisz kampanie, które poprowadzą klienta od zainteresowania do zakupu
  </p>,
]

const newlistItems3 = [
  <p key="instruction">
    Otrzymasz konkretną instrukcję ustawienia trzech kampanii reklamowych krok
    po kroku
  </p>,
  <p key="access">
    Masz dostęp do nagrań przez 12 miesięcy - oglądasz kiedy chcesz, ile razy
    potrzebujesz
  </p>,
]

const newlistItems4 = [
  <p key="learn">
    W godzinę ustawisz profesjonalną kampanię reklamową - nawet jeśli to Twój
    pierwszy raz
  </p>,
  <p key="setup">
    W trzy godziny stworzysz lejek reklamowy dla swojego biznesu
  </p>,
]

const packageList = [
  {
    title: "❤️ PAKIET IG:",
    desc: (
      <>
        ✅ Masterclass{" "}
        <b>„Reklamy IG, które budują zaangażowaną społeczność”</b>
      </>
    ),
    price: "297 zł",
    link: "https://slowmarketing.mailingr.co/c/masterclass:-reklamy-ig-ktore-buduja-zaangazowana-spolecznosc-ubRU",
  },
  {
    title: "💌 PAKIET MAILING:",
    desc: (
      <>
        ✅ Masterclass <b>„Lista mailowa, która przyciąga klientów”</b>
      </>
    ),
    price: "297 zł",
    link: "https://slowmarketing.mailingr.co/c/masterclass:-lista-mailowa-ktora-przyciaga-klientow-1dPN",
  },
  {
    title: "💰PAKIET SPRZEDAŻ:",
    desc: (
      <>
        ✅ Masterclass <b>„Reklamy, które sprzedają na automacie”</b>
      </>
    ),
    price: "297 zł",
    link: "https://slowmarketing.mailingr.co/c/masterclass:-reklamy-ktore-sprzedaja-na-automacie-Dvcn",
  },
]

const packageList2 = [
  {
    title: "❤️ PAKIET IG:",
    desc: (
      <>
        ✅ Masterclass{" "}
        <b>„Reklamy IG, które budują zaangażowaną społeczność”</b>
      </>
    ),
    link: "https://slowmarketing.mailingr.co/c/masterclass:-reklamy-ig-ktore-buduja-zaangazowana-spolecznosc-ubRU",
    color: "magicGreen",
  },
  {
    title: "💌 PAKIET MAILING:",
    desc: (
      <>
        ✅ Masterclass <b>„Lista mailowa, która przyciąga klientów”</b>
      </>
    ),
    link: "https://slowmarketing.mailingr.co/c/masterclass:-lista-mailowa-ktora-przyciaga-klientow-1dPN",
    color: "white2",
  },
  {
    title: "💰PAKIET SPRZEDAŻ:",
    desc: (
      <>
        ✅ Masterclass <b>„Reklamy, które sprzedają na automacie”</b>
      </>
    ),
    link: "https://slowmarketing.mailingr.co/c/masterclass:-reklamy-ktore-sprzedaja-na-automacie-Dvcn",
    color: "purple3",
  },
]

const MasterclassAgenda = ({
  version,
  endsAt,
}: {
  version: number
  endsAt?: string | null
}) => {
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
              <p className="text-center font-bold text-adaBase pt-4 bg-ada-white border border-ada-black px-6 py-4 inline-block">
                Cena:{" "}
                <span className="text-[1.6875rem] font-extrabold">699 zł</span>
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
        <div className="w-full flex flex-col px-3 pb-2 items-center mb-5 text-ada-black">
          <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center text-ada-purple lg:mb- animate-bounce uppercase pb-10">
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
        <div className="w-full flex flex-col px-3 pb-2 items-center mb-5  text-ada-black">
          <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center text-ada-purple lg:mb- animate-bounce uppercase pb-10">
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
          <div className="w-full pb-14 flex flex-col items-center">
            <OpinionVideos />
            <h3 className="md:text-adaSubtitle py-3 px-10 font-bold mx-auto mb-14 max-w-[710px] text-ada-black text-center">
              To jak, dołączasz do programu „Ogarnij swoje adsy!" i robisz krok
              w stronę zdobywania nowych klientów dzięki kampaniom reklamowym?
            </h3>
            <Button
              type="button"
              text={<span className="font-bold">Chcę dołączyć!</span>}
              sectionId="offert"
              textSize="text-adaMin md:text-adaSubtitleThird"
              btnStyle="uppercase w-[187px] md:w-[490px] bg-ada-purple text-ada-white md:tracking-[2.90px] md:h-[100px] shadow-xl"
            />
          </div>
        </div>
      )}
      {version === 9 && (
        <div
          className="w-full flex flex-col px-3 py-2 items-center mb-3 md:mb-[300px] md:pt-12"
          id="offert"
        >
          <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center text-ada-purple animate-bounce uppercase pb-2">
            Jak dołączyć?
          </h2>
          <h3 className="text-adaDesc font-bold text-center text-ada-purple animate-bounce uppercase pb-10">
            Wybierz dla siebie pakiet uczestnictwa, który najbardziej Ci
            odpowiada:
          </h3>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:flex-row gap-10 text-ada-black">
              <div className="max-w-[415px] flex flex-col">
                <h3 className="text-adaMin md:text-adaBase lg:text-adaSubtitle uppercase w-full text-center font-bold border-black border-[1px] bg-ada-purple text-ada-white py-2">
                  Pakiet <br />
                  start
                </h3>
                <ul className="flex flex-col gap-[10px] mx-auto my-2 p-5 border-black border-[1px] bg-ada-purple text-ada-white">
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
                    <span className="mr-2">❌</span>KONSULTACJE 1:1
                  </li>
                </ul>
                <p className="text-center font-bold text-adaMin md:text-adaStandard uppercase p-2 border-black border-[1px] bg-ada-purple text-ada-white">
                  3321 zł brutto <br />
                  <span className="font-medium">
                    Płatność w ratach: <br />
                  </span>
                  4 x 850 zł brutto
                </p>
                <Button
                  type="button"
                  text={<span className="font-bold">Chcę dołączyć!</span>}
                  url="https://koalendar.com/e/ogarnij-swoje-adsy"
                  textSize="text-adaMin md:text-adaBase"
                  btnStyle="uppercase text-ada-purple w-full md:tracking-[2.90px] bg-ada-orange4 my-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 text-ada-black relative">
              <div className="max-w-[415px] flex flex-col md:mx-8">
                <div className="text-adaMin md:text-adaBase lg:text-adaSubtitle uppercase w-full text-center font-bold border-black border-[1px] bg-ada-purple text-ada-white py-2 ">
                  <span className="text-adaMin md:text-adaStandard">
                    Najkorzystniejsza cena
                  </span>
                  <br />
                  <h3>
                    Pakiet <br />
                    Standard
                  </h3>
                </div>
                <ul className="flex flex-col gap-[10px] mx-auto my-2 p-5 border-black border-[1px] bg-ada-purple text-ada-white">
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
                <p className="text-center font-bold text-adaMin md:text-adaStandard uppercase p-2 border-black border-[1px] bg-ada-purple text-ada-white">
                  3690 zł brutto <br />
                  <span className="font-medium">
                    Płatność w ratach: <br />
                  </span>
                  4 x 920 zł brutto
                </p>
                <Button
                  type="button"
                  text={<span className="font-bold">Chcę dołączyć!</span>}
                  url="https://koalendar.com/e/ogarnij-swoje-adsy"
                  textSize="text-adaMin md:text-adaBase"
                  btnStyle="uppercase text-ada-purple w-full md:tracking-[2.90px] bg-ada-orange4 my-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 text-ada-black">
              <div className="max-w-[415px] flex flex-col">
                <h3 className="text-adaMin md:text-adaBase lg:text-adaSubtitle uppercase w-full text-center font-bold border-black border-[1px] bg-ada-purple text-ada-white">
                  Pakiet <br />
                  VIP
                </h3>
                <ul className="flex flex-col gap-[10px] mx-auto my-2 p-5 border-black border-[1px] bg-ada-purple text-ada-white">
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
                <p className="text-center font-bold text-adaMin md:text-adaStandard uppercase p-2 border-black border-[1px] bg-ada-purple text-ada-white">
                  4920 zł brutto <br />
                  <span className="font-medium">
                    Płatność w ratach: <br />
                  </span>
                  4 x 1230 zł brutto
                </p>
                <Button
                  type="button"
                  text={<span className="font-bold">Chcę dołączyć!</span>}
                  url="https://koalendar.com/e/ogarnij-swoje-adsy"
                  textSize="text-adaMin md:text-adaBase"
                  btnStyle="uppercase text-ada-purple w-full md:tracking-[2.90px] bg-ada-orange4 my-2"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {version === 10 && (
        <div
          className="w-full flex flex-col px-3 py-2 items-center mb-3 md:mb-[100px] md:pt-12"
          id="offert"
        >
          <h2 className="text-adaDesc lg:text-adaTitle font-bold text-center animate-bounce uppercase pb-2">
            Jak dołączyć?
          </h2>
          <h3 className="text-adaDesc font-bold text-center animate-bounce uppercase pb-10">
            Wybierz dla siebie pakiet uczestnictwa, który najbardziej Ci
            odpowiada:
          </h3>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:flex-row gap-10 text-ada-black">
              <div className="max-w-[415px] flex flex-col">
                <h3 className="text-adaMin md:text-adaBase lg:text-adaSubtitle uppercase w-full text-center font-bold border-black border-[1px] bg-ada-purple text-ada-white py-2">
                  Pakiet <br />
                  Basic
                </h3>
                <ul className="flex flex-col gap-[10px] mx-auto my-2 p-5 border-black border-[1px] bg-ada-purple text-ada-white">
                  {pakieBasicList.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row text-adaMin md:text-adaStandard font-medium"
                    >
                      <div className="mr-2">✅</div>
                      {item}
                    </li>
                  ))}
                  <li className="flex flex-row text-adaMin md:text-adaStandard font-medium">
                    <span className="mr-2">❌</span>bez konsultacji
                    indywidualnych
                  </li>
                </ul>
                <p className="text-center font-bold text-adaMin md:text-adaStandard uppercase p-2 border-black border-[1px] bg-ada-purple text-ada-white">
                  760 zł x 6
                </p>
                <Button
                  type="button"
                  text={<span className="font-bold">Chcę dołączyć!</span>}
                  url="https://www.mailingr.co/c/meta-ads-masters-basic-YeW7"
                  textSize="text-adaMin md:text-adaBase"
                  btnStyle="uppercase text-ada-purple w-full md:tracking-[2.90px] bg-ada-orange4 my-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 text-ada-black relative mb-60">
              <div className="max-w-[415px] flex flex-col md:mx-8">
                <div className="text-adaMin md:text-adaBase lg:text-adaSubtitle uppercase w-full text-center font-bold border-black border-[1px] bg-ada-purple text-ada-white py-2 ">
                  <h3>
                    Pakiet <br />
                    Pro
                  </h3>
                </div>
                <ul className="flex flex-col gap-[10px] mx-auto my-2 p-5 border-black border-[1px] bg-ada-purple text-ada-white">
                  {pakietProList.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row text-adaMin md:text-adaStandard font-medium"
                    >
                      <div className="mr-2">✅</div>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-center font-bold text-adaMin md:text-adaStandard uppercase p-2 border-black border-[1px] bg-ada-purple text-ada-white">
                  980 zł x 6
                </p>
                <Button
                  type="button"
                  text={<span className="font-bold">Chcę dołączyć!</span>}
                  url="https://www.mailingr.co/c/meta-ads-masters-mentoring-pro-N9Nw"
                  textSize="text-adaMin md:text-adaBase"
                  btnStyle="uppercase text-ada-purple w-full md:tracking-[2.90px] bg-ada-orange4 my-2"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {version === 11 && (
        <div className="max-w-[1200px] mx-auto px-4 py-10" id="offert">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-adaSubtitle md:text-adaTitle font-bold text-center mb-8">
              Zapisz się na listę zainteresowanych
            </h2>
            <p className="text-adaStandard md:text-adaSubtitle text-center mb-10">
              Zostaw swój email, aby otrzymać informację, gdy otworzymy zapisy
              do programu
            </p>
            <div
              className="w-full max-w-[600px]"
              dangerouslySetInnerHTML={{ __html: metaAdsZainteresowani }}
            />
          </div>
        </div>
      )}
      {version === 12 && (
        <div className="max-w-[1200px] mx-auto px-4 py-10" id="offert">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-adaSubtitle md:text-adaTitle font-bold text-center mb-8">
              Zapisz się na listę zainteresowanych
            </h2>
            <div
              className="w-full max-w-[600px]"
              dangerouslySetInnerHTML={{
                __html: ogarnijSwojeAdsyZainteresowani,
              }}
            />
          </div>
        </div>
      )}
      {version === 13 && (
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
                Dzięki temu produktowi zbudujesz stabilny proces pozyskiwania
                klientów przez reklamy. Przestaniesz spędzać 8 godzin dziennie
                przy komputerze, a zaczniesz żyć tak, jak naprawdę chcesz - z
                pieniędzmi płynącymi z dobrze skonfigurowanych kampanii
                reklamowych.
              </p>
              <p className="pt-6 text-adaMin md:text-adaSubtitle uppercase font-extrabold">
                Przeprowadzę Cię przez proces krok <br /> po kroku. To jak:{" "}
                <span className="text-ada-yellow"> działamy i czilujemy?</span>
              </p>
              <Button
                type="button"
                text={
                  <span className="font-extrabold uppercase">
                    Chcę <br /> ADSY&CHILL!
                  </span>
                }
                textSize="text-adaSubtitle"
                btnStyle="md:w-[410px] md:h-[90px] bg-ada-pink2 my-10 mx-auto rounded-[50px]"
                sectionId="pricing"
              />
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
        </div>
      )}
      {version === 14 && (
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
          <div className="flex flex-col md:flex-row gap-10  text-center">
            <div className="max-w-[700px] flex flex-col">
              <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary py-5 px-10 text-center font-bold mb-4">
                Co dostaniesz <br /> w Adsy&Chill?
              </h2>
              <h3 className="text-adaBase lg:text-adaSubtitle py-5">
                🚀 PAKIET FULL:
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
              <div className="relative mt-2">
                <a
                  href="https://slowmarketing.mailingr.co/c/adsyandchill-2025-6nPc?priceId=price_SITaPYXmbvodQAaQDDTjXIkQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p
                    className="p-2 bg-ada-blue text-adaBase text-ada-pink2 w-[158px] font-bold absolute top-[55px] left-[100px] md:left-[220px]"
                    style={{ transform: "rotate(-8deg)" }}
                  >
                    547 zł{" "}
                    <span className="ml-2 line-through text-[14px]">
                      699 zł{" "}
                    </span>
                  </p>
                  <p className="text-center font-extrabold text-adaBase pt-4 bg-ada-pink2 w-[300px] rounded-[100px] px-6 py-4 inline-block mx-auto mb-10 uppercase">
                    Chcę dołączyć!
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-5 pb-4 overflow-visible w-screen md:w-[1200px]">
            <Carousel
              responsive={responsive}
              infinite={false}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              ssr={false}
              autoPlay={true}
            >
              {packageList.map((packageItem, index) => (
                <Package
                  key={index}
                  title={packageItem.title}
                  desc={packageItem.desc}
                  price={packageItem.price}
                  link={packageItem.link}
                />
              ))}
            </Carousel>
          </div>
          <div>
            <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary pt-10 pb-10 font-bold text-center">
              Dlaczego jeszcze <span className="text-ada-pink2">warto</span>{" "}
              dołączyć?
            </h2>
            <ul className="flex flex-col md:flex-row gap-[10px] mx-auto mb-10  max-w-[1080px] xl:min-w-[880px]">
              <div>
                {newlistItems1.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row items-center text-adaMin md:text-adaDesc mb-6"
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
              </div>
              <div>
                {newlistItems2.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row items-center text-adaMin md:text-adaDesc mb-6"
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
              </div>
            </ul>
          </div>
        </div>
      )}
      {version === 15 && (
        <div
          className="w-full flex flex-col px-3 py-2 items-center mb-5 md:pt-12"
          id="pakiety"
        >
          <h2 className="text-adaSubtitleSecondary lg:text-adaTitle2 pt-10 pb-1 text-center font-anton text-ada-magicOrange">
            Co dostaniesz <br /> w Adsy&Chill?
          </h2>
          <div className="mx-auto">
            <StaticImage
              src={"../../images/magicAgenda.webp"}
              alt="Ada Promis"
              placeholder="blurred"
              width={780}
            />
          </div>
        </div>
      )}
      {version === 16 && (
        <div
          className="w-full flex flex-col px-3 items-center mb-20"
          id="pricing"
        >
          <div className="text-center">
            <div className="max-w-[500px] flex flex-col text-black rounded-[20px] bg-ada-magicPink border border-ada-magicOrange px-8">
              <h3 className="text-adaBase lg:text-adaSubtitle py-5 font-bold">
                🚀 PAKIET FULL:
              </h3>
              <ul className="flex flex-col gap-[10px] mx-auto pb-12 text-left">
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
            </div>
            <div className="-mt-6">
              <a
                href="https://slowmarketing.mailingr.co/c/adsyandchill-2025-6nPc?priceId=price_SITaPYXmbvodQAaQDDTjXIkQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-center font-extrabold text-adaBase pt-4 bg-ada-magicOrange text-white w-[300px] rounded-[100px] px-6 py-4 inline-block mx-auto mb-10 uppercase border border-black">
                  Chcę dołączyć!
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 md:w-[1200px] hidden">
            {packageList2.map((packageItem, index) => (
              <Package2
                key={index}
                title={packageItem.title}
                desc={packageItem.desc}
                link={packageItem.link}
                color={packageItem.color}
              />
            ))}
          </div>
        </div>
      )}
      {version === 17 && (
        <div
          className="w-full flex flex-col px-3 py-2 items-center mb-5 md:pt-12 relative"
          id="time"
        >
          <div>
            <h2 className="text-adaSubtitleSecondary lg:text-adaSubtitleSecondary pt-10 pb-10 text-center font-anton text-ada-magicOrange">
              Adsy&chill to świetny wybór, bo...
            </h2>
            <ul className="flex flex-col md:flex-row gap-[10px] mx-auto mb-10  max-w-[1080px] xl:min-w-[880px] text-black">
              <div>
                {newlistItems3.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row items-center text-adaNav md:text-adaDesc mb-6"
                  >
                    <div className="mr-2 w-[44px] lg:w-[64px] mr-4">
                      <StaticImage
                        src={"../../images/checkBlack.svg"}
                        alt="Ada Promis"
                        placeholder="blurred"
                        width={44}
                        height={46}
                      />
                    </div>
                    {item}
                  </li>
                ))}
              </div>
              <div>
                {newlistItems4.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row items-center text-adaNav md:text-adaDesc mb-6"
                  >
                    <div className="mr-2 w-[44px] lg:w-[64px] mr-4">
                      <StaticImage
                        src={"../../images/checkBlack.svg"}
                        alt="Ada Promis"
                        placeholder="blurred"
                        width={44}
                        height={46}
                      />
                    </div>
                    {item}
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div className="flex justify-center items-center absolute bottom-[-60px] left-1/2 -translate-x-1/2 -translate-y-6 w-[60px] lg:w-[80px]">
            <a href="#faq">
              <StaticImage
                src={"../../images/magicBtn.svg"}
                alt=""
                placeholder="blurred"
                width={80}
                height={80}
              />
            </a>
          </div>
        </div>
      )}
      {version === 18 && (
        <div
          className="w-full flex flex-col px-3 items-center mb-20"
          id="pricing"
        >
          <div className="">
            <div className="max-w-[620px] flex flex-col text-black rounded-[20px] bg-ada-white border border-ada-magicOrange py-8 shadow-lg">
              <h3 className="text-adaSubtitleSecondary lg:text-adaTitle3 py-5 font-bold text-center">
                🚀 PAKIET FULL
              </h3>
              <div className="border-y border-ada-magicOrange px-8 text-center lg:text-start">
                <p className="mt-4 lg:-mb-6">cena</p>
                <p className="text-adaSubtitleSecondary lg:text-adaTitle3 font-bold">
                  547 zł
                </p>
                <p className="lg:-mt-5 lg:text-adaSubtitleSecondary line-through">
                  729 zł
                </p>
                <a
                  href="https://slowmarketing.mailingr.co/c/adsyandchill-2025-6nPc?priceId=price_SITaPYXmbvodQAaQDDTjXIkQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-center font-extrabold text-adaBase pt-4 bg-ada-magicOrange text-white w-[300px] rounded-[100px] px-6 py-4 inline-block mx-auto mb-10 uppercase border border-black mt-6">
                    KUPUJĘ DOSTĘP!
                  </p>
                </a>
              </div>
              <div className="px-4">
                <ul className="py-4 list-disc">
                  {masterclassList.map((item, index) => (
                    <li key={index} className="pb-4 mx-5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MasterclassAgenda
