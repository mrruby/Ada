import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const listItems = [
  "Kliknij w link, który dostaniesz w mailu i upewnij się, że jesteś zalogowana na Youtube, aby móc zadawać pytania na spotkaniu!",
  "Przygotuj coś do pisania, notatnik lub otwarty dokument w Wordzie.",
  "Jeśli prowadzisz kampanie, otwórz swoje konto reklamowe.",
]

const MasterclassPreparing = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col px-3 py-2 items-center pt-16 mb-12 md:mb-[85px]">
      <ul className="flex flex-col gap-8 md:gap-12 pb-10 md:pb-[100px]">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row items-center text-adaBase max-w-[580px]"
          >
            <div className="w-[87px] h-[87px] bg-white rounded-[50px] mr-4 flex-shrink-0 flex justify-center items-center font-bold text-[64px]">
              {index + 1}
            </div>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row items-center gap-9">
        <StaticImage
          src={"../../images/document.webp"}
          alt="Ada Promis"
          placeholder="none"
          width={159}
          height={170}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
        <div className="max-w-[628px]">
          <p className="pb-8">
            Trzy dni przed warsztatami dostaniesz na maila{" "}
            <span className="font-bold">listę to-do,</span> którą warto mieć ze
            sobą na warsztatach, aby móc wycisnąć z nich jak najwięcej! 
          </p>
          <p>
            <span className="font-bold">Pamiętaj: </span>otrzymasz także link do
            nagrania, więc możesz do niego wrócić na spokojnie, aby nadrobić to,
            czego nie zdążysz zrobić na żywo lub planować kolejne lejki! 
          </p>
        </div>
      </div>
    </div>
  )
}

export default MasterclassPreparing
