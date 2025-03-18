import { MagicSun } from "helpers/LayoutElements"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinar2 = (): JSX.Element => {
  return (
    <div className="bg-ada-magicPurple px-6 md:px-12 min-h-screen relative">
      <div className="flex justify-center">
        <MagicSun mobileBottom="top-[-50px]" width="200px" zIndex="z-10" />
      </div>
      <div className="container mx-auto mt-24">
        <Typography
          variant="h1"
          className="text-white text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Czy kiedykolwiek myślałaś:
        </Typography>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <span className="text-5xl mb-4">😩</span>
            <Typography variant="body" className="text-lg">
              Wszyscy chwalą się świetnymi wynikami, a ja nie widzę
              rezultatów...
            </Typography>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <span className="text-5xl mb-4">😪</span>
            <Typography variant="body" className="text-lg">
              Konkurencja ciągle rośnie, a ja zostaję w tyle mimo ciężkiej pracy
            </Typography>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <span className="text-5xl mb-4">💸</span>
            <Typography variant="body" className="text-lg">
              Chcę rozkręcić firmę, ale nie umiem w reklamy - potrzebuję pomocy!
            </Typography>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <span className="text-5xl mb-4">🤔</span>
            <Typography variant="body" className="text-lg">
              Nie mam pojęcia, które strategie reklamowe działają w moim
              biznesie
            </Typography>
          </div>
        </div>
        {/* Bottom Message */}
        <div className="max-w-3xl mx-auto">
          <div className="text-white p-6 max-w-lg mx-auto">
            <div className="bg-ada-magicOrange p-1 text-white font-bold mr-1 mb-3 md:mb-0 inline">
              Prawda jest taka:
            </div>
            <Typography variant="body" className="text-lg inline">
              Nie potrzebujesz większego budżetu marketingowego. Potrzebujesz
              skuteczniejszej strategii.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar2
