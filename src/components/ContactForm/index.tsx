import React from "react"
import ReCAPTCHA from "react-google-recaptcha"

type ContactFormProps = {
  source?: string
}

const ContactForm = ({ source = "default" }: ContactFormProps) => {
  const inputStyles =
    "min-h-[58px] w-full rounded-[14px] border border-ada-magicOrange bg-ada-white2 px-4 py-3 text-black outline-none transition-shadow focus:ring-2 focus:ring-ada-magicOrange md:min-h-[76px]"
  const labelStyles =
    "mb-2 block text-xs font-bold uppercase tracking-wide text-black"

  return (
    <section className="flex flex-col items-center px-4 py-12">
      <form
        className="flex w-full flex-col items-center"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        name="contact-page"
        data-netlify-honeypot="bot-field"
        aria-label="Formularz kontaktowy"
      >
        <input type="hidden" name="bot-field" aria-hidden="true" />
        <input
          type="hidden"
          name="form-name"
          value="contact-page"
          aria-hidden="true"
        />
        <input
          type="hidden"
          name="form-source"
          value={source}
          aria-hidden="true"
        />
        <div className="w-full max-w-[650px] rounded-[30px] border border-ada-magicOrange bg-ada-magicPink2 px-6 py-8 shadow-[8px_10px_14px_rgba(0,0,0,0.18)] sm:px-10 md:px-[88px] md:py-16">
          <label htmlFor="name" className={labelStyles}>
            Imię:
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            className={inputStyles}
          />
          <label htmlFor="surname" className={`${labelStyles} mt-5`}>
            Nazwisko:
          </label>
          <input
            required
            type="text"
            name="surname"
            id="surname"
            autoComplete="family-name"
            className={inputStyles}
          />
          <label htmlFor="email" className={`${labelStyles} mt-5`}>
            Email:
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className={inputStyles}
          />
          <label htmlFor="message" className={`${labelStyles} mt-5`}>
            Twoja wiadomość:
          </label>
          <textarea
            required
            name="message"
            id="message"
            rows={8}
            className={`${inputStyles} min-h-[220px] resize-y md:min-h-[320px]`}
          />
          <div className="mt-6 flex items-start">
            <input
              required
              type="checkbox"
              id="consent"
              name="consent"
              className="mt-1 flex-none rounded border-black text-black focus:ring-ada-magicOrange"
            />
            <label
              htmlFor="consent"
              className="ml-3 text-xs leading-relaxed text-black"
            >
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
              ustawą o ochronie danych osobowych w celu (np. wysyłania
              informacji handlowych). Podanie danych osobowych jest dobrowolne.
              Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich
              danych, możliwości ich poprawiania, zadania zaprzestania ich
              przetwarzania. Administratorem danych jest Slow Marketing Adrianna
              Promis-Urbas z siedzibą w 47-400 Racibórz, Ul. Mała 2.
            </label>
          </div>
          <div className="mt-6 flex h-[66px] w-full justify-center overflow-hidden sm:h-[78px]">
            <ReCAPTCHA
              sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY || ""}
              className="origin-top scale-[0.84] sm:scale-100"
              aria-label="ReCAPTCHA"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-10 w-full max-w-[430px] rounded-lg bg-black px-7 py-3 font-anton text-xl font-normal uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 focus:ring-offset-ada-magicGreen md:px-10 md:text-[28px]"
        >
          Wyślij wiadomość!
        </button>
      </form>
    </section>
  )
}

export default ContactForm
