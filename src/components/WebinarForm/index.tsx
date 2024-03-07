import React, { useEffect } from "react"

declare global {
  interface Window {
    ml: {
      (...args: any[]): void
      q?: any[]
    }
  }
}

const WebinarForm: React.FC = (): JSX.Element => {
  useEffect(() => {
    const script = document.createElement("script")
    script.async = true
    script.src = "https://assets.mailerlite.com/js/universal.js"

    document.body.appendChild(script)
    ;(window as any).ml =
      (window as any).ml ||
      function () {
        ;(window.ml.q = window.ml.q || []).push(arguments)
      }
    ;(window as any).ml("account", "549725")

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="px-2 xl:px-6 flex-col items-center pt-10 md:pt-20 pb-[80px] md:pb-[160px]"
      id="webinar-form"
    >
      <div
        className={`ml-embedded ${
          window.innerWidth > 768 ? "md:transform md:scale-150" : ""
        }`}
        data-form="XjmdQd"
      ></div>
    </div>
  )
}

export default WebinarForm
