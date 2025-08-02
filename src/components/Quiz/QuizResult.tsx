import React from "react"
import Section from "../shared/Section"
import formDzielnaPoszukiwaczka from "../../values/forms/form-dzielna-poszukiwaczka.html"
import formZosiaSamosia from "../../values/forms/form-zosia-samosia.html"
import formFreelanceNinja from "../../values/forms/form-freelance-ninja.html"

interface QuizResultProps {
  personalityType: string
}

const QuizResult: React.FC<QuizResultProps> = ({ personalityType }) => {
  const getForm = () => {
    switch (personalityType) {
      case "Dzielna poszukiwaczka":
        return formDzielnaPoszukiwaczka
      case "Zosia Samosia":
        return formZosiaSamosia
      case "Freelance Ninja":
        return formFreelanceNinja
      default:
        return formDzielnaPoszukiwaczka
    }
  }

  const form = getForm()

  return (
    <Section
      bgColor="transparent"
      className="text-black"
      padding="py-12 md:py-20 px-4 md:px-8"
      maxWidth="4xl"
    >
      <div className="text-center animate-fadeIn">
        <div className="form-scale" id="quiz-form">
          <div dangerouslySetInnerHTML={{ __html: form }} />
        </div>
      </div>
    </Section>
  )
}

export default QuizResult
