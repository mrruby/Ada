import React, { useEffect } from "react"
import magicWebinarForm22 from "../../values/forms/magic-form-22.05.html"
import magicWebinarForm from "../../values/forms/magic-webinar.html"
import Typography from "../shared/Typography"

const MagicWebinar12 = ({ version = 1 }: { version?: number }): JSX.Element => {
  useEffect(() => {
    const form = document.querySelector(".ml-block-form") as HTMLFormElement
    if (form) {
      // Remove target attribute to avoid new tab
      form.removeAttribute("target")

      // Add a submit event listener to intercept submission
      form.addEventListener("submit", (e) => {
        e.preventDefault() // Prevent the default behavior

        const formData = new FormData(form)
        fetch(form.action, {
          method: "POST",
          body: formData,
          mode: "cors",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              // Redirect on success
              window.location.href = "https://adrianna.com.pl/thank/"
            } else {
              // Optionally, handle errors here
              console.error("Submission failed:", data)
            }
          })
          .catch((error) => console.error("Error:", error))
      })
    }
  }, [])

  return (
    <section id="signup">
      <div className="flex flex-col items-center justify-center py-20 bg-ada-magicOrange p-4 text-center">
        <div
          className="max-w-2xl mb-12 mx-auto"
          dangerouslySetInnerHTML={{
            __html: version === 2 ? magicWebinarForm22 : magicWebinarForm,
          }}
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
