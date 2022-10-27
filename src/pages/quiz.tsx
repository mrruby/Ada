import React from "react"
// @ts-ignore
import Quiz from "react-quiz-component"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import quiz from "../values/quiz.json"

const QuizPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Quiz" />
      <Quiz quiz={quiz} />
    </Layout>
  )
}

export default QuizPage
