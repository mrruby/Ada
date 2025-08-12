import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Section from "../shared/Section"

const QuizTitle = (): JSX.Element => {
  return (
    <Section
      bgColor="transparent"
      className="text-black overflow-hidden"
      padding="py-8 md:py-16 px-4 md:px-8"
      maxWidth="5xl"
    >
      <div className="flex justify-center mb-4">
        <Link to={"/"}>
          <StaticImage
            src={"../../images/kolektyw-logo.webp"}
            alt="Kolektyw Logo"
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            width={200}
            height={100}
            quality={95}
          />
        </Link>
      </div>

      <div className="text-center">
        <div className="font-anton font-regular text-4xl md:text-5xl lg:text-6xl max-w-2xl mx-auto mb-8 leading-tight md:leading-tight lg:leading-snug">
          <span className="text-ada-magicPink2">QUIZ:</span>{" "}
          <span className="text-ada-orange">
            JAKA JEST TWOJA ADSOWA OSOBOWOŚĆ?
          </span>
        </div>

        <p className="font-montserrat text-base md:text-lg text-ada-magicPurple max-w-3xl mx-auto mb-8">
          Podaj swojego maila, aby otrzymać wyniki i sprawdzić nie tylko swoją adsową osobowość, ale też Twoje wyzwania i supermoce w prowadzeniu reklam. No i… co możesz z tym zrobić! 🔮
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <div className="bg-ada-magicGreen rounded-full px-6 py-2">
            <span className="text-ada-magicPurple font-bold">12 pytań</span>
          </div>
          <div className="bg-ada-magicPink rounded-full px-6 py-2">
            <span className="text-ada-magicPurple font-bold">3 minuty</span>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default QuizTitle
