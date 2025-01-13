import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicBioBanner = ({ version }: { version: number }): JSX.Element => {

  const people = [
    {
      name: "Justyna Król",
      image: "justyna_portrait",
      description1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      description2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Marianna Cinak",
      image: "marianna_portrait",
      description1:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      description2:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "Dorota Woźniak",
      image: "dorota_portrait",
      description1:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      description2:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
    },
    {
      name: "Nicola Kut",
      image: "nicola_portrait",
      description1:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      description2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  return (
    <>
      <Section>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
          {/* Left column: Circular image */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden mx-auto md:mx-0">
              <div className="object-cover w-full h-full">
                <StaticImage
                  src="../../images/ada_portrait.webp"
                  alt="Ada Promis-Urbas"
                  placeholder="blurred"
                  layout="fixed"
                  width={240}
                  height={240}
                />
              </div>
            </div>
          </div>

          {/* Right column: Heading + paragraphs */}
          <div className="w-full md:w-2/3 text-left flex flex-col gap-3 relative">
            {/* Heading with small purple icon */}
            <div className="flex items-center gap-2">
              <div className="absolute top-1 -left-10">
                <StaticImage
                  src={"../../images/flower-purple.svg"}
                  alt="Purple flower icon"
                  placeholder="blurred"
                  layout="fixed"
                  width={30}
                  height={30}
                />
              </div>
              <Typography variant="h2" className="text-black">
                Ada Promis-Urbas
              </Typography>
            </div>
            <Typography variant="body" className="text-black">
              Robię "brzydkie" reklamy, które generują ładne wyniki. Pracuję z
              biznesami, które dbają o dobrostan psychiczny i fizyczny: praktykuję
              slow marketing, przemyślany, skuteczny, zbudowany na relacjach.
            </Typography>
            <Typography variant="body" className="text-black">
              Z zawodu jestem tłumaczką j. francuskiego &amp; angielskiego, a z
              zamiłowania — kreatywną duszą. Ułatwiam i upraszczam ADSy na
              Facebooku i Instagramie. Ze mną zrobisz zdecydowanie więcej niż
              "promuj post"!
            </Typography>
          </div>
        </div>

        {version == 2 && (
          <>
            {people.map((person, index) => (
              <div
                key={index}
                className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-8 relative"
              >
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden mx-auto md:mx-0">
                    <div className="object-cover w-full h-full">
                      <StaticImage
                        src={`../../images/${person.image}.webp`}
                        alt={person.name}
                        placeholder="blurred"
                        layout="fixed"
                        width={240}
                        height={240}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3 text-left flex flex-col gap-3 relative">
                  <div className="flex items-center gap-2">
                    <div className="absolute top-1 -left-10">
                      <StaticImage
                        src={"../../images/flower-purple.svg"}
                        alt="Purple flower icon"
                        placeholder="blurred"
                        layout="fixed"
                        width={30}
                        height={30}
                      />
                    </div>
                    <Typography variant="h2" className="text-black">
                      {person.name}
                    </Typography>
                  </div>
                  <Typography variant="body" className="text-black">
                    {person.description1}
                  </Typography>
                  <Typography variant="body" className="text-black">
                    {person.description2}
                  </Typography>
                </div>
              </div>
            ))}
          </>
        )}
      </Section>
    </>
  )
}

export default MagicBioBanner
