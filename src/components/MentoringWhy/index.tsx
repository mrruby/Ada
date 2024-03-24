import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"

const MentoringWhy = (): JSX.Element => {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-4 xl:gap-[90px] items-center w-full justify-center mx-3">
        <div className="md:min-w-[507px] md:ml-[-130px]">
          <StaticImage
            src={"../../images/ada_flower.webp"}
            alt="Ada Promis - hero"
            placeholder="none"
            width={609}
            height={644}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </div>
        <div className="flex flex-col tracking-[0.05em]">
          <h2 className="max-w-[600px] text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] lg:mt-[-10px]">
            Pewnie wiesz, że...
          </h2>
          <p className="lg:text-adaBase lg:w-[740px] pt-6 font-medium leading-tight pb-4">
            ...działania organiczne są{" "}
            <span className="font-bold"> ograniczone.</span> Oczywiście możesz
            tworzyć posty, projektować karuzele, nagrywać rolki i patrzeć, jak
            po kilku godzinach zostają przykryte przez inne materiały. 
          </p>
          <p className="lg:text-adaBase lg:w-[740px] pt-4 font-medium leading-tight pb-4">
            W ten sposób pozyskasz jednego klienta, drugiego, trzeciego, ale
            jeśli chcesz iść w dziesiątki czy setki, ❌ zamiast przeznaczać
            wiele na tworzenie kolejnych postów ✅{" "}
            <span className="font-bold">
              {" "}
              zbuduj przemyślany lejek marketingowy i wdrażaj płatne promocje
              przemyślanych treści.
            </span>
          </p>
          <p className="lg:text-adaBase lg:w-[740px] pt-4 font-medium leading-tight">
            Chyba nie muszę Ci mówić, która opcja jest przyszłościowa, można ją
            skalować i optymalizować jej potencjał? 😉
          </p>
        </div>
      </div>
      <div className="flex flex-col mx-auto lg:text-adaBase text-center">
        <p className="pb-6">
          Pożądane umiejętności, nowi klienci, dochodowa oferta. <br />
          <span className="font-bold">
            Tak może wyglądać Twoja praca za 3 miesiące, ale…
          </span>
        </p>
        <p className="pb-6 max-w-[860px] mx-auto">
          ...tylko, jeśli nauczysz się prowadzić kampanie reklamowe, które
          przyciągają odbiorców na każdym etapie lejka marketingowego!
        </p>
        <p className="pb-20 max-w-[860px] mx-auto">
          <span className="font-bold">
            Dlatego przygotowałam dla Ciebie program „Meta Ads Masters
            Mentoring”{" "}
          </span>
          podczas którego w 3 miesiące nauczysz się, jak prowadzić skuteczne
          kampanie reklamowe. 🚀
        </p>
        <Button
          type="button"
          text={
            <span className="font-bold">
              Umawiam się na wirtualną kawkę, aby pogadać o szczegółach
              programu!
            </span>
          }
          url="https://koalendar.com/e/meta-ads-master"
          textSize="md:text-adaSubtitle uppercase"
          btnStyle="md:w-[810px] bg-ada-pink2 md:h-[110px]"
          iconCalender
        />
      </div>
      <div className="flex flex-col mx-auto text-center pt-5 md:pt-[100px]">
        <div className="text-adaBase lg:text-adaTitle font-bold lg:mb-2 lg:h-[68px] mx-auto  text-center animated-border2">
          <h2 className="z-10 sticky px-2">Teraz możesz myśleć:</h2>
        </div>
        <p className="lg:text-adaSubtitle pt-2 md:pt-8">
          Przecież to takie trudne...
          <br />
          Czy reklamy na pewno pomogą mi zarabiać więcej?
          <br />
          Czy znajdę klientów zainteresowanych płatnymi reklamami?
          <br />
          Czy to w ogóle zadziała?
        </p>
        <div className="mt-10 mb-10 md:mb-20">
          <Button
            type="button"
            text={
              <span className="font-bold">
                Chcę wiedzieć więcej. <br />
                Czytam dalej!
              </span>
            }
            sectionId="solution"
            textSize="md:text-adaSubtitle uppercase"
            btnStyle="md:w-[568px] text-white bg-blue"
          />
        </div>
      </div>
      <div className="mx-auto pb-10">
        <div className="font-bold text-center max-w-[860px] mx-auto">
          <h3 className="md:text-adaSubtitleThird text-ada-pink3">
            Wiem, jak się teraz czujesz.
          </h3>
          <p className="md:text-adaSubtitle px-3">
            Rozczarowanie. Frustracja. Chęć zmiany, ale również niepewność —
            skąd masz wiedzieć, czy to, co robisz, ma sens?
          </p>
        </div>
      </div>
    </section>
  )
}

export default MentoringWhy
