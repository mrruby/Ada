import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicWhoYouMeet = () => {
  return (
    <Section bgColor="bg-transparent">
      <div className="w-full text-center">
        <Typography variant="h1" className="mb-8 text-white uppercase">
          Kogo spotkasz
          <br />w <span className="text-ada-white4">MAGIC</span>?
        </Typography>

        <Typography variant="h3" className="mb-6 text-ada-white4 font-bold">
          4 specjalistki pod jednym dachem:
        </Typography>

        <Typography variant="h3" className="text-white">
          Meta Ads | Copywriting | Grafika |<br />
          Koordynacja kampanii
        </Typography>
      </div>
    </Section>
  )
}

export default MagicWhoYouMeet
