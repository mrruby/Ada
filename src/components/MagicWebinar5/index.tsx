import { MagicSun, MagicSunPinkNew } from "helpers/LayoutElements"
import React, { ReactNode } from "react"
import { CircleImage } from "../MagicBioBanner/circleImages"
import Typography from "../shared/Typography"

interface TeamMember {
  name: string
  title: string
  description: ReactNode
  imageUrl: string
}

const MagicWebinar5 = ({ version = 1 }: { version?: number }): JSX.Element => {
  const teamMembers: TeamMember[] = [
    {
      name: "Adrianna Promis-Urbas",
      title: "Specjalistka od kampanii reklamowych z 6-letnim doświadczeniem",
      description: (
        <>
          Pomogłam <span className="font-bold">ponad 200 kobietom</span>{" "}
          zwiększyć zyski i satysfakcję z prowadzenia własnej firmy.
          Specjalizuję się w przekształcaniu chaotycznych działań marketingowych
          w precyzyjne{" "}
          <span className="font-bold">
            systemy generujące przewidywalne wyniki
          </span>
          , nawet w niepewnych warunkach rynkowych.
        </>
      ),
      imageUrl: "ada",
    },
    {
      name: "Justyna Król",
      title: "Specjalistka od reklam i copywritingu z socjologicznym zacięciem",
      description: (
        <>
          Stworzyłam teksty reklamowe dla{" "}
          <span className="font-bold">kilkudziesięciu</span> polskich marek.
          Specjalizuję się w przekształcaniu zwykłych komunikatów{" "}
          <span className="font-bold">w emocjonalne historie</span>, które
          budują autentyczne relacje z klientami i sprawiają, że{" "}
          <span className="font-bold">marki stają się rozpoznawalne</span>,
          lubiane i wybierane.
        </>
      ),
      imageUrl: "justyna",
    },
    {
      name: "Dorota Woźniak",
      title: "Projektantka graficzna i architektka z ilustratorską pasją",
      description: (
        <>
          Zaprojektowałam <span className="font-bold">setki</span> kreacji
          reklamowych. Specjalizuję się w tworzeniu profesjonalnych materiałów
          wizualnych{" "}
          <span className="font-bold">
            dla social media i kampanii adsowych
          </span>
          , przekształcając abstrakcyjne idee w przyciągające wzrok projekty,
          które realizują cele biznesowe.
        </>
      ),
      imageUrl: "dorota",
    },
    {
      name: "Nicola Kut",
      title: "Koordynatorka projektów i aspirująca analityczka biznesowa",
      description: (
        <>
          Nadzoruję realizację projektów, dbając o każdy szczegół i dotrzymanie
          terminów. Specjalizuję się w pilnowaniu harmonogramów i zapewnianiu,
          że każdy element pracy jest wykonany zgodnie z planem, co pozwala
          całemu zespołowi{" "}
          <span className="font-bold">działać sprawnie i efektywnie</span>.
        </>
      ),
      imageUrl: "nicola",
    },
  ]

  return (
    <div className="bg-pink-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.imageUrl}
              className={`flex flex-row items-start relative ${
                index < 2 ? "pb-28" : ""
              }`}
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 mr-4">
                <CircleImage circleKey={member.imageUrl} />
              </div>
              <div className="flex flex-col">
                <Typography variant="h3" className="text-purple-700 mb-1">
                  {member.name}
                </Typography>
                <Typography
                  variant="body"
                  className="font-semibold text-gray-600 mb-4"
                >
                  {member.title}
                </Typography>
                <Typography variant="body" className="text-gray-800">
                  {member.description}
                </Typography>
              </div>
              {index < 2 &&
                (version === 2 ? (
                  <MagicSunPinkNew
                    width="80px"
                    zIndex="z-0"
                    mobileTop="top-72"
                    mobileLeft="left-[50px]"
                  />
                ) : (
                  <MagicSun
                    width="80px"
                    zIndex="z-0"
                    mobileTop="top-72"
                    mobileLeft="left-[50px]"
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar5
