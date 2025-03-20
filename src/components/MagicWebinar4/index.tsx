import { Button } from "helpers/Button"
import { MagicSunPink } from "helpers/LayoutElements"
import React from "react"

const MagicWebinar4 = (): JSX.Element => {
  return (
    <div className="bg-ada-magicOrange p-8 md:p-12 lg:p-16 text-center relative overflow-hidden flex flex-col items-center justify-center">
      {/* Top section with title */}
      <div className="flex items-center justify-center md:mb-12 relative">
        <div className="text-white w-8 h-8 md:w-12 md:h-12">
          <MagicSunPink />
        </div>
        <div className="bg-pink-200 px-4 py-2 mx-2 rounded-sm pb-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            <span className="text-orange-500">Co Cię czeka podczas </span>
            <span className="text-ada-magicPurple">webinaru?</span>
          </h1>
        </div>
        <div className="text-white w-8 h-8 md:w-12 md:h-12">
          <MagicSunPink />
        </div>
        <div className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2">
          <div className="bg-ada-magicPurple text-white px-4 py-1 rounded-sm transform -rotate-3">
            <span className="font-bold">ODKRYJESZ:</span>
          </div>
        </div>
      </div>

      {/* Grid of benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mb-8 max-w-6xl mx-auto">
        {/* Benefit 1 */}
        <div className="bg-ada-magicPurple text-white p-6 rounded-sm flex items-start">
          <span className="text-xl mr-3">📊</span>
          <p className="text-left text-sm md:text-base">
            Jakie efekty przynosi reklama w małym biznesie
            <br />
            (i dlaczego 78% przedsiębiorczyń błędnie je rozumie)
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="bg-ada-magicPurple text-white p-6 rounded-sm flex items-start">
          <span className="text-xl mr-3">💬</span>
          <p className="text-left text-sm md:text-base">
            Jak wykorzystać reklamy do wyrażenia swojej
            <br />
            marki i przyciągnąć właściwych odbiorców
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="bg-ada-magicPurple text-white p-6 rounded-sm flex items-start">
          <span className="text-xl mr-3">💎</span>
          <p className="text-left text-sm md:text-base">
            Sprawdzony sposób na reklamy, który nie
            <br />
            wywołuje u Ciebie ciar żenady
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="bg-ada-magicPurple text-white p-6 rounded-sm flex items-start">
          <span className="text-xl mr-3">🚀</span>
          <p className="text-left text-sm md:text-base">
            Jak reklamować biznes, aby z każdej złotówki
            <br />
            włożonej w reklamy wyciągać kolejne 3/5/9 zł
          </p>
        </div>
      </div>

      {/* Bottom section with goal */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="inline-block bg-ada-magicPurple text-white px-3 py-1 rounded-sm">
          <span className="font-bold">Nasz cel:</span>
        </div>
        <span className="text-white font-medium ml-2">
          Pokazać Ci, że marketing online jest dla Ciebie na wyciągnięcie ręki.
          Nawet jeśli dopiero zaczynasz i marzysz o podboju branży.
        </span>
      </div>

      <Button
        type="button"
        text={
          <span className="text-ada-magicPurple uppercase">CHCĘ DOŁĄCZYĆ</span>
        }
        sectionId="signup"
        textSize="text-xl md:text-2xl"
        btnStyle="bg-white hover:bg-ada-magicPurple/90 text-xl font-bold py-6 mb-6 px-12 rounded-full border-none"
      />
    </div>
  )
}

export default MagicWebinar4
