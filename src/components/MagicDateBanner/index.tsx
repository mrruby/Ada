import React from "react"

const MagicDateBanner = () => {
  return (
    <section className="max-w-5xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left column */}
      <div className="max-w-[300px] text-black">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">DATA I GODZINA</h2>
        <p className="text-sm md:text-base leading-relaxed">
          Przestań wyrzucać pieniądze w błoto na reklamy, które nie działają.
          Dowiedz się, jak robić je porządnie i skutecznie już...
        </p>
      </div>

      {/* Right column */}
      <div className="bg-ada-yellow3 w-full h-full p-8 flex flex-col items-center justify-center rounded-xl">
        {/* Date/time row */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {/* Day */}
          <div className="bg-white rounded-lg p-4 text-3xl font-bold min-w-[60px] text-center">
            19
          </div>
          <span className="text-3xl font-bold">.</span>
          {/* Month */}
          <div className="bg-white rounded-lg p-4 text-3xl font-bold min-w-[60px] text-center">
            01
          </div>
          {/* Hour */}
          <div className="bg-white rounded-lg p-4 text-3xl font-bold min-w-[60px] text-center">
            12
          </div>
          <span className="text-3xl font-bold">:</span>
          {/* Minutes */}
          <div className="bg-white rounded-lg p-4 text-3xl font-bold min-w-[60px] text-center">
            00
          </div>
        </div>

        {/* CTA button */}
        <button
          type="button"
          className="bg-ada-pink6 hover:bg-ada-pink5 text-black font-bold rounded-full px-8 py-3 transition-colors"
        >
          Zapisuję się!
        </button>
      </div>
    </section>
  )
}

export default MagicDateBanner
