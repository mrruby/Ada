import React from "react"
import { MasterclassInfo } from "helpers/MasterclassInfo"

const efects1 = [
  "Umiesz ustawić kampanię, która zarówno buduje społeczność, jak i sprzedaje,",
  "Zbierasz osoby zainteresowane Twoją działalnością w bezpiecznym miejscu, niezależnym od algorytmów Meta,",
  "Budujesz solidne podstawy pod kampanie sprzedażowe!",
]

const efects2 = [
  "Umiesz ustawić kampanię z automatyzacją ManyChat,",
  "Tworzysz zaangażowaną społeczność - ocieplasz zimne grupy odbiorców,",
  "Budujesz solidne podstawy pod kampanie sprzedażowe!",
]

const efects3 = [
  "Umiesz ustawić kampanię sprzedażową do ciepłych i zimnych grup odbiorców,",
  "Optymalizujesz sprzedaż pod najskuteczniejsze grupy odbiorców,",
  "Zarabiasz na kampaniach reklamowych.",
]

const MasterclassesInfo = ({ version }: { version: number }): JSX.Element => {
  return (
    <>
      {version === 1 && (
        <MasterclassInfo
          title="Masterclass 1"
          subtitle1="(lista mailowa)"
          subtitle2={
            <>
              Nauczysz się, jak ustawić kampanię, której <br /> celem jest
              budowanie <span className="font-bold">listy mailowej.</span>
            </>
          }
          efects={efects1}
          forWhom="To może być Twoja pierwsza kampania Meta Ads. Zapraszam też osoby, które ustawiały już proste kampanie i chcą nauczyć się bardziej skomplikowanych działań reklamowych!"
          forWhomInfo="Dostajesz dostęp na 12 miesięcy od razu po zakupie. Przerabiaj kiedy chcesz i ile razy chcesz!"
          btn="Case study z kampanii z listą mailową"
          btnUrl=""
          purpose="kampania z celem zapis na listę mailową. Po dołączeniu subskrybenci otrzymują one time offer na dostęp do platformy kursowej"
          cost="4532,13 zł"
          time="2 miesiące"
          amount="18 x 2499 zł"
          groups="różne grupy zimne bazując na zainteresowaniach, lookalike, grupa ciepła"
          value="44 982 zł"
          people="1115"
          roas="9,92"
        />
      )}
      {version === 2 && (
        <MasterclassInfo
          title="Masterclass 2"
          subtitle1="(ManyChat)"
          subtitle2={
            <>
              Nauczysz się, jak ustawić kampanię na Instagramie z automatyzacją
              <span className="font-bold"> ManyChat.</span>
            </>
          }
          efects={efects2}
          forWhom="To może być Twoja pierwsza kampania Meta Ads. Zapraszam też osoby, które ustawiały już proste kampanie i chcą nauczyć się bardziej skomplikowanych działań reklamowych!"
          forWhomInfo="Dostajesz dostęp na 12 miesięcy od razu po zakupie. Przerabiaj kiedy chcesz i ile razy chcesz!"
          btn="Case study"
          btnUrl=""
          purpose="kampania z celem zapis na listę mailową. Po dołączeniu subskrybenci otrzymują one time offer na dostęp do platformy kursowej"
          cost="4532,13 zł"
          time="2 miesiące"
          amount="18 x 2499 zł"
          groups="różne grupy zimne bazując na zainteresowaniach, lookalike, grupa ciepła"
          value="44 982 zł"
          people="1115"
          roas="9,92"
        />
      )}
      {version === 3 && (
        <MasterclassInfo
          title="Masterclass 3"
          subtitle1="(remarketing & sprzedaż)"
          subtitle2={
            <>
              Nauczysz się: jak ustawić
              <span className="font-bold"> kampanię sprzedażową od A do Z</span>
            </>
          }
          efects={efects3}
          forWhom="Kampanie sprzedażowe to wisienka na torcie. Zadziałają najlepiej, jeśli prowadzisz już kampanie na wcześniejszych etapach lejka. Moja rada: zacznij od masterclassów o ManyChacie & liście mailowej, a potem wróć do tego masterclassu."
          forWhomInfo="Dostajesz dostęp na 12 miesięcy od razu po zakupie. Przerabiaj kiedy chcesz i ile razy chcesz!"
          btn="Case study z kampanii sprzedażowej"
          btnUrl=""
          purpose="kampania sprzedażowa podczas akcji promocyjnej (remarketing)"
          cost="203,72 zł"
          time="5 dni"
          amount="20"
          groups="osoby zapisane na newsletter (kampania na listę mailową here!👋) oraz osoby odwiedzające sklep w ostatnim miesiącu"
          value="3645,80 zł"
          people="1115"
          roas="17,90"
        />
      )}
    </>
  )
}

export default MasterclassesInfo
