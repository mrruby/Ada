import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinar3 = (): JSX.Element => {
  return (
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
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0 mt-1">✅</span>
                <div>
                  <Typography
                    variant="h3"
                    className="text-xl font-semibold bg-ada-magicPurple text-white px-3 py-1 inline-block"
                  >
                    Właścicielek marek osobistych
                  </Typography>
                  <Typography variant="body" className="mt-1 text-gray-800">
                    - które chcą zdobywać klientów dzięki budowaniu relacji z
                    odbiorcami
                  </Typography>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0 mt-1">✅</span>
                <div>
                  <Typography
                    variant="h3"
                    className="text-xl font-semibold bg-ada-magicPurple text-white px-3 py-1 inline-block"
                  >
                    Kobiet rozwijających własne sklepy online
                  </Typography>
                  <Typography variant="body" className="mt-1 text-gray-800">
                    - które zastanawiają się kogo wybrać: agencję czy
                    freelancera
                  </Typography>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0 mt-1">✅</span>
                <div>
                  <Typography
                    variant="h3"
                    className="text-xl font-semibold bg-ada-magicPurple text-white px-3 py-1 inline-block"
                  >
                    Lokalnych biznesów
                  </Typography>
                  <Typography variant="body" className="mt-1 text-gray-800">
                    - które muszą wyróżnić się na zatłoczonym rynku, aby klienci
                    trafiali właśnie do nich
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full">
            <StaticImage
              loading="eager"
              src="../../images/ada_magic.webp"
              alt="Ada w telefonie"
              placeholder="blurred"
              width={800}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar3
