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
    title: "dostęp do zespołu 5 specjalistów",
    description:
      "pomożemy Ci w: reklamach Meta Ads, tekstach, grafikach, newsletterze, AI i automatyzacjach.",
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
    title: "👥 dostęp do zespołu 5 specjalistów",
    description:
      "pomożemy Ci w: reklamach Meta Ads, tekstach, grafikach, newsletterze, AI i automatyzacjach.",
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

const magicUniqueLearningLevels = [
  {
    level: "0",
    title: "ADS Starter",
    color: "bg-ada-magicPink4",
  },
  {
    level: "1",
    title: "ADS Beginner",
    color: "bg-ada-magicPurple4",
  },
  {
    level: "2",
    title: "ADS Analyst",
    color: "bg-ada-magicGrey",
  },
  {
    level: "3",
    title: "ADS Strategist",
    color: "bg-ada-magicOrange2",
  },
  {
    level: "4",
    title: "ADS Specialist",
    color: "bg-ada-magicPink4",
  },
  {
    level: "5",
    title: "AI i automatyzacje",
    color: "bg-ada-magicPurple4",
  },
]

const magicUniqueExperts = [
  {
    image: "dawid",
    label: "automatyzacje i AI",
    className:
      "left-[10px] bottom-[8px] w-[90px] rotate-[-5deg] lg:left-[95px] lg:bottom-[10px]",
    imageClassName: "h-[72px] w-[72px]",
  },
  {
    image: "ada",
    label: "CEO Meta Ads queen",
    className:
      "left-[105px] bottom-[16px] w-[88px] rotate-[-3deg] lg:left-[250px] lg:bottom-[18px]",
    imageClassName: "h-[90px] w-[90px]",
  },
  {
    image: "nicola",
    label: "strategie i planowanie",
    className:
      "left-[198px] bottom-[12px] w-[104px] rotate-[3deg] lg:left-[396px] lg:bottom-[14px] lg:w-[124px]",
    imageClassName: "h-[74px] w-[74px]",
  },
  {
    image: "justyna",
    label: "copywriting",
    className:
      "left-[302px] bottom-[18px] w-[70px] rotate-[6deg] lg:left-[550px] lg:bottom-[20px]",
    imageClassName: "h-[66px] w-[66px]",
  },
  {
    image: "dorota",
    label: "grafika",
    className:
      "left-[360px] bottom-[10px] w-[64px] rotate-[-4deg] lg:left-[660px] lg:bottom-[12px]",
    imageClassName: "h-[68px] w-[68px]",
  },
]

const HandwrittenNote = ({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) => (
  <p
    className={`font-anie font-semibold leading-none text-black ${className}`}
    style={{
      textShadow:
        "0.35px 0 0 rgba(0,0,0,0.24), -0.2px 0 0 rgba(0,0,0,0.18), 0 0.35px 0 rgba(0,0,0,0.2)",
      ...style,
    }}
  >
    {children}
  </p>
)

const MagicUniqueCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={`rounded-xl border border-black/10 bg-white p-3 shadow-[0_12px_0_rgba(0,0,0,0.08)] ${className}`}
  >
    {children}
  </div>
)

const MagicUniqueLearningCard = ({
  className = "",
}: {
  className?: string
}) => (
  <MagicUniqueCard
    className={`w-[118px] rotate-[-5deg] rounded-[7px] p-2 shadow-[0_5px_0_rgba(0,0,0,0.08)] ${className}`}
  >
    <div className="mb-1 flex items-center justify-between border-b border-black/10 pb-1 text-[5px] font-semibold uppercase">
      <span>Poziomy nauki</span>
      <span>MAGIC</span>
    </div>
    <div className="space-y-[3px]">
      {magicUniqueLearningLevels.map((item) => (
        <div key={item.title} className="flex items-center gap-2">
          <span
            className={`flex h-[11px] w-[11px] flex-shrink-0 items-center justify-center rounded-[2px] ${item.color} text-[6px] font-bold leading-none`}
          >
            {item.level}
          </span>
          <span className="text-[5px] font-semibold uppercase leading-tight">
            Poziom {item.level}: {item.title}
          </span>
        </div>
      ))}
    </div>
  </MagicUniqueCard>
)

