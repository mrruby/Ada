import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const AboutBanner = () => {
  const listItemClass = "text-[15px] lg:text-adaDesc leading-tight"

  return (
    <div className="flex flex-col lg:flex-row text-ada-blue relative w-full justify-end min-h-[610px]">
      <div className="lg:absolute md:left-[-120px] xl:left-[20px] top-[-30px]">
        <StaticImage
          src={"../../images/ada_about.webp"}
          alt="Ada Promis - hero"
          placeholder="blurred"
          width={521}
          height={644}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      </div>
      <div className="pt-[60px] px-3 xl:pr-[100px]">
        <h3 className="text-adaTitle lg:text-adaBig text-ada-grey font-bold -mb-10 lg:mb-[-60px]">
          O mnie
        </h3>
        <h2 className="text-adaTitle font-bold">Cześć</h2>
        <ul className="max-w-[574px] pt-4 list-disc">
          <li className={listItemClass}>
            Pochodzę z wielkopolski, mieszkałam w Raciborzu,{" "}
            <span className="font-bold">
              teraz spotkacie w Katowicach lub w podróży.
            </span>
          </li>
          <li className={listItemClass}>
            Prowadzę agencję marketingową{" "}
            <Link to="https://getbold.pl/">
              <span className="font-bold">GetBold!</span>
            </Link>{" "}
            Zanim to zrobiłam, przez 4 lata pracowałam na marketingowych
            etatach.
          </li>
          <li className={listItemClass}>
            <span className="font-bold">Jestem osobą wysokowrażliwą</span> —
            codzienne chodzenie do biura przyprawiało mnie o ból głowy.
          </li>
          <li className={listItemClass}>
            <span className="font-bold">
              Jako pierwsza wywalczyłam pracę zdalną
            </span>{" "}
            w mojej ostatniej etatowej pracy. Jeszcze przed pandemią.
          </li>
          <li className={listItemClass}>
            Teraz na spotkania online mogę łączyć się z kuchni, przedpokoju lub
            z sypialni i bardzo to lubię.
          </li>
          <li className={listItemClass}>
            <span className="font-bold">
              Wierzę, że skuteczny marketing wypływa z zaangażowania, dlatego
              jestem w bieżącym kontakcie z moimi klientami
            </span>{" "}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutBanner
