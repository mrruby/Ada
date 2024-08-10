import React from "react"

const BuyChillButton = (): JSX.Element => {
  const handleClick = async () => {
    try {
      const discountCode = localStorage.getItem("discountCode")
      const response = await fetch("/api/create-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productVariantId: "49088728006997",
          quantity: 1,
          discountCode,
        }),
      })

      const result = await response.json()
      if (response.ok) {
        window.location.href = result.checkoutUrl
      } else {
        console.error(
          "Error creating cart and redirecting to checkout:",
          result.error
        )
      }
    } catch (error) {
      console.error("Error creating cart and redirecting to checkout:", error)
    }
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
