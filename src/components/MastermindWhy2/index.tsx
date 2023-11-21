import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const MastermindWhy2 = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row gap-[60px] xl:gap-[90px] items-center w-full justify-center mx-3">
      <div className="min-w-[507px] md:ml-[-130px]">
        <StaticImage
          src={"../../images/ada_mastermind2.webp"}
          alt="Ada Promis - hero"
          placeholder="none"
          width={507}
          height={644}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      </div>
      <div className="flex flex-col">
        <h2 className=" max-w-[500px] text-adaBase lg:text-adaTitle font- border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px]">
          Dlaczego program
        </h2>
        <h2 className="x-w-[600px] text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] lg:mt-[-10px]">
          startuje właśnie teraz?
        </h2>
        <p className="lg:text-adaDesc lg:w-[574px] pt-10 font-medium leading-tight">
          Program startuje już w październiku, abyś pracowała nad kampaniami w
          najgorętszym okresie reklamowym roku! Już niedługo Twoim potencjalni
          klienci zapomną o urlopach i zaczną przygotowania do świąt. Wtedy Ty
          skierujesz do nich dobrze zaprojektowane reklamy, które będziemy na
          bieżąco sprawdzać, optymalizować i ulepszać.
        </p>
      </div>
    </div>
  )
}

export default MastermindWhy2
