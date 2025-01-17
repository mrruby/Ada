import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const peopleContent = [
  {
    name: "Adrianna Promis-Urbas",
    description:
      "Kreatywna dusza i mózg MAGIC. Specjalizuje się w kampaniach Meta Ads i marketingu zbudowanym na relacjach.",
    img: "",
  },
  {
    name: "Justyna Król",
    description:
      "Socjolożka i zaklinaczka słów. Tworzy teksty reklamowe budujące autentyczne relacje między marką a klientami.",
    img: "",
  },
  {
    name: "Dorota Woźniak",
    description:
      "Architektka z pasją do projektowania. Zamienia nudne reklamy w przyciągające wzrok kreacje graficzne.",
    img: "",
  },
  {
    name: "Marianna Ciniak",
    description:
      "Ekspertka od automatyzacji i psycholożka. Doskonale wie, jak zautomatyzować Twój biznes i pomoże Ci to zrobić.",
    img: "",
  },
  {
    name: "Nicola Kut",
    description:
      "Analityczka biznesu-to-be, dla której żadne liczby i raporty nie są straszne. Przeprowadza researche, tworzy kampanie i ogarnia kulisty pracy. .",
    img: "",
  }
]

const MagicBioBanner = ({ version }: { version: number }): JSX.Element => {

  return (
    <>
      <Section>
        {version == 1 && (

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
            {/* Left column: Circular image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden mx-auto md:mx-0">
                <div className="object-cover w-full h-full">
                  <StaticImage
                    src="../../images/ada_portrait.webp"
                    alt="Ada Promis-Urbas"
                    placeholder="blurred"
                    layout="fixed"
                    width={240}
                    height={240}
                  />
                </div>
              </div>
            </div>

            {/* Right column: Heading + paragraphs */}
            <div className="w-full md:w-2/3 text-left flex flex-col gap-3 relative">
              {/* Heading with small purple icon */}
              <div className="flex items-center gap-2">
                <div className="absolute top-1 -left-10">
                  <StaticImage
                    src={"../../images/flower-purple.svg"}
                    alt="Purple flower icon"
                    placeholder="blurred"
                    layout="fixed"
                    width={30}
                    height={30}
                  />
                </div>
                <Typography variant="h2" className="text-black">
                  Ada Promis-Urbas
                </Typography>
              </div>
              <Typography variant="body" className="text-black">
                Robię "brzydkie" reklamy, które generują ładne wyniki. Pracuję z
                biznesami, które dbają o dobrostan psychiczny i fizyczny: praktykuję
                slow marketing, przemyślany, skuteczny, zbudowany na relacjach.
              </Typography>
              <Typography variant="body" className="text-black">
                Z zawodu jestem tłumaczką j. francuskiego &amp; angielskiego, a z
                zamiłowania — kreatywną duszą. Ułatwiam i upraszczam ADSy na
                Facebooku i Instagramie. Ze mną zrobisz zdecydowanie więcej niż
                "promuj post"!
              </Typography>
            </div>
          </div>
        )}
        {version == 2 && (
          <div className="text-center">
            <Typography variant="h2" className="text-ada-black">Kogo spotkasz
              w <span className="text-ada-pink7">MAGIC?</span></Typography>
            <Typography variant="h3" className="text-ada-black"><span className="text-ada-pink7">Dołącz do społeczności kobiet, </span><br />które wspólnie rozwijają swoje biznesy i wspierają się w drodze do sukcesu w reklamach Meta.</Typography>
          </div>
        )}
      </Section>
    </>
  )
}

export default MagicBioBanner
