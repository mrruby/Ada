import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"

const listItems = [
  "Kliknij w link, który dostaniesz w mailu i upewnij się, że jesteś zalogowana na Youtube, aby móc zadawać pytania na spotkaniu!",
  "Przygotuj coś do pisania, notatnik lub otwarty dokument w Wordzie.",
  "Jeśli prowadzisz kampanie, otwórz swoje konto reklamowe.",
]

const listItems2 = [
  "To jest przedsprzedaż - dostęp do nagrania otrzymujesz 10.07. Od tego dnia możesz przerabiać materiały do woli przez następne 12 miesięcy - kiedy chcesz i ile razy chcesz!",
  "Otrzymasz także dostęp do zamkniętej grupy na Facebooku, w której możesz zadawać pytania i rozmawiać o wynikach swoich reklam.",
  "4 godziny - tyle potrzebujesz na przerobienie pierwszego masterclassu i ustawienie pierwszej kampanii. Działasz wtedy, kiedy chcesz.",
  "Po miesiącu - masz gotowy, hulający lejek reklamowych. Psst! Im szybciej wdrożysz kampanie, tym szybciej zobaczysz wyniki 😉",
  "Rozwiewaj wątpliwości i pytaj na grupie. Dostęp do niejjest nieograniczony!!",
]

const MasterclassPreparing = ({
  version,
}: {
  version: number
}): JSX.Element => {
  return (
    <>
      {version === 1 && (
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
                <span className="font-bold">listę to-do,</span> którą warto mieć
                ze sobą na warsztatach, aby móc wycisnąć z nich jak najwięcej! 
              </p>
              <p>
                <span className="font-bold">Pamiętaj: </span>otrzymasz także
                link do nagrania, więc możesz do niego wrócić na spokojnie, aby
                nadrobić to, czego nie zdążysz zrobić na żywo lub planować
                kolejne lejki! 
              </p>
            </div>
          </div>
        </div>
      )}
      {version === 2 && (
        <div className="w-full flex flex-col px-3 py-2 items-center pt-16 mb-2 relative">
          <ul className="flex flex-col gap-8 md:gap-12 pb-10 md:pb-[100px]">
            {listItems2.map((item, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row items-center text-adaBase max-w-[880px]"
              >
                <div className="w-[87px] h-[87px] bg-ada-pink2 rounded-[50px] mr-4 flex-shrink-0 flex justify-center items-center font-bold text-[64px]">
                  {index + 1}
                </div>
                {item}
              </li>
            ))}
          </ul>
          <p className="md:text-adaBase">
            <span className="font-bold">Jeśli wybierasz pakiet VIP </span>-
            5.07. prześlę Ci wszystkie informacje o sesji Q&A.
          </p>
          <p className="md:text-adaBase">
            Czeka też na Ciebie konsultacja w ciągu 3 miesięcy od daty
            dołączenia.
          </p>
          <Button
            type="button"
            text={
              <span className="font-bold">
                Wybierz najlepszy
                <br /> pakiet dla siebie:
              </span>
            }
            textSize="md:text-adaSubtitle"
            btnStyle="md:w-[410px] md:h-[90px] bg-ada-pink2 my-10 mx-auto"
            sectionId="pricing"
          />
          <div className="md:absolute right-0 bottom-12">
            <StaticImage
              src={"../../images/preapering.webp"}
              alt=""
              placeholder="none"
              width={250}
              height={270}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default MasterclassPreparing
