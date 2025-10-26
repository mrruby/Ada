import { StaticImage } from "gatsby-plugin-image"
import { MasterclassInfo3 } from "helpers/MasterclassInfo3"
import React from "react"

const efects1 = [
  "Zwiększasz liczbę obserwujących o zaangażowanych użytkowników (nie boty!)",
  "Budujesz społeczność prawdziwych fanów Twojej marki na Instagram",
  "Twój profil zyskuje na wiarygodności dzięki większej liczbie aktywnych obserwujących",
]

const efects2 = [
  "Umiesz ustawić kampanię, która zarówno buduje społeczność gotową do zakupu",
  "Zbierasz osoby zainteresowane Twoją działalnością w bezpiecznym miejscu, niezależnym od algorytmów Meta,",
  "Budujesz solidne podstawy pod kampanie sprzedażowe!",
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
            subtitle1={
              <>
                <span className="font-bold">Kampania,</span> która powiększa
                Twój instagram
              </>
            }
            subtitle2={
              <>
                Stworzysz kampanię na IG, która tworzy{" "}
                <span className="font-bold">
                  solidne fundamenty pod sprzedaż
                </span>
              </>
            }
            subtitle3="Case study kampanii z listą mailową"
            efects={efects1}
            forWhom="Dla każdego, kto chce skalować biznes w świadomy sposób"
            forWhomInfo=""
            tip="Czy wiesz, że kampanie budujące społeczność na Instagramie już mogą generować pierwsze zakupy? Zadbaj o jakość społeczności, a każdy nowy obserwujący stanie się potencjalnym klientem."
            btn="Rozwijam instagrama!"
            sectionId="masterclass-1"
            purpose="budowanie świadomości marki, wzrost liczby obserwujących i zaangażowania na profilu"
            cost="4810,98 zł"
            time="5 miesięcy"
            amount="40"
            groups="jedna, najlepsza, wybrana na podstawie wyników z poprzednich miesięcy"
            value="4,95 zł"
            people="11 125"
            roas="10 800 zł miesięcznie (zakładając, połowa osób decyduje się na skorzystanie z usługi)"
            roasLabel="Zysk"
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
        </div>
      )}
      {version === 2 && (
        <MasterclassInfo3
          title="Masterclass 2"
          subtitle1={
            <>
              reklama, która buduje
              <span className="font-bold"> listę mailingową </span>
            </>
          }
          subtitle2={
            <>
              Nauczysz się, jak ustawić kampanię, która będzie fundamentem
              Twojego biznesu
            </>
          }
          subtitle3="Case study kampanii z listą mailową"
          efects={efects2}
          forWhom="Dla każdego, kto chce skalować biznes w świadomy sposób"
          forWhomInfo=""
          tip="Czy wiesz, że kampanie budujące społeczność na Instagramie już mogą generować pierwsze zakupy? Zadbaj o jakość społeczności, a każdy nowy obserwujący stanie się potencjalnym klientem."
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
      {version === 3 && (
        <div id="masterclass-3">
          <MasterclassInfo3
            title="Masterclass 3"
            subtitle1={
              <>
                reklamy, które
                <span className="font-bold"> sprzedają</span>
              </>
            }
            subtitle2={
              <>
                Nauczysz się: jak ustawić{" "}
                <span className="font-bold">
                  kampanię sprzedażową od A do Z
                </span>
              </>
            }
            subtitle3="Case study z kampanii sprzedażowej"
            textColor="text-white"
            efects={efects3}
            forWhom="Kampanie sprzedażowe to wisienka na torcie. Zadziałają najlepiej, jeśli prowadzisz już kampanie na wcześniejszych etapach lejka. Moja rada: zacznij od masterclassów o Instaramie i liście mailowej, a potem wróć do tego masterclassu."
            forWhomInfo=""
            tip="Psst! Remarketing to najskuteczniejsze kampanie sprzedażowe - możesz je prowadzić nawet z małym budżetem i niewielką grupą fanów."
            btn="Sprzedaję skutecznie!"
            purpose="kampania sprzedażowa podczas akcji promocyjnej (remarketing)"
            cost="203,72 zł"
            time="5 dni"
            amount="21"
            groups="osoby zapisane na newsletter (patrz: kampania na listę mailową!👋) oraz osoby odwiedzające sklep w ostatnim miesiącu"
            value="3900,80 zł"
            people="1115"
            roas="19,15"
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

export default MasterclassesInfo2
