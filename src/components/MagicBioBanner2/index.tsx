import Typography from "components/shared/Typography"
import React from "react"
import Section from "../shared/Section"
import PersonBox from "./PersonBox"

const peopleContent = [
  {
    name: "Adrianna Promis-Urbas",
    title: "Specjalistka od kampanii reklamowych z 10-letnim doświadczeniem",
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
    name: "Nicola Kut",
    title: "Koordynatorka projektów i specjalistka od reklam",
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
    name: "Anna Ertekin",
    title: "Menedżerka projektów i kampanii reklamowych",
    description: (
      <>
        Wspieram marki <b>w codziennych działaniach marketingowych,</b> dbając o
        to, by pomysły, kampanie i strategie były nie tylko dobrze zaplanowane,
        ale także skutecznie wdrażane.{" "}
        <b>
          Specjalizuję się w łączeniu działań marketingowych w spójną całość:
        </b>{" "}
        od pomysłu aż po analizę wyników.
      </>
    ),
    img: "anna",
  },
  {
    name: "Papajka",
    title: "Asystentka Nicoli",
    description: <></>,
    img: "papajka",
  },
]

const MagicBioBanner2 = () => {
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
          <div className="flex flex-col md:flex-row gap-4 pt-2 mb-8 justify-center relative">
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
