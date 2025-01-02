import React from "react"
import BannerBox from "./BannerBox"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const bannerContent = [
  {
    circleKey: "purpleCircle",
    iconKey: "calendarIcon",
    bgColor: "bg-ada-yellow3",
    title: "poznaj",
    description:
      "konkretne sposoby na reklamy, które sprawdzą się w nadchodzącym roku (szczególnie dla marek osobistych)",
  },
  {
    circleKey: "yellowCircle",
    iconKey: "questions",
    bgColor: "bg-ada-pink6",
    title: "odkryj",
    description:
      "dlaczego samodzielna nauka robienia reklam z kolejnych kursów i e-booków już nie działa – i co warto zrobić zamiast tego",
  },
  {
    circleKey: "pinkCircleFull",
    iconKey: "heart",
    bgColor: "bg-ada-purple2",
    title: "dowiedz się",
    description:
      "jak budować zaangażowaną społeczność wokół swojej marki (zdradzę szczegóły dotyczące zamkniętej grupy mentoringowej)",
  },
]

const MagicBanner1 = () => {
  return (
    <Section bgColor="bg-white" className="text-black">
      <div className="max-w-4xl mx-auto mb-8 md:mb-20">
        <Typography variant="h2">
          Jeśli czujesz, że coraz trudniej Ci dotrzeć do nowych klientów, zapisz
          się na webinar i...
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {bannerContent.map((item, i) => (
          <BannerBox
            key={i}
            circleKey={item.circleKey}
            iconKey={item.iconKey}
            bgColor={item.bgColor}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  )
}

export default MagicBanner1
