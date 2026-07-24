import Layout from "components/Layout"
import SEO from "components/seo"
import Card from "components/shared/Card"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

type SectionTitleProps = {
  as?: "h1" | "h2"
  children: React.ReactNode
  className?: string
  hero?: boolean
  id?: string
}

type InfoCardProps = {
  children: React.ReactNode
  tone?: "green" | "warm"
}

type DownArrowProps = {
  hero?: boolean
}

const checkerPattern =
  "bg-ada-white2 [background-image:conic-gradient(#EDBCCF_25%,#F2F0E9_0_50%,#EDBCCF_0_75%,#F2F0E9_0)] [background-size:56px_56px]"

const gridPattern =
  "bg-ada-white2 [background-image:linear-gradient(rgba(178,168,219,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(178,168,219,0.32)_1px,transparent_1px)] [background-size:32px_32px]"

const copyColumn =
  "relative z-[2] mx-auto mt-16 grid w-full max-w-[630px] gap-12 max-[700px]:mt-12 max-[700px]:gap-[38px] [&_h3]:mb-[3px] [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-[1.16] max-[700px]:[&_h3]:text-lg [&_p]:m-0"

const navLink =
  "text-inherit no-underline decoration-ada-magicOrange underline-offset-[5px] hover:underline focus-visible:underline"

const SectionTitle: React.FC<SectionTitleProps> = ({
  as = "h2",
  children,
  className = "",
  hero = false,
  id,
}) => {
  const Heading = as

  return (
    <div
      className={`relative z-[3] mx-auto flex min-h-[87px] w-full max-w-[524px] items-center justify-center rounded-full border-[1.5px] border-ada-magicOrange bg-ada-white2 px-[42px] py-[14px] text-center shadow-[0_8px_0_-4px_rgba(0,0,0,0.22)] max-[700px]:min-h-[72px] max-[700px]:px-6 max-[700px]:py-[13px] ${
        hero
          ? "min-h-[139px] px-12 py-3 shadow-none max-[700px]:min-h-[114px] max-[700px]:px-5"
          : ""
      } ${className}`}
    >
      <Heading
        className={`m-0 font-anton text-[40px] leading-[1.15] font-normal text-ada-magicOrange uppercase max-[700px]:text-[28px] max-[700px]:leading-[1.12] max-[380px]:text-[24px] ${
          hero
            ? "normal-case max-[700px]:text-[31px] max-[380px]:text-[27px]"
            : ""
        }`}
        id={id}
      >
        {children}
      </Heading>
    </div>
  )
}

const DownArrow: React.FC<DownArrowProps> = ({ hero = false }) => (
  <span
    className={`z-[4] mx-auto block size-[67px] shrink-0 rounded-full bg-ada-magicPurple max-[700px]:size-[58px] ${
      hero
        ? "absolute bottom-[-63px] left-1/2 m-0 -translate-x-1/2"
        : "relative my-[30px] max-[700px]:my-[25px]"
    }`}
    aria-hidden="true"
  >
    <span className="absolute top-[17px] left-[21px] block size-[25px] rotate-45 border-r-4 border-b-4 border-ada-white2 max-[700px]:top-[14px] max-[700px]:left-[18px] max-[700px]:size-[22px]" />
  </span>
)

const InfoCard: React.FC<InfoCardProps> = ({ children, tone = "green" }) => {
  const bgColor = tone === "green" ? "bg-ada-magicGreen" : "bg-ada-white2"

  return (
    <article className="w-full">
      <Card
        bgColor={bgColor}
        rounded="rounded-[28px] max-[700px]:rounded-[22px]"
        padding="p-0"
        className="w-full border-[1.5px] border-ada-magicOrange px-[62px] py-12 text-base leading-[1.25] shadow-[0_13px_13px_-9px_rgba(0,0,0,0.34)] max-[700px]:px-[22px] max-[700px]:py-7 max-[700px]:text-[15px] [&_h3]:mb-[3px] [&_h3]:text-[21px] [&_h3]:font-bold [&_h3]:leading-[1.16] max-[700px]:[&_h3]:text-lg [&_p]:m-0 [&_p+_h3]:mt-5 [&_p+_p]:mt-5 [&_ul+_p]:mt-5"
      >
        {children}
      </Card>
    </article>
  )
}

