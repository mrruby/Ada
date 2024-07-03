import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"

const MasterclassInfo3 = (): JSX.Element => {
  return (
    <div className="w-full px-3 py-2 flex flex-col pb-[80px]">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex">
          <StaticImage
            src={"../../images/warsztaty.webp"}
            alt="Ada Promis - hero"
            placeholder="blurred"
            width={440}
            height={432}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </div>
        <div className="xl:min-w-[800px] lg:ml-[50px]">
          <div className="pl-4 md:pl-20 py-6 bg-ada-pink2 w-full">
            <h3 className="max-w-[800px] md:text-adaSubtitle uppercase font-semibold ">
              Warsztaty Kevin sam w menedżerze reklam: stwórz lejek reklamowy na
              2024 rok!{" "}
            </h3>
          </div>
          <p className="max-w-[800px] pl-4 lg:pl-20 md:text-adaSubtitle pt-8">
            {" "}
            to niezawodny sposób na rozpoczęcie pracy z reklamami.
            <br />
            Poznasz podstawy{" "}
            <span className="font-bold">
              strategicznego ustawiania reklam,
            </span>{" "}
            a potem dodasz do portfolio nowe, opłacalne usługi.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 items-center">
        <h3 className="md:text-adaSubtitleSecondary text-center pt-[100px] uppercase font-extrabold">
          To jak, wchodzisz do gry?
        </h3>
        <Button
          type="button"
          text={<span className="font-bold">DOŁĄCZAM DO WARSZTATÓW </span>}
          url="https://app.easycart.pl/checkout/62332176/masterclass-kevin-sam-w-menedzerze-reklam-zaplanuj-swoj-lejek-reklamowy"
          textSize="md:text-adaSubtitle"
          btnStyle="md:w-[410px] bg-ada-pink2 tracking-[2.90px] mx-auto border-b-4 border-ada-pink shadow-xl"
          iconCalender
        />
      </div>
    </div>
  )
}

export default MasterclassInfo3
