import React, { useState, useEffect } from "react"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

type CookieOption = {
  name: string
  title: string
  text: string
  cookieName: string
}

type CookiePreferences = {
  [key: string]: boolean
}

const defaultCookies: CookieOption[] = [
  {
    name: "statistics",
    title: "Statystyki",
    text: "Pomaga nam zrozumieć, jak odwiedzający wchodzą w interakcję z witryną.",
    cookieName: "gatsby-gdpr-google-analytics",
  },
  {
    name: "preferences",
    title: "Preferencje",
    text: "Umożliwia stronie zapamiętanie informacji o Twoich preferencjach.",
    cookieName: "gatsby-gdpr-google-tagmanager",
  },
  {
    name: "marketing",
    title: "Marketing",
    text: "Służy do wyświetlania odpowiednich reklam.",
    cookieName: "gatsby-gdpr-facebook-pixel",
  },
]

const Cookies = (): JSX.Element => {
  const [preferences, setPreferences] = useState<CookiePreferences>(
    defaultCookies.reduce(
      (acc, cookie) => ({ ...acc, [cookie.name]: true }),
      {}
    )
  )

  useEffect(() => {
    const enabledCookies = defaultCookies.filter(
      (cookie) => preferences[cookie.name]
    )
    if (enabledCookies.length > 0) {
      initializeAndTrack(location)
    }
  }, [preferences])

  const handleToggle = (name: string) => {
    setPreferences((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const handleAcceptAll = () => {
    const newPreferences = defaultCookies.reduce(
      (acc, cookie) => ({ ...acc, [cookie.name]: true }),
      {}
    )
    setPreferences(newPreferences)
    initializeAndTrack(location)
  }

  const handleAcceptSelected = () => {
    initializeAndTrack(location)
  }

  const handleDeny = () => {
    const newPreferences = defaultCookies.reduce(
      (acc, cookie) => ({ ...acc, [cookie.name]: false }),
      {}
    )
    setPreferences(newPreferences)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-ada-white shadow-lg">
      <div className="max-w-[1080px] mx-auto p-4">
        <div className="grid grid-cols-[1fr_auto] gap-4">
          <div>
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2 text-ada-blue">
                Ta strona używa plików cookie
              </h4>
              <p className="text-ada-blue text-sm">
                Używamy plików cookie do personalizacji treści i reklam,
                udostępniania funkcji mediów społecznościowych i analizowania
                ruchu. Udostępniamy również informacje o korzystaniu z naszej
                witryny naszym partnerom z mediów społecznościowych, reklamy i
                analityki.
              </p>
              <p className="text-ada-blue text-sm mt-2">
                Szczegółową listę plików cookie dla każdego z naszych produktów
                znajdziesz w{" "}
                <a href="/policy" className="text-ada-purple hover:underline">
                  Warunkach i Zasadach
                </a>
                .
              </p>
            </div>

            <div className="flex flex-row gap-4 mt-4">
              {defaultCookies.map((cookie) => (
                <div key={cookie.name} className="flex items-start gap-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences[cookie.name]}
                      onChange={() => handleToggle(cookie.name)}
                      className="sr-only peer"
                    />
                    <div
                      className={`w-10 h-5 bg-ada-grey rounded-full peer 
                      peer-checked:after:translate-x-full after:content-[''] 
                      after:absolute after:top-[2px] after:left-[2px] 
                      after:bg-ada-white after:rounded-full after:h-4 after:w-4 
                      after:transition-all ${preferences[cookie.name] ? "bg-ada-purple" : ""}`}
                    />
                  </label>
                  <div>
                    <div className="font-medium text-ada-blue text-sm">
                      {cookie.title}
                    </div>
                    <div className="text-xs text-ada-blue/70 max-w-[180px]">
                      {cookie.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1 min-w-[180px]">
            <button
              onClick={handleAcceptAll}
              className="w-full bg-ada-purple text-ada-white px-4 py-2 rounded hover:bg-ada-blue transition-colors text-sm"
            >
              Zaakceptuj wszystko
            </button>
            <button
              onClick={handleAcceptSelected}
              className="w-full border border-ada-purple text-ada-purple px-4 py-2 rounded hover:bg-ada-light-pink transition-colors text-sm"
            >
              Zaakceptuj wybrane
            </button>
            <button
              onClick={handleDeny}
              className="w-full border border-ada-purple text-ada-purple px-4 py-2 rounded hover:bg-ada-light-pink transition-colors text-sm"
            >
              Nie zezwalaj
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cookies
