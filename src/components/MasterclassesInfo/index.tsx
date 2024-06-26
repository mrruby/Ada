import React from "react"
import { MasterclassInfo } from "helpers/MasterclassInfo"
import { StaticImage } from "gatsby-plugin-image"

const efects1 = [
  "Umiesz ustawić kampanię, która zarówno buduje społeczność, jak i sprzedaje,",
  "Zbierasz osoby zainteresowane Twoją działalnością w bezpiecznym miejscu, niezależnym od algorytmów Meta,",
  "Budujesz solidne podstawy pod kampanie sprzedażowe!",
]

const efects2 = [
  "Ustawiasz kampanię reklamową z formularzem, która pozyskuje dla Ciebie leady nawet gdy siedzisz w samolocie lub leżysz na plaży",
  "Korzystasz z automatyzacji, dzięki której kontakty zebrane w formularzu (imię, adres e-mail) w mig trafiają z CRM-u Facebooka do systemu mailowego, np. MailerLite",
  "Budujesz baaaaaaardzo gładki proces: wypełnienie formularza, dodanie do listy, odpalenie automatycznej ścieżki zakupowej, która nie zależy od Twojego czasu!",
]

const efects3 = [
  "Umiesz ustawić kampanię sprzedażową do ciepłych i zimnych grup odbiorców,",
  "Optymalizujesz sprzedaż pod najskuteczniejsze grupy odbiorców,",
  "Zarabiasz na kampaniach reklamowych.",
]

const forWhomInfo = (
  <>
    To jest przedsprzedaż - dostęp do nagrania otrzymujesz{" "}
    <span className="font-bold">10.07.</span>. Od tego dnia możesz przerabiać
    materiały do woli przez następne 12 miesięcy - kiedy chcesz i ile razy
    chcesz!
  </>
)

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
              <span className="font-bold"> budowanie listy mailowej.</span>
            </>
          }
          efects={efects1}
          forWhom="To może być Twoja pierwsza kampania Meta Ads. Zapraszam też osoby, które ustawiały już proste kampanie i chcą nauczyć się bardziej skomplikowanych działań reklamowych!"
          forWhomInfo={forWhomInfo}
          btn="Case study z kampanii z listą mailową"
          btnUrl=""
          purpose="różne grupy zimne bazując na zainteresowaniach, lookalike, grupa ciepła"
          cost="4532,13 zł"
          time="2 miesiące"
          amount="18 x 2499 zł"
          groups="różne grupy zimne bazując na zainteresowaniach, lookalike, grupa ciepła"
          value="44 982 zł"
          people="1115"
          roas="9,92"
          image={
            <div className="md:absolute left-[-18vw] top-[180px]">
              <StaticImage
                loading="eager"
                src={"../../images/masterclass1.webp"}
                alt="Ada Promis - hero"
                placeholder="none"
                width={525}
                height={706}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          }
          imageInfo={
            <div className="mb-6">
              <StaticImage
                loading="eager"
                src={"../../images/masterclass1Info.webp"}
                alt="Ada Promis - hero"
                placeholder="none"
                width={1188}
                height={152}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          }
        />
      )}
      {version === 2 && (
        <MasterclassInfo
          title="Masterclass 2"
          subtitle1="(MaKE)"
          subtitle2={
            <>
              Nauczysz się,{" "}
              <span className="font-bold">
                jak pozyskać kontakty za pomocą formularza na Facebooku.
              </span>{" "}
              Bez strony WWW, z darmowym i prostym w obsłudze narzędziem do
              automatyzacji - MAKE.
            </>
          }
          efects={efects2}
          forWhom="To może być Twoje pierwsze spotkanie z formularzami i MAKE. Zapraszam też osoby, które mają już za sobą pierwsze kampanie z formularzami i chcą nauczyć się je automatyzować."
          forWhomInfo={forWhomInfo}
          btn="Case study z kampanii z formularzem Facebooka"
          btnUrl=""
          purpose="zbieranie zapisów na webinar"
          cost="128,58 zł"
          time="3 dni"
          amountOfContacts="26"
          groups="grupy zimne związane z profilem działalności klientki — pracownicy korporacji, mamy"
          costOfContacts="4,95 zł"
          addInfo={
            <p className="pt-10">
              Równolegle przeprowadziłam kampanię, w której zapis na webinar
              odbywał się przez standardowy formularz na stronie. Koszt zapisu
              wyniósł 7,09 zł. Bez strony WWW, z darmowym i prostym w obsłudze
              narzędziem do automatyzacji - MAKE. <p />
              <p className="font-bold mt-5">
                Koszt zapisu przez zautomatyzowaną kampanię z MAKE był o 30%
                niższy!
              </p>
            </p>
          }
          image={
            <div className="md:absolute xl:right-[-3vw] top-[220px]">
              <StaticImage
                loading="eager"
                src={"../../images/masterclass2.webp"}
                alt="Ada Promis - hero"
                placeholder="none"
                width={425}
                height={572}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          }
          imageInfo={
            <div className="mb-6">
              <StaticImage
                loading="eager"
                src={"../../images/masterclass2Info.webp"}
                alt="Ada Promis - hero"
                placeholder="none"
                width={1140}
                height={132}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          }
        />
      )}
      {version === 3 && (
        <MasterclassInfo
          title="Masterclass 3"
          subtitle1="(remarketing & sprzedaż)"
          subtitle2={
            <>
              Nauczysz się: jak ustawić
              <br />
              <span className="font-bold"> kampanię sprzedażową od A do Z</span>
            </>
          }
          efects={efects3}
          forWhom="Kampanie sprzedażowe to wisienka na torcie. Zadziałają najlepiej, jeśli prowadzisz już kampanie na wcześniejszych etapach lejka. Moja rada: zacznij od masterclassów o MAKE & liście mailowej, a potem wróć do tego masterclassu."
          forWhomInfo={forWhomInfo}
          btn="Case study z kampanii sprzedażowej"
          btnUrl=""
          btnStyle="xl:bg-ada-pink5 xl:min-w-[60vw] xl:ml-[-40vw] flex justify-right h-[80px] xl:mt-20"
          btnMargin="xl:mr-[0vw]"
          purpose="kampania sprzedażowa podczas akcji promocyjnej (remarketing)"
          cost="203,72 zł"
          time="5 dni"
          amount="20"
          groups="osoby zapisane na newsletter (kampania na listę mailową here!👋) oraz osoby odwiedzające sklep w ostatnim miesiącu"
          value="3645,80 zł"
          people="1115"
          roas="17,90"
          image={
            <div className="md:absolute xl:left-[-8vw] top-[88px]">
              <StaticImage
                loading="eager"
                src={"../../images/masterclass3.webp"}
                alt="Ada Promis - hero"
                placeholder="none"
                width={357}
                height={707}
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
                alt="Ada Promis - hero"
                placeholder="none"
                width={960}
                height={170}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          }
        />
      )}
    </>
  )
}

export default MasterclassesInfo
