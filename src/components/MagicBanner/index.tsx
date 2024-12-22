import React from "react"
import BannerBox from "./BannerBox"

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
    <section className="bg-white text-black px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto mb-8 md:mb-20">
        <h2 className="text-xl md:text-3xl font-bold">
          Jeśli czujesz, że coraz trudniej Ci wybić się w Internecie, zapisz się
          na webinar i...
        </h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
    </section>
  )
}

export default MagicBanner1
