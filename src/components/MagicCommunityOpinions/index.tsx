import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicCommunityOpinions = ({
  showResults = false,
}: {
  showResults?: boolean
}) => {
  return (
    <Section
      bgColor="bg-ada-magicYellow"
      className="pt-24 md:pt-32"
      id="opinie"
      padding="py-8 md:py-12 px-6"
    >
      <div className="w-full">
        <Typography variant="h1" className="mb-6 text-center text-ada-black">
          Wyniki i opinie członkiń
        </Typography>

        {showResults && <MagicResultsPreview />}

        <div className="mb-10 text-center">
          {!showResults && (
            <p className="mb-6 text-ada-black">
              Chcesz takich liczb u siebie? Twój MAGIC Plan pokaże pierwszy krok
            </p>
          )}
          <a
            href="https://cart.easy.tools/checkout/81632369/magic-subskrypcja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              type="button"
              text={<span className="!font-extrabold">Dołączam</span>}
              textSize="text-xs md:text-adaBase uppercase text-black"
              btnStyle="bg-ada-pink8 tracking-wide p-3 hover:opacity-90 rounded-full min-w-[130px] h-[58px] shadow-xl"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          <div className="flex flex-col gap-0">
            <StaticImage
              src="../../images/magic_reference_sell_1.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_2.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-0">
            <StaticImage
              src="../../images/magic_reference_sell_3.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_4.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-0">
            <StaticImage
              src="../../images/magic_reference_sell_5.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_6.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

const MagicResultsPreview = () => (
  <div className="mb-16">
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
      <div className="min-w-0 overflow-hidden rounded-lg bg-white p-3 shadow-[0_8px_0_rgba(0,0,0,0.08)]">
        <StaticImage
          src="../../images/magic-landing-2026-result-1.webp"
          alt="Wyniki kampanii: 18 zakupów, 6832,20 zł wartości konwersji i 989,92 zł wydanej kwoty"
          layout="fullWidth"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          quality={90}
          className="!block !w-full !max-w-full"
          imgClassName="!object-contain"
          style={{ maxWidth: "100%", width: "100%" }}
        />
      </div>

      <div className="min-w-0 overflow-hidden rounded-lg bg-white p-3 shadow-[0_8px_0_rgba(0,0,0,0.08)]">
        <StaticImage
          src="../../images/magic-landing-2026-result-2.webp"
          alt="Wyniki kampanii: 128 przesłanych zgłoszeń przy koszcie wyniku 17,61 zł"
          layout="fullWidth"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          quality={90}
          className="!block !w-full !max-w-full"
          imgClassName="!object-contain"
          style={{ maxWidth: "100%", width: "100%" }}
        />
      </div>

      <div className="min-w-0 overflow-hidden rounded-lg bg-white p-3 shadow-[0_8px_0_rgba(0,0,0,0.08)]">
        <StaticImage
          src="../../images/magic-landing-2026-result-3.webp"
          alt="Wyniki kampanii: 68 zakupów w witrynie, 9461,00 zł wartości konwersji i 236,99 zł wydanej kwoty"
          layout="fullWidth"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          quality={90}
          className="!block !w-full !max-w-full"
          imgClassName="!object-contain"
          style={{ maxWidth: "100%", width: "100%" }}
        />
      </div>
    </div>

    <p className="mx-auto mt-10 max-w-3xl text-center text-xl font-bold leading-tight text-ada-black md:text-3xl">
      Chcesz takich liczb u siebie? Twój{" "}
      <span className="text-ada-pink7">MAGIC Plan</span> pokaże pierwszy krok
    </p>
  </div>
)

export default MagicCommunityOpinions
