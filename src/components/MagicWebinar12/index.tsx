import React, { useEffect } from "react"
import magicListaForm from "../../values/forms/form-magic-zainteresowanych.html"
import magicWebinarForm22 from "../../values/forms/magic-form-jesien.html"
import magicWebinarForm from "../../values/forms/magic-webinar.html"

const MagicWebinar12 = ({ version = 1 }: { version?: number }) => {
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
      <div
        className={`flex flex-col items-center justify-center py-20 p-4 text-center ${
          version !== 3 ? "bg-ada-magicOrange" : ""
        }`}
      >
        <div
          className="max-w-2xl mb-12 mx-auto"
          dangerouslySetInnerHTML={{
            __html:
              version === 3
                ? magicListaForm
                : version === 2
                  ? magicWebinarForm22
                  : magicWebinarForm,
          }}
        />
      </div>
    </section>
  )
}

export default MagicWebinar12
