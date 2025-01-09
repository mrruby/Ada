import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicApproachSection = () => {
  const columns = [
    "jak poznać remedium na spadające zasięgi, które przynosi realną sprzedaż i efekty",
    "jak skutecznie wykorzystywać menedżera reklam, aby osiągać lepsze wyniki",
    "jakie trendy w reklamach przyniesie nam 2025 rok i w jaki sposób możesz wykorzystać je na korzyść swojego biznesu",
  ]

  return (
    <Section>
      <div className="relative">
        <Typography variant="h2" className="text-black leading-snug mb-6">
          Zmęczona ciągłym myśleniem "Jak to zmienić, aby było lepiej"? Przyjdź
          i dowiedz się:
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {columns.map((text, index) => (
            <div
              key={index}
              className="flex items-start gap-2 relative pl-14 md:pl-0"
            >
              <div className="animate-spin-slow absolute top-1 left-0 md:-left-12">
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
