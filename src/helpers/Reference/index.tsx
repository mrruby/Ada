import React from "react"

type IReference = {
  image: JSX.Element
}

const Reference = ({ image }: IReference): JSX.Element => {
  return <div className="w-[400px] md:max-w-[600px] mx-auto">{image}</div>
}

export default Reference
