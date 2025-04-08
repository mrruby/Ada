export const handleOpenAIError = (error: unknown) => {
  if (error instanceof Error) {
    console.error("OpenAI API error:", error.message)
    return { error: "An error occurred while processing your request." }
  }
  console.error("Unknown error:", error)
  return { error: "An unknown error occurred." }
}

export const validateMessages = (messages: any[]): boolean =>
  Array.isArray(messages) &&
  messages.every(
    (message) =>
      typeof message === "object" && "role" in message && "content" in message
  )

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
