import React from "react"

const MagicWebinar8 = (): JSX.Element => {
  const renderBenefitCard = (title: JSX.Element, value: string) => (
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
    <div className="w-full bg-ada-magicOrange py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-12">
          Co dostaniesz, rejestrując się{" "}
          <span className="text-ada-magicPurple">teraz</span>:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderBenefitCard(
            <>
              Udział w intensywnym
              <br />
              60-minutowym webinarze
            </>,
            "397 zł"
          )}

          {renderBenefitCard(<>Udział w sesji Q&A</>, "397 zł")}

          {renderBenefitCard(
            <>
              Dostęp do nagrania
              <br />
              webinaru na 7 dni
            </>,
            "297 zł"
          )}
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar8
