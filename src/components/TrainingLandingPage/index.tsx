import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

type Benefit = {
  title: string
  description: string
  bgClass: string
}

const DEFAULT_DESCRIPTION_BULLETS = [
  "Ekspresowa pomoc w problemach reklamowych, technicznych i nie tylko",
  "Ekspresowa pomoc w problemach reklamowych, technicznych i nie tylko",
  "Ekspresowa pomoc w problemach reklamowych, technicznych i nie tylko",
  "Ekspresowa pomoc w problemach reklamowych, technicznych i nie tylko",
  "Ekspresowa pomoc w problemach reklamowych, technicznych i nie tylko",
]

const DEFAULT_BENEFITS: Benefit[] = [
  {
    bgClass: "bg-ada-magicPink3",
    title: "👩 Wsparcie I MOTYWACJA",
    description:
      "Ekspresowa pomoc w problemach reklamowych, technicznych i nie tylko",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "👥 dostęp do zespołu 4 ekspertek",
    description:
      "pomożemy Ci w: reklamach Meta Ads, tekstach, grafikach, newsletterze, automatyzacjach",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "🤗 SPOŁECZNOŚĆ I ZROZUMIENIE",
    description: "Społeczność przedsiębiorczych kobiet zorientowanych na sukces",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "📝 Prasówki: NIE TYLKO O REKLAMACH",
    description:
      "najświeższe nowinki ze świata marketingu wprost z raportów i od ekspertów z branży",
  },
  {
    bgClass: "bg-ada-magicPink3",
    title: "👥 dostęp do zespołu 4 ekspertek",
    description:
      "pomożemy Ci w: reklamach Meta Ads, tekstach, grafikach, newsletterze, automatyzacjach",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "💎 Ekskluzywny dostęp",
    description:
      "Najnowsze autorskie szkolenia i materiały dostępne w tylko w MAGIC",
  },
]

const AdaOverlay = () => (
  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 max-w-[300px]">
    <div className="relative">
      <StaticImage
        src="../../images/ada-show.webp"
        alt="Ada"
        placeholder="blurred"
      />
      <div className="absolute top-6 -right-4">
        <StaticImage
          src="../../images/wypelnij.webp"
          alt="Wypelnij"
          placeholder="blurred"
          width={100}
        />
      </div>
    </div>
  </div>
)

type TrainingLandingPageProps = {
  heroBgColor: string
  heroLeft: React.ReactNode
  formHTML: string
  descriptionBullets?: string[]
  benefits?: Benefit[]
}

const TrainingLandingPage = ({
  heroBgColor,
  heroLeft,
  formHTML,
  descriptionBullets = DEFAULT_DESCRIPTION_BULLETS,
  benefits = DEFAULT_BENEFITS,
}: TrainingLandingPageProps) => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MaxWithBgColorContainer bgColor={heroBgColor}>
        <div className="py-16 flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 relative">
          <div className="w-full lg:w-1/2">{heroLeft}</div>
          <AdaOverlay />
          <div className="w-full lg:w-auto mt-8 lg:mt-0">
            <div dangerouslySetInnerHTML={{ __html: formHTML }} />
          </div>
        </div>
      </MaxWithBgColorContainer>

      <MaxWithBgColorContainer bgColor="bg-ada-magicPink3">
        <div className="py-16 flex flex-col lg:flex-row justify-between items-start gap-8 px-4">
          <div className="w-full lg:w-1/2">
            <h2 className="inline-block text-[48px] font-anton font-normal text-black bg-ada-magicOrange2 uppercase leading-none mb-8">
              OPIS szkolenia
            </h2>
            <div className="mt-6">
              <h3 className="text-[16px] font-bold text-black mb-4 leading-none">
                Ekspresowa pomoc
              </h3>
              <ul className="space-y-3 text-[16px] font-normal text-black leading-none">
                {descriptionBullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <StaticImage
              src="../../images/Reklamy w 2026.webp"
              alt="Reklamy w 2026"
              placeholder="blurred"
              className="w-full"
            />
          </div>
        </div>
      </MaxWithBgColorContainer>

      <MaxWithBgColorContainer bgColor="bg-white">
        <div className="py-16 px-4">
          <h2 className="text-[48px] font-anton font-normal uppercase leading-none text-center mb-12 text-black">
            co zyskasz podczas{" "}
            <span className="text-ada-magicPurple4">szkolenia</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, idx) => (
              <div
                key={`${b.title}-${idx}`}
                className={`${b.bgClass} rounded-lg p-6 border border-black text-center`}
              >
                <h3 className="text-[16px] font-bold text-black mb-2 uppercase">
                  {b.title}
                </h3>
                <p className="text-[16px] font-normal text-black">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MaxWithBgColorContainer>

      <MaxWithBgColorContainer bgColor="bg-ada-magicOrange2">
        <div className="py-16 px-4 flex flex-col lg:flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[48px] lg:text-[72px] font-anton font-normal uppercase leading-none text-ada-darkGrey text-center">
              WYPEŁNIJ
              <br />
              FORMULARZ!
            </h2>
            <StaticImage
              src="../../images/arrow-right-spirng.webp"
              alt="Arrow"
              placeholder="blurred"
              className="mt-4 max-w-[150px]"
            />
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: formHTML }} />
          </div>
        </div>
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default TrainingLandingPage
