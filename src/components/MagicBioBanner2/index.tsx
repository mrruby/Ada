import Typography from "components/shared/Typography"
import React from "react"
import Section from "../shared/Section"
import PersonBox from "./PersonBox"

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
        Stworzyłam teksty reklamowe dla <b>kilkudziesięciu</b> polskich marek.
        Specjalizuję się w przekształcaniu zwykłych komunikatów{" "}
        <b>w emocjonalne historie,</b> które budują autentyczne relacje z
        klientami i sprawiają, że
        <b>marki stają się rozpoznawalne,</b> lubiane i wybierane.
      </>
    ),
    img: "justyna",
  },
  {
    name: "Dorota Woźniak",
    title: "Projektantka graficzna i architektka z ilustratorską pasją",
    description: (
      <>
        Zaprojektowałam <b>setki</b> kreacji reklamowych. Specjalizuję się w
        tworzeniu profesjonalnych materiałów wizualnych{" "}
        <b>dla social media i kampanii adsowych,</b> przekształcając
        abstrakcyjne idee w przyciągające wzrok projekty, które realizują cele
        biznesowe.
      </>
    ),
    img: "dorota",
  },
  {
    name: "Nicola Kut",
    title: "Koordynatorka projektów i aspirująca analityczka biznesowa",
    description: (
      <>
        Nadzoruję realizację projektów, dbając o każdy szczegół i dotrzymanie
        terminów. Specjalizuję się <b>w pilnowaniu harmonogramów</b> i
        zapewnianiu, że każdy element pracy jest wykonany zgodnie z planem, co
        pozwala całemu zespołowi <b>działać sprawnie i efektywnie.</b>
      </>
    ),
    img: "nicola",
  },
  {
    name: "Papajka",
    title: "Asystentka Nicoli",
    description: <></>,
    img: "papajka",
  },
]

const MagicBioBanner2 = (): JSX.Element => {
  return (
    <>
      <Section>
        <div className="text-center">
          <div className="border-ada-orange border rounded-3xl max-w-[320px] mx-auto">
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
          <div className="flex flex-col md:flex-row gap-4 pt-8 mb-2 justify-center">
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
          <div className="flex flex-col md:flex-row gap-4 pt-2 mb-8 justify-center">
            {[peopleContent[4]].map((item, i) => (
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
