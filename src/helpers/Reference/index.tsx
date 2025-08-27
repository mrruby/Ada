import React from "react"

type IReference = {
  image: React.JSX.Element
}

const Reference = ({ image }: IReference) => {
  return (
    <div className="w-full h-full flex justify-center items-center px-4">
      {image}
    </div>
  )
}

export default Reference
