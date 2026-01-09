import { StaticImage } from "gatsby-plugin-image"
import React from "react"

type Variant = "gold" | "red"

interface MagicSowaCTAProps {
  variant: Variant
  sectionId?: string
}

const MagicSowaCTA = ({
  variant,
  sectionId = "sowa-form",
}: MagicSowaCTAProps) => {
  if (variant === "gold") {
    return (
      <div className="bg-ada-sowaGold2 py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative">
          <StaticImage
            src="../../images/elixir.webp"
            alt="Ads Eliksir"
            placeholder="blurred"
            width={300}
            quality={100}
            className="!absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
          />
          <h2 className="font-playfair font-normal text-[48px] leading-[100%] uppercase text-black mb-8 max-w-[50%] mx-auto">
            Nie czekaj - zapisz się, zanim Ads Eliksir…zniknie!
          </h2>
          <div className="bg-ada-sowaNavy rounded-2xl p-6 inline-block text-white mb-8">
            <p className="font-montserrat font-extrabold text-[32px] leading-[100%] text-center">
              ⏰ Termin: 10.09
            </p>
            <p className="font-montserrat font-extrabold text-[32px] leading-[100%] text-center">
              🕒 Godzina: 18:00
            </p>
          </div>
          <div>
            <a
              href={`#${sectionId}`}
              className="inline-flex items-center justify-center bg-black hover:bg-gray-800 px-12 py-4 rounded-full"
            >
              <span className="text-white font-montserrat font-bold text-[20px] md:text-[24px]">
                Zapisuję się
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }

  // variant === "red"
  return (
    <div className="bg-ada-sowaDarkRed py-16 px-4">
      <div className="container mx-auto text-center">
        <a
          href={`#${sectionId}`}
          className="inline-flex items-center justify-center bg-ada-sowaGold2 hover:opacity-90 px-12 py-4 rounded-full"
        >
          <span className="text-black font-montserrat font-bold text-[20px] md:text-[24px] uppercase">
            REZERWUJĘ MIEJSCE!
          </span>
        </a>
        <div className="mt-6">
          <span className="bg-white text-black px-3 py-1 rounded font-bold font-montserrat">
            Uwaga:
          </span>
          <span className="text-white ml-2 font-montserrat">
            Ilość miejsc ograniczona - zdecyduj się teraz!
          </span>
        </div>
      </div>
    </div>
  )
}

export default MagicSowaCTA
