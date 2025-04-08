import { StringOutputParser } from "@langchain/core/output_parsers"
import { PromptTemplate } from "@langchain/core/prompts"
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { createClient } from "@supabase/supabase-js"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { ANSWER_TEMPLATE } from "../prompts/answerPrompt"
import { CONDENSE_TEMPLATE } from "../prompts/condensePrompt"
import { storeNewMessages } from "../utils/api"
import contextJson from "../utils/context.json"

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_ANON_KEY ?? ""
)

// We'll keep a cached chain in memory to avoid repeated initialization
let chain: RunnableSequence | null = null

async function initializeChain() {
  console.log("Starting chain initialization...")

  if (chain) {
    console.log("Using cached chain")
    return chain
  }

  // Load the entire context from context.json
  const contextData = contextJson.combined
  console.log("Context data loaded, size:", contextData.length)

  // Initialize the ChatGoogleGenerativeAI model
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-pro-exp-03-25",
    apiKey: process.env.GOOGLE_API_KEY,
  })
  console.log("Model initialized")

  // Setup the prompt templates
  const condensePrompt = PromptTemplate.fromTemplate(CONDENSE_TEMPLATE)
  const answerPrompt = PromptTemplate.fromTemplate(ANSWER_TEMPLATE)
  console.log("Prompt templates created")

  // Create the chain that will produce a standalone question
  const standaloneQuestionChain = RunnableSequence.from([
    condensePrompt,
    model,
    new StringOutputParser(),
  ])
  console.log("Standalone question chain created")

  // Build the final chain
  chain = RunnableSequence.from([
    {
      standalone_question: standaloneQuestionChain,
      original_input: new RunnablePassthrough(),
    },
    // Provide the entire combined context in one go
    {
      context: () => contextData,
      question: (input) => input.standalone_question,
    },
    answerPrompt,
    model,
    new StringOutputParser(),
  ])
  console.log("Final chain built successfully")

  return chain
}

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  console.log("Handler started, method:", req.method)

  if (req.method !== "POST") {
    console.log("Invalid method:", req.method)
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { messages, sessionId } = req.body
  console.log("Request body received, sessionId:", sessionId)
  console.log("Messages count:", messages?.length)

  if (!Array.isArray(messages) || !sessionId) {
    console.log("Invalid request body - missing messages or sessionId")
    return res.status(400).json({ error: "Invalid request body" })
  }

  try {
    console.log("Initializing QA chain...")
    const qaChain = await initializeChain()

    if (!qaChain) {
      console.log("Failed to initialize chain")
      return res.status(500).json({ error: "Failed to initialize chain" })
    }

    const question = messages[messages.length - 1].content
    const chatHistory = messages
      .slice(0, -1)
      .map((m: { content: string }) => m.content)
      .join("\n")
    console.log("Processing question:", question)
    console.log("Chat history length:", chatHistory.length)

    // Invoke chain with the user's last question and entire chat history
    console.log("Invoking chain...")
    const response = await qaChain.invoke({
      output_language: "Polish",
      question,
      chat_history: chatHistory,
    })
    console.log("Chain response received, length:", response.length)

    const allMessages = [...messages, { role: "assistant", content: response }]
    console.log("Preparing to store messages, total count:", allMessages.length)

    // Store the updated messages in supabase
    console.log("Storing messages in Supabase...")
    await storeNewMessages({
      supabase,
      sessionId,
      messages: allMessages,
    })
    console.log("Messages stored successfully")

    res.status(200).json({ response })
  } catch (error) {
    console.error("Error in handler:", error)
    res.status(500).json({
      error: "An error occurred while processing your request.",
    })
  }
}
