import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_ANON_KEY ?? ""
)

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

export const storeNewMessages = async (
  sessionId: string,
  messages: Message[]
): Promise<void> => {
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
  }
}
