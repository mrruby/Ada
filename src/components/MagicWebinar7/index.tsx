import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const MagicWebinar7 = ({ version = 1 }: { version?: number }) => {
  const primaryColor =
    version === 2 ? "text-ada-newPurple" : "text-ada-magicPurple"
  const bgColor = version === 2 ? "bg-ada-newPurple" : "bg-ada-magicOrange"

  const renderTypography = (
    text: string | React.ReactNode,
    className: string,
    variant: "h2" | "body" = "body"
  ) => (
    <Typography variant={variant} className={className}>
      {text}
    </Typography>
  )

  return (
    <div className="bg-pink-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-xl mx-auto pb-8">
        {renderTypography(
          <>
            <span className={primaryColor}>
              Dlaczego jeszcze warto obejrzeć nagranie masterclassu?
            </span>
          </>,
          "font-bold max-w-xl mx-auto pb-4 text-center m-4",
          "h2"
        )}
        {renderTypography(
          "Zobacz, jakie wyniki możemy pomóc Ci osiągnąć:",
          `${bgColor} px-4 rounded-sm font-bold text-white m-4`
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {renderTypography(
          "Zakupy o łącznej wartości 3900 zł z kampanii, na którą wydałyśmy 203 zł? Proszę bardzo!",
          "text-ada-magicPurple font-bold m-4"
        )}
        {renderTypography(
          "Niecałe 5 zł za wartościowy kontakt? Da się zrobić! Basia jest zadowolona",
          "text-ada-magicPurple font-bold m-4"
        )}
        {/* Row 1 */}

        <StaticImage
          src={"../../images/masterclass3Info.webp"}
          alt="Masterclass 3 Info"
          placeholder="blurred"
          width={600}
          imgStyle={{ objectFit: "contain" }}
          className="m-4"
        />
        <div className="flex flex-col">
          <StaticImage
            src={"../../images/masterclass2Info.webp"}
            alt="Masterclass 2 Info"
            placeholder="blurred"
            height={200}
            className="m-4"
          />
          <StaticImage
            src={"../../images/masterclass5Info.webp"}
            alt="Masterclass 5 Info"
            placeholder="blurred"
            width={680}
            className="m-4"
          />
        </div>

        <StaticImage
          src={"../../images/masterclass4Info.webp"}
          alt="Masterclass 4 Info"
          placeholder="blurred"
          width={680}
          className="m-4"
        />

        <div className="flex flex-col">
          {renderTypography(
            "Pomogłyśmy Oli zebrać prawie 2000 osób na webinar!",
            "text-ada-magicPurple font-bold m-4"
          )}

          <StaticImage
            src={"../../images/masterclass1Info.webp"}
            alt="Masterclass 1 Info"
            placeholder="blurred"
            width={680}
            className="m-4"
          />
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar7
