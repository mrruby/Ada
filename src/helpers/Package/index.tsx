import React from "react"

type IPackage = {
  title: string
  desc: JSX.Element
  price: string
  link: string
}

const Package = ({ title, desc, price, link }: IPackage): JSX.Element => {
  return (
    <div className="max-w-[400px] min-h-[200px] p-4 text-center p-8">
      <h3 className="font-bold text-adaBase"> {title}</h3>
      <p className="my-4"> {desc}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <span className="text-center font-bold text-adaBase pt-4 bg-ada-pink2 w-[300px] rounded-[100px] px-6 py-4 inline-block mx-auto">
          Cena: {price}
        </span>
      </a>
    </div>
  )
}

export default Package
