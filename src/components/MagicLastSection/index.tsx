import { Button } from "helpers/Button"
import React, { FC } from "react"
import magicForm from "../../values/forms/magic-form.html"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

interface MagicLastSectionProps {
  version: number
}

const MagicLastSection: FC<MagicLastSectionProps> = ({
  version,
}: MagicLastSectionProps) => {
  return (
    <>
      {version == 1 && (
        <Section bgColor="bg-transparent" id="webinar-form">
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
            <div className="w-full max-w-sm md:w-1/2 text-black">
              <Typography variant="h2" className="mb-4">
                Przestań eksperymentować
              </Typography>
              <Typography variant="body" className="mb-6">
                Dowiedz się, jakie zmiany naprawdę zadziałają w 2025 roku, nawet
                jeśli masz niewielki budżet na reklamy i tylko kilka godzin
                tygodniowo.
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
      )}

      {version == 2 && (
        <Section bgColor="bg-transparent" id="form" className="flex">
          <Button
            type="button"
            text={
              <span className="font-bold text-ada-pink7 uppercase">
                Sprawdzam!
              </span>
            }
            sectionId="signup"
            textSize="md:text-adaSubtitle"
            btnStyle="uppercase bg-ada-pink2 text-ada-black 
                      font-semibold tracking-wide h-[48px] md:h-[60px] 
                      px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px] m-auto"
          />
        </Section>
      )}
    </>
  )
}

export default MagicLastSection
