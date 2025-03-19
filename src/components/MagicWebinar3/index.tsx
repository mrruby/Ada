import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinar3 = (): JSX.Element => {
  const targetAudiences = [
    {
      title: "Właścicielek marek osobistych",
      description:
        "- które chcą zdobywać klientów dzięki budowaniu relacji z odbiorcami",
    },
    {
      title: "Kobiet rozwijających własne sklepy online",
      description:
        "- które zastanawiają się kogo wybrać: agencję czy freelancera",
    },
    {
      title: "Lokalnych biznesów",
      description:
        "- które muszą wyróżnić się na zatłoczonym rynku, aby klienci trafiali właśnie do nich",
    },
  ]

  const renderAudienceItem = ({ title, description }) => (
    <div className="flex gap-3" key={title}>
      <span className="text-2xl flex-shrink-0 mt-1">✅</span>
      <div>
        <Typography
          variant="h3"
          className="text-xl font-semibold bg-ada-magicPurple text-white px-3 py-1 inline"
        >
          {title}
        </Typography>
        <Typography variant="body" className="inline ml-2 text-gray-800">
          {description}
        </Typography>
      </div>
    </div>
  )

  return (
    <div className="relative w-full">
      <div className="min-h-screen bg-pink-100">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Typography
                  variant="h1"
                  className="text-4xl md:text-5xl font-bold"
                >
                  <span className="text-ada-magicOrange">Ten webinar</span>{" "}
                  <span className="text-ada-magicPurple">jest</span>{" "}
                  <span className="text-ada-magicOrange">
                    stworzony specjalnie dla:
                  </span>
                </Typography>
              </div>

              <div className="space-y-6">
                {targetAudiences.map(renderAudienceItem)}
              </div>
            </div>

            <div className="absolute bottom-0 right-0">
              <StaticImage
                loading="eager"
                src="../../images/ada_magic.webp"
                alt="Ada w telefonie"
                placeholder="blurred"
                width={700}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar3
