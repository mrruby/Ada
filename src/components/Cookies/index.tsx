import React from "react";
import { CookieNotice } from "gatsby-cookie-notice";

const Cookies = (): JSX.Element => {

  return (
    <div className="fixed bottom-0 w-screen  z-50 bg-ada-light-pink">
      <div className="flex items-center justify-center max-w-[1080px] m-auto">
        <CookieNotice
          acceptButtonClasses={"bg-ada-blue text-white font-bold px-6 py-2 hover:bg-ada-pink hover:shadow-xl"}
          acceptButtonText={"Akceptuję pliki cookie"}
          declineButtonClasses={"bg-ada-white font-bold px-6 py-2 mr-4 hover:bg-ada-pink hover:shadow-xl"}
          declineButtonText={"Odrzucam"}
          personalizeButtonText={""}
          cookies={[
            { name: 'necessary', description: 'Niezbędne pliki cookie', initialState: true, required: true },
            { name: 'analytics', description: 'Pliki cookie do analityki', initialState: false, required: false },
          ]}

          >
          <h4 className="font-bold text-adaDesc mb-2">Ta strona używa plików cookies.</h4>
          <p>Używamy plików cookie, aby strona działała lepiej, a także aby zobaczyć, jak wchodzisz w interakcje z nią. Będziemy używać plików cookie tylko, jeśli wyrazisz na to zgodę, klikając "Akceptuję pliki cookie".</p>
        </CookieNotice>
      </div>
    </div>
  );
};

export default Cookies;
