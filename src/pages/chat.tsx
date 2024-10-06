import React, { useState, useEffect } from "react"
import { ChatWindow } from "../components/ChatWindow"
import Layout from "components/Layout"
import SEO from "components/seo"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

const AIChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (message: string) => {
    setIsLoading(true)
    const newUserMessage: ChatMessage = { role: "user", content: message }

    const updatedMessages = [...messages, newUserMessage]
    setMessages(updatedMessages)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      const data = await response.json()

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: data.response },
      ])
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log("Loading state:", isLoading)
  }, [isLoading])

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

export default AIChatPage
