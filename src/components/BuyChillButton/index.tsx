import React from "react"

const BuyChillButton = () => {
  const handleClick = () => {
    window.location.href =
      "https://slowmarketing.mailingr.co/c/adsyandchill-2025-6nPc?priceId=price_SITaPYXmbvodQAaQDDTjXIkQ"
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="bg-ada-pink2 mt-4 mb-24 md:my-12 mx-auto border-b-8 border-ada-pink font-bold px-8 py-3 hover:bg-ada-pink hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <span className="font-extrabold uppercase text-lg md:text-xl lg:text-2xl">
        Korzystam
      </span>
    </button>
  )
}

export default BuyChillButton
