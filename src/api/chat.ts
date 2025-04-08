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
  if (chain) return chain

  // Load the entire context from context.json
  const contextData = contextJson.combined

  // Initialize the ChatGoogleGenerativeAI model
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-pro-exp-03-25",
    apiKey: process.env.GOOGLE_API_KEY,
  })

  // Setup the prompt templates
  const condensePrompt = PromptTemplate.fromTemplate(CONDENSE_TEMPLATE)
  const answerPrompt = PromptTemplate.fromTemplate(ANSWER_TEMPLATE)

  // Create the chain that will produce a standalone question
  const standaloneQuestionChain = RunnableSequence.from([
    condensePrompt,
    model,
    new StringOutputParser(),
  ])

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

  return chain
}

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { messages, sessionId } = req.body

  if (!Array.isArray(messages) || !sessionId) {
    return res.status(400).json({ error: "Invalid request body" })
  }

  try {
    const qaChain = await initializeChain()

    if (!qaChain) {
      return res.status(500).json({ error: "Failed to initialize chain" })
    }

    const question = messages[messages.length - 1].content
    const chatHistory = messages
      .slice(0, -1)
      .map((m: { content: string }) => m.content)
      .join("\n")

    // Invoke chain with the user's last question and entire chat history
    const response = await qaChain.invoke({
      output_language: "Polish",
      question,
      chat_history: chatHistory,
    })

    const allMessages = [...messages, { role: "assistant", content: response }]

    // Store the updated messages in supabase
    await storeNewMessages({
      supabase,
      sessionId,
      messages: allMessages,
    })

    res.status(200).json({ response })
  } catch (error) {
    console.error("Error in handler:", error)
    res.status(500).json({
      error: "An error occurred while processing your request.",
    })
  }
}
