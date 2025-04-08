import Layout from "components/Layout"
import SEO from "components/seo"
import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { ChatWindow } from "../components/ChatWindow"

type Message = {
  role: "user" | "assistant"
  content: string
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState("")

  useEffect(() => {
    setSessionId(uuidv4())
  }, [])

  const handleSendMessage = async (message: string) => {
    setIsLoading(true)
    const newUserMessage: Message = { role: "user", content: message }

    const updatedMessages = [...messages, newUserMessage]
    setMessages(updatedMessages)

    try {
      const response = await fetch("https://ada-chat.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
          sessionId: sessionId,
        }),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.response },
      ])
    } catch (error) {
      console.error("Error:", error)
      // Handle error (e.g., show an error message to the user)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <SEO title="Ai chat" />
      <ChatWindow
        messages={messages}
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
      />
    </Layout>
  )
}

export default ChatPage
