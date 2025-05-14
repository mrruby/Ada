import { MagicSun, MagicSunPinkNew } from "helpers/LayoutElements"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinar9 = ({ version = 1 }: { version?: number }): JSX.Element => {
  const isVersion2 = version === 2
  const accentColor = isVersion2 ? "text-ada-pink7" : "text-ada-magicOrange"
  const primaryColor = "text-ada-magicPurple"

  const renderTypography = (
    text: string | React.ReactNode,
    className: string,
    variant: "h1" | "h3" | "body" = "body"
  ) => (
    <Typography variant={variant} className={className}>
      {text}
    </Typography>
  )

  return (
    <div className="bg-pink-100 p-8 md:p-12 rounded-lg">
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8 max-w-3xl mx-auto">
        <div className="w-20 h-20 md:w-24 md:h-24 relative flex-shrink-0">
          {isVersion2 ? (
            <MagicSunPinkNew width="500px" />
          ) : (
            <MagicSun width="500px" />
          )}
        </div>
        <div className="flex flex-col gap-6">
          {renderTypography(
            <>
              <span className={primaryColor}>UWAGA: Nie jest to typowy </span>
              <span className={accentColor}>warsztat</span>
              <span className={primaryColor}> pełen ogólników</span>
            </>,
            "text-center md:text-left max-w-lg",
            "h1"
          )}

          <div className={primaryColor}>
            {renderTypography(
              <>
                To 90-minutowe spotkanie warsztatowe. W czasie spotkania
                wypełnisz karty pracy razem z nami, więc kończysz z gotowym
                planem kampanii, a nie stertą luźnych notatek. Skupiamy się
                wyłącznie na sprawdzonych krokach, inspiracjach, konkretnej
                wiedzy.
              </>,
              "text-lg"
            )}
          </div>

          <div className={primaryColor}>
            {renderTypography(
              <>
                Nagranie i materiały będą darmowe tylko do <b>28 maja</b> -
                później cały pakiet trafi do sklepu jako produkt płatny. Jeśli
                chcesz zgarnąć wiedzę gratis, wskakuj teraz!
              </>,
              "text-lg"
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar9
