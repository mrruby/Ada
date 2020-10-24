import React from "react"
import { AudioElement } from "./Audio.styled"

type Props = {
  url: string
}

const Audio = ({ url }: Props): JSX.Element => {
  return (
    <AudioElement controls>
      <source src={url} type="audio/mpeg" />
      Your browser does not support the audio element.
    </AudioElement>
  )
}

export default Audio
