import Section from "components/shared/Section"
import Typography from "components/shared/Typography"
import React, { useEffect } from "react"
import magicListaForm from "../../values/forms/magic-zainteresowani-new.html"

interface MagicJoinClosedProps {
  title?: string
}

const MagicJoinClosed = ({
  title = "Zapisz się na listę: otwieramy już niedługo! 👇",
}: MagicJoinClosedProps) => {
  useEffect(() => {
    const form = document.querySelector(
      ".magic-join-closed .ml-block-form"
    ) as HTMLFormElement
    if (!form) return

    form.removeAttribute("target")

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
          }
        })
        .catch(() => {})
    }

    form.addEventListener("submit", handleSubmit)
    return () => form.removeEventListener("submit", handleSubmit)
  }, [])

  return (
    <Section padding="py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <Typography
          variant="h2"
          className="text-ada-black font-bold leading-snug mb-4"
        >
          {title}
        </Typography>

        <div className="magic-join-closed bg-white shadow-xl rounded-2xl p-6 md:p-8 border-t-4 border-ada-pink7">
          <div dangerouslySetInnerHTML={{ __html: magicListaForm }} />
        </div>
      </div>
    </Section>
  )
}

export default MagicJoinClosed
