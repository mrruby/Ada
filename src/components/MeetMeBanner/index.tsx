import React from "react"
import { Link } from "gatsby"

const MeetMeBanner = (): JSX.Element => {
  const listItemClass = "text-[15px] lg:text-adaBase py-[2px]"

  return (
    <div className="flex px-2 xl:pl-[120px] flex-col lg:flex-row text-ada-blue relative pt-[60px]">
      <div className="hidden md:flex md:absolute md:right-[-160px] lg:right-0 bg-meetme h-[224px] w-[428px]"></div>
      <div className="pt-[60px] lg:pt-[10px] z-0 pb-[70px]">
        <h2 className="text-[20px] lg:text-adaTitle font-bold max-w-[478px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce">
          Tu mnie spotkasz
        </h2>
        <ul className="max-w-[574px] pt-4">
          <li className={listItemClass}>
            Online: na Instagramie{" "}
            <Link to="https://www.instagram.com/adapromis/">
              <span className="font-bold hover:text-ada-pink">@adapromis</span>
            </Link>
          </li>
          <li className={listItemClass}>
            Face to face:{" "}
            <span className="font-bold">
              z laptopem w ręce zwiedzam kameralne kawiarnie na Śląsku
            </span>{" "}
            (wtedy gdy nie podróżuję){" "}
          </li>
        </ul>
        <ul className="pt-[60px] lg:pt-[90px]">
          <li className={listItemClass}>
            <span className="font-bold">Lubię… </span>jeździć na rowerze,
            podróżować z plecakiem, rozkminiać reklamy i jeść azjatyckie żarcie.
          </li>
          <li className={listItemClass}>
            <span className="font-bold">Nie lubię… </span>pora & cebuli, parków
            z szybkimi karuzelami, horrorów i chaosu.{" "}
          </li>
          <li className={listItemClass}>
            <span className="font-bold"> Zawsze… </span>muszę rozpisać sobie
            plan dnia i mam w kieszeni jakiś głupi żart na wypadek, gdyby
            zrobiło się zbyt niezręcznie.
          </li>
          <li className={listItemClass}>
            <span className="font-bold">Nigdy… </span>nie odmówię spróbowania
            czegoś dobrego w nieznanej knajpie, nigdy nie przestałam scrollować
            TikToka, więc w obawie o swoje zdrowie: odinstalowałam go.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MeetMeBanner
