import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Team = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto text-center pb-6">
        <h3 className="md:text-adaSubtitleThird leading-3 font-bold md:border-b-[30px] border-ada-pink2 mt-6 text-center max-w-[844px]">
          Na spotkaniach będziesz miała okazję
        </h3>
        <h3 className="md:text-adaSubtitleThird leading-3 font-bold md:border-b-[30px] border-ada-pink2 mt-6 text-center max-w-[256px] mx-auto">
          poznać też:
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-12 mx-auto items-center pb-4">
        <StaticImage
          loading="eager"
          src={"../../images/justyna.png"}
          alt="Justyna Król"
          placeholder="none"
          width={290}
          height={290}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
        <div className="max-w-[686px] tracking-[0.12em] px-3">
          <h4 className="md:text-adaSubtitleSecondary font-bold">
            Justyna Król
          </h4>
          <p className="md:text-adaDesc">
            Copywriterka & socjolożka specjalizująca się w pisaniu skutecznych
            tekstów do kampanii reklamowych. Skutecznych, czyli takich, dzięki
            którym dasz się poznać i polubić, a odbiorcy zamienią się w Twoich
            klientów.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-12 mx-auto items-center pb-4">
        <StaticImage
          loading="eager"
          src={"../../images/dorota.png"}
          alt="Dorota Woźniak"
          placeholder="none"
          width={290}
          height={290}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
        <div className="max-w-[686px] tracking-[0.12em] px-3">
          <h4 className="md:text-adaSubtitleSecondary font-bold">
            Dorota Woźniak
          </h4>
          <p className="md:text-adaDesc">
            Architektka i projektantka graficzna. W wolnych chwilach
            ilustratorka. Specjalizuję się w kreacjach na potrzeby social media
            - w tym adsowych. Pracowałam zarówno w agencjach marketingowych, jak
            i bywałam częścią teamu marketingowego in-house, co pozwala mi
            łączyć różne kompetencje. Chętnie podzielę się z Wami moją wiedzą
            dotyczącą projektowania graficznego!
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 mx-auto items-center">
        <StaticImage
          loading="eager"
          src={"../../images/marianna.png"}
          alt="Marianna Ciniak"
          placeholder="none"
          width={290}
          height={290}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
        <div className="max-w-[686px] tracking-[0.12em] px-3">
          <h4 className="md:text-adaSubtitleSecondary font-bold">
            Marianna Ciniak
          </h4>
          <p className="md:text-adaDesc">
            Miłośniczka automatyzacji i psycholożka to be! Jeśli chcesz poprawić
            swoją stronę www, dowiedzieć się jak być bardziej efektywną i co
            robić, kiedy ilość drobnych tasków przytłacza, I'm your girl!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
