import React from "react"
import { Button } from "helpers/Button"

const WebinarButton = ({
  variant,
}: {
  variant: "variant1" | "variant2"
}): JSX.Element => {
  return (
    <div className="py-20">
      {variant === "variant1" && (
        <div className="flex flex-col items-center text-center gap-[40px]">
          <h2 className="text-adaDesc md:text-adaSubtitle font-bold tracking-wider max-w-[620px]">
            Chcesz, aby Twoje klientki mówiły podobnie o współpracy z Tobą?
          </h2>

          <Button
            type="button"
            text={
              <span className="font-bold">
                Tak, chcę! <br /> Zapisuję się!
              </span>
            }
            sectionId="webinar-form"
            textSize="md:text-adaSubtitle"
            btnStyle="uppercase md:w-[340px] bg-ada-lightpink tracking-[2.90px] h-[104px] shadow-xl mb-4"
          />
        </div>
      )}
      {variant === "variant2" && (
        <div className="flex flex-col items-center">
          <Button
            type="button"
            text={
              <span className="font-bold">
                Chcę poznać <br /> 3 typy kampanii!
              </span>
            }
            sectionId="webinar-form"
            textSize="md:text-adaSubtitleThird"
            btnStyle="uppercase md:w-[580px] bg-ada-pink2 tracking-[2.90px] h-[140px] shadow-xl"
          />
        </div>
      )}
    </div>
  )
}

export default WebinarButton
