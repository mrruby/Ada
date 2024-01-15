import React from "react"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"

const MasterclassBanner = (): JSX.Element => {
  return (
    <div className="flex px-2 xl:px-6 flex-col-reverse items-center lg:flex-row text-ada-blue mx-auto gap-8 md:py-20">
      <div className="flex">
        <StaticImage
          src={"../../images/masterclass.webp"}
          alt="Ada Promis - hero"
          placeholder="none"
          width={479}
          height={672}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      </div>
      <div className="pt-[40px] md:pt-[140px]">
        <h1 className="text-adaSubtitle md:text-[96px] font-extrabold animate-bounce md:border-b-[50px] border-ada-light-pink md:leading-4">
          MASTERCLASS
        </h1>
        <div className="xl:max-w-[790px] md:text-adaSubtitle mt-10 pb-[85px]">
          <p>
            <span className="font-bold">Kevin sam w menedżerze reklam:</span>{" "}
            stwórz lejek reklamowy na 2024 rok! Zaplanuj ścieżkę klientów: od
            pierwszego kontaktu do zakupu.
          </p>
          <p className="pt-4">
            Zastanawiasz się, czy to dla Ciebie? Zaznacz, czym się zajmujesz i{" "}
            <span className="font-bold">
              dowiedz się, co zyskasz dzięki warsztatom.
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-20">
          <Button
            type="button"
            text="PROWADZĘ WŁASNY BIZNES"
            sectionId="prowadze-wlasny-biznes"
            btnStyle="md:w-[345px] py-[100px]"
            textSize="text-adaDesc"
            border={true}
          />
          <Button
            type="button"
            text="PRACUJĘ W MARKETINGU/  JAKO FREELANCERKA"
            sectionId="pracuje-w-marketingu"
            btnStyle="md:w-[345px]"
            textSize="text-adaDesc"
            border={true}
          />
        </div>
      </div>
    </div>
  )
}

export default MasterclassBanner
