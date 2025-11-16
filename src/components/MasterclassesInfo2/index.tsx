import { StaticImage } from "gatsby-plugin-image"
import { MasterclassInfo3 } from "helpers/MasterclassInfo3"
import React from "react"

const efects1 = [
  "Zwiększasz liczbę obserwujących o zaangażowanych użytkowników (nie boty!)",
  "Budujesz społeczność prawdziwych fanów Twojej marki na Instagram",
  "Twój profil zyskuje na wiarygodności dzięki większej liczbie aktywnych obserwujących",
]

const efects2 = [
  "Umiesz ustawić kampanię, która zarówno buduje społeczność gotową do zakupuUmiesz ustawić kampanię, która zarówno buduje społeczność gotową do zakupu",
  "Uniezależniasz się od reklam: zbierasz grupę osób poza Instagramem i Facebookiem, co w połączeniu z adsami daje świetne efekty!",
  "Tu powinnam napisać, że budujesz podstawy pod sprzedaż… ale sama zobacz obok: te kampanie potrafią już sprzedawać!",
]

const efects3 = [
  "Umiesz ustawić kampanię sprzedażową do ciepłych i zimnych grup odbiorców,",
  "Trafiasz do osób, które najchętniej kupią Twój produkt",
  "Zarabiasz! Twoje zarobki przestają być uzależnione od czasu",
]

