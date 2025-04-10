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

const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
  return match ? match[2] : null
}

const setCookie = (name: string, value: string, days = 365) => {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`
}

const Cookies = (): JSX.Element | null => {
  const [preferences, setPreferences] = useState<CookiePreferences>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const analyticsCookie = getCookie("gatsby-gdpr-google-analytics")
    const tagManagerCookie = getCookie("gatsby-gdpr-google-tagmanager")
    const facebookPixelCookie = getCookie("gatsby-gdpr-facebook-pixel")

    const anySet =
      analyticsCookie !== null ||
      tagManagerCookie !== null ||
      facebookPixelCookie !== null

    if (anySet) {
      setIsVisible(false)
    } else {
      const initialPrefs = defaultCookies.reduce(
        (acc, cookie) => ({ ...acc, [cookie.name]: true }),
        {}
      )
      setPreferences(initialPrefs)
      setIsVisible(true)
    }
  }, [])

  const handleToggle = (name: string) => {
    setPreferences((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const savePreferences = (newPrefs: CookiePreferences) => {
    defaultCookies.forEach((cookie) => {
      setCookie(cookie.cookieName, newPrefs[cookie.name] ? "true" : "false")
    })
  }

  const handleAcceptAll = () => {
    const newPreferences = defaultCookies.reduce(
      (acc, cookie) => ({ ...acc, [cookie.name]: true }),
      {}
    )
    setPreferences(newPreferences)
    savePreferences(newPreferences)
    initializeAndTrack(location)
    setIsVisible(false)
  }

  const handleAcceptSelected = () => {
    savePreferences(preferences)

    if (Object.values(preferences).some((val) => val)) {
      initializeAndTrack(location)
    }
    setIsVisible(false)
  }

  const handleDeny = () => {
    const newPreferences = defaultCookies.reduce(
      (acc, cookie) => ({ ...acc, [cookie.name]: false }),
      {}
    )
    setPreferences(newPreferences)
    savePreferences(newPreferences)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-ada-white shadow-lg"
      role="dialog"
      aria-labelledby="cookie-title"
    >
      <div className="max-w-full mx-auto p-4 md:max-w-[1080px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
          <div>
            <div className="mb-4">
              <h4
                id="cookie-title"
                className="text-lg font-medium mb-2 text-ada-blue"
              >
                Ta strona używa plików cookie
              </h4>
              <p className="text-ada-blue text-sm font-medium">
                Używamy plików cookie do personalizacji treści i reklam,
                udostępniania funkcji mediów społecznościowych i analizowania
                ruchu. Udostępniamy również informacje o korzystaniu z naszej
                witryny naszym partnerom z mediów społecznościowych, reklamy i
                analityki.
              </p>
              <p className="text-ada-blue text-sm mt-2 font-medium">
                Szczegółową listę plików cookie dla każdego z naszych produktów
                znajdziesz w{" "}
                <a
                  href="/policy"
                  className="text-ada-blue font-bold hover:underline"
                >
                  Warunkach i Zasadach
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {defaultCookies.map((cookie) => (
                <div key={cookie.name} className="flex items-start gap-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id={`cookie-${cookie.name}`}
                      checked={preferences[cookie.name]}
                      onChange={() => handleToggle(cookie.name)}
                      className="sr-only peer"
                      aria-label={cookie.title}
                    />
                    <div
                      className={`w-10 h-5 bg-ada-grey rounded-full peer 
                      peer-checked:after:translate-x-full after:content-[''] 
                      after:absolute after:top-[2px] after:left-[2px] 
                      after:bg-ada-white after:rounded-full after:h-4 after:w-4 
                      after:transition-all ${
                        preferences[cookie.name] ? "bg-ada-blue" : ""
                      }`}
                    />
                  </label>
                  <div>
                    <label
                      htmlFor={`cookie-${cookie.name}`}
                      className="font-bold text-ada-blue text-sm"
                    >
                      {cookie.title}
                    </label>
                    <div className="text-xs text-ada-blue font-medium max-w-[180px]">
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
              className="w-full bg-ada-blue text-ada-white px-4 py-2 rounded hover:bg-ada-blue/90 transition-colors text-sm font-bold"
            >
              Zaakceptuj wszystko
            </button>
            <button
              onClick={handleAcceptSelected}
              className="w-full border-2 border-ada-blue text-ada-blue px-4 py-2 rounded hover:bg-ada-light-pink transition-colors text-sm font-bold"
            >
              Zaakceptuj wybrane
            </button>
            <button
              onClick={handleDeny}
              className="w-full border-2 border-ada-blue text-ada-blue px-4 py-2 rounded hover:bg-ada-light-pink transition-colors text-sm font-bold"
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