const MagicUniqueLevelPreview = ({
  title,
  color,
  className = "",
}: {
  title: string
  color: string
  className?: string
}) => (
  <MagicUniqueCard
    className={`w-[86px] rounded-[7px] p-2 shadow-[0_5px_0_rgba(0,0,0,0.08)] ${className}`}
  >
    <div className="mb-1 h-[4px] w-10 rounded-full bg-black/10" />
    <div
      className={`flex h-[40px] items-center justify-center rounded-[5px] ${color} p-2 text-center`}
    >
      <p className="text-[7px] font-extrabold uppercase leading-tight">
        {title}
      </p>
    </div>
    <div className="mt-2 space-y-[3px]">
      <div className="h-[3px] w-full rounded-full bg-black/10" />
      <div className="h-[3px] w-2/3 rounded-full bg-black/10" />
    </div>
  </MagicUniqueCard>
)

const MagicUniqueCalendarCard = ({
  day,
  title,
  time,
  className = "",
}: {
  day: string
  title: string
  time: string
  className?: string
}) => (
  <MagicUniqueCard
    className={`flex items-start gap-2 rounded-[7px] p-2 outline outline-[2px] outline-white/80 shadow-[0_5px_0_rgba(0,0,0,0.08)] ${className}`}
  >
    <div className="flex h-[23px] w-[23px] flex-shrink-0 flex-col items-center justify-center rounded-[4px] bg-ada-white3 text-center">
      <span className="text-[8px] font-bold leading-none">{day}</span>
      <span className="text-[5px] uppercase leading-none">Jun</span>
    </div>
    <div>
      <p className="text-[7px] font-bold leading-tight">{title}</p>
      <p className="mt-1 text-[6px] text-black/60">{time}</p>
    </div>
  </MagicUniqueCard>
)

const MagicUniquePosterImage = ({
  image,
}: {
  image: string
}): JSX.Element | null => {
  switch (image) {
    case "dawid":
      return (
        <StaticImage
          src="../../images/dawid_portrait.webp"
          alt=""
          layout="fixed"
          width={76}
          height={76}
          placeholder="blurred"
          quality={90}
          className="!h-full !w-full"
          imgClassName="!h-full !w-full !object-cover"
        />
      )
    case "ada":
      return (
        <StaticImage
          src="../../images/ada_magic.webp"
          alt=""
          layout="fixed"
          width={92}
          height={92}
          placeholder="blurred"
          quality={90}
          className="!h-full !w-full"
          imgClassName="!h-full !w-full !object-cover"
        />
      )
    case "nicola":
      return (
        <StaticImage
          src="../../images/nicola_portrait.webp"
          alt=""
          layout="fixed"
          width={76}
          height={76}
          placeholder="blurred"
          quality={90}
          className="!h-full !w-full"
          imgClassName="!h-full !w-full !object-cover"
        />
      )
    case "justyna":
      return (
        <StaticImage
          src="../../images/justyna.png"
          alt=""
          layout="fixed"
          width={68}
          height={68}
          placeholder="blurred"
          quality={90}
          className="!h-full !w-full"
          imgClassName="!h-full !w-full !object-cover"
        />
      )
    case "dorota":
      return (
        <StaticImage
          src="../../images/dorota.png"
          alt=""
          layout="fixed"
          width={70}
          height={70}
          placeholder="blurred"
          quality={90}
          className="!h-full !w-full"
          imgClassName="!h-full !w-full !object-cover"
        />
      )
    default:
      return null
  }
}

const MagicUniqueExpert = ({
  image,
  label,
  className = "",
  imageClassName = "",
}: {
  image: string
  label: string
  className?: string
  imageClassName?: string
}) => (
  <div className={`absolute flex flex-col items-center ${className}`}>
    <div
      className={`overflow-hidden rounded-full border-[3px] border-white bg-ada-pink8 shadow-md ${imageClassName}`}
    >
      <MagicUniquePosterImage image={image} />
    </div>
    <span className="relative z-10 -mt-3 inline-block max-w-[118px] rounded-full bg-ada-pink8 px-2 py-[3px] text-center text-[8px] font-extrabold uppercase leading-tight shadow-md lg:max-w-none lg:whitespace-nowrap">
      {label}
    </span>
  </div>
)

