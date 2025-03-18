import { MagicSun } from "helpers/LayoutElements"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinar9 = (): JSX.Element => {
  return (
    <div className="bg-pink-100 p-8 md:p-12 rounded-lg">
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8 max-w-3xl mx-auto">
        <div className="w-20 h-20 md:w-24 md:h-24 relative flex-shrink-0">
          <MagicSun width="500px" />
        </div>
        <div className="flex flex-col gap-6">
          <Typography
            variant="h1"
            className="text-center md:text-left max-w-lg"
          >
            <span className="text-ada-magicPurple">
              UWAGA: Nie jest to typowy{" "}
            </span>
            <span className="text-ada-magicOrange">webinar</span>
            <span className="text-ada-magicPurple"> pełen ogólników</span>
          </Typography>
          <div className="text-ada-magicPurple">
            <Typography variant="body" className="text-lg">
              To <span className="font-semibold">intensywna sesja,</span>{" "}
              podczas której poznasz konkretne strategie i narzędzia. Nie
              będziemy marnować Twojego czasu na teoretyzowanie — skupimy się
              wyłącznie na działaniach, które są praktyczne i działają!
            </Typography>
          </div>

          <div className="text-ada-magicPurple">
            <Typography variant="h3" className="mb-4">
              Gwarancja satysfakcji
            </Typography>
            <Typography variant="body" className="text-lg mb-4">
              Jeśli nie wyniesiesz z webinaru konkretnej wartości - zwrócimy Ci
              czas! 😉
            </Typography>
            <Typography variant="body" className="text-lg">
              A tak serio, serio: wiemy, że pewnie czasem brakuje Ci czasu nawet
              na zrobienie kawy, więc szykujemy dla Ciebie samo marketingowe
              mięsko.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar9
