import { StaticImage } from "gatsby-plugin-image"
import React, { JSX } from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicOpinions = (): JSX.Element => {
  return (
    <Section className="text-black py-12">
      <Typography variant="h3" className="leading-snug mb-10 text-center">
        <span className="font-medium"> Pomogłyśmy prowadzić </span>
        kampanie marketingowe takim przedsiębiorczyniom jak właścicielki kursów
        online, mentoringów i usług cyfrowych.
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mx-auto max-w-5xl">
        <div className="flex flex-col gap-1">
          <StaticImage
            src="../../images/OpiniaKolektyw2a.webp"
            alt="Opinia 1"
            placeholder="blurred"
            width={650}
            className="w-full"
          />
          <StaticImage
            src="../../images/OpiniaKolektyw3a.webp"
            alt="Opinia 2"
            placeholder="blurred"
            width={650}
            className="w-full"
          />
          <StaticImage
            src="../../images/OpiniaKolektyw4a.webp"
            alt="Opinia 3"
            placeholder="blurred"
            width={650}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <StaticImage
            src="../../images/OpiniaKolektyw1a.webp"
            alt="Opinia 4"
            placeholder="blurred"
            width={650}
            className="w-full"
          />
          <StaticImage
            src="../../images/OpiniaKolektyw5a.webp"
            alt="Opinia 5"
            placeholder="blurred"
            width={650}
            className="w-full"
          />
        </div>
      </div>
    </Section>
  )
}

export default MagicOpinions
