import { StaticImage } from "gatsby-plugin-image"
import { MasterclassInfo } from "helpers/MasterclassInfo"
import { MasterclassInfo2 } from "helpers/MasterclassInfo2"
import React from "react"

const efects1 = [
  "Umiesz ustawić kampanię, która zarówno buduje społeczność, jak i sprzedaje,",
  "Zbierasz osoby zainteresowane Twoją działalnością w bezpiecznym miejscu, niezależnym od algorytmów Meta,",
  "Budujesz solidne podstawy pod kampanie sprzedażowe!",
]

const efects2 = [
  "Zwiększasz liczbę obserwujących o zaangażowanych użytkowników (nie boty!)",
  "Budujesz społeczność prawdziwych fanów Twojej marki na Instagram",
  "Twój profil zyskuje na wiarygodności dzięki większej liczbie aktywnych obserwujących",
]

const efects3 = [
  "Umiesz ustawić kampanię sprzedażową do ciepłych i zimnych grup odbiorców,",
  "Optymalizujesz sprzedaż pod najskuteczniejsze grupy odbiorców,",
  "Zarabiasz na kampaniach reklamowych.",
]

const MasterclassesInfo = ({ version }: { version: number }) => {
  return (
    <>
      {version === 1 && (
        <MasterclassInfo
          title="Masterclass 1"
          subtitle1="Ustaw reklamę na listę mailingową"
          subtitle2={
            <>
              Nauczysz się, jak ustawić kampanię, której <br /> celem jest
              <span className="font-bold"> budowanie listy mailowej.</span>
            </>
          }
          efects={efects1}
          forWhom="To może być Twoja pierwsza kampania Meta Ads. Zapraszam też osoby, które ustawiały już proste kampanie i chcą nauczyć się bardziej skomplikowanych działań reklamowych!"
          forWhomInfo=""
          btn="Case study z kampanii z listą mailową"
          sectionId="masterclass-2"
          purpose="kampania z celem zapis na listę mailową. Po dołączeniu subskrybenci otrzymują one time offer na dostęp do platformy kursowej"
          cost="6892,61 zł"
          time="2 miesiące"
          amount="28 x 2499 zł"
          groups="różne grupy zimne bazując na zainteresowaniach, lookalike, grupa ciepła"
          value="69 972 zł"
          people="1949"
          roas="10,15"
          image={
            <div className="md:hidden lg:hidden xl:block md:absolute left-[-12vw] top-[180px]">
              <StaticImage
                loading="eager"
                src={"../../images/masterclass1.webp"}
                alt="Ada Promis"
                placeholder="blurred"
                width={447}
                height={781}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          }
          imageInfo={
            <div className="mb-6">
              <StaticImage
                loading="eager"
                src={"../../images/case-study-1-original.webp"}
                alt="Ada Promis - masterclass"
                placeholder="blurred"
                width={1100}
                height={200}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          }
        />
      )}
      {version === 2 && (
        <div id="masterclass-2">
          <MasterclassInfo
            title="Masterclass 2"
            subtitle1="Kampanie na Instagram, które przyciągają odbiorców"
            subtitle2={
              <>
                Stworzysz kampanię na IG, która tworzy solidne fundamenty pod
                sprzedaż
              </>
            }
            efects={efects2}
            forWhom="Dla każdego, kto chce skalować biznes w świadomy sposób"
            forWhomInfo=""
            btn="Case study z kampanii kierującej na Instagrama"
            sectionId="masterclass-3"
            purpose="budowanie świadomości marki, wzrost liczby obserwujących i zaangażowania na profilu"
            cost="4810,98 zł"
            time="5 miesięcy"
            amountOfContacts="40"
            groups="jedna, najlepsza, wybrana na podstawie wyników z poprzednich miesięcy"
            addInfo={
              <div className="pt-10 text-adaMin md:text-adaStandard">
                <p>
                  <span className="font-bold">
                    Liczba nowych obserwujących:
                  </span>{" "}
                  11 125
                </p>
                <p className="mt-2">
                  <span className="font-bold">Wartość jednego klienta:</span>{" "}
                  540 zł miesięcznie (usługa płatna cyklicznie)
                </p>
                <p className="mt-2">
                  <span className="font-bold">Zysk:</span> 10800 zł miesięcznie
                  (zakładając, połowa osób decyduje się na skorzystanie z
                  usługi)
                </p>
              </div>
            }
            image={
              <div className="md:hidden lg:hidden xl:block md:absolute xl:right-[-10vw] top-[50px]">
                <StaticImage
                  loading="eager"
                  src={"../../images/masterclass2.webp"}
                  alt="Ada Promis"
                  placeholder="blurred"
                  width={400}
                  height={600}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            }
            imageInfo={
              <div className="mb-6">
                <StaticImage
                  loading="eager"
                  src={"../../images/case-study-2-original.webp"}
                  alt="Ada Promis - masterclass"
                  placeholder="blurred"
                  width={1300}
                  height={120}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            }
          />
        </div>
      )}
      {version === 3 && (
        <div id="masterclass-3">
          <MasterclassInfo
            title="Masterclass 3"
            subtitle1="Ustaw reklamę na sprzedaż"
            subtitle2={
              <>
                Nauczysz się: jak ustawić
                <br />
                <span className="font-bold">
                  {" "}
                  kampanię sprzedażową od A do Z
                </span>
              </>
            }
            efects={efects3}
            forWhom="Kampanie sprzedażowe to wisienka na torcie. Zadziałają najlepiej, jeśli prowadzisz już kampanie na wcześniejszych etapach lejka. Moja rada: zacznij od masterclassów o MAKE & liście mailowej, a potem wróć do tego masterclassu."
            forWhomInfo=""
            btn="Case study z kampanii sprzedażowej"
            purpose="kampania sprzedażowa podczas akcji promocyjnej (remarketing)"
            cost="203,72 zł"
            time="5 dni"
            amount="21"
            groups="osoby zapisane na newsletter (kampania na listę mailową here!👋) oraz osoby odwiedzające sklep w ostatnim miesiącu"
            value="3900,80 zł"
            people="1115"
            roas="17,90"
            image={
              <div className="md:hidden lg:hidden xl:block md:absolute xl:left-[-11vw] top-[14px]">
                <StaticImage
                  loading="eager"
                  src={"../../images/masterclass3.webp"}
                  alt="Ada Promis"
                  placeholder="blurred"
                  width={418}
                  height={733}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            }
            imageInfo={
              <div className="mb-6">
                <StaticImage
                  loading="eager"
                  src={"../../images/masterclass3Info.webp"}
                  alt="Ada Promis - masterclass"
                  placeholder="blurred"
                  width={800}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            }
          />
        </div>
      )}
      {version === 4 && (
        <MasterclassInfo2
          title="Masterclass 1"
          subtitle1="Ustaw reklamę na listę mailingową"
          subtitle2={
            <>
              Nauczysz się, jak ustawić kampanię, której <br /> celem jest
              <span className="font-bold"> budowanie listy mailowej.</span>
            </>
          }
          subtitle3="Case study kampanii z listą mailową"
          efects={efects1}
          forWhom="To może być Twoja pierwsza kampania Meta Ads. Zapraszam też osoby, które ustawiały już proste kampanie i chcą nauczyć się bardziej skomplikowanych działań reklamowych!"
          forWhomInfo=""
          btn="BUDUJĘ MAILING!"
          sectionId="masterclass-2"
          purpose="kampania z celem zapis na listę mailową. Po dołączeniu subskrybenci otrzymują one time offer na dostęp do platformy kursowej"
          cost="6892,61 zł"
          time="2 miesiące"
          amount="28 x 2499 zł"
          groups="różne grupy zimne bazując na zainteresowaniach, lookalike, grupa ciepła"
          value="69 972 zł"
          people="1949"
          roas="10,15"
          image={
            <div className="md:hidden lg:hidden xl:block md:absolute left-0 top-[-30px]">
              <StaticImage
                loading="eager"
                src={"../../images/masterclass4.webp"}
                alt="Ada Promis"
                placeholder="blurred"
                width={447}
                height={781}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          }
          imageInfo={
            <div className="mb-6">
              <StaticImage
                loading="eager"
                src={"../../images/case-study-1-original.webp"}
                alt="Ada Promis - masterclass"
                placeholder="blurred"
                width={1100}
                height={200}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          }
        />
      )}
      {version === 5 && (
        <div id="masterclass-2">
          <MasterclassInfo2
            title="Masterclass 2"
            subtitle1="Kampanie na Instagram, które przyciągają odbiorców"
            subtitle2={
              <>
                Stworzysz kampanię na IG, która tworzy solidne fundamenty pod
                sprzedaż
              </>
            }
            subtitle3="Case study z kampanii kierującej na Instagrama"
            efects={efects2}
            forWhom="Dla każdego, kto chce skalować biznes w świadomy sposób"
            forWhomInfo=""
            btn="Rozwijam instagrama!"
            sectionId="masterclass-3"
            purpose="budowanie świadomości marki, wzrost liczby obserwujących i zaangażowania na profilu"
            cost="4810,98 zł"
            time="5 miesięcy"
            amountOfContacts="40"
            groups="jedna, najlepsza, wybrana na podstawie wyników z poprzednich miesięcy"
            addInfo={
              <div className="pt-10 text-adaMin md:text-adaStandard">
                <p>
                  <span className="font-bold">
                    Liczba nowych obserwujących:
                  </span>{" "}
                  11 125
                </p>
                <p className="mt-2">
                  <span className="font-bold">Wartość jednego klienta:</span>{" "}
                  540 zł miesięcznie (usługa płatna cyklicznie)
                </p>
                <p className="mt-2">
                  <span className="font-bold">Zysk:</span> 10800 zł miesięcznie
                  (zakładając, połowa osób decyduje się na skorzystanie z
                  usługi)
                </p>
              </div>
            }
            image={
              <div className="md:hidden lg:hidden xl:block md:absolute left-0 top-[120px]">
                <StaticImage
                  loading="eager"
                  src={"../../images/masterclass5.webp"}
                  alt="Ada Promis"
                  placeholder="blurred"
                  width={400}
                  height={600}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            }
            imageInfo={
              <div className="mb-6">
                <StaticImage
                  loading="eager"
                  src={"../../images/case-study-2-original.webp"}
                  alt="Ada Promis - masterclass"
                  placeholder="blurred"
                  width={1300}
                  height={120}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            }
          />
        </div>
      )}
      {version === 6 && (
        <div id="masterclass-3">
          <MasterclassInfo2
            title="Masterclass 3"
            subtitle1="Ustaw reklamę na sprzedaż"
            subtitle2={
              <>
                Nauczysz się: jak ustawić
                <br />
                <span className="font-bold">
                  {" "}
                  kampanię sprzedażową od A do Z
                </span>
              </>
            }
            subtitle3="Case study z kampanii sprzedażowej"
            efects={efects3}
            forWhom="Kampanie sprzedażowe to wisienka na torcie. Zadziałają najlepiej, jeśli prowadzisz już kampanie na wcześniejszych etapach lejka. Moja rada: zacznij od masterclassów o MAKE & liście mailowej, a potem wróć do tego masterclassu."
            forWhomInfo=""
            btn="Sprzedaję skutecznie!"
            purpose="kampania sprzedażowa podczas akcji promocyjnej (remarketing)"
            cost="203,72 zł"
            time="5 dni"
            amount="21"
            groups="osoby zapisane na newsletter (kampania na listę mailową here!👋) oraz osoby odwiedzające sklep w ostatnim miesiącu"
            value="3900,80 zł"
            people="1115"
            roas="17,90"
            image={
              <div className="md:hidden lg:hidden xl:block md:absolute left-0 top-[-60px]">
                <StaticImage
                  loading="eager"
                  src={"../../images/masterclass6.webp"}
                  alt="Ada Promis"
                  placeholder="blurred"
                  width={418}
                  height={780}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            }
            imageInfo={
              <div className="mb-6">
                <StaticImage
                  loading="eager"
                  src={"../../images/masterclass3Info.webp"}
                  alt="Ada Promis - masterclass"
                  placeholder="blurred"
                  width={800}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            }
          />
        </div>
      )}
    </>
  )
}

export default MasterclassesInfo
