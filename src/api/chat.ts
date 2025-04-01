import { StringOutputParser } from "@langchain/core/output_parsers"
import { PromptTemplate } from "@langchain/core/prompts"
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { OpenAIEmbeddings } from "@langchain/openai"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"
import { createClient } from "@supabase/supabase-js"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { MemoryVectorStore } from "langchain/vectorstores/memory"
import { ANSWER_TEMPLATE } from "../prompts/answerPrompt"
import { CONDENSE_TEMPLATE } from "../prompts/condensePrompt"
import { storeNewMessages } from "../utils/api"
import ebook from "../utils/ebook.json"

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_ANON_KEY ?? ""
)

let chain: RunnableSequence | null = null

async function initializeChain() {
  if (chain) return chain
  const textContent = JSON.stringify(ebook)

  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash-exp",
    maxOutputTokens: 2048,
    apiKey: process.env.GOOGLE_API_KEY,
  })

  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 })
  const docs = await textSplitter.createDocuments([textContent])

  const vectorStore = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings({
      apiKey: process.env.OPENAI_API_KEY,
    })
  )

  const retriever = vectorStore.asRetriever()

  const condensePrompt = PromptTemplate.fromTemplate(CONDENSE_TEMPLATE)
  const answerPrompt = PromptTemplate.fromTemplate(ANSWER_TEMPLATE)

  const standaloneQuestionChain = RunnableSequence.from([
    condensePrompt,
    model,
    new StringOutputParser(),
  ])

  const retrievalChain = retriever.pipe((docs) =>
    docs.map((doc) => doc.pageContent).join("\n\n")
  )

  chain = RunnableSequence.from([
    {
      standalone_question: standaloneQuestionChain,
      original_input: new RunnablePassthrough(),
    },
    {
      context: (input) => retrievalChain.invoke(input.standalone_question),
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

    const response = await qaChain.invoke({
      output_language: "Polish",
      question,
      chat_history: chatHistory,
    })

    const allMessages = [...messages, { role: "assistant", content: response }]

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
