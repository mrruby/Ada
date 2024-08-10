const handleResponse = async (response: Response) => {
  const result = await response.json()
  if (response.ok) {
    localStorage.setItem("discountCode", result.discount)
    localStorage.setItem("endsAt", result.endsAt)
    return result.endsAt
  } else {
    console.error("Error generating discount code:", result.error)
  }
}

export const checkAndGenerateDiscountCode = async (
  productVariantId: string
) => {
  try {
    const response = await fetch("/api/oto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productVariantId,
      }),
    })

    return await handleResponse(response)
  } catch (error) {
    console.error("Error generating discount code:", error)
  }
}
