import React, { useState, useRef, useEffect } from "react"
import Markdown from "markdown-to-jsx"
import { LoadingDots } from "../LoadingDots"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"

type Message = {
  role: "user" | "assistant"
  content: string
}

type ChatWindowProps = {
  messages: Message[]
  onSendMessage: (message: string) => void
  isLoading: boolean
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  onSendMessage,
  isLoading,
}) => {
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim())
      setInput("")
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const renderMessageContent = () => {
    if (messages.length === 0 && !isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-ada-blue text-center p-4">
          <h2 className="text-adaBase lg:text-adaTitle font-bold mb-4 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px]">
            Witaj w czacie slowmarketingowym!
          </h2>
          <p className="lg:text-adaBase pt-6 font-medium leading-tight pb-4">
            Cały czas go ulepszamy, a już teraz śmiało pytaj o:
          </p>
          <ul className="lg:text-adaBase pt-4 font-medium leading-tight pb-4">
            <li>✅ Pytania związane z marketingiem</li>
            <li>✅ Strategie marketingowe</li>
            <li>✅ Techniki promocji</li>
            <li>✅ Analizę rynku</li>
            <li>✅ Budowanie marki</li>
          </ul>
          <p className="lg:text-adaBase pt-4 font-bold leading-tight">
            Chętnie pomoże! 🚀
          </p>
        </div>
      )
    }

    return (
      <>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg inline-block ${
                message.role === "user"
                  ? "bg-ada-light-pink text-ada-blue font-semibold"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <Markdown>{message.content}</Markdown>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <LoadingDots />
          </div>
        )}
      </>
    )
  }

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg mt-20 md:mt-10">
      <div className="flex-1 p-6 overflow-y-auto max-w-5xl mx-auto min-h-[450px] w-full">
        {renderMessageContent()}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-gray-200 max-w-5xl mx-auto w-full"
      >
        <div className="flex w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-ada-pink2 w-full"
            placeholder="Wpisz swoją wiadomość..."
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`bg-ada-pink2 text-white p-2 rounded-r-lg transition duration-300 ease-in-out ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-ada-pink3"
            }`}
            disabled={isLoading}
          >
            Wyślij
          </button>
        </div>
      </form>
    </div>
  )
}
