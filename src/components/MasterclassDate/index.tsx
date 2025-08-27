import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"

const listItems = [
  <span>
    po warsztatach nagranie będzie dostępne{" "}
    <span className="font-bold">w ponad 2 razy wyższej cenie</span> - 129
    złotych
  </span>,
  <span>
    decydując się teraz,{" "}
    <span className="font-bold">weźmiesz udział w Q&A na żywo.</span> Oglądając
    nagranie, oczywiście dostajesz dostęp również do nagrania sesji Q&A, ale nie
    odpowiem na Twoje pytania — to bonus zarezerwowany tylko dla osób obecnych
    na żywo
  </span>,
  <span>
    rezerwując miejsce teraz, otrzymasz{" "}
    <span className="font-bold">nagranie spotkania!</span> Więc bez obaw: jeśli
    coś Ci wypadnie, możesz przerobić materiał w innym terminie, w
    przedpremierowej, niskiej cenie.
  </span>,
]

const MasterclassDate1 = () => {
  return (
    <div
      className="w-full flex flex-col px-3 py-2 items-center pt-16 mb-[85px]"
      id="prowadze-wlasny-biznes"
    >
      <h2 className="text-adaSubtitle md:text-adaTitle2 font-extrabold animate-bounce md:border-b-[50px] border-ada-light-pink md:leading-[0px] uppercase">
        Spotykamy się
      </h2>
      <h2 className="text-adaSubtitle uppercase md:text-adaTitle2 font-extrabold animate-bounce bg-ada-pink2 mt-[80px] px-12 md:px-32 py-8">
        25.01 o 18:00
      </h2>
      <p className="md:text-adaSubtitleSecondary py-20 max-w-[810px] text-center">
        Dołącz i sprawdź, czy strategiczne planowanie kampanii reklamowych jest
        dla Ciebie. <span className="font-bold">Wystarczą 2 godziny.</span>
      </p>
      <div className="flex flex-col items-center text-center gap-10 pt-[80px] pb-10 md:pb-[118px]">
        <Button
          type="button"
          text={
            <span className="font-extrabold">
              Dołączam po wiedzę, która zarabia!
            </span>
          }
          url="https://app.easycart.pl/checkout/62332176/masterclass-kevin-sam-w-menedzerze-reklam-zaplanuj-swoj-lejek-reklamowy"
          textSize="md:text-adaTitle"
          btnStyle="md:w-[704px] bg-ada-light-pink py-8 px-8 border-b-4 border-ada-pink shadow-xl"
          iconCalender2
        />
      </div>
      <div className="text-center flex flex-col gap-6 md:pb-[120px]">
        <h3 className="font-bold md:text-adaSubtitle">
          Zastanawiasz się pewnie: no dobra, dobra. <br /> Ile to kosztuje? 💰
        </h3>
        <p className="md:text-adaSubtitle">
          Do <span className="font-bold">23 stycznia </span> możesz dołączyć do
          warsztatów w fajnej cenie:{" "}
          <span className="font-bold bg-ada-pink2 p-2">79 złotych</span> zamiast
          129!
        </p>
      </div>
      <p className="max-w-[810px] pb-8 text-center md:text-adaSubtitle">
        Zapisz się na warsztaty o planowaniu kampanii reklamowych już teraz.
        Zaprojektuj ścieżkę klientów. Spraw, aby trafiali do Ciebie szybciej i
        kupowali w pewnością.
      </p>
      <h3 className="md:text-adaSubtitleSecondary pb-10 max-w-[940px] text-center font-bold">
        Dołącz teraz, bo...
      </h3>
      <ul className="max-w-[900px] flex flex-col gap-4">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="flex gap-2 flex-col items-center md:flex-row md:text-adaDesc"
          >
            <div>
              <StaticImage
                src={"../../images/check.svg"}
                alt="Ada Promis"
                placeholder="blurred"
                width={44}
                height={46}
                style={{ width: "44px", height: "46px" }}
              />
            </div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MasterclassDate1
