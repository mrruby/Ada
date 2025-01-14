import React from "react"
import magicForm from "../../values/forms/magic-form.html"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicWhy = () => {
  return (
    <Section bgColor="bg-transparent" id="webinar-form">
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
        <div className="w-full text-black">
          <Typography variant="h2" className="mb-8">
            MAGIC jest dla Ciebie, jeśli:
          </Typography>
          <div className="flex flex-col md:flex-row gap-8">
            <ul className="max-w-md">
              <li className="mb-3">✅ <span className="font-bold">Zaczynasz swoją przygodę z Meta Ads</span> i potrzebujesz przewodnika</li>
              <li className="mb-3">✅ <span className="font-bold">Już prowadzisz kampanie,</span> ale chcesz poprawić ich skuteczność</li>
              <li>✅ <span className="font-bold"> Dbasz o swój rozwój</span> osobisty i biznesowy</li>
            </ul>
            <ul className="max-w-md">
              <li className="mb-3">✅<span className="font-bold">Szukasz społeczności</span> wspierających się kobiet w marketingu</li>
              <li>✅Chcesz w 2025 roku <span className="font-bold"> skupić się na tym, co naprawdę działa w reklamach</span></li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default MagicWhy
