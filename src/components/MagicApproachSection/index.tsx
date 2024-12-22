import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const MagicApproachSection = () => {
  const columns = [
    "Dlaczego przyszłość należy do społeczności i spersonalizowanego wsparcia (zamiast masowych rozwiązań)?",
    "Jak zdobyć wsparcie całego działu marketingu, nie zatrudniając sztabu specjalistów?",
    "Jak skutecznie wykorzystywać nowe funkcje menadżera reklam, by osiągać lepsze wyniki (bez względu na to, z jakiej wersji korzystałaś wcześniej)?",
  ]

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-xl md:text-3xl font-bold text-black leading-snug mb-6">
          To jak, chcesz poznać zupełnie nowe podejście do prowadzenia
          skutecznych reklam? Przyjdź i dowiedz się:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {columns.map((text, index) => (
            <div key={index} className="flex items-start gap-2 relative">
              <StaticImage
                src="../../images/floweryellow.svg"
                alt="Żółty kwiatek"
                placeholder="blurred"
                layout="fixed"
                height={40}
                className="absolute top-1 -left-14"
              />
              <p className="text-sm md:text-base text-white leading-relaxed max-w-60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MagicApproachSection
