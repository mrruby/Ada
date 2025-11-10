import React from "react"

type IPackage = {
  title: string
  desc: React.JSX.Element
  color: string
  link: string
}

const colorClasses: Record<string, string> = {
  magicGreen: "bg-ada-magicGreen",
  white2: "bg-ada-white2",
  purple3: "bg-ada-purple3",
}

const Package2 = ({ title, desc, color, link }: IPackage) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`max-w-[400px] min-h-[150px] text-center text-black p-6 rounded-2xl border border-ada-magicOrange ${
          colorClasses[color] || ""
        }`}
      >
        {" "}
        <h3 className="font-bold text-adaBase"> {title}</h3>
        <p className="my-4"> {desc}</p>
      </div>
      <div className="-mt-4 text-black">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span className="text-center font-bold text-adaStandard py-3 bg-ada-white2 w-[200px] rounded-[100px] px-6 inline-block mx-auto uppercase border border-black">
            CHCĘ DOŁĄCZYĆ!
          </span>
        </a>
      </div>
    </div>
  )
}

export default Package2
