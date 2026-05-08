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
