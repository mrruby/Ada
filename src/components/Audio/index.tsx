import React from "react"

type Props = {
  url: string
}

const Audio = ({ url }: Props) => {
  return (
    <audio className="focus:outline-none" controls>
      <source src={url} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
}

export default Audio
