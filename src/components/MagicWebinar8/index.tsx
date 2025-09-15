import React from "react"

const MagicWebinar8 = ({ version = 1 }: { version?: number }) => {
  const colors = {
    background: version === 2 ? "bg-ada-newPurple" : "bg-ada-magicOrange",
    heading: version === 2 ? "text-pink-100" : "text-white",
    accent: version === 2 ? "text-ada-pink7" : "text-ada-magicPurple",
  }

  const benefits = [
    {
      title: (
        <>
          Spotkanie na żywo
          <br />
          💻
        </>
      ),
      value: "197 zł",
    },
    {
      title: (
        <>
          Szablony grafik: must have na jesień
          <br />
          📝
        </>
      ),
      value: "297 zł",
    },
    {
      title: (
        <>
          Dostęp do nagrania do 17.09
          <br />
          🎤
        </>
      ),
      value: "97 zł",
    },
  ]

  const renderBenefitCard = (title: React.JSX.Element, value: string) => (
    <div className="relative bg-pink-100 rounded-xl p-6 shadow-lg flex flex-col items-center">
      <div className="mb-4 w-full flex justify-center">
        <span className="text-green-500 text-4xl absolute -top-5 left-1/2 transform -translate-x-1/2">
          ✅
        </span>
      </div>
      <div className="text-center">
        <h3 className="text-purple-800 text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">(wartość: {value})</p>
      </div>
    </div>
  )

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
