import { MagicSun, MagicSunYellow } from "helpers/LayoutElements"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinar2 = ({ version = 1 }: { version?: number }): JSX.Element => {
  const isPinkVersion = version === 2
  const bgColor = isPinkVersion ? "bg-ada-newPurple2" : "bg-ada-magicPurple"
  const textColor = isPinkVersion ? "text-ada-newPurple" : "text-white"

  const cards = [
    {
      emoji: "✨",
      text: (
        <>
          <b>Twoje reklamy finansują kolejne działania,</b> zamiast pożerać
          budżet.
        </>
      ),
    },
    {
      emoji: "💖",
      text: (
        <>
          <b>Klientki trafiają prosto do Ciebie,</b> bo komunikaty mówią ich
          językiem i budują autentyczną więź.
        </>
      ),
    },
    {
      emoji: "⏱",
      text: (
        <>
          <b> Masz wreszcie wolne popołudnia </b>- kampania pracuje na
          zaprogramowanym autopilocie, bez Twojego ciągłego klikania.
        </>
      ),
    },
    {
      emoji: "🚀",
      text: (
        <>
          <b>Sprzedaż rośnie przewidywalnie</b>: wiesz dokładnie, który krok
          przynosi wynik, więc skalujesz bez stresu.
        </>
      ),
    },
  ]

  const renderCard = ({
    emoji,
    text,
  }: {
    emoji: string
    text: React.ReactNode
  }) => (
    <div
      key={emoji}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
    >
      <span className="text-5xl mb-4">{emoji}</span>
      <Typography variant="body" className="text-lg">
        {text}
      </Typography>
    </div>
  )

  return (
    <div className={`${bgColor} px-6 md:px-12 relative`}>
      <div className="flex justify-center">
        {isPinkVersion ? (
          <MagicSunYellow
            mobileBottom="top-[-50px]"
            width="200px"
            zIndex="z-10"
          />
        ) : (
          <MagicSun mobileBottom="top-[-50px]" width="200px" zIndex="z-10" />
        )}
      </div>
      <div className="container mx-auto mt-24">
        <Typography
          variant="h1"
          className={`${textColor} text-4xl md:text-5xl font-bold text-center mb-12`}
        >
          🔮 Wyobraź to sobie…
        </Typography>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mx-auto mb-8">
          {cards.map(renderCard)}
        </div>

        {/* Bottom Message */}
        <div className="max-w-3xl mx-auto">
          <div className="text-white p-6 max-w-2xl mx-auto mb-8">
            <Typography variant="body" className="text-lg inline">
              21 maja (środa) | 18:00 Grafika • Copy • Adsy na Facebooku &
              Instagramie
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar2
