import React from "react"

const MagicWebinar8 = ({ version = 1 }: { version?: number }) => {
  const colors = {
    background: version === 2 ? "bg-ada-newPurple" : "bg-ada-magicOrange",
    heading: version === 2 ? "text-pink-100" : "text-white",
    accent: version === 2 ? "text-ada-pink7" : "text-ada-magicPurple",
  }

  return (
    <div className={`w-full ${colors.background} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-center ${colors.heading} text-4xl md:text-5xl font-bold mb-4`}
        >
          Zarejestruj się teraz i odbierz dostęp do nagrania za 0zł
        </h2>
        <p className={`text-center ${colors.heading} font-bold mb-12`}>
          Tylko do 17.09!
        </p>

        {/* benefits grid removed per brief */}
        {/* removed extra pricing note per brief; keep button unchanged if present elsewhere */}
      </div>
    </div>
  )
}

export default MagicWebinar8
