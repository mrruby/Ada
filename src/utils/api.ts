import { SupabaseClient } from "@supabase/supabase-js"

type Message = {
  role: string
  content: string
}

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

export const storeNewMessages = async ({
  supabase,
  sessionId,
  messages,
}: {
  supabase: SupabaseClient
  sessionId: string
  messages: Message[]
}): Promise<void> => {
  const logError = (message: string, error: unknown): void =>
    console.error(message, error)
  const logInfo = (message: string): void => console.log(message)

  try {
    const { data: existingMessages, error: fetchError } = await supabase
      .from("messages")
      .select("content")
      .eq("session_id", sessionId)

    if (fetchError) {
      logError("Error fetching existing messages:", fetchError)
      return
    }

    const existingContents = new Set(existingMessages?.map((m) => m.content))
    const newMessages = messages.filter((m) => !existingContents.has(m.content))

    if (newMessages.length === 0) {
      logInfo("No new messages to store")
      return
    }

    const { error: insertError } = await supabase.from("messages").insert(
      newMessages.map((m) => ({
        session_id: sessionId,
        role: m.role,
        content: m.content,
      }))
    )

    if (insertError) {
      logError("Error storing new messages:", insertError)
    } else {
      logInfo("New messages stored successfully")
    }
  } catch (error) {
    logError("Unexpected error in storeNewMessages:", error)
    console.log("Error details:", error)
  }
}

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
