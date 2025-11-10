import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"
import React, { useState } from "react"
import Card from "../shared/Card"
import Section from "../shared/Section"
import Typography from "../shared/Typography"
import MagicTile from "./MagicTile"
import MagicTile2 from "./MagicTile2"

const TimeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-lg p-4 text-3xl font-bold min-w-[60px] text-center">
    {children}
  </div>
)

const magicTilesContent1 = [
  {
    colors: "bg-ada-pink8 text-ada-purple2",
    title: "warsztaty tematyczne",
    description:
      "2 specjalistyczne sesje miesięcznie - głęboko merytoryczne, zawsze na czasie!",
  },
  {
    colors: "bg-ada-purple2 text-ada-white",
    title: "dostęp do zespołu 4  ekspertek",
    description:
      "pomożemy Ci w: reklamach Meta Ads, tekstach, grafikach, newsletterze, automatyzacjach",
  },
  {
    colors: "bg-ada-pink8 text-ada-purple2",
    title: "Wsparcie techniczne",
    description:
      "konsultacje pisemne przy wdrażaniu konkretnych rozwiązań reklamowych",
  },
  {
    colors: "bg-ada-purple2 text-ada-white",
    title: "Prasówki: NIE TYLKO O REKLAMACH",
    description:
      "najświeższe nowinki ze świata marketingu wprost z raportów i od ekspertów z branży",
  },
]

const magicTilesContent2 = [
  {
    colors: "bg-ada-purple2 text-ada-white",
    title: "KONSULTACJE GRUPOWE",
    description:
      "spotkania, na których problemy marketingowe  stają się dziecinnie prostą zabawą",
  },
  {
    colors: "bg-ada-pink8 text-ada-purple2",
    title: "SPOŁECZNOŚĆ I ZROZUMIENIE",
    description:
      "Społeczność przedsiębiorczych kobiet zorientowanych na sukces",
  },
  {
    colors: "bg-ada-purple2 text-ada-white ]",
    title: "Wsparcie Wsparcie I MOTYWACJA",
    description:
      "Ekspresowa pomoc w problemach reklamowych, technicznych i nie tylko",
  },
  {
    colors: "bg-ada-pink8 text-ada-purple2",
    title: "Ekskluzywny dostęp",
    description:
      "Najnowsze autorskie szkolenia i materiały dostępne w tylko w MAGIC. Pssst… wpisz kod KOALA, ale nie mów nikomu.",
  },
]

const magicTilesContent3 = [
  {
    colors: "bg-ada-magicOrange2 text-ada-text",
    title: "👩‍💻 WARSZTATY TEMATYCZNE",
    description:
      "2 specjalistyczne sesje miesięcznie - głęboko merytoryczne, zawsze na czasie!",
  },
  {
    colors: "bg-ada-magicPink4 text-ada-text",

    title: "👩 Wsparcie I MOTYWACJA",
    description:
      "Ekspresowa pomoc w problemach reklamowych, technicznych i nie tylko2 specjalistyczne sesje miesięcznie - głęboko merytoryczne, zawsze na czasie!",
  },
  {
    colors: "bg-ada-magicPurple4 text-ada-text",
    title: "📝 Prasówki: NIE TYLKO O REKLAMACH",
    description:
      "najświeższe nowinki ze świata marketingu wprost z raportów i od ekspertów z branży",
  },
]

const magicTilesContent4 = [
  {
    colors: "bg-ada-magicPurple4 text-ada-text",
    title: "🤝 KONSULTACJE GRUPOWE",
    description:
      "spotkania, na których problemy marketingowe  stają się dziecinnie prostą zabawą",
  },
  {
    colors: "bg-ada-magicOrange2 text-ada-text",
    title: "👥 dostęp do zespołu 4  ekspertek",
    description:
      "pomożemy Ci w: reklamach Meta Ads, tekstach, grafikach, newsletterze, automatyzacjach",
  },
]

const magicTilesContent5 = [
  {
    colors: "bg-ada-magicPink4 text-ada-text",
    title: "🛠️ Wsparcie techniczne",
    description:
      "konsultacje pisemne przy wdrażaniu konkretnych rozwiązań reklamowych",
  },
  {
    colors: "bg-ada-magicPurple4 text-ada-text",

    title: "🤗 SPOŁECZNOŚĆ I ZROZUMIENIE",
    description:
      "Społeczność przedsiębiorczych kobiet zorientowanych na sukces",
  },
  {
    colors: "bg-ada-magicPink4 text-ada-text",
    title: "💎 Ekskluzywny dostęp",
    description:
      "Najnowsze autorskie szkolenia i materiały dostępne w tylko w MAGICwieższe nowinki ze świata marketingu wprost z raportów i od ekspertów z branży",
  },
]

