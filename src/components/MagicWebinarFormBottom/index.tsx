import Typography from "components/shared/Typography"
import React, { useEffect } from "react"
import magicWebinarForm22 from "../../values/forms/form-nagranie-masterclassu.html"

const MagicWebinarFormBottom = () => {
  useEffect(() => {
    const form = document.querySelector(
      ".magic-form-bottom .ml-block-form"
    ) as HTMLFormElement
    if (!form) return

    // Remove target attribute to avoid new tab
    form.removeAttribute("target")

    // Add a submit event listener to intercept submission
    const handleSubmit = (e: Event) => {
      e.preventDefault()

      const formData = new FormData(form)
      fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            window.location.href = "https://adrianna.com.pl/thank/"
          } else {
            console.error("Submission failed:", data)
          }
        })
        .catch((error) => console.error("Error:", error))
    }

    form.addEventListener("submit", handleSubmit)

    return () => {
      form.removeEventListener("submit", handleSubmit)
    }
  }, [])

  return (
    <div className="bg-ada-newPurple py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Typography
          variant="h2"
          className="text-white text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Ostatnia szansa na zapisanie się!
        </Typography>

        <div className="magic-form-bottom bg-white shadow-lg rounded-lg p-6 border-t-4 border-ada-pink7">
          <div
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: magicWebinarForm22 }}
          />
          <div className="flex items-center bg-ada-pink7/10 p-3 rounded">
            <div className="bg-ada-pink7 px-2 py-1 text-white font-bold mr-3 rounded">
              UWAGA!
            </div>
            <Typography
              variant="body"
              className="text-ada-magicPurple font-bold"
            >
              Ten produkt jest dostępny za 0zł jedynie do 17.09 - zdecyduj się teraz!
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinarFormBottom
