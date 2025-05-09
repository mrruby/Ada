import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinar3 = ({ version = 1 }: { version?: number }): JSX.Element => {
  const isPinkVersion = version === 2
  const primaryColor = isPinkVersion
    ? "text-ada-magicPurple"
    : "text-ada-magicOrange"
  const secondaryColor = isPinkVersion
    ? "text-ada-pink7"
    : "text-ada-magicPurple"
  const backgroundColor = isPinkVersion
    ? "bg-ada-newPurple2"
    : "bg-ada-magicPurple"

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

  interface AudienceItem {
    title: string
    description: string
  }

  const renderAudienceItem = ({ title, description }: AudienceItem) => (
    <div className="flex gap-3" key={title}>
      <span className="text-2xl flex-shrink-0 mt-1">✅</span>
      <div>
        <Typography
          variant="h3"
          className={`text-xl font-semibold ${backgroundColor} text-white px-3 py-1 inline`}
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
                  <span className={primaryColor}>Ten</span>{" "}
                  <span className={secondaryColor}>webinar</span>{" "}
                  <span className={primaryColor}>
                    jest stworzony specjalnie dla:
                  </span>
                </Typography>
              </div>

              <div className="space-y-6">
                {targetAudiences.map(renderAudienceItem)}
              </div>
            </div>

            <div className="relative w-full md:w-auto">
              <StaticImage
                loading="eager"
                src="../../images/ada_magic.webp"
                alt="Ada w telefonie"
                placeholder="blurred"
                width={700}
                quality={100}
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar3
