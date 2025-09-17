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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto">
        {/* Rząd 1 */}
        <StaticImage
          src="../../images/magicOpinia1.webp"
          alt="Opinia 1"
          placeholder="blurred"
          width={400}
        />
        <StaticImage
          src="../../images/magicOpinia2.webp"
          alt="Opinia 2"
          placeholder="blurred"
        />
        <StaticImage
          src="../../images/magicOpinia3.webp"
          alt="Opinia 3"
          placeholder="blurred"
        />

        {/* Rząd 2 */}
        <StaticImage
          src="../../images/magicOpinia4.webp"
          alt="Opinia 4"
          placeholder="blurred"
        />
        <StaticImage
          src="../../images/magicOpinia5.webp"
          alt="Opinia 5"
          placeholder="blurred"
        />
        <StaticImage
          src="../../images/magicOpinia6.webp"
          alt="Opinia 6"
          placeholder="blurred"
        />
      </div>
    </Section>
  )
}

export default MagicOpinions
