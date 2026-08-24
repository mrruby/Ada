import React, { useEffect, useRef } from "react"
import formHTML from "../../values/forms/form-jesien.html"

type JesienSignupFormProps = {
  sticker: React.ReactNode
  microcopy: React.ReactNode
  variant?: "hero" | "finale"
  id?: string
  className?: string
}

const hasEmbeddedForm = formHTML
  .replace(/<!--[\s\S]*?-->/g, "")
  .includes("ml-form-embedContainer")

const JesienSignupForm: React.FC<JesienSignupFormProps> = ({
  sticker,
  microcopy,
  variant = "hero",
  id,
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isFinale = variant === "finale"

  useEffect(() => {
    if (!hasEmbeddedForm) return
    const form = cardRef.current?.querySelector(
      ".ml-block-form"
    ) as HTMLFormElement | null
    if (!form) return

    form.removeAttribute("target")

    // Skrypt walidacji MailerLite nie wykonuje się (dangerouslySetInnerHTML),
    // więc wymagane pola — w tym checkbox zgody — egzekwujemy natywnie.
    form
      .querySelectorAll<HTMLInputElement>(
        "input[aria-required=true], .ml-validate-required input[type=checkbox]"
      )
      .forEach((input) => {
        input.required = true
      })

    const handleSubmit = (e: Event) => {
      e.preventDefault()

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
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
    <div
      ref={cardRef}
      id={id}
      className={`relative rounded-[22px] border-[3px] bg-white px-7 pt-[30px] pb-[26px] shadow-[0_18px_44px_rgba(111,45,189,0.14)] max-[560px]:px-[18px] max-[560px]:pt-6 max-[560px]:pb-[22px] ${
        isFinale
          ? "-rotate-[0.4deg] border-ada-jesienInk"
          : "rotate-[0.4deg] border-ada-jesienPurple"
      } ${className}`}
    >
      <span
        className={`absolute -top-6 z-[2] rounded-lg bg-white px-3.5 py-1.5 font-caveat text-[1.25rem] font-bold text-ada-jesienInk shadow-[0_8px_20px_rgba(36,26,58,0.18)] motion-reduce:animate-none max-[560px]:-top-5 max-[560px]:text-[1.05rem] [&_em]:not-italic [&_em]:text-ada-jesienPink ${
          isFinale
            ? "-left-[10px] -rotate-[6deg] animate-wiggleNeg max-[560px]:left-1.5"
            : "-right-[10px] rotate-[7deg] animate-wiggle max-[560px]:right-1.5"
        }`}
      >
        {sticker}
      </span>

      <h2 className="mb-4 text-[1.22rem] leading-[1.35] font-extrabold text-ada-jesienInk">
        Wpisz dane i odbierz nagranie 👇
      </h2>

      {hasEmbeddedForm ? (
        <div dangerouslySetInnerHTML={{ __html: formHTML }} />
      ) : (
        <div className="rounded-[14px] border-[2.5px] border-dashed border-ada-jesienPurpleSoft bg-ada-jesienLavender/50 px-5 py-10 text-center text-ada-jesienInkSoft">
          <span className="mb-2 block text-[2rem]">📩</span>
          <p className="mb-1 font-extrabold tracking-[0.05em] text-ada-jesienPurple">
            PLACEHOLDER NA FORMULARZ
          </p>
          <p className="text-[0.85rem] leading-[1.55]">
            Tu wklej kod embed z MailerLite
            <br />
            (pola: imię + e-mail + zgoda)
          </p>
        </div>
      )}

      <p className="mt-[13px] text-center text-[0.8rem] leading-[1.55] text-ada-jesienInkSoft">
        {microcopy}
      </p>
    </div>
  )
}

export default JesienSignupForm
