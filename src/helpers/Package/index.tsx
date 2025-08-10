import React from "react"

type IPackage = {
  title: string
  desc: JSX.Element
  price: string
  link: string
}

const Package = ({ title, desc, price, link }: IPackage): JSX.Element => {
  return (
    <div className="max-w-[400px] min-h-[250px] p-4 text-center p-8">
      <h3 className="font-bold text-adaBase"> {title}</h3>
      <p className="my-4"> {desc}</p>
      <div className="relative">
        <p
          className="p-2 bg-ada-blue text-ada-pink2 w-[120px] font-bold absolute top-[52px] left-[120px]"
          style={{ transform: "rotate(-8deg)" }}
        >
          {price}
          <span className="ml-3 line-through text-[13px]">349 zł</span>
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span className="text-center font-bold text-adaBase pt-4 bg-ada-pink2 w-[300px] rounded-[100px] px-6 py-4 inline-block mx-auto uppercase">
            Korzystam!
          </span>
        </a>
      </div>
    </div>
  )
}

export default Package
