import React from "react"
import Section from "../shared/Section"
import PersonBox from "./PersonBox"
import Typography from "components/shared/Typography"

const peopleContent = [
  {
    name: "Adrianna Promis-Urbas",
    title: "Specjalistka od kampanii reklamowych z 6-letnim doświadczeniem",
    description: (
      <>
        Pomogłam ponad <b>200 kobietom</b> zwiększyć zyski i satysfakcję z
        prowadzenia własnej firmy. Specjalizuję się w przekształcaniu
        chaotycznych działań marketingowych w precyzyjne{" "}
        <b>systemy generujące przewidywalne wyniki,</b> nawet w niepewnych
        warunkach rynkowych.
      </>
    ),
    img: "ada",
  },
  {
    name: "Justyna Król",
    title: "Specjalistka od reklam i copywritingu z socjologicznym zacięciem",
    description: (
      <>
        Stworzyłam teksty reklamowe dla kilkudziesięciu polskich marek.
        Specjalizuję się w przekształcaniu zwykłych komunikatów w emocjonalne
        historie, które budują autentyczne relacje z klientami i sprawiają, że
        marki stają się rozpoznawalne, lubiane i wybierane.
      </>
    ),
    img: "ada",
  },
  {
    name: "Dorota Woźniak",
    title: "Projektantka graficzna i architektka z ilustratorską pasją",
    description: (
      <>
        Zaprojektowałam setki kreacji reklamowych. Specjalizuję się w tworzeniu
        profesjonalnych materiałów wizualnych dla social media  i kampanii
        adsowych, przekształcając abstrakcyjne idee w przyciągające wzrok
        projekty, które realizują cele biznesowe.
      </>
    ),
    img: "ada",
  },
  {
    name: "Nicola Kut",
    title: "Koordynatorka projektów i aspirująca analityczka biznesowa",
    description: (
      <>
        Nadzoruję realizację projektów, dbając o każdy szczegół i dotrzymanie
        terminów. Specjalizuję się w pilnowaniu harmonogramów i zapewnianiu, że
        każdy element pracy jest wykonany zgodnie z planem, co pozwala całemu
        zespołowi działać sprawnie i efektywnie.
      </>
    ),
    img: "ada",
  },
  {
    name: "Papajka",
    title: "Asystentka Nicoli",
    description: <></>,
    img: "ada",
  },
]

const MagicBioBanner2 = (): JSX.Element => {
  return (
    <>
      <Section>
        <div className="text-center">
          <div className="border-ada-orange border rounded-2xl max-w-[320px] mx-auto">
            <Typography
              variant="h2"
              className="p-2 font-anton font-normal text-center text-ada-orange"
            >
              Kim jesteśmy?
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-8 justify-center">
            {peopleContent.slice(0, 2).map((item, i) => (
              <PersonBox
                key={i}
                name={item.name}
                title={item.title}
                description={item.description}
                img={item.img}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-8 mb-8 justify-center">
            {peopleContent.slice(2, 4).map((item, i) => (
              <PersonBox
                key={i}
                name={item.name}
                title={item.title}
                description={item.description}
                img={item.img}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-8 mb-8 justify-center">
            {peopleContent.slice(5, 6).map((item, i) => (
              <PersonBox
                key={i}
                name={item.name}
                title={item.title}
                description={item.description}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

export default MagicBioBanner2