const MasterclassesInfo2 = ({ version }: { version: number }) => {
  return (
    <>
      {version === 1 && (
        <div id="masterclass-2">
          <MasterclassInfo3
            title="Masterclass 1"
            subtitle1={<>Wartościowe follow na Instagramie</>}
            subtitle2={
              <>
                Z Tym masterclassem stworzysz reklamę, która zapewni Ci stały
                przypływ nowych obserwujących na Instagramie!
              </>
            }
            subtitle3="Case study z kampanii kierującej na Instagrama"
            efects={efects1}
            forWhom="Prowadzisz profil na Instagramie? Wystarczy! To najprostsza kampania, która może zaskoczyć Cię efektami. O resztę się nie martw: razem z nagraniami i instrukcją przeprowadzę Cię krok po kroku przez ustawienie reklamy! "
            forWhomInfo=""
            btn="Chcę ustawić taką kampanię dla siebie!"
            paragraph={
              <>
                Monice zależało, żeby jej konto na Instagramie regularnie się
                rozwijało. Dzięki dobrze zaplanowanej kampanii na pozyskanie
                obserwujących{" "}
                <b>
                  {" "}
                  w ciągu 6 miesięcy zyskała 9306 nowych obserwujących.
                  <br />
                  Dodatkowy efekt? 43 osoby przesłały zapytania
                </b>{" "}
                o możliwość wykupienia zajęć językowych.
              </>
            }
            paragraph2={
              <div className="max-w-[600px] mx-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="flex flex-col md:table-row">
                      <td className="md:max-w-[300px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Czas trwania kampanii:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          6 miesięcy (styczeń-czerwiec 2025)
                        </p>
                      </td>
                      <td className="md:max-w-[120px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Liczba nowych obserwujących:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          9306
                        </p>
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="md:max-w-[300px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Wydany budżet:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          5781,47 zł
                        </p>
                      </td>
                      <td className="md:max-w-[120px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Liczba zapytań o zajęcia (dodatkowo):
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          43
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mx-auto">
                  <StaticImage
                    loading="eager"
                    src={"../../images/masterclass1Infov2-2.webp"}
                    alt="Ada Promis"
                    placeholder="blurred"
                    width={580}
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>
              </div>
            }
            image={
              <div>
                <div className="hidden lg:block md:absolute left-[-90px] lg:-bottom-[80px]">
                  <StaticImage
                    loading="eager"
                    src={"../../images/protip1.webp"}
                    alt="Ada Promis"
                    placeholder="blurred"
                    width={360}
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>
                <div className="block lg:hidden mt-2 -mb-5">
                  <StaticImage
                    loading="eager"
                    src={"../../images/protip1M.webp"}
                    alt="Ada Promis"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>
              </div>
            }
            imageInfo={
              <div>
                <div className="hidden lg:block mb-2">
                  <StaticImage
                    loading="eager"
                    src={"../../images/masterclass1Infov2.webp"}
                    alt="Ada Promis - masterclass"
                    placeholder="blurred"
                    width={980}
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>
                <div className="block lg:hidden mb-2">
                  <StaticImage
                    loading="eager"
                    src={"../../images/masterclass1M.webp"}
                    alt="Ada Promis - masterclass"
                    placeholder="blurred"
                    width={340}
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>
              </div>
            }
          />
        </div>
      )}
      {version === 2 && (
        <MasterclassInfo3
          title="Masterclass 2"
          subtitle1={<>reklama, która buduje listę mailingową</>}
          subtitle2={
            <>
              Nauczysz się, jak ustawić kampanię, która będzie fundamentem
              Twojego biznesu
            </>
          }
          subtitle3="Case study kampanii z listą mailową"
          efects={efects2}
          forWhom="To może być Twoja pierwsza kampania Meta Ads. Zapraszam też osoby, które ustawiały już proste kampanie i chcą nauczyć się bardziej skomplikowanych działań reklamowych!"
          forWhomInfo=""
          btn="To jest to!"
          btnMargin="bg-ada-magicOrange"
          paragraph2={
            <>
              <table className="w-full">
                <tbody>
                  <tr className="flex flex-col md:table-row">
                    <td className="md:max-w-[300px]">
                      <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                        Cel kampanii:
                      </h4>
                      <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                        kampania z celem zapis na listę mailową; po dołączeniu
                        subskrybenci otrzymują one time offer na dostęp do
                        platformy kursowej
                      </p>
                    </td>
                    <td className="md:max-w-[120px]">
                      <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                        Wartość zakupów:
                      </h4>
                      <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                        69 972 zł
                      </p>
                    </td>
                  </tr>
                  <tr className="flex flex-col md:table-row">
                    <td className="md:max-w-[300px]">
                      <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                        Czas trwania kampanii:
                      </h4>
                      <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                        2 miesiące
                      </p>
                    </td>
                    <td className="md:max-w-[120px]">
                      <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                        ROAS:
                      </h4>
                      <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                        10,15
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col lg:flex-row">
                <table>
                  <tbody>
                    <tr className="flex flex-col md:table-row">
                      <td className="md:max-w-[200px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Liczba osób, która wypełniła formularz zapisu:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          1949
                        </p>
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="md:max-w-[200px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Wydany budżet:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          6892,61 zł
                        </p>
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="md:max-w-[200px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Ilość zakupów:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          28 x 2499 zł
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mx-auto lg:min-w-[500px]">
                  <StaticImage
                    loading="eager"
                    src={"../../images/masterclass2Infov2-2.webp"}
                    alt="Ada Promis"
                    placeholder="blurred"
                    width={620}
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>
              </div>
            </>
          }
          image={
            <div>
              <div className="hidden lg:block md:absolute left-[-90px] -bottom-[10px]">
                <StaticImage
                  loading="eager"
                  src={"../../images/protip2.webp"}
                  alt="Ada Promis"
                  placeholder="blurred"
                  width={380}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
              <div className="block lg:hidden mt-2 -mb-5">
                <StaticImage
                  loading="eager"
                  src={"../../images/protip2M.webp"}
                  alt="Ada Promis"
                  placeholder="blurred"
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            </div>
          }
          imageInfo={
            <div>
              <div className="hidden lg:block mb-2">
                <StaticImage
                  loading="eager"
                  src={"../../images/masterclass2Infov2.webp"}
                  alt="Ada Promis - masterclass"
                  placeholder="blurred"
                  width={980}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
              <div className="block lg:hidden mb-2">
                <StaticImage
                  loading="eager"
                  src={"../../images/masterclass2M.webp"}
                  alt="Ada Promis - masterclass"
                  placeholder="blurred"
                  width={340}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            </div>
          }
        />
      )}
      {version === 3 && (
        <div id="masterclass-3">
          <MasterclassInfo3
            title="Masterclass 3"
            subtitle1={<>reklamy, które sprzedają</>}
            subtitle2={
              <>
                Nauczysz się: jak ustawić{" "}
                <span className="font-bold">
                  kampanię sprzedażową od A do Z
                </span>
              </>
            }
            subtitle3="Case study z kampanii sprzedażowej"
            efects={efects3}
            forWhom="Kampanie sprzedażowe to wisienka na torcie. Zadziałają najlepiej, jeśli prowadzisz już kampanie na wcześniejszych etapach lejka. Moja rada: zacznij od masterclassów o Instaramie i liście mailowej, a potem wróć do tego masterclassu."
            forWhomInfo=""
            btn="Sprzedaję skutecznie!"
            paragraph={
              <>
                Ani zależało na zdobyciu nowych klientów i powiększeniu swojej
                społeczności.{" "}
                <b>
                  Promocja webinaru ze ścieżką sprzedażową dała podwójny efekt:
                  10 376 osób zapisało się na webinar, a 172 osoby kupiły kurs.
                </b>{" "}
                Sprzedaż nadal trwa, mimo że kampania została już zakończona.
              </>
            }
            paragraph2={
              <div className="max-w-[600px] mx-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="flex flex-col md:table-row">
                      <td className="md:max-w-[300px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Cel kampanii:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          Sprzedaż kursu dla właścicieli lokalnych firm, nie
                          podajemy nazwy
                        </p>
                      </td>
                      <td className="md:max-w-[200px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Wydany budżet:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          55 858 zł
                        </p>
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="md:max-w-[300px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Czas trwania kampanii:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          14 miesięcy (lipiec 2024 - wrzesień 2025)
                        </p>
                      </td>
                      <td className="md:max-w-[200px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Liczba osób, które zapisały się na webinar:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          10 376
                        </p>
                      </td>
                    </tr>
                    <tr className="flex flex-col md:table-row">
                      <td className="md:max-w-[300px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Grupy docelowe:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          osoby zainteresowane marketingiem, właściciele
                          lokalnych biznesów
                        </p>
                      </td>
                      <td className="md:max-w-[200px]">
                        <h4 className="font-bold text-adaMin md:text-adaStandard w-fit pt-1 pr-1">
                          Liczba sprzedanych kursów:
                        </h4>
                        <p className="pr-4 text-adaMin md:text-adaStandard mb-2">
                          172, około 120 000 złotych
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mx-auto">
                  <StaticImage
                    loading="eager"
                    src={"../../images/masterclass3Infov2-2.webp"}
                    alt="Ada Promis"
                    placeholder="blurred"
                    width={500}
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>
              </div>
            }
            image={
              <div>
                <div className="hidden lg:block md:absolute left-[-90px] bottom-[54px]">
                  <StaticImage
                    loading="eager"
                    src={"../../images/protip3.webp"}
                    alt="Ada Promis"
                    placeholder="blurred"
                    width={380}
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>
                <div className="block lg:hidden mt-2 -mb-5">
                  <StaticImage
                    loading="eager"
                    src={"../../images/protip3M.webp"}
                    alt="Ada Promis"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>
              </div>
            }
            imageInfo={
              <div>
                <div className="hidden lg:block mb-2">
                  <StaticImage
                    loading="eager"
                    src={"../../images/masterclass3Infov2.webp"}
                    alt="Ada Promis - masterclass"
                    placeholder="blurred"
                    width={980}
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>
                <div className="block lg:hidden mb-2">
                  <StaticImage
                    loading="eager"
                    src={"../../images/masterclass2M.webp"}
                    alt="Ada Promis - masterclass"
                    placeholder="blurred"
                    width={340}
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>
              </div>
            }
          />
        </div>
      )}
    </>
  )
}

export default MasterclassesInfo2
