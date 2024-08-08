import React from "react"

const BuyChillButton = (): JSX.Element => {
  const handleClick = async () => {
    try {
      const response = await fetch("/api/create-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productVariantId: "49088728006997",
          quantity: 1,
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
      className="bg-ada-pink2 mt-2 mb-20 md:my-10 mx-auto border-b-4 border-ada-pink font-medium px-5 py-1.5 hover:bg-ada-pink hover:shadow-xl"
    >
      <span className="font-extrabold uppercase">korzystam</span>
    </button>
  )
}

export default BuyChillButton
