import React from "react"

const ThankBanner = () => {
  return (
    <div className="flex px-2 flex-col items-start text-ada-blue relative md:min-h-[85vh] ">
      <div className="lg:w-[1000px] pt-[60px] md:pb-[40px] text-left mx-auto max-w-2xl">
        <h1 className="text-[14px] lg:text-adaTitle2 font-medium text-center">
          Dziękuję za zapis!
        </h1>
        <p className="lg:text-[28px] font-medium leading-tight">
          Teraz jeszcze tylko:
        </p>
        <ol className="list-decimal list-inside">
          <li className="pb-[10px] pt-[10px]">
            Sprawdź skrzynkę mailową podaną przy zapisie:
          </li>
          <ul className="list-inside pl-[30px]">
            <li className="pb-[5px]">
              <a
                href="https://mail.google.com"
                className="underline text-ada-blue"
              >
                Gmail
              </a>
            </li>
            <li className="pb-[5px]">
              <a
                href="https://poczta.onet.pl"
                className="underline text-ada-blue"
              >
                Onet
              </a>
            </li>
            <li className="pb-[5px]">
              <a
                href="https://poczta.wp.pl"
                className="underline text-ada-blue"
              >
                WP.pl
              </a>
            </li>
            <li className="pb-[5px]">
              <a
                href="https://poczta.o2.pl"
                className="underline text-ada-blue"
              >
                O2.pl
              </a>
            </li>
            <li className="pb-[5px]">
              <a
                href="https://poczta.interia.pl"
                className="underline text-ada-blue"
              >
                Interia.pl
              </a>
            </li>
            <li className="pb-[5px]">
              <a
                href="https://poczta.gazeta.pl"
                className="underline text-ada-blue"
              >
                Gazeta.pl
              </a>
            </li>
            <li className="pb-[5px]">
              <a
                href="https://mail.yahoo.com"
                className="underline text-ada-blue"
              >
                Yahoo.com
              </a>
            </li>
          </ul>
          <li className="pb-[10px]">
            Dodaj adres “adrianna@getbold.agency” do listy zaufanych kontaktów –
            dzięki temu maile nie będą wpadać do folderu SPAM!
          </li>
          <li className="pb-[10px]">
            Otwórz maila od adrianna@getbold.agency – mógł trafić do folderu
            SPAM – koniecznie sprawdź, czy gdzieś się nie zapodział.
          </li>
          <li className="pb-[10px]">
            Przyciśnij przycisk potwierdzający zapis w mailu.
          </li>
        </ol>
        <p className="lg:text-[28px] font-medium leading-tight pt-[5px]">
          Widzimy się niedługo!
        </p>
        <p className="lg:text-[28px] font-medium leading-tight pt-[5px]">
          Ada Promis
        </p>
      </div>
    </div>
  )
}

export default ThankBanner
