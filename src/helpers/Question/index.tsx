import React from "react"

type IQuestion = {
  question: string
  answer: string
}

const Question = ({ question, answer }: IQuestion): JSX.Element => {
  return (
    <div className="flex flex-col mt-2 mb-[-120px] lg:mb-14 text-center px-[24px] m-auto justify-center">
      <p className="lg:text-adaDesc pt-[20px] font-bold">{question} </p>
      <p className="lg:text-adaDesc max-w-[1080px] mx-auto my-[20px]">
        {answer}
      </p>
    </div>
  )
}

export default Question
