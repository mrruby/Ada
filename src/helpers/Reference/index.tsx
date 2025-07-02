import React from "react"

type IReference = {
  image: JSX.Element
}

const Reference = ({ image }: IReference): JSX.Element => {
  return <div className="w-full flex justify-center items-center px-4">{image}</div>
}

export default Reference
