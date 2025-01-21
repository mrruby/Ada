import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicWhy = ({ part }: { part: number }): JSX.Element => {
  return (
    <Section bgColor="bg-transparent">
      {part == 1 && (
        <div className="w-full text-white -mb-8">
          <Typography variant="h1" className="mb-8 text-center animate-bounce">
            <span className="text-ada-yellow3">MAGIC </span>
            jest dla Ciebie, jeśli:
          </Typography>
        </div>
      )}
      {part == 2 && (
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
          <div className="w-full text-black">
            <div className="flex flex-col md:flex-row gap-8">
              <ul className="max-w-md">
                <li className="mb-3">
                  ✅{" "}
                  <span className="font-bold">
                    Zaczynasz swoją przygodę z Meta Ads
                  </span>{" "}
                  i potrzebujesz przewodnika
                </li>
                <li className="mb-3">
                  ✅ <span className="font-bold">Już prowadzisz kampanie,</span>{" "}
                  ale chcesz poprawić ich skuteczność
                </li>
                <li>
                  ✅ <span className="font-bold"> Dbasz o swój rozwój</span>{" "}
                  osobisty i biznesowy
                </li>
              </ul>
              <ul className="max-w-md">
                <li className="mb-3">
                  ✅ <span className="font-bold">Szukasz społeczności</span>{" "}
                  wspierających się kobiet w marketingu
                </li>
                <li className="mb-3">
                  ✅ Chcesz{" "}
                  <span className="font-bold">
                    {" "}
                    przestać eksperymentować i zacząć wdrażać sprawdzone
                    strategie
                  </span>
                </li>
                <li>
                  ✅{" "}
                  <span className="font-bold">
                    Marzysz o automatyzacji procesów reklamowych,
                  </span>{" "}
                  które oszczędzą Twój czas
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

export default MagicWhy