const KolektywNaStartPage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <div className="w-full bg-ada-white2 font-montserrat text-base leading-[1.28] text-ada-black max-[700px]:text-[15px]">
        <div className="w-full overflow-hidden bg-ada-white2">
          <header className="relative z-[5] grid min-h-[187px] grid-cols-[1fr_auto_1fr] items-center border-b border-black/10 bg-ada-white2 px-24 py-6 max-[900px]:grid-cols-[auto_1fr] max-[900px]:px-9 max-[700px]:flex max-[700px]:min-h-[150px] max-[700px]:flex-col max-[700px]:justify-center max-[700px]:gap-[18px] max-[700px]:px-5 max-[700px]:py-[22px]">
            <a
              className="col-start-2 block w-[220px] transition-opacity duration-200 hover:opacity-[0.78] max-[900px]:col-start-1 max-[900px]:w-[185px] max-[700px]:w-[170px]"
              href="#poczatek"
              aria-label="Kolektyw MAGIC — początek strony"
            >
              <StaticImage
                src="../images/kolektyw-logo.webp"
                alt="Kolektyw MAGIC"
                width={220}
                quality={100}
                placeholder="none"
                loading="eager"
              />
            </a>

            <nav
              className="col-start-3 flex items-center justify-self-end gap-12 text-xs leading-[1.15] font-medium uppercase max-[900px]:col-start-2 max-[900px]:gap-[26px] max-[700px]:justify-center max-[700px]:gap-8 max-[700px]:text-[11px] max-[380px]:gap-5"
              aria-label="Nawigacja po zasadach współpracy"
            >
              <a className={navLink} href="#zasady-wspolpracy">
                Zasady współpracy
              </a>
              <a className={navLink} href="#kontakt">
                Kontakt
              </a>
            </nav>
          </header>

          <main className="[scroll-margin-top:24px]" id="poczatek">
            <section
              className="relative flex min-h-[403px] items-stretch justify-center bg-ada-white2 max-[700px]:min-h-[470px]"
              aria-labelledby="kolektyw-start-hero-title"
            >
              <div
                className={`absolute inset-y-0 left-0 w-[31.5%] max-[700px]:w-1/2 max-[700px]:opacity-[0.62] ${checkerPattern}`}
                aria-hidden="true"
              />
              <div className="relative z-[2] flex w-[524px] max-w-[calc(100%-48px)] flex-col items-center bg-ada-white2 pt-16 text-center max-[700px]:w-[calc(100%-36px)] max-[700px]:max-w-[520px] max-[700px]:bg-[rgba(242,240,233,0.94)] max-[700px]:px-[18px] max-[700px]:pt-[58px] max-[700px]:pb-[92px]">
                <SectionTitle as="h1" hero id="kolektyw-start-hero-title">
                  Jak będzie wyglądać
                  <br />
                  nasza współpraca?
                </SectionTitle>
                <p className="mx-auto mt-7 w-full max-w-[381px] text-base leading-[1.22] max-[700px]:mt-6 max-[700px]:text-[15px]">
                  <strong>
                    Cieszymy się, że będziemy razem tworzyć coś wyjątkowego!
                  </strong>{" "}
                  Przygotowałyśmy dla Ciebie przewodnik po naszej współpracy,
                  żebyś wiedziała, czego możesz się spodziewać na każdym etapie
                  naszej przygody.
                </p>
                <DownArrow hero />
              </div>
              <div
                className={`absolute inset-y-0 right-0 w-[31.5%] max-[700px]:w-1/2 max-[700px]:opacity-[0.62] ${checkerPattern}`}
                aria-hidden="true"
              />
            </section>

            <section className="relative min-h-[864px] bg-ada-white2 px-6 pt-[110px] pb-[140px] max-[700px]:min-h-0 max-[700px]:px-[22px] max-[700px]:pt-[100px] max-[700px]:pb-[116px]">
              <SectionTitle>Poznajmy się bliżej!</SectionTitle>

              <div className={copyColumn}>
                <div>
                  <h3>💪 👩‍💻 Twój zespół marzeń</h3>
                  <p>
                    Podczas naszej współpracy będziesz pracować głównie z{" "}
                    <strong>Nicolą i Pauliną</strong> — to nasze kreatywne serca
                    kolektywu MAGIC! Jedna z dziewczyn zostanie Twoją dedykowaną
                    menadżerką projektu (będzie znała Twój biznes jak własną
                    kieszeń), a druga będzie zawsze gotowa do pomocy, gdy
                    zajdzie taka potrzeba. Lubimy myśleć o sobie jak o Twoim
                    zewnętrznym zespole marketingowym!
                  </p>
                </div>

                <div>
                  <h3>👩‍💻 Jak się komunikujemy</h3>
                  <p>
                    Nasza ulubiona platforma komunikacyjna to{" "}
                    <strong>Trello</strong> — to tam dzieje się cała magia!
                    Dlaczego akurat Trello? Bo każda z nas jest wtedy na bieżąco
                    z Twoim projektem, możemy szybko zareagować w razie nagłych
                    sytuacji, a Ty masz wszystko w jednym miejscu. Oczywiście,
                    jesteśmy również dostępne mailowo, ale Trello to naprawdę
                    nasze miejsce mocy.
                  </p>
                </div>

                <div>
                  <h3>🗓️ Nasze comiesięczne spotkania</h3>
                  <p>
                    <strong>
                      Raz w miesiącu organizujemy spotkanie online
                    </strong>{" "}
                    — to czas, kiedy razem przeglądamy, co udało nam się
                    osiągnąć, analizujemy wyniki i układamy plany na kolejne
                    tygodnie. To także moment, gdy możesz podzielić się swoimi
                    pomysłami i marzeniami dotyczącymi rozwoju biznesu — a my
                    podpowiemy Ci, jak wykorzystać do tego kampanie reklamowe.
                  </p>
                </div>
              </div>

              <span
                className="absolute top-[320px] left-[-145px] h-[320px] w-[280px] bg-ada-purple3 [border-radius:37%_63%_49%_51%/26%_33%_67%_74%] max-[900px]:left-[-120px] max-[900px]:h-[250px] max-[900px]:w-[180px] max-[700px]:top-[410px] max-[700px]:left-[-92px] max-[700px]:h-[160px] max-[700px]:w-[130px] max-[700px]:opacity-[0.34]"
                aria-hidden="true"
              />
              <span
                className="absolute top-[320px] right-[-145px] h-[320px] w-[280px] -scale-x-100 bg-ada-purple3 [border-radius:37%_63%_49%_51%/26%_33%_67%_74%] max-[900px]:right-[-120px] max-[900px]:h-[250px] max-[900px]:w-[180px] max-[700px]:top-[410px] max-[700px]:right-[-92px] max-[700px]:h-[160px] max-[700px]:w-[130px] max-[700px]:opacity-[0.34]"
                aria-hidden="true"
              />
            </section>

            <section
              className={`${gridPattern} px-6 pt-[120px] pb-40 max-[700px]:px-4 max-[700px]:pt-[94px] max-[700px]:pb-[120px] [scroll-margin-top:24px]`}
              id="zasady-wspolpracy"
            >
              <SectionTitle>Tworzenie, które sprzedaje:</SectionTitle>

              <div className="mx-auto mt-[42px] flex w-full max-w-[760px] flex-col items-center max-[700px]:mt-[34px]">
                <InfoCard>
                  <h3>
                    🎨 Twoja identyfikacja wizualna
                    <br />— fundament dobrych kreacji
                  </h3>
                  <p>
                    Zanim zaczniemy tworzyć, bardzo ważne jest dla nas poznanie
                    Twojej marki! Dlatego na samym początku{" "}
                    <strong>zapytamy Cię o identyfikację wizualną</strong> —
                    nawet najprostszą. Czy masz już ustalone kolory, fonty, styl
                    graficzny? A może korzystasz z konkretnych elementów
                    wizualnych?
                  </p>
                  <p>
                    <strong>
                      Jeśli jeszcze nie masz spójnej identyfikacji wizualnej,
                    </strong>{" "}
                    możemy dla Ciebie przygotować prostą identyfikację wizualną
                    (za dodatkową opłatą) — dobierzemy zestaw fontów, kolorów,
                    charakterystyczne elementy jak ikonki czy kształty, a także
                    szablony na Instagram i Facebook. To inwestycja, która
                    sprawi, że Twoja marka będzie spójna i bardziej
                    rozpoznawalna!
                  </p>
                </InfoCard>

                <DownArrow />

                <InfoCard tone="warm">
                  <h3>🧐 Materiały, których potrzebujemy na starcie</h3>
                  <p>
                    Żeby móc stworzyć dla Ciebie najlepsze kreacje, potrzebujemy
                    kilku rzeczy:
                  </p>
                  <ul className="mt-3 list-none p-0" role="list">
                    <li className="relative pl-[21px]">
                      <span
                        className="absolute top-0 left-0 text-sm"
                        aria-hidden="true"
                      >
                        ✅
                      </span>
                      <strong>Logotyp</strong> (w różnych wersjach — kolorowej,
                      czarno-białej, poziomej, pionowej)
                    </li>
                    <li className="relative pl-[21px]">
                      <span
                        className="absolute top-0 left-0 text-sm"
                        aria-hidden="true"
                      >
                        ✅
                      </span>
                      <strong>Zdjęcia produktowe i wizerunkowe</strong> (im
                      więcej, tym lepiej!)
                    </li>
                    <li className="relative pl-[21px]">
                      <span
                        className="absolute top-0 left-0 text-sm"
                        aria-hidden="true"
                      >
                        ✅
                      </span>
                      <strong>Kolorystyka marki</strong> (konkretne kody
                      kolorów, jeśli masz)
                    </li>
                    <li className="relative pl-[21px]">
                      <span
                        className="absolute top-0 left-0 text-sm"
                        aria-hidden="true"
                      >
                        ✅
                      </span>
                      <strong>Fonty</strong> (które używasz lub chcesz używać)
                    </li>
                    <li className="relative pl-[21px]">
                      <span
                        className="absolute top-0 left-0 text-sm"
                        aria-hidden="true"
                      >
                        ✅
                      </span>
                      <strong>Wykorzystywane wcześniej materiały</strong> (jako
                      przykłady i punkt odniesienia)
                    </li>
                    <li className="relative pl-[21px]">
                      <span
                        className="absolute top-0 left-0 text-sm"
                        aria-hidden="true"
                      >
                        ✅
                      </span>
                      <strong>Inspiracje graficzne</strong> (pokaż nam, jaka
                      estetyka Ci się podoba!)
                    </li>
                    <li className="relative pl-[21px]">
                      <span
                        className="absolute top-0 left-0 text-sm"
                        aria-hidden="true"
                      >
                        ✅
                      </span>
                      <strong>Opinie</strong> (najlepiej w formie screenów)
                    </li>
                  </ul>
                  <p>
                    Im szybciej je otrzymamy, tym szybciej wystartujemy z
                    kampaniami!
                  </p>
                  <p>
                    <strong>Bardzo ważne:</strong> Opóźnienie w przekazaniu
                    materiałów automatycznie wiąże się z opóźnieniem w starcie
                    kampanii. Im szybciej będziemy mieli komplet, tym szybciej
                    zobaczymy pierwsze efekty!
                  </p>
                </InfoCard>

                <DownArrow />

                <InfoCard>
                  <h3>🔮 Graficzne czary</h3>
                  <p>
                    <strong>
                      Przygotowujemy dla Ciebie wszystkie grafiki reklamowe i
                      udostępniamy je w Canvie,
                    </strong>{" "}
                    gdzie możesz zostawić swoje uwagi i komentarze. To nasze
                    wspólne studio kreatywne! Jeśli potrzebujesz czegoś więcej —
                    materiałów brandingowych, grafik na stronę czy innych
                    projektów — chętnie wycenimy to osobno. Lubimy graficzne
                    wyzwania!
                  </p>
                  <h3 className="!mt-7">
                    👀 Jak przekazywać nam swoje pomysły?
                  </h3>
                  <p>
                    Wszystkie komentarze do projektów graficznych najlepiej
                    zostawiać bezpośrednio w <strong>Canvie</strong> — dzięki
                    temu nic się nie zgubi, a my widzimy dokładnie, o co Ci
                    chodzi.
                  </p>
                </InfoCard>
              </div>
            </section>

            <section
              className="relative z-[3] bg-ada-white2 px-6 pt-[84px] pb-[142px] text-center max-[700px]:px-5 max-[700px]:pt-[74px] max-[700px]:pb-[120px] [scroll-margin-top:24px]"
              id="kontakt"
            >
              <h2 className="mb-6 font-anton text-4xl leading-[1.25] font-normal text-ada-magicOrange uppercase max-[700px]:text-[29px] max-[380px]:text-[25px]">
                Jeśli chcesz otrzymać wycenę,
                <br />
                odezwij się do Nicoli:
              </h2>
              <a
                className="text-xl text-black underline underline-offset-4 max-[700px]:text-[17px]"
                href="mailto:nicola@getbold.agency"
              >
                nicola@getbold.agency
              </a>
              <span
                className="pointer-events-none absolute inset-x-0 bottom-[-90px] z-[3] h-[91px] bg-ada-white2 [clip-path:polygon(0_0,100%_0,50%_100%)]"
                aria-hidden="true"
              />
            </section>

            <section className="relative bg-ada-white2">
              <div
                className={`relative z-[2] flex min-h-[380px] items-end justify-center px-6 pb-[54px] max-[700px]:min-h-[250px] max-[700px]:pb-9 ${checkerPattern}`}
              >
                <SectionTitle>Nasze tempo pracy</SectionTitle>
              </div>

              <div
                className={`${copyColumn} mt-0 pt-[82px] pb-[145px] max-[700px]:px-[22px] max-[700px]:pt-[68px] max-[700px]:pb-[126px]`}
              >
                <div>
                  <h3>🗓️ Kiedy się odzywamy?</h3>
                  <p>
                    Standardowo{" "}
                    <strong>odpowiadamy w ciągu 30 godzin roboczych,</strong>{" "}
                    ale zazwyczaj jesteśmy znacznie szybsze! Czasem może się
                    zdarzyć, że powiadomienie zginie gdzieś po drodze, więc
                    jeśli cisza trwa dłużej niż zwykle,{" "}
                    <strong>śmiało oznaczaj nas ponownie na Trello</strong> —
                    nie obrażamy się, wręcz przeciwnie!
                  </p>
                </div>

                <div>
                  <h3>📊 Przygotowanie kampanii</h3>
                  <p>
                    Na przygotowanie i uruchomienie Twojej kampanii potrzebujemy
                    zazwyczaj <strong>3–4 pełne dni robocze</strong> od momentu,
                    gdy dostaniemy komplet materiałów. To orientacyjny czas.
                    Wiele zależy od tego, jak szybko akceptujesz teksty i
                    grafiki oraz liczby poprawek. Pamiętaj, że jeśli coś
                    dostarczysz później (na przykład stronę z ofertą), to
                    automatycznie przesuwa nam termin — ale zawsze Cię o tym
                    poinformujemy!
                  </p>
                </div>

                <div>
                  <h3>🚨 Kampanie na ostatnią chwilę</h3>
                  <p>
                    Czy jesteśmy w stanie przygotować kampanię od zera w ciągu
                    jednego dnia? Jeśli wyskoczy coś pilnego, zazwyczaj
                    jesteśmy.{" "}
                    <strong>
                      Nie traktujmy tego jednak jako rutynę, tylko wyjątek.
                    </strong>{" "}
                    Pewnie Ty też nie byłabyś zadowolona, gdyby ktoś nagle zajął
                    Twoje miejsce w kolejce, prawda?
                  </p>
                </div>
              </div>
            </section>

            <section className="relative z-[3] bg-ada-magicGreen px-14 pt-[154px] pb-[170px] max-[700px]:px-[22px] max-[700px]:pt-[150px] max-[700px]:pb-[140px]">
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-[100px] bg-ada-white2 [clip-path:polygon(0_0,100%_0,50%_100%)]"
                aria-hidden="true"
              />
              <SectionTitle>
                Jak pokazujemy efekty
                <br />
                naszej pracy
              </SectionTitle>

              <div className="mx-auto mt-[70px] grid w-full max-w-[1000px] grid-cols-2 max-[700px]:mt-[54px] max-[700px]:grid-cols-1 max-[700px]:gap-[42px]">
                <article className="px-[38px] max-[700px]:px-0">
                  <span
                    className="mb-[10px] block text-[32px]"
                    aria-hidden="true"
                  >
                    🗓️
                  </span>
                  <h3 className="mb-[3px] text-[21px] leading-[1.16] font-bold max-[700px]:text-lg">
                    Miesięczne podsumowania
                  </h3>
                  <p className="m-0">
                    Na koniec każdego miesiąca przygotowujemy dla Ciebie{" "}
                    <strong>szczegółowy raport.</strong> Pokazujemy w nim, ile
                    osób kupiło, zapisało się, jaki był koszt tych akcji, ile
                    sprzedało się produktów, jaki był zysk, co działało
                    najlepiej, a co warto jeszcze poprawić lub dodać. Cały
                    raport analizujemy wspólnie podczas comiesięcznego
                    spotkania.
                  </p>
                </article>

                <article className="border-l-2 border-black/35 px-[38px] max-[700px]:border-t max-[700px]:border-l-0 max-[700px]:px-0 max-[700px]:pt-[42px]">
                  <span
                    className="mb-[10px] block text-[32px]"
                    aria-hidden="true"
                  >
                    🤝
                  </span>
                  <h3 className="mb-[3px] text-[21px] leading-[1.16] font-bold max-[700px]:text-lg">
                    Na bieżąco dzielimy się spostrzeżeniami
                  </h3>
                  <p className="m-0">
                    Nie czekamy do końca miesiąca z komunikacją! Czasem odzywamy
                    się{" "}
                    <strong>
                      3 razy w ciągu dnia, czasem raz na dwa tygodnie
                    </strong>{" "}
                    — wszystko zależy od tego, co się dzieje z kampaniami. Gdy
                    przychodzą nam do głowy nowe pomysły lub chcemy z Tobą
                    przedyskutować jakąś strategię, organizujemy burzę mózgów na{" "}
                    <strong>Trello oraz na comiesięcznych spotkaniach.</strong>{" "}
                    To nasza ulubiona forma kreatywnej współpracy!
                  </p>
                </article>
              </div>
              <span
                className="pointer-events-none absolute inset-x-0 bottom-[-90px] z-[3] h-[91px] bg-ada-magicGreen [clip-path:polygon(0_0,100%_0,50%_100%)]"
                aria-hidden="true"
              />
            </section>

            <section
              className={`${gridPattern} relative z-[1] px-6 pt-[188px] pb-[152px] max-[700px]:px-4 max-[700px]:pt-[170px] max-[700px]:pb-[118px]`}
            >
              <SectionTitle>Dbamy o Twoją społeczność</SectionTitle>
              <div className="mx-auto mt-[42px] w-full max-w-[700px]">
                <InfoCard tone="warm">
                  <h3>❌ Moderacja komentarzy</h3>
                  <p>
                    Moderowanie komentarzy{" "}
                    <strong>nie wchodzi w zakres naszej współpracy.</strong>{" "}
                    Wierzymy, że moderowanie komentarzy to część sztuki
                    komunikacji z klientami, nie tylko reagowanie na problemy.
                    Chociaż zdarza nam się sprawdzać komentarze i ukrywać te
                    mniej przyjemne, moderacja komentarzy powinna być częścią
                    strategii komunikacji.
                  </p>
                </InfoCard>
              </div>
            </section>

            <section className="relative bg-ada-white2">
              <div
                className={`relative flex min-h-[390px] items-end justify-center px-6 pb-[58px] max-[700px]:min-h-[260px] max-[700px]:pb-[35px] ${checkerPattern}`}
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-[130px] bg-ada-white2 [clip-path:polygon(0_0,100%_0,50%_100%)] max-[700px]:h-[86px]"
                  aria-hidden="true"
                />
                <SectionTitle>Nasze granice</SectionTitle>
              </div>

              <p className="mt-[18px] text-center max-[700px]:px-5">
                (ale w <strong>pozytywnym</strong> znaczeniu!)
              </p>

              <div className="mx-auto mt-[76px] grid w-full max-w-[1080px] grid-cols-[0.85fr_1.25fr_1.05fr] gap-11 px-[50px] pb-[170px] max-[900px]:gap-7 max-[900px]:px-8 max-[700px]:mt-[54px] max-[700px]:grid-cols-1 max-[700px]:gap-[38px] max-[700px]:px-[22px] max-[700px]:pb-[130px] [&_h3]:mb-[3px] [&_h3]:text-[21px] [&_h3]:leading-[1.16] [&_h3]:font-bold max-[700px]:[&_h3]:text-lg [&_p]:m-0">
                <article>
                  <h3>✅ Co robimy z pasją</h3>
                  <p>
                    Skupiamy się na tym, co robimy najlepiej —{" "}
                    <strong>
                      kampaniach reklamowych i kreacjach, które sprzedają.
                    </strong>
                  </p>
                </article>

                <article>
                  <h3>❌ Czego nie robimy w ramach stałej współpracy</h3>
                  <p>
                    Nasza umowa{" "}
                    <strong>
                      nie obejmuje tworzenia stron internetowych, copywritingu
                    </strong>{" "}
                    (poza tekstami reklamowymi),{" "}
                    <strong>
                      fotografii produktowej, konsultacji ścieżek mailowych,
                      tworzenia newsletterów czy optymalizacji stron.
                    </strong>{" "}
                    Część z tych usług świadczymy w ramach innych pakietów,
                    część zlecamy świetnym specjalistom — jeśli będziesz
                    potrzebować czegoś wychodzącego poza zakres naszej
                    współpracy, chętnie przygotujemy dla Ciebie wycenę lub kogoś
                    polecimy!
                  </p>
                </article>

                <article>
                  <h3>🚀 Twoje konto reklamowe to nasza odpowiedzialność</h3>
                  <p>
                    To bardzo ważne: podczas naszej współpracy{" "}
                    <strong>kampanie są w 100% pod naszą opieką.</strong>{" "}
                    Oczywiście możesz zaglądać na konto (zachęcamy!), ale{" "}
                    <strong>
                      wszelkie zmiany wprowadzamy tylko my — osoby z kolektywu
                      MAGIC.
                    </strong>{" "}
                    Jeśli wprowadzisz zmiany samodzielnie, nie będziemy mogły
                    zagwarantować wyników kampanii. To jak próba kierowania
                    samochodem na dwie kierownice.
                  </p>
                </article>
              </div>
            </section>

            <section className="relative bg-ada-magicGreen px-6 pt-40 pb-[142px] max-[700px]:px-[22px] max-[700px]:pt-[150px] max-[700px]:pb-28">
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-[100px] bg-ada-white2 [clip-path:polygon(0_0,100%_0,50%_100%)]"
                aria-hidden="true"
              />
              <SectionTitle>Pierwsze kroki razem</SectionTitle>

              <div className={`${copyColumn} mt-[68px] max-[700px]:mt-[52px]`}>
                <div>
                  <h3>👀 Okres poznawania się</h3>
                  <p>
                    Pierwsze <strong>3 miesiące</strong> to nasz okres testowy —
                    czas, kiedy poznajemy się nawzajem, sprawdzamy, co możemy
                    wspólnie zdziałać i czy dobrze nam się razem pracuje. W tym
                    czasie{" "}
                    <strong>
                      wdrażamy nasze sprawdzone metody prowadzenia kampanii i
                      dostosowujemy je do Twojego biznesu.
                    </strong>{" "}
                    Zależy nam, aby pierwsze 3 miesiące upłynęły nam pod hasłem
                    „zaufanie”.
                  </p>
                </div>

                <div>
                  <h3>🚀 Nasza filozofia tworzenia</h3>
                  <p>
                    Kreacje reklamowe mają być piękne i spójne z Twoją marką,
                    ale przede wszystkim — mają sprzedawać!{" "}
                    <strong>
                      Wierzymy, że najlepsza grafika to ta, która przynosi Ci
                      klientów i zyski.
                    </strong>{" "}
                    Nie martw się — nie poświęcimy estetyki, ale skuteczność
                    zawsze będzie na pierwszym miejscu.
                  </p>
                </div>
              </div>
            </section>
          </main>

          <footer className="bg-ada-white2 px-6 pt-[84px] pb-[100px] text-center max-[700px]:px-[22px] max-[700px]:pt-[68px] max-[700px]:pb-[76px]">
            <p className="m-0 text-sm leading-[1.35] italic">
              Przygotowane przez zespół kolektywu MAGIC ✨
              <br />
              Masz pytania? Napisz do nas na Trello — zawsze się cieszymy, gdy
              możemy pomóc!
            </p>
          </footer>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Kolektyw MAGIC — zasady współpracy"
    description="Przewodnik po współpracy z kolektywem MAGIC: komunikacja, przygotowanie kampanii, materiały, raportowanie i pierwsze wspólne kroki."
  />
)

export default KolektywNaStartPage
