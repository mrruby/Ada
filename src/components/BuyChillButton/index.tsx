import React from "react"
import { createCartAndRedirectToCheckout } from "utils/shopify"

const BuyChillButton = (): JSX.Element => {
  const handleClick = async () => {
    try {
      const checkoutUrl = await createCartAndRedirectToCheckout(
        "49088728006997",
        1
      )
      window.location.href = checkoutUrl
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
