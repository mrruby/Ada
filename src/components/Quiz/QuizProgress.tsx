import React from "react"
import Section from "../shared/Section"

interface QuizProgressProps {
  current: number
  total: number
}

const QuizProgress: React.FC<QuizProgressProps> = ({ current, total }) => {
  const progressPercentage = (current / total) * 100

  return (
    <Section
      bgColor="transparent"
      className="text-black"
      padding="py-8 px-4 md:px-8"
      maxWidth="4xl"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm md:text-base font-courier">
          <span className="text-ada-magicPurple font-bold">
            Pytanie {current} z {total}
          </span>
          <span className="text-ada-magicOrange font-bold">
            {Math.round(progressPercentage)}% ukończone
          </span>
        </div>

        <div className="relative h-4 bg-ada-magicGrey rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-ada-magicPink to-ada-magicOrange 
                       transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {Array.from({ length: total }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i < current ? "bg-ada-magicOrange w-3" : "bg-ada-magicGrey"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default QuizProgress
