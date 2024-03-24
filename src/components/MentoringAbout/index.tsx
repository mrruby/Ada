import React from "react"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"

const MentoringAbout = (): JSX.Element => {
  return (
    <section className="mb-20 px-3">
      <div className="max-w-[700px] text-center mx-auto mb-10">
        <h2 className="text-adaSubtitle lg:text-adaTitle font-bold animate-bounce uppercase pt-[60px] lg:pt-[40px]">
          Pewnie teraz się zastanawiasz…
        </h2>
        <p className="font-bold md:text-adaBase pt-4">
          Czy znajdę czas na udział w spotkaniach?
        </p>
        <p className="md:text-adaBase py-2">
          Według raportu{" "}
          <a
            href="https://datareportal.com/reports/digital-2023-poland"
            className="underline"
          >
            Digital 2023: Poland
          </a>{" "}
          przeciętny użytkownik Internetu spędza w nim 6 godzin i 42 minuty
          dziennie, w tym 2 godziny w mediach społecznościowych. Pewnie Tobie
          też raz na jakiś czas zdarza się zapomnieć i spędzić kilka godzin z
          telefonem w ręce? ;)
        </p>
        <p className="md:text-adaBase py-2">
          W czasie programu spotykamy się na 2,5 godziny raz na tydzień. To
          prawie 19 razy mniej niż czas, który spędzasz w sieci. Przyznaj: czas
          na wspólnej pracy nad reklamami jest dużo lepiej wykorzystany niż
          godziny przeznaczone na scrollowanie Instagrama?
        </p>
      </div>
      <div className="mx-auto md:py-20">
        <div className="px-3">
          <h2 className="text-adaSubtitleThird md:text-[96px] font-bold animate-bounce md:border-b-[50px] border-ada-pink2 md:leading-4 uppercase max-w-[410px]">
            Cześć!
          </h2>
          <h3 className="md:text-adaSubtitleThird leading-3 font-bold md:border-b-[30px] border-ada-pink2 max-w-[806px] mt-6">
            Nazywam się Adrianna Promis-Urbas
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row md:pt-[40px] px-3">
          <StaticImage
            loading="eager"
            src={"../../images/mentoring.webp"}
            alt="Ada Promis - hero"
            placeholder="none"
            width={766}
            height={818}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
          <div className="max-w-[400px] lg:max-w-[810px] pt-6">
            <p className="pb-8 md:text-adaBase">
              Z zawodu jestem tłumaczką j. francuskiego & angielskiego, a z
              zamiłowania — kreatywną duszą. Mam za sobą epizod pracy w audycie
              finansowym, ale moim powołaniem chyba od zawsze był marketing!
            </p>
            <p className="pb-8 md:text-adaBase">
              I tak od stażu w agencji marketingowej do swojej działalności:
              dziś <span className="font-bold">pod szyldem GetBold! </span>
              obsługuję klientów z Europy, w tym z Polski i na moim liczniku
              wybiło już ponad 1 mln budżetów reklamowych wydanych w ramach Meta
              Ads. Pracuję z biznesami, które dbają o
              <span className="font-bold">
                {" "}
                dobrostan psychiczny i fizyczny
              </span>{" "}
              : praktykuję <span className="font-bold">
                slow marketing,
              </span>{" "}
              przemyślany, wartościowy, zbudowany na relacjach.
            </p>
            <p className="pb-8 md:text-adaBase">
              W programie{" "}
              <span className="font-bold">„Ogarnij swoje adsy!”</span> skupię
              się Twoich kontach reklamowych! Zdradzę Ci{" "}
              <span className="font-bold">moje tipy</span> i zaoszczędzę dobre
              kilka lat samodzielnego klikania w menedżerze reklam.
            </p>
          </div>
        </div>
      </div>
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
              ilustratorka. Specjalizuję się w kreacjach na potrzeby social
              media - w tym adsowych. Pracowałam zarówno w agencjach
              marketingowych, jak i bywałam częścią teamu marketingowego
              in-house, co pozwala mi łączyć różne kompetencje. Chętnie podzielę
              się z Wami moją wiedzą dotyczącą projektowania graficznego!
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
              Miłośniczka automatyzacji i psycholożka to be! Jeśli chcesz
              poprawić swoją stronę www, dowiedzieć się jak być bardziej
              efektywną i co robić, kiedy ilość drobnych tasków przytłacza, I'm
              your girl!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MentoringAbout
