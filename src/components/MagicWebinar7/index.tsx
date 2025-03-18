import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const MagicWebinar7 = (): JSX.Element => {
  return (
    <div className="bg-pink-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-xl mx-auto pb-8">
        <Typography
          variant="h2"
          className="font-bold max-w-xl mx-auto pb-4 text-center"
        >
          <span className="text-ada-magicPurple">
            Dlaczego jeszcze warto zapisać się na{" "}
          </span>
          <span className="text-ada-magicOrange">webinar</span>
          <span className="text-ada-magicPurple">?</span>
        </Typography>
        <div className="bg-ada-magicOrange text-white px-4 rounded-sm">
          <span className="font-bold text-ada-magicPurple">
            Zobacz, jakie wyniki możemy pomóc Ci osiągnąć:
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {/* Row 1 */}
        <div className="flex justify-center items-center">
          <StaticImage
            src={"../../images/masterclass3Info.webp"}
            alt="Masterclass 3 Info"
            placeholder="blurred"
            width={500}
            className="m-4"
          />
        </div>
        <div className="flex justify-center items-center">
          <StaticImage
            src={"../../images/masterclass2Info.webp"}
            alt="Masterclass 2 Info"
            placeholder="blurred"
            height={200}
            className="m-4"
          />
        </div>

        {/* Row 2 */}
        <div className="flex justify-center items-center">
          <StaticImage
            src={"../../images/masterclass4Info.webp"}
            alt="Masterclass 4 Info"
            placeholder="blurred"
            width={680}
            className="m-4"
          />
        </div>
        <div className="flex justify-center items-center">
          <StaticImage
            src={"../../images/masterclass5Info.webp"}
            alt="Masterclass 5 Info"
            placeholder="blurred"
            width={680}
            className="m-4"
          />
        </div>

        {/* Row 3 */}
        <div className="flex justify-center items-center md:col-span-2">
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
