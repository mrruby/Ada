import { MagicSun } from "helpers/LayoutElements"
import React from "react"
import { CircleImage } from "../MagicBioBanner/circleImages"
import Typography from "../shared/Typography"

interface TeamMember {
  name: string
  title: string
  description: string
  imageUrl: string
}

const MagicWebinar5 = (): JSX.Element => {
  const teamMembers: TeamMember[] = [
    {
      name: "Adrianna Promis-Urbas",
      title: "Specjalistka od kampanii reklamowych z 6-letnim doświadczeniem",
      description:
        "Pomogłam ponad 200 kobietom zwiększyć zyski i satysfakcję z prowadzenia własnej firmy. Specjalizuję się w przekształcaniu chaotycznych działań marketingowych w precyzyjne systemy generujące przewidywalne wyniki, nawet w niepewnych warunkach rynkowych.",
      imageUrl: "ada",
    },
    {
      name: "Justyna Król",
      title: "Specjalistka od reklam i copywritingu z socjologicznym zacięciem",
      description:
        "Stworzyłam teksty reklamowe dla kilkudziesięciu polskich marek. Specjalizuję się w przekształcaniu zwykłych komunikatów w emocjonalne historie, które budują autentyczne relacje z klientami i sprawiają, że marki stają się rozpoznawalne, lubiane i wybierane.",
      imageUrl: "justyna",
    },
    {
      name: "Dorota Woźniak",
      title: "Projektantka graficzna i architektka z ilustratorską pasją",
      description:
        "Zaprojektowałam setki kreacji reklamowych. Specjalizuję się w tworzeniu profesjonalnych materiałów wizualnych dla social media i kampanii adsowych, przekształcając abstrakcyjne idee w przyciągające wzrok projekty, które realizują cele biznesowe.",
      imageUrl: "dorota",
    },
    {
      name: "Nicola Kut",
      title: "Koordynatorka projektów i aspirująca analityczka biznesowa",
      description:
        "Nadzoruję realizację projektów, dbając o każdy szczegół i dotrzymanie terminów. Specjalizuję się w pilnowaniu harmonogramów i zapewnianiu, że każdy element pracy jest wykonany zgodnie z planem, co pozwala całemu zespołowi działać sprawnie i efektywnie.",
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
              className={`flex flex-col items-center text-center relative ${
                index < 2 ? "pb-28" : ""
              }`}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-100">
                <CircleImage circleKey={member.imageUrl} />
              </div>
              <Typography variant="h3" className="text-purple-700 mb-1">
                {member.name}
              </Typography>
              <Typography variant="small" className="text-gray-600 mb-4">
                {member.title}
              </Typography>
              <Typography variant="body" className="text-gray-800 max-w-md">
                {member.description}
              </Typography>
              {index < 2 && (
                <MagicSun width="110px" zIndex="z-0" mobileTop="top-[440px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar5
