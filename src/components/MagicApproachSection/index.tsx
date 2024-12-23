import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicApproachSection = () => {
  const columns = [
    "Dlaczego przyszłość należy do społeczności i spersonalizowanego wsparcia (zamiast masowych rozwiązań)?",
    "Jak zdobyć wsparcie całego działu marketingu, nie zatrudniając sztabu specjalistów?",
    "Jak skutecznie wykorzystywać nowe funkcje menadżera reklam, by osiągać lepsze wyniki (bez względu na to, z jakiej wersji korzystałaś wcześniej)?",
  ]

  return (
    <Section>
      <div className="relative">
        <Typography variant="h2" className="text-black leading-snug mb-6">
          To jak, chcesz poznać zupełnie nowe podejście do prowadzenia
          skutecznych reklam? Przyjdź i dowiedz się:
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {columns.map((text, index) => (
            <div key={index} className="flex items-start gap-2 relative">
              <div className="animate-spin-slow absolute top-1 -left-12">
                <StaticImage
                  src="../../images/floweryellow.svg"
                  alt="Żółty kwiatek"
                  placeholder="blurred"
                  layout="fixed"
                  height={40}
                />
              </div>
              <Typography variant="body" className="text-white max-w-60">
                {text}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default MagicApproachSection