const MagicPinkArrow = ({
  className = "",
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) => (
  <svg
    viewBox="0 0 120 56"
    fill="none"
    className={`pointer-events-none absolute z-20 hidden lg:block ${className}`}
    style={style}
  >
    <path
      d="M6 30 C 22 10 36 46 52 28 S 84 8 104 26"
      stroke="#FF00A6"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M104 26 L 92 21 M104 26 L 95 36"
      stroke="#FF00A6"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MagicBlackArrow = ({
  className = "",
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) => (
  <svg
    viewBox="0 0 120 90"
    fill="none"
    className={`pointer-events-none absolute z-20 hidden lg:block ${className}`}
    style={style}
  >
    <path
      d="M10 12 C 78 2 104 34 80 72"
      stroke="#000000"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M80 72 L 72 56 M80 72 L 96 64"
      stroke="#000000"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MagicUnique2026Section = () => (
  <div className="flex justify-center">
    <div
      data-testid="magic-unique-poster"
      className="magic-unique-poster relative h-[441px] w-[342px] max-w-full shrink-0 overflow-visible sm:h-[655px] sm:w-[507px] md:h-[805px] md:w-[624px]"
    >
      <div className="magic-unique-poster-inner absolute left-0 top-0 h-[555px] w-[430px] origin-top-left overflow-hidden bg-ada-magicYellow text-ada-black scale-[0.795] sm:scale-[1.18] md:scale-[1.45]">
        <div className="absolute left-[26px] top-[64px] hidden w-[335px] lg:block">
          <StaticImage
            src="../../images/magic-landing-2026-levels.webp"
            alt="Poziomy nauki MAGIC"
            placeholder="blurred"
            quality={95}
            width={551}
            className="w-full"
            imgClassName="!object-contain"
          />
        </div>
        <div className="absolute left-[418px] top-[70px] hidden w-[330px] lg:block">
          <StaticImage
            src="../../images/magic-landing-2026-calendar-cards.webp"
            alt="Spotkania i konsultacje MAGIC"
            placeholder="blurred"
            quality={95}
            width={569}
            className="w-full"
            imgClassName="!object-contain"
          />
        </div>

        <MagicUniqueLearningCard className="absolute left-[39px] top-[73px] lg:hidden" />
        <MagicUniqueLevelPreview
          title="Poziom 3: Ads Strategist"
          color="bg-ada-magicPink4"
          className="absolute left-[150px] top-[35px] rotate-[-2deg] lg:hidden"
        />
        <MagicUniqueLevelPreview
          title="Poziom 0: Ads Starter"
          color="bg-ada-magicPurple4"
          className="absolute left-[198px] top-[86px] rotate-[5deg] lg:hidden"
        />

        <MagicUniqueCalendarCard
          day="2"
          title="Tworzenie asystenta do generowania raportów reklamowych z pomocą Excela i Canvy"
          time="11:00 - 12:00"
          className="absolute left-[261px] top-[42px] w-[125px] rotate-[-6deg] lg:hidden"
        />
        <MagicUniqueCard className="absolute left-[265px] top-[90px] w-[120px] rotate-[5deg] rounded-[7px] p-2 shadow-[0_5px_0_rgba(0,0,0,0.08)] lg:hidden">
          <p className="text-[5px] font-semibold text-black/60">
            Asystentka - POMOC Magic w Ogłoszeniach
          </p>
          <p className="mt-1 truncate text-[6px] font-semibold">
            Hej dziewczyny! Czerwiec będzie...
          </p>
          <div className="mt-1 rounded-[5px] bg-ada-pink8 p-2 text-center font-anton text-[16px] uppercase leading-none text-ada-pink7">
            Rozkład jazdy
            <br />
            na czerwiec
          </div>
        </MagicUniqueCard>
        <MagicUniqueCalendarCard
          day="21"
          title="Dopsuj tekst AI do głosu marki"
          time="17:00 - 18:00"
          className="absolute left-[309px] top-[169px] z-20 w-[91px] rotate-[1deg] lg:hidden"
        />
        <MagicUniqueCalendarCard
          day="29"
          title="Konsultacje grupowe z Nicolą"
          time="11:00 - 12:30"
          className="absolute left-[338px] top-[199px] z-30 w-[82px] rotate-[-7deg] lg:hidden"
        />

        <span className="absolute left-[55px] top-[154px] text-[16px] lg:left-[70px] lg:top-[430px] lg:text-[18px]">
          📝
        </span>
        <HandwrittenNote
          className="absolute left-[72px] top-[188px] text-[23px] uppercase lg:left-[112px] lg:top-[430px] lg:text-[27px]"
          style={{ fontFamily: '"Caveat", cursive', fontWeight: 700 }}
        >
          4 poziomy
          <br />
          nauki
        </HandwrittenNote>
        <HandwrittenNote className="absolute left-[170px] top-[170px] max-w-[96px] rotate-[-8deg] text-[15px] leading-[0.92] md:max-w-[112px] md:text-[16px] lg:left-[300px] lg:top-[430px] lg:max-w-[155px] lg:text-[17px]">
          pasek progresu ułatwiający naukę
        </HandwrittenNote>
        <span className="absolute left-[252px] top-[190px] text-[18px] lg:left-[460px] lg:top-[442px] lg:text-[19px]">
          👩‍💻
        </span>
        <HandwrittenNote
          className="absolute left-[270px] top-[204px] text-[21px] uppercase lg:left-[488px] lg:top-[430px] lg:text-[27px]"
          style={{ fontFamily: '"Caveat", cursive', fontWeight: 700 }}
        >
          5 spotkań
          <br />
          <span
            className="text-[12px] normal-case"
            style={{ fontFamily: '"Caveat", cursive', fontWeight: 400 }}
          >
            na żywo miesięcznie
          </span>
        </HandwrittenNote>

        <div className="absolute left-[35px] top-[610px] hidden w-[165px] lg:block">
          <StaticImage
            src="../../images/magic-landing-2026-kapibara-message.webp"
            alt="Wiadomość do Kapibary Barbary"
            placeholder="blurred"
            quality={95}
            width={280}
            className="w-full"
            imgClassName="!object-contain"
          />
        </div>

        <MagicUniqueCard className="absolute left-[39px] top-[263px] w-[83px] rotate-[-4deg] rounded-[7px] p-2 shadow-[0_5px_0_rgba(0,0,0,0.08)] lg:hidden">
          <p className="text-[5px] font-semibold text-black/60">New message</p>
          <p className="mt-1 text-[7px] font-bold">To: Kapibara Barbara</p>
          <div className="mt-3 h-[14px] w-full rounded-full bg-black/10" />
        </MagicUniqueCard>

        <div className="absolute left-[139px] top-[225px] z-10 w-[132px] text-center lg:left-[210px] lg:top-[535px] lg:w-[360px]">
          <h2 className="font-anton text-[27px] uppercase leading-[0.95] text-black lg:text-[42px] lg:leading-[1.04]">
            Co sprawia, że
            <br />
            <span className="my-[2px] inline-block bg-white px-1 text-ada-pink7">
              MAGIC
            </span>{" "}
            jest
            <br />
            wyjątkowy?
          </h2>
        </div>

        <div className="absolute left-[48px] top-[350px] w-[83px] lg:left-[92px] lg:top-[760px] lg:w-[190px]">
          <p className="text-center text-[18px] leading-none">🤖</p>
          <HandwrittenNote
            className="mt-1 text-[22px] uppercase"
            style={{ fontFamily: '"Caveat", cursive', fontWeight: 700 }}
          >
            Asystentka AI
          </HandwrittenNote>
          <p className="mt-1 text-[8px] font-caveat leading-tight">
            wyślij wiadomość, a Kapibara Barbara pomoże Ci z każdą reklamową
            bolączką
          </p>
        </div>

        <div className="absolute left-[310px] top-[226px] w-[78px] text-center lg:left-[585px] lg:top-[570px] lg:w-[175px]">
          <span className="absolute left-1/2 top-[-26px] -translate-x-1/2 text-[22px]">
            ✍🏻
          </span>
          <HandwrittenNote
            className="text-[20px] uppercase leading-none"
            style={{ fontFamily: '"Caveat", cursive', fontWeight: 700 }}
          >
            Konsultacje
            <br />
            pisemne na
            <br />
            Circle
          </HandwrittenNote>
          <p className="mt-2 text-[8px] font-caveat leading-tight lg:mx-auto lg:w-[118px]">
            wsparcie techniczne przy wdrażaniu konkretnych rozwiązań reklamowych
          </p>
        </div>

        <MagicUniqueCard className="absolute left-[258px] top-[312px] w-[120px] rotate-[3deg] rounded-[7px] p-2 shadow-[0_5px_0_rgba(0,0,0,0.08)] lg:hidden">
          <p className="text-[5px] font-semibold text-black/60">
            Promocje z AI - 8 Dec 2025
          </p>
          <p className="mt-1 text-[7px] font-semibold leading-tight">
            Roksana! Paczek koniecznie zwiększ grupę ciepłą...
          </p>
          <div className="mt-2 space-y-[3px]">
            <div className="h-[3px] w-full rounded-full bg-black/10" />
            <div className="h-[3px] w-4/5 rounded-full bg-black/10" />
          </div>
        </MagicUniqueCard>

        <div className="absolute left-[455px] top-[700px] z-10 hidden w-[335px] lg:block">
          <StaticImage
            src="../../images/magic-landing-2026-opinions-c.webp"
            alt="Opinia o wsparciu MAGIC"
            placeholder="blurred"
            quality={90}
            width={1180}
            className="w-full"
            imgClassName="!object-contain"
          />
        </div>

        <div className="absolute left-[456px] top-[870px] z-10 hidden w-[340px] lg:block">
          <StaticImage
            src="../../images/magic-landing-2026-opinions-b.webp"
            alt="Opinia o konsultacjach MAGIC"
            placeholder="blurred"
            quality={90}
            width={1214}
            className="w-full"
            imgClassName="!object-contain"
          />
        </div>

        <div className="absolute left-[160px] top-[382px] w-[112px] text-center lg:left-[210px] lg:top-[950px] lg:w-[245px]">
          <HandwrittenNote
            className="text-[22px] uppercase lg:text-[24px]"
            style={{ fontFamily: '"Caveat", cursive', fontWeight: 700 }}
          >
            5 ekspertów
          </HandwrittenNote>
          <p className="mt-1 text-[8px] font-caveat leading-tight">
            pomogą Ci w: reklamach Meta Ads, tekstach, grafikach, newsletterze,
            automatyzacjach
          </p>
        </div>

        {magicUniqueExperts.map((expert) => (
          <MagicUniqueExpert
            key={expert.label}
            image={expert.image}
            label={expert.label}
            className={`lg:hidden ${expert.className}`}
            imageClassName={expert.imageClassName}
          />
        ))}

        <div className="absolute left-[-12px] top-[1075px] z-20 hidden w-[824px] lg:block">
          <StaticImage
            src="../../images/magic-landing-2026-experts-transparent.webp"
            alt="Eksperci MAGIC"
            placeholder="blurred"
            quality={95}
            width={851}
            className="w-full"
            imgClassName="!object-contain"
          />
        </div>

        {/* arrow: near "co" -> "4 poziomy nauki" */}
        <MagicPinkArrow
          className="left-[150px] top-[470px] w-[150px]"
          style={{ transform: "rotate(195deg)" }}
        />
        {/* arrow: above "sprawia" -> "na żywo miesięcznie" */}
        <MagicPinkArrow
          className="left-[395px] top-[470px] w-[130px]"
          style={{ transform: "rotate(-25deg)" }}
        />
        {/* arrow: by "jest" -> between Circle and "wsparcie techniczne" */}
        <MagicPinkArrow
          className="left-[470px] top-[590px] w-[130px]"
          style={{ transform: "rotate(15deg)" }}
        />
        {/* arrow: above "ekspertów" -> down to it */}
        <MagicPinkArrow
          className="left-[300px] top-[885px] w-[120px]"
          style={{ transform: "rotate(75deg)" }}
        />
        {/* arrow: from "W" of wyjątkowy -> "asystentka ai" */}
        <MagicPinkArrow
          className="left-[180px] top-[695px] w-[150px]"
          style={{ transform: "rotate(140deg)" }}
        />
        {/* black arrow: from "pasek progresu" note -> "0%" on levels screenshot */}
        <MagicBlackArrow
          className="left-[170px] top-[290px] w-[150px]"
          style={{ transform: "rotate(190deg)" }}
        />
        {/* black arrow + label: under "wyjątkowy" -> kapibara "Hej! Mam małą rozkminę" screenshot */}
        <MagicBlackArrow
          className="left-[195px] top-[675px] w-[140px]"
          style={{ transform: "rotate(120deg)" }}
        />
        <p className="pointer-events-none absolute left-[235px] top-[665px] z-20 hidden w-[120px] text-center text-[7px] font-caveat leading-tight lg:block">
          przykładowe pytania i odpowiedzi
        </p>
      </div>
    </div>
  </div>
)

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
  const sectionClassName = version === 3 || version === 4 ? "" : "mb-12"
  const sectionPadding =
    version === 5
      ? "py-8 md:py-12 px-0"
      : isMagicSpecialLayout && version === 3
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
      {version == 5 && <MagicUnique2026Section />}
    </Section>
  )
}

export default MagicDateBanner
