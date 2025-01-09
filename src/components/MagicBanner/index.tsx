import React from "react"
import BannerBox from "./BannerBox"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const bannerContent = [
  {
    circleKey: "purpleCircle",
    iconKey: "calendarIcon",
    bgColor: "bg-ada-yellow3",
    description:
      "w 2024 widziałaś spadki zasięgów, a chcesz w 2025 roku sprzedawać swoje produkty cyfrowe i programy mentoringowe?",
  },
  {
    circleKey: "yellowCircle",
    iconKey: "questions",
    bgColor: "bg-ada-pink6",
    description:
      "zainwestowałaś budżet reklamowy, a zobaczyłaś gorsze rezultaty reklam niż oczekiwane?",
  },
  {
    circleKey: "pinkCircleFull",
    iconKey: "heart",
    bgColor: "bg-ada-purple2",
    description:
      "dwoiłaś się i troiłaś nad nagrywaniem stories oraz rolek, a chcesz widzieć zaangażowanie i efekty, bez wiecznej pogoni za algorytmem?",
  },
]

const MagicBanner1 = () => {
  return (
    <Section bgColor="bg-white" className="text-black">
      <div className="max-w-4xl mx-auto mb-8 md:mb-20 text-center">
        <Typography variant="h2">Czy Ty też masz tak, że...</Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {bannerContent.map((item, i) => (
          <BannerBox
            key={i}
            circleKey={item.circleKey}
            iconKey={item.iconKey}
            bgColor={item.bgColor}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  )
}

export default MagicBanner1
