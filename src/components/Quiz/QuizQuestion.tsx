import React from "react"

interface Answer {
  text: string
  points: number
}

interface QuizQuestionProps {
  question: string
  answers: Answer[]
  onAnswer: (points: number) => void
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  answers,
  onAnswer,
}) => {
  const backgroundColors = [
    "bg-ada-magicGreen",
    "bg-ada-magicPink2",
    "bg-ada-white2",
    "bg-ada-purple3",
  ]

  return (
    <div className="py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Question Card */}
        <div className="bg-ada-magicPurple3 rounded-3xl p-8 md:p-12 mb-8 border border-ada-orange">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center font-montserrat">
            {question}
          </h2>
        </div>

        {/* Answers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {answers.map((answer, index) => (
            <div
              key={index}
              onClick={() => onAnswer(answer.points)}
              className={`${backgroundColors[index]} rounded-2xl p-8 cursor-pointer 
                         transition-all duration-200 hover:scale-[1.02] hover:shadow-lg
                         border border-ada-orange`}
            >
              <p className="text-xl font-montserrat text-ada-black text-center">
                {answer.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuizQuestion
