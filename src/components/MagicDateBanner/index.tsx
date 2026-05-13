import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"
import React from "react"
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
      "Najnowsze autorskie szkolenia i materiały dostępne w tylko w MAGIC. 🦫 Pssst… wpisz kod KAPIBARA, ale nie mów nikomu.",
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

type MagicDateBannerLayout = "default" | "magic-special"

interface MagicDateBannerProps {
  version: number
  layout?: MagicDateBannerLayout
}

const MagicDateBanner = ({
  version,
  layout = "default",
}: MagicDateBannerProps) => {
  const isMagicSpecialLayout = layout === "magic-special"
  const sectionClassName =
    isMagicSpecialLayout && version === 3 ? "" : "mb-12"
  const sectionPadding =
    isMagicSpecialLayout && version === 3
      ? "pt-8 md:pt-12 pb-2 md:pb-4 px-6"
      : isMagicSpecialLayout && version === 4
        ? "pt-8 md:pt-12 px-6"
      : "py-8 md:py-12 px-6"
  const version3WrapperClassName = isMagicSpecialLayout
    ? "text-center text-black"
    : "text-center text-black -mb-10"
  const version4GridClassName = isMagicSpecialLayout
    ? "flex flex-col xl:flex-row gap-6 xl:gap-4 relative z-10 text-black w-full"
    : "flex flex-col xl:flex-row gap-6 xl:gap-4 relative z-10 text-black w-full pt-8"
  const version4ImageWrapperClassName = isMagicSpecialLayout
    ? "md:-mt-[400px] mb-0 md:mb-0 md:left-1/2 max-w-[250px] md:max-w-[290px] lg:max-w-[310px] mx-auto pt-16 md:pt-20"
    : "md:-mt-[460px] mb-[-80px] md:mb-[-96px] md:left-1/2 max-w-[380px] md:max-w-none mx-auto"
  const version4ImageClassName = isMagicSpecialLayout
    ? "w-full object-contain ml-0 md:ml-14 mt-8"
    : "object-contain ml-0 md:ml-14 mt-8 md:mt-40"

  return (
    <Section className={sectionClassName} padding={sectionPadding}>
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
              text={<span className="!font-extrabold">Zapisuję się!</span>}
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
          {/* Left column */}
          <div className="text-black">
            <Typography variant="h2" className="mb-2">
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
                  <div key={i}>
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
                  <div key={i}>
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
          <div className="flex justify-center mt-8">
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
        <div className={version3WrapperClassName}>
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
        <div className="flex flex-col items-center relative">
          <div className={version4GridClassName}>
            <div className="flex flex-col gap-6 md:gap-2 md:min-w-[360px]">
              {magicTilesContent3.map((item, i) => (
                <div key={i}>
                  <MagicTile2
                    colors={item.colors}
                    title={item.title}
                    description={item.description}
                    animationClass=""
                    animationDelay="0s"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 md:gap-2 md:min-w-[360px]">
              {magicTilesContent4.map((item, i) => (
                <div key={i}>
                  <MagicTile2
                    colors={item.colors}
                    title={item.title}
                    description={item.description}
                    animationClass=""
                    animationDelay="0s"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 md:gap-2 md:min-w-[360px]">
              {magicTilesContent5.map((item, i) => (
                <div key={i}>
                  <MagicTile2
                    colors={item.colors}
                    title={item.title}
                    description={item.description}
                    animationClass=""
                    animationDelay="0s"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={version4ImageWrapperClassName}>
            <StaticImage
              loading="eager"
              src="../../images/magic_adsy.webp"
              alt="Ada w telefonie"
              placeholder="blurred"
              width={450}
              quality={75}
              className={version4ImageClassName}
            />
          </div>
        </div>
      )}
    </Section>
  )
}

export default MagicDateBanner
