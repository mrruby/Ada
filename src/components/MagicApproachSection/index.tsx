import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicApproachSection = ({
  version,
}: {
  version: number
}): JSX.Element => {
  const columns = [
    "jak poznać remedium na spadające zasięgi, które przynosi realną sprzedaż i efekty",
    "jak skutecznie wykorzystywać menedżera reklam, aby osiągać lepsze wyniki",
    "jakie trendy w reklamach przyniesie nam 2025 rok i w jaki sposób możesz wykorzystać je na korzyść swojego biznesu",
  ]
  const columns2 = [
    "Dzielą się swoimi doświadczeniami",
    "Wspólnie rozwiązują problemy",
    "Wspierają się w rozwoju biznesu",
  ]

  return (
    <Section>
      {version == 1 && (
        <>
          <div className="relative">
            <Typography variant="h2" className="text-black leading-snug mb-6">
              Zmęczona ciągłym myśleniem "Jak to zmienić, aby było lepiej"?
              Przyjdź i dowiedz się:
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
        </>
      )}
      {version == 2 && (
        <>
          <div className="relative">
            <Typography
              variant="h2"
              className="text-white leading-snug mb-6  animate-bounce"
            >
              <span className="font-normal">A co najważniejsze</span> - będziesz
              częścią społeczności przedsiębiorczych kobiet, które:
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-4 md:ml-24">
              {columns2.map((text, index) => (
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
        </>
      )}
      {version == 3 && (
        <>
          <div className="relative">
            <Typography
              variant="h2"
              className="text-black leading-snug mb-6  animate-bounce"
            >
              Możesz też:
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-4">
              <div className="flex flex-col items-center text-center gap-2 relative md:pl-0">
                <div>
                  <StaticImage
                    src="../../images/meets.svg"
                    alt=""
                    placeholder="blurred"
                    layout="fixed"
                    width={37}
                    height={30}
                  />
                </div>
                <Typography variant="body" className="text-black max-w-60">
                  <span className="font-bold">
                    Uczestniczyć w praktycznych spotkaniach
                  </span>
                  <br /> o trendach czy automatyzacji marketingu
                </Typography>
              </div>
              <div className="flex flex-col items-center text-center gap-2 relative md:pl-0">
                <div>
                  <StaticImage
                    src="../../images/tips.svg"
                    alt=""
                    placeholder="blurred"
                    layout="fixed"
                    width={47}
                    height={27}
                  />
                </div>
                <Typography variant="body" className="text-black max-w-60">
                  <span className="font-bold">Poznać sprawdzone tricki</span>
                  <br /> i strategie reklamowe z różnych branż
                </Typography>
              </div>
              <div className="flex flex-col items-center text-center gap-2 relative md:pl-0">
                <div>
                  <StaticImage
                    src="../../images/ads.svg"
                    alt="Żółty kwiatek"
                    placeholder="blurred"
                    layout="fixed"
                    width={28}
                    height={30}
                  />
                </div>
                <Typography variant="body" className="text-black max-w-60">
                  <span className="font-bold">Dowiedzieć się, </span>
                  <br />
                  co naprawdę działa w reklamach Meta
                </Typography>
              </div>
            </div>
          </div>
        </>
      )}
    </Section>
  )
}

export default MagicApproachSection
