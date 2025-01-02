import React from "react"
import magicForm from "../../values/forms/magic-form.html"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicLastSection = () => {
  return (
    <Section bgColor="bg-transparent" id="webinar-form">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full max-w-sm md:w-1/2 text-black">
          <Typography variant="h2" className="mb-4">
            Przestań eksperymentować
          </Typography>
          <Typography variant="body" className="mb-6">
            Dowiedz się, jakie zmiany naprawdę zadziałają w 2025 roku i wyprzedź
            konkurencję, która nadal tkwi w starych schematach.
          </Typography>
          <Typography variant="body">
            <span role="img" aria-label="present">
              🎁
            </span>{" "}
            <span className="font-bold">Bonus dla obecnych na żywo:</span>
            <br />
            notatka graficzna z podsumowaniem spotkania
          </Typography>
        </div>
        <div className="w-full md:w-1/2">
          <div dangerouslySetInnerHTML={{ __html: magicForm }} />
        </div>
      </div>
    </Section>
  )
}

export default MagicLastSection
