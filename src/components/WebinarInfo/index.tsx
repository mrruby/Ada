import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const listItems = [
  <span key={0}>
    🙋‍♀️ Kampanii, które budują<span className="font-bold"> społeczność</span>
  </span>,
  <span key={1}>
    🤩 Kampanii, które{" "}
    <span className="font-bold">wzbudzają zainteresowanie</span>
  </span>,
  <span key={2}>
    💰 Kampanii, które <span className="font-bold"> sprzedają</span>
  </span>,
]

const WebinarInfo = (): JSX.Element => {
  return (
    <div className="px-2 xl:px-6 text-ada-blue mx-auto gap-8 bg-ada-light-pink flex flex-col md:flex-row justify-between tracking-wider pb-10 md:pb-0">
      <StaticImage
        loading="eager"
        src={"../../images/ada_mastermind2.webp"}
        alt="Ada Promis - hero"
        placeholder="blurred"
        width={393}
        height={460}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
      <div className="flex flex-col justify-center gap-4 max-w-[760px]">
        <h2 className="adaDesc md:text-adaSubtitle pb-3 leading-none">
          Zapraszam Cię na <span className="font-bold">webinar</span>, na którym
          dzielę się wiedzą i doświadczeniem{" "}
          <span className="font-bold">o prowadzeniu kampanii: </span>
        </h2>
        <ul>
          {listItems.map((item, index) => (
            <li key={index} className="md:text-adaDesc pb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WebinarInfo
