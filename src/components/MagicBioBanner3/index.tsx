import Typography from "components/shared/Typography"
import React, { JSX } from "react"
import Section from "../shared/Section"
import PersonBox from "./PersonBox"

const peopleContent = [
  {
    name: "Adrianna Promis-Urbas",
    description: (
      <>
        Specjalistka od <b>kampanii reklamowych z 6-letnim doświadczeniem.</b>{" "}
        Pomogłam ponad <b>200 kobietom</b> zwiększyć zyski z prowadzenia własnej
        firmy.
      </>
    ),
    img: "ada",
  },
  {
    name: "Justyna Król",
    description: (
      <>
        Specjalistka <b>od reklam i copywritingu.</b> Stworzyłam teksty
        reklamowe dla
        <b> kilkudziesięciu polskich marek,</b> które budują autentyczne relacje
        z klientami.
      </>
    ),
    img: "justyna",
  },
  {
    name: "Dorota Woźniak",
    description: (
      <>
        <b> Projektantka graficzna</b> z ilustratorską pasją. Zaprojektowałam{" "}
        <b>setki kreacji reklamowych,</b> które realizują konkretne cele
        biznesowe.
      </>
    ),
    img: "dorota",
  },
  {
    name: "Nicola Kut",
    description: (
      <>
        <b> Koordynatorka projektów.</b> Nadzoruję realizację projektów, dbając
        o każdy szczegół i dotrzymanie terminów.
      </>
    ),
    img: "nicola",
  },
]

const MagicBioBanner3 = (): JSX.Element => {
  return (
    <>
      <Section>
        <div className="text-center">
          <Typography variant="h3" className="mt-11 text-ada-black text-center">
            Wspieramy biznesy naszych klientek jak nasze własne. <br />
            <span className="font-medium">
              Tobie też pomożemy budować (naj)lepsze wyniki w biznesie
            </span>
          </Typography>
          <div className="flex flex-col md:flex-row gap-4 pt-8 justify-center">
            {peopleContent.slice(0, 2).map((item, i) => (
              <PersonBox
                key={i}
                name={item.name}
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

export default MagicBioBanner3
