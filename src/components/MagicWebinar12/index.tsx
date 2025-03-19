import React from "react"
import magicWebinarForm from "../../values/forms/magic-webinar.html"
import Typography from "../shared/Typography"

const MagicWebinar12 = (): JSX.Element => {
  return (
    <section id="signup">
      <div className="flex flex-col items-center justify-center py-20 bg-ada-magicOrange p-4 text-center">
        <div
          className="max-w-2xl mb-12 mx-auto"
          dangerouslySetInnerHTML={{ __html: magicWebinarForm }}
        />
        <div>
          <div className="bg-ada-magicPurple p-1 text-white font-bold mr-1 mb-3 md:mb-0 inline">
            Uwaga:
          </div>
          <Typography variant="body" className="text-white inline font-bold">
            Ilość miejsc ograniczona - zdecyduj się teraz!
          </Typography>
        </div>
      </div>
    </section>
  )
}

export default MagicWebinar12
