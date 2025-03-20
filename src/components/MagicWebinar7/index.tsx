import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const MagicWebinar7 = (): JSX.Element => {
  return (
    <div className="bg-pink-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-xl mx-auto pb-8">
        <Typography
          variant="h2"
          className="font-bold max-w-xl mx-auto pb-4 text-center m-4"
        >
          <span className="text-ada-magicPurple">
            Dlaczego jeszcze warto zapisać się na{" "}
          </span>
          <span className="text-ada-magicOrange">webinar</span>
          <span className="text-ada-magicPurple">?</span>
        </Typography>
        <Typography
          variant="body"
          className="bg-ada-magicOrange text-white px-4 rounded-sm font-bold text-pink-100 m-4"
        >
          Zobacz, jakie wyniki możemy pomóc Ci osiągnąć:
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        <Typography
          variant="body"
          className="text-ada-magicPurple font-bold m-4"
        >
          Zakupy o łącznej wartości 3900 zł z kampanii, na którą wydałyśmy 203
          zł? Proszę bardzo!
        </Typography>
        <Typography
          variant="body"
          className="text-ada-magicPurple font-bold  m-4"
        >
          Niecałe 5 zł za wartościowy kontakt? Da się zrobić! Basia jest
          zadowolona
        </Typography>
        {/* Row 1 */}

        <StaticImage
          src={"../../images/masterclass3Info.webp"}
          alt="Masterclass 3 Info"
          placeholder="blurred"
          width={500}
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
          <Typography
            variant="body"
            className="text-ada-magicPurple font-bold m-4"
          >
            Pomogłyśmy Oli zebrać prawie 2000 osób na webinar!
          </Typography>

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
