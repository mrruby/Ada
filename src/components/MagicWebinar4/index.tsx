import { Button } from "helpers/Button"
import { MagicSunPink, MagicSunPinkNew } from "helpers/LayoutElements"
import React from "react"

const MagicWebinar4 = ({ version = 1 }: { version?: number }): JSX.Element => {
  const isVersion2 = version === 2
  const bgColor = isVersion2 ? "bg-ada-newPurple" : "bg-ada-magicOrange"
  const accentColor = isVersion2 ? "bg-ada-newPurple2" : "bg-ada-magicPurple"
  const textHighlightColor = isVersion2 ? "text-ada-pink7" : "text-orange-500"
  const buttonBgColor = isVersion2 ? "bg-ada-yellow3" : "bg-white"
  const buttonTextColor = isVersion2
    ? "text-ada-newPurple"
    : "text-ada-magicPurple"
  const buttonHoverColor = isVersion2
    ? "bg-ada-yellow3/90"
    : "bg-ada-magicPurple/90"
  const goalBgColor = isVersion2 ? "bg-ada-yellow3" : "bg-ada-magicPurple"
  const goalTextColor = isVersion2 ? "text-ada-newPurple" : "text-white"

  const SunIcon = isVersion2 ? MagicSunPinkNew : MagicSunPink

  const benefits = [
    {
      emoji: "📊",
      text: (
        <b>
          Inspiracje i wskazówki przygotowane przez trzy specjalistki: Dorotę
          (grafika), Justynę (copy) oraz Adę (adsy).
        </b>
      ),
    },
    {
      emoji: "🎨",
      text: <b>Kreację, która zatrzymuje scroll (i utrzymuje ciekawość)</b>,
    },
    {
      emoji: "✍️",
      text: <b>Copy, które przyciąga- bez nudy</b>,
    },
    {
      emoji: "🚀",
      text: <b>Plan na kampanię reklamową, której wyniki wywołują uśmiech</b>,
    },
  ]

  const renderBenefit = ({
    emoji,
    text,
  }: {
    emoji: string
    text: React.ReactNode
  }) => (
    <div
      key={emoji}
      className={`${accentColor} text-white p-6 rounded-sm flex items-start`}
    >
      <span className="text-xl mr-3">{emoji}</span>
      <p className="text-left text-sm md:text-base">{text}</p>
    </div>
  )

  return (
    <div
      className={`${bgColor} p-8 md:p-12 lg:p-16 text-center relative overflow-hidden flex flex-col items-center justify-center`}
    >
      {/* Top section with title */}
      <div className="flex items-center justify-center md:mb-12 relative">
        <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
          <SunIcon />
        </div>
        <div className="bg-pink-200 px-4 py-2 mx-2 rounded-sm pb-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            <span className={textHighlightColor}>Co Cię czeka podczas </span>
            <span className="text-ada-magicPurple">warsztatów?</span>
          </h1>
        </div>
        <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
          <SunIcon />
        </div>
        <div className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2">
          <div
            className={`${accentColor} text-white px-4 py-1 rounded-sm transform -rotate-3`}
          >
            <span className="font-bold">ODKRYJESZ:</span>
          </div>
        </div>
      </div>

      {/* Grid of benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mb-8 max-w-6xl mx-auto">
        {benefits.map(renderBenefit)}
      </div>

      {/* Bottom section with goal */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <div
          className={`inline-block ${goalBgColor} ${goalTextColor} px-3 py-1 rounded-sm`}
        >
          <span className="font-bold">Nasz cel:</span>
        </div>
        <span className="text-white font-medium ml-2">
          pokazać Ci, że reklamy na Facebooku i Instagramie zaczynają się od
          dobrego, strategicznego planu. Przygotujemy go wspólnie!
        </span>
      </div>

      <Button
        type="button"
        text={
          <span className={`${buttonTextColor} font-bold uppercase`}>
            CHCĘ DOŁĄCZYĆ
          </span>
        }
        sectionId="signup"
        textSize="text-xl md:text-2xl"
        btnStyle={`${buttonBgColor} hover:${buttonHoverColor} text-xl font-bold py-6 mb-6 px-12 rounded-full border-none`}
      />
    </div>
  )
}

export default MagicWebinar4
