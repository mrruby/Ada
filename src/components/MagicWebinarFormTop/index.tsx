import Typography from "components/shared/Typography"
import React, { useEffect } from "react"
import magicWebinarForm22 from "../../values/forms/form-nagranie-masterclassu.html"

const MagicWebinarFormTop = () => {
  useEffect(() => {
    const form = document.querySelector(
      ".magic-form-top .ml-block-form"
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
    <div className="bg-ada-light-pink py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Typography
          variant="h2"
          className="text-ada-magicPurple text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Odbierz nagranie masterclassu!
        </Typography>
        <Typography
          variant="body"
          className="text-ada-magicPurple text-lg text-center mb-8"
        >
          Zapisz się poniżej, aby otrzymać dostęp do pełnego nagrania
        </Typography>

        <div className="magic-form-top bg-white shadow-lg rounded-lg p-6 border-t-4 border-ada-magicPurple">
          <div
            dangerouslySetInnerHTML={{ __html: magicWebinarForm22 }}
          />
        </div>
      </div>
    </div>
  )
}

export default MagicWebinarFormTop