import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"
import { MemoryVectorStore } from "langchain/vectorstores/memory"
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables"
import { PromptTemplate } from "@langchain/core/prompts"
import { StringOutputParser } from "@langchain/core/output_parsers"
import ebook from "../utils/ebook.json"
import { storeNewMessages } from "../utils/api"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_ANON_KEY ?? ""
)

let chain: RunnableSequence | null = null

async function initializeChain() {
  if (chain) return chain
  const textContent = JSON.stringify(ebook)

  const model = new ChatOpenAI({
    model: "gpt-4o-mini",
    apiKey: process.env.OPENAI_API_KEY,
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

  const CONDENSE_TEMPLATE = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question related to marketing. If the question is not related to marketing, respond with "To pytanie nie dotyczy marketingu.".

  Chat History:
  {chat_history}
  Follow Up Input: {question}
  Standalone marketing question or rejection:`

  const ANSWER_TEMPLATE = `You are an AI assistant specialized in answering marketing questions only. If the question is not related to marketing, politely inform the user that you can only answer marketing-related questions. Please provide an informative and relevant response related to marketing based on the following context. Always answer in Polish language.

  {context}

  Question: {question}
  Marketing-focused Answer in Polish or polite rejection:`

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
  console.log("Received request:", req.method, req.url)

  if (req.method !== "POST") {
    console.log("Method not allowed:", req.method)
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { messages, sessionId } = req.body
  console.log("Request body:", { messages, sessionId })

  if (!Array.isArray(messages) || !sessionId) {
    console.log("Invalid request body:", { messages, sessionId })
    return res.status(400).json({ error: "Invalid request body" })
  }

  try {
    console.log("Initializing chain...")
    const qaChain = await initializeChain()

    if (!qaChain) {
      console.error("Failed to initialize chain")
      return res.status(500).json({ error: "Failed to initialize chain" })
    }
    console.log("Chain initialized successfully")

    const question = messages[messages.length - 1].content
    console.log("Extracted question:", question)

    const chatHistory = messages
      .slice(0, -1)
      .map((m: { content: string }) => m.content)
      .join("\n")
    console.log("Chat history prepared")

    console.log("Invoking qaChain...")
    const response = await qaChain.invoke({
      output_language: "Polish",
      question,
      chat_history: chatHistory,
    })
    console.log("qaChain response received:", response)

    res.status(200).json({ response })
    console.log("Response sent to client")

    const allMessages = [...messages, { role: "assistant", content: response }]
    console.log("Preparing to store messages")

    try {
      console.log("Storing new messages...")
      await storeNewMessages({
        supabase,
        sessionId,
        messages: allMessages,
      })
      console.log("Messages stored successfully")
    } catch (error) {
      console.error("Error storing messages:", error)
    }
  } catch (error) {
    console.error("Error in handler:", error)
    res.status(500).json({
      error: "An error occurred while processing your request.",
    })
  }
}
