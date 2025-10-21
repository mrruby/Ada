import Section from "components/shared/Section"
import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

interface MagicSpecialJoinProps {
  title?: string
}

const features = [
  {
    emoji: "👩‍💻",
    text: (
      <>
        konsultacje pisemne z <span className="font-semibold">ekspertkami</span>
      </>
    ),
  },
  {
    emoji: "🎥",
    text: (
      <>
        materiały szkoleniowe video z ustawiania kampanii reklamowych i nie
        tylko
      </>
    ),
  },
  {
    emoji: "🚀",
    text: (
      <>
        dostęp do <span className="font-semibold">wewnętrznej bazy wiedzy</span>
      </>
    ),
  },
  {
    emoji: "🗓️",
    text: (
      <>
        udział w dwóch{" "}
        <span className="font-semibold">1,5-godzinnych sesjach</span>{" "}
        konsultacji grupowych miesięcznie
      </>
    ),
  },
  {
    emoji: "💡",
    text: (
      <>
        udział w dwóch{" "}
        <span className="font-semibold">
          autorskich warsztatach tematycznych
        </span>{" "}
        w miesiącu
      </>
    ),
  },
  {
    emoji: "👀",
    text: (
      <>
        nielimitowany dostęp do{" "}
        <span className="font-semibold">nagrań ze wszystkich spotkań</span>
      </>
    ),
  },
]

const MagicSpecialJoin: React.FC<MagicSpecialJoinProps> = ({
  title = "DOŁĄCZ DO MAGIC:",
}) => {
  const magicIndex = title.indexOf("MAGIC")
  const beforeMagic = magicIndex >= 0 ? title.slice(0, magicIndex) : title
  const afterMagic =
    magicIndex >= 0 ? title.slice(magicIndex + "MAGIC".length) : ""

  return (
    <Section id="signup" padding="py-16 px-4">
      <div className="relative mx-auto max-w-[960px] rounded-[40px]  px-6 pb-14 pt-16  md:px-16">
        <Typography
          variant="h2"
          className="mb-20 text-center text-ada-black font-bold uppercase tracking-wide md:text-[48px]"
        >
          {beforeMagic}
          {magicIndex >= 0 && (
            <span className="text-ada-magicPink3 ">MAGIC</span>
          )}
          {afterMagic}
        </Typography>

        <div className="relative">
          <div className="absolute -left-8 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-[28px] bg-ada-magicPurple4 shadow-xl md:flex md:h-28 md:w-28">
            <StaticImage
              src="../../images/calendarIcon.webp"
              alt="Ikona kalendarza"
              width={80}
              height={80}
              placeholder="blurred"
              className="-rotate-6 md:scale-110"
            />
          </div>
          <div className="absolute -right-10 top-1/2 hidden h-24 w-24 -rotate-6 -translate-y-1/2 items-center justify-center rounded-full bg-ada-magicYellow text-xl font-bold text-ada-black shadow-lg md:flex md:h-28 md:w-28 md:text-2xl">
            333zł
          </div>

          <div className="rounded-[28px] bg-ada-magicPurple4 py-4 text-center text-white shadow-md md:py-6">
            <div className="mx-auto mb-3 flex items-center justify-center gap-4 md:hidden">
              <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-ada-magicPurple2 shadow-md">
                <StaticImage
                  src="../../images/calendarIcon.webp"
                  alt="Ikona kalendarza"
                  width={60}
                  height={60}
                  placeholder="blurred"
                  className="-rotate-6"
                />
              </div>
              <div className="flex h-16 w-16 -rotate-6 items-center justify-center rounded-full bg-ada-magicYellow text-lg font-bold text-ada-black shadow-md">
                333zł
              </div>
            </div>
            <Typography
              variant="h2"
              className="font-bold uppercase tracking-wide text-white md:text-[44px]"
            >
              Pakiet miesięczny
            </Typography>
          </div>
        </div>

        <div className="mt-10 rounded-[30px] bg-white p-6 text-base leading-relaxed text-ada-black shadow-[0_20px_45px_rgba(0,0,0,0.08)] md:p-10 md:text-lg">
          <div className="grid gap-6 md:grid-cols-2 md:gap-x-12 md:gap-y-6">
            {features.map(({ emoji, text }) => (
              <div key={emoji} className="flex items-start gap-3">
                <span className="text-xl md:text-2xl">{emoji}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://slowmarketing.zanfia.co/c/sesame/magic-pakiet-basic-rXx5?variant=6582ca8f-6ee8-4e7a-b989-420e44303bab"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ada-magicPink4 px-12 py-5 text-lg font-bold uppercase text-ada-black shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition hover:translate-y-0.5 hover:opacity-90 md:text-xl"
          >
            Tak, dołączam!
          </a>
        </div>
      </div>
    </Section>
  )
}

export default MagicSpecialJoin