const MagicDateBanner = ({ version }: { version: number }) => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hasAnimated2, setHasAnimated2] = useState(false)

  const handleMouseEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
    }
  }

  const handleMouseEnter2 = () => {
    if (!hasAnimated2) {
      setHasAnimated2(true)
    }
  }

  return (
    <Section className="mb-12">
      {version == 1 && (
        <div className="grid gap-8 items-center">
          {/* Left column */}
          <div className="max-w-[260px] text-black">
            <Typography variant="h2" className="mb-2">
              <span className="text-ada-yellow3">ROZWIJAJ</span>{" "}
              <span>SWÓJ BIZNES</span>
            </Typography>
            <Typography variant="body">
              <span className="font-bold">dzięki reklamom.</span>
              <br />I nawet z budżetem 10 zł dziennie. Bez natarczywego
              krzyczenia "KUP!" na stories. Bez frustracji, bo zasięg organiczny
              znowu spada...
            </Typography>
          </div>

          {/* Right column */}
          <Card
            bgColor="bg-ada-yellow3"
            className="flex flex-col items-center justify-center"
          >
            {/* Date/time row */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <TimeBox>19</TimeBox>
              <span className="text-3xl font-bold">.</span>
              <TimeBox>01</TimeBox>
              <TimeBox>12</TimeBox>
              <span className="text-3xl font-bold">:</span>
              <TimeBox>00</TimeBox>
            </div>

            <Button
              type="button"
              text="Zapisuję się!"
              sectionId="webinar-form"
              textSize="text-sm md:text-base"
              btnStyle="uppercase bg-ada-pink2 text-ada-black 
                        font-semibold tracking-wide h-[48px] md:h-[60px] 
                        px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]"
            />
          </Card>
        </div>
      )}
      {version == 2 && (
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center relative"
          onMouseOver={handleMouseEnter}
        >
          {/* Left column */}
          <div className="text-black">
            <Typography variant="h2" className="mb-2 animate-bounce">
              Co sprawia, że <span className="text-ada-pink7">MAGIC</span> jest
              wyjątkowy?
            </Typography>
            <Typography variant="body" className="pt-4">
              Tutaj nie znajdziesz nagrań bez możliwości kontaktu.{" "}
              <b>To Twój podręczny abonament na marketing! </b>
            </Typography>
            <Typography variant="body" className="pt-4 font-bold uppercase">
              Dostajesz:
            </Typography>
            <div className="flex flex-col md:flex-row gap-4 md:min-w-[650px] relative z-10">
              <div className="grid grid-cols-1 gap-6 lg:w-[320px] md:gap-2 pt-8">
                {magicTilesContent1.map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      hasAnimated
                        ? "lg:animate-slideInFromLeft opacity-100"
                        : " "
                    }`}
                  >
                    <MagicTile
                      colors={item.colors}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-6 lg:w-[320px] md:gap-2 md:pt-8">
                {magicTilesContent2.map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      hasAnimated
                        ? "lg:animate-slideInFromRight opacity-100"
                        : " "
                    }`}
                  >
                    <MagicTile
                      colors={item.colors}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:absolute -right-[280px] -z-1">
            <StaticImage
              loading="eager"
              src="../../images/ada_questions.webp"
              alt="Ada w telefonie"
              placeholder="blurred"
              width={536}
              height={1000}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          </div>
        </div>
      )}
      {version == 3 && (
        <div className="text-center text-black -mb-10">
          <div className="text-black">
            <TypingAnimation
              text="Co sprawia, że MAGIC jest
              wyjątkowy?"
              textStyle="text-adaSubtitleSecondary uppercase
                text-black font-bold"
            />
            <Typography variant="body" className="pt-4">
              Tutaj nie znajdziesz nagrań bez możliwości kontaktu.
              <br />
              <b>To Twój podręczny abonament na marketing! </b>
            </Typography>
            <Typography variant="h2" className="pt-4 font-bold uppercase">
              ✅ Dostajesz:
            </Typography>
          </div>
        </div>
      )}
      {version == 4 && (
        <div
          className="flex flex-col items-center relative"
          onMouseOver={handleMouseEnter2}
        >
          <div className="flex flex-col xl:flex-row gap-4 relative z-10 text-black w-full">
            <div className="flex flex-col gap-6 md:gap-2 pt-8 md:min-w-[360px]">
              {magicTilesContent3.map((item, i) => (
                <div key={i}>
                  <MagicTile2
                    colors={item.colors}
                    title={item.title}
                    description={item.description}
                    animationClass={
                      hasAnimated2 ? "animate-slideInFromLeft" : ""
                    }
                    animationDelay={hasAnimated2 ? `${i * 0.5}s` : "0s"}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 md:gap-2 pt-8 md:min-w-[360px]">
              {magicTilesContent4.map((item, i) => (
                <div key={i}>
                  <MagicTile2
                    colors={item.colors}
                    title={item.title}
                    description={item.description}
                    animationClass={
                      hasAnimated2 ? "animate-slideInFromRight" : ""
                    }
                    animationDelay={hasAnimated2 ? `${i * 0.7}s` : "0s"}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 md:gap-2 pt-8 md:min-w-[360px]">
              {magicTilesContent5.map((item, i) => (
                <div key={i}>
                  <MagicTile2
                    colors={item.colors}
                    title={item.title}
                    description={item.description}
                    animationClass={
                      hasAnimated2 ? "animate-slideInFromRight" : ""
                    }
                    animationDelay={hasAnimated2 ? `${i * 0.9}s` : "0s"}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:-mt-[460px] mb-[-30px] md:mb-[-96px] md:ml-[40px]">
            <StaticImage
              loading="eager"
              src="../../images/magic_adsy.webp"
              alt="Ada w telefonie"
              placeholder="blurred"
              width={600}
              height={800}
              quality={100}
              className="object-contain ml-14  mt-40"
            />
          </div>
        </div>
      )}
    </Section>
  )
}

export default MagicDateBanner
