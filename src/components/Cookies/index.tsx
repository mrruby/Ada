import React from "react"
import { CookieNotice } from "gatsby-cookie-notice"

const Cookies = (): JSX.Element => {
  return (
    <div className="fixed bottom-0 w-screen z-50 bg-ada-light-pink">
      <div className="flex items-center justify-center max-w-[1080px] m-auto">
        <CookieNotice
          acceptButtonClasses={
            "bg-ada-blue text-white font-bold px-6 py-3 rounded-lg transition-all hover:bg-ada-pink hover:shadow-xl h-[48px]"
          }
          acceptButtonText={"Akceptuję pliki cookie"}
          declineButtonClasses={
            "bg-ada-white font-bold px-6 py-3 rounded-lg transition-all hover:bg-ada-pink hover:shadow-xl h-[48px]"
          }
          declineButtonText={"Odrzucam"}
          personalizeButtonClasses={
            "bg-ada-white font-bold mt-4 px-6 py-3 rounded-lg transition-all hover:bg-ada-pink hover:shadow-xl inline-flex h-[48px]"
          }
          personalizeButtonText={"Dostosuj ustawienia"}
          buttonWrapperClasses="mt-4 flex flex-col md:flex-row gap-4"
          cookies={[
            {
              name: "necessary",
              editable: false,
              default: true,
              title: "Niezbędne",
              text: "Niezbędne pliki cookie są konieczne do prawidłowego funkcjonowania strony. Strona nie może działać poprawnie bez nich.",
            },
            {
              name: "gatsby-gdpr-google-analytics",
              editable: true,
              default: false,
              title: "Google Analytics",
              text: "Google Analytics to narzędzie statystyczne Google pozwalające mierzyć ruch na stronie internetowej.",
            },
            {
              name: "gatsby-gdpr-google-tagmanager",
              editable: true,
              default: false,
              title: "Google Tag Manager",
              text: "Używane do efektywnego zarządzania tagami i skryptami na stronie.",
            },
            {
              name: "gatsby-gdpr-facebook-pixel",
              editable: true,
              default: false,
              title: "Facebook Pixel",
              text: "Służy do śledzenia konwersji i lepszego targetowania reklam na Facebooku.",
            },
          ]}
        >
          <h4 className="font-bold text-xl text-ada-blue mb-3">
            Ta strona używa plików cookies.
          </h4>
          <p className="text-ada-blue leading-relaxed">
            Używamy plików cookie, aby strona działała lepiej, a także aby
            zobaczyć, jak wchodzisz w interakcje z nią. Będziemy używać plików
            cookie tylko, jeśli wyrazisz na to zgodę, klikając "Akceptuję pliki
            cookie". Możesz również wybrać, które pliki cookie chcesz włączyć.
          </p>
        </CookieNotice>
      </div>
    </div>
  )
}

export default Cookies
