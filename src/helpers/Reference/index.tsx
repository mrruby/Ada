import React from "react"

type IReference = {
  image: JSX.Element
}

const Reference = ({ image }: IReference): JSX.Element => {
  return <div className="w-[400px] md:w-[600px]">{image}</div>
}

export default Reference
