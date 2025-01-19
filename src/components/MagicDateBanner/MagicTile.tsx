import React from "react"
import Typography from "../shared/Typography"

type MagicTileProps = {
  colors: string
  title?: string
  description: string
}

const MagicTile = ({ colors, title, description }: MagicTileProps) => (
  <div className="md:mt-0 text-center mb-8">
    <div className={`${colors} rounded-xl uppercase p-2 md:p-6 shadow-lg`}>
      <Typography variant="h3" className="uppercase">
        {title}
      </Typography>{" "}
    </div>
    <p className="text-sm md:text-base leading-relaxed pt-2">{description}</p>
  </div>
)

export default MagicTile
