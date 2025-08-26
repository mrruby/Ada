import { MagicSun, MagicSunPinkNew } from "helpers/LayoutElements"
import React, { ReactNode } from "react"
import { CircleImage } from "../MagicBioBanner/circleImages"
import Typography from "../shared/Typography"

interface TeamMember {
  name: string
  title: string
  description: ReactNode
  imageUrl: string
}

const MagicWebinar5 = ({ version = 1 }: { version?: number }): JSX.Element => {
  const teamMember: TeamMember = {
    name: "Adrianna Promis-Urbas",
    title: "Specjalistka od kampanii reklamowych z 9-letnim doświadczeniem",
    description: (
      <>
        Pomogłam <span className="font-bold">ponad 200 kobietom</span>{" "}
        zwiększyć zyski i satysfakcję z prowadzenia własnej firmy.
        Specjalizuję się w przekształcaniu chaotycznych działań marketingowych
        w precyzyjne{" "}
        <span className="font-bold">
          systemy generujące przewidywalne wyniki
        </span>
        , nawet w niepewnych warunkach rynkowych.
      </>
    ),
    imageUrl: "ada",
  }

  return (
    <div className="bg-pink-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-row items-start justify-center">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 mr-6">
            <CircleImage circleKey={teamMember.imageUrl} />
          </div>
          <div className="flex flex-col">
            <Typography variant="h3" className="text-purple-700 mb-1">
              {teamMember.name}
            </Typography>
            <Typography
              variant="body"
              className="font-semibold text-gray-600 mb-4"
            >
              {teamMember.title}
            </Typography>
            <Typography variant="body" className="text-gray-800">
              {teamMember.description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar5
