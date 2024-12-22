import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicBioBanner = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
        {/* Left column: Circular image */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden mx-auto md:mx-0">
            <StaticImage
              src="../../images/ada_portrait.webp"
              alt="Ada Promis-Urbas"
              placeholder="blurred"
              layout="fixed"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right column: Heading + paragraphs */}
        <div className="w-full md:w-2/3 text-left flex flex-col gap-3 relative">
          {/* Heading with small purple icon */}
          <div className="flex items-center gap-2">
            <StaticImage
              src={"../../images/flower-purple.svg"}
              alt="Purple flower icon"
              placeholder="blurred"
              layout="fixed"
              width={30}
              height={30}
              className="absolute top-1 -left-10"
            />
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
    </Section>
  )
}

export default MagicBioBanner
