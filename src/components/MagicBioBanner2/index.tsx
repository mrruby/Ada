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
    name: "Paulina Oraczek",
    title: "Menedżerka projektów i kampanii reklamowych",
    description: (
      <>
        Odpowiadam za to, aby kampanie reklamowe naszych klientów stabilnie{" "}
        <b>realizowały ich cele biznesowe</b>. Dbając o ciągłość projektów, na
        bieżąco analizuję wyniki, co pozwala na{" "}
        <b>stałe ulepszanie procesów sprzedażowych</b>. Specjalizuję się{" "}
        <b>we wdrażaniu ustalonego planu</b>, gwarantując klientom pełne
        wsparcie w rozwoju.
      </>
    ),
    img: "paulina",
  },
  {
    name: "Karolina Mijalska",
    title: "Projektantka komunikacji z mocnym backgroundem graficznym",
    description: (
      <>
        Od lat poruszam się pomiędzy <b>brandingiem, marketingiem i designem</b>
        , dlatego <b>na kreacje reklamowe patrzę szerzej</b> niż tylko przez
        pryzmat tego, czy są ładne. Bardziej interesuje mnie, czy{" "}
        <b>
          działają, komunikują to, co powinny oraz czy faktycznie pomagają marce
          osiągnąć cel.
        </b>
      </>
    ),
    img: "karolina",
  },
  {
    name: "Papajka",
    title: "Asystentka Nicoli",
    description: <></>,
    img: "papajka",
  },
]

const MagicBioBanner2 = ({ version }: { version: number }) => {
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
          {version === 1 && (
            <div className="flex flex-col md:flex-row gap-4 pt-8 mb-8 justify-center">
              <PersonBox
                name={peopleContent[4].name}
                title={peopleContent[4].title}
                description={peopleContent[4].description}
                img={peopleContent[4].img}
              />
            </div>
          )}
        </div>
      </Section>
    </>
  )
}

export default MagicBioBanner2
