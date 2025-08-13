import React, { useEffect } from "react"
import formDzielnaPoszukiwaczka from "../../values/forms/form-dzielna-poszukiwaczka.html"
import formFreelanceNinja from "../../values/forms/form-freelance-ninja.html"
import formZosiaSamosia from "../../values/forms/form-zosia-samosia.html"
import Section from "../shared/Section"

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

  useEffect(() => {
    const formElement = document.querySelector(
      ".ml-block-form"
    ) as HTMLFormElement
    if (!formElement) return

    // Remove target attribute to avoid new tab
    formElement.removeAttribute("target")

    // Add a submit event listener to intercept submission
    const handleSubmit = (e: Event) => {
      e.preventDefault()

      const formData = new FormData(formElement)
      fetch(formElement.action, {
        method: "POST",
        body: formData,
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            window.location.href = "https://adrianna.com.pl/thank/"
          } else {
            console.error("Submission failed:", data)
          }
        })
        .catch((error) => console.error("Error:", error))
    }

    formElement.addEventListener("submit", handleSubmit)

    // Cleanup function to remove event listener
    return () => {
      formElement.removeEventListener("submit", handleSubmit)
    }
  }, [])

  return (
    <Section
      bgColor="transparent"
      className="text-black"
      padding="py-12 md:py-20 px-4 md:px-8"
      maxWidth="4xl"
    >
      <div className="text-center animate-fadeIn">
        <p className="font-montserrat text-base md:text-lg text-ada-magicPurple max-w-3xl mx-auto mb-8">
          Podaj swojego maila, aby otrzymać wyniki i sprawdzić nie tylko swoją
          adsową osobowość, ale też Twoje wyzwania i supermoce w prowadzeniu
          reklam. No i… co możesz z tym zrobić! 🔮
        </p>
        <div className="form-scale pt-8" id="quiz-form">
          <div dangerouslySetInnerHTML={{ __html: form }} />
        </div>
      </div>
    </Section>
  )
}

export default QuizResult
