import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"

const ThankBanner2 = (): JSX.Element => {
  return (
    <div className="flex px-2 lg:pl-[120px] flex-col items-center text-ada-blue relative md:min-h-[85vh]">
      <div className="lg:w-[1000px] pt-[80px] lg:pt-[110px] md:pb-[60px] text-center">
        <h1 className="text-[20px] lg:text-adaTitle2 font-bold">
          Dziękuję za potwierdzenie!
        </h1>
        <p className="lg:text-[30px] pt-[24px] font-medium leading-tight pb-[30px] md:pb-[50px]">
          Sprawdź mojego Instagrama w poszukiwaniu <br /> ciekawych stories o
          kampaniach i masy tipów!
        </p>
        <Button
          type="button"
          text="Sprawdzam"
          url="https://www.instagram.com/adapromis/"
          btnStyle="lg:w-[425px]"
        />
      </div>
      <div className="ml-[-80px] md:absolute left-[-200px] xl:left-[-120px] bottom-0 mt-[-40px] md:mt-0">
        <StaticImage
          src={"../../images/ada_thank.webp"}
          alt="Ada Promis - hero"
          placeholder="none"
          width={640}
          height={640}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      </div>
      <div className="hidden md:flex md:absolute right-[-300px] xl:right-[-100px] bottom-[-300px]">
        <StaticImage
          src={"../../images/instagram.webp"}
          alt="Ada Promis - instagram"
          placeholder="none"
          width={400}
          height={610}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      </div>
    </div>
  )
}

export default ThankBanner2
