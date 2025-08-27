import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"

const MastermindWhy2 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[60px] xl:gap-[90px] items-center w-full justify-center mx-3 pb-10">
      <div className="min-w-[507px] md:ml-[-130px]">
        <StaticImage
          src={"../../images/ada_mastermind2.webp"}
          alt="Ada Promis - hero"
          placeholder="blurred"
          width={507}
          height={644}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="x-w-[600px] text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] lg:mt-[-10px]">
          Czy to dla Ciebie?{" "}
        </h2>
        <p className="lg:text-adaDesc lg:w-[574px] pt-10 font-medium leading-tight pb-9">
          W tej edycji jest tylko 5-7 miejsc.
          <br /> Zanim zdecydujesz się dołączyć, zaproponuję Ci krótkie
          spotkanie, podczas którego wspólnie porozmawiamy o Twoim udziale w
          programie mentoringowym. Chcę dowiedzieć się, jakie są Twoje
          oczekiwania i poznać lepiej Twój biznes!
        </p>
        <Button
          type="button"
          text={<span className="font-bold">Chcę dołączyć!</span>}
          sectionId="zostaw-maila"
          textSize="md:text-adaSubtitle border-b-4 border-ada-pink"
          btnStyle="md:w-[250px]"
        />
      </div>
    </div>
  )
}

export default MastermindWhy2
