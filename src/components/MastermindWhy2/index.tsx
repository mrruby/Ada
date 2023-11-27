import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"

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
        <h2 className="x-w-[600px] text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] lg:mt-[-10px]">
          Czy to dla Ciebie?{" "}
        </h2>
        <p className="lg:text-adaDesc lg:w-[574px] pt-10 font-medium leading-tight pb-9">
          W pierwszej oficjalnej edycji zaplanowałam 7 miejsc! <br /> Zanim
          podejmiesz decyzję, proponuję Ci krótkie spotkanie, podczas którego
          wspólnie porozmawiamy o Twoim udziale w programie mentoringowym. Chcę
          dowiedzieć się, jakie są Twoje oczekiwania i poznać lepiej Twój
          biznes!
        </p>
        <Button
          type="button"
          text={<span className="font-bold">Umawiam spotkanie</span>}
          url="https://koalendar.com/e/ogarnij-swoje-adsy-konsultacja/"
          textSize="md:text-adaSubtitle border-b-4 border-ada-pink"
          btnStyle="md:w-[340px]"
          iconCalender
        />
      </div>
    </div>
  )
}

export default MastermindWhy2
