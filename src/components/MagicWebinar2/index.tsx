import { MagicSun, YellowCircleArrow } from "helpers/LayoutElements"
import React from "react"

type Variant = "default" | "pink" | "sowa"

type Config = {
  bgColor: string
  showIcon: boolean
  iconType: "sun" | "arrow" | null
  headingClass: string
  headingStyle?: React.CSSProperties
  cardTextClass: string
}

// Base config for default/pink variants (DRY)
const baseConfig: Omit<Config, "bgColor" | "iconType"> = {
  showIcon: true,
  headingClass: "text-white text-4xl md:text-5xl font-bold text-center mb-12",
  cardTextClass: "text-lg",
}

const variantConfig: Record<Variant, Config> = {
  default: { ...baseConfig, bgColor: "bg-ada-magicPurple", iconType: "sun" },
  pink: { ...baseConfig, bgColor: "bg-ada-newPurple2", iconType: "arrow" },
  sowa: {
    bgColor: "bg-transparent",
    showIcon: false,
    iconType: null,
    headingClass:
      "font-playfair text-black text-[48px] font-extrabold text-center mb-12 leading-[100%] pt-8",
    headingStyle: { textShadow: "0px 4px 4px #CCAA4D" },
    cardTextClass:
      "font-montserrat font-medium text-[16px] leading-[100%] text-center text-black [&_b]:font-bold",
  },
}

// Static cards array (moved outside component for DRY/perf)
const CARDS = [
  {
    id: "funding",
    emoji: "✨",
    text: (
      <>
        <b>Twoje reklamy finansują kolejne działania,</b> zamiast pożerać
        budżet.
      </>
    ),
  },
  {
    id: "clients",
    emoji: "💖",
    text: (
      <>
        <b>Klientki trafiają prosto do Ciebie,</b> bo komunikaty mówią ich
        językiem i budują autentyczną więź.
      </>
    ),
  },
  {
    id: "time",
    emoji: "⏱",
    text: (
      <>
        <b> Masz wreszcie wolne popołudnia </b>- kampania pracuje na
        zaprogramowanym autopilocie, bez Twojego ciągłego klikania.
      </>
    ),
  },
  {
    id: "growth",
    emoji: "🚀",
    text: (
      <>
        <b>Sprzedaż rośnie przewidywalnie</b>: wiesz dokładnie, który krok
        przynosi wynik, więc skalujesz bez stresu.
      </>
    ),
  },
]

type Props = {
  variant?: Variant
  /** @deprecated use variant instead */
  version?: 1 | 2
}

const MagicWebinar2 = ({ variant, version }: Props) => {
  // Backward compatibility: map version to variant
  const resolvedVariant: Variant =
    variant ?? (version === 2 ? "pink" : "default")
  const config = variantConfig[resolvedVariant]

  const renderCard = ({
    id,
    emoji,
    text,
  }: {
    id: string
    emoji: string
    text: React.ReactNode
  }) => (
    <div
      key={id}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
    >
      <span className="text-5xl mb-4">{emoji}</span>
      <p className={config.cardTextClass}>{text}</p>
    </div>
  )

  return (
    <div className={`${config.bgColor} px-6 md:px-12 relative pb-0`}>
      {config.showIcon && (
        <div className="flex justify-center">
          {config.iconType === "arrow" ? (
            <YellowCircleArrow
              mobileBottom="top-[-25px]"
              width="67px"
              zIndex="z-10"
            />
          ) : (
            <MagicSun mobileBottom="top-[-50px]" width="200px" zIndex="z-10" />
          )}
        </div>
      )}
      <div className="container mx-auto mt-12">
        <h1 className={config.headingClass} style={config.headingStyle}>
          Wyobraź to sobie…
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mx-auto pb-8">
          {CARDS.map(renderCard)}
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar2
