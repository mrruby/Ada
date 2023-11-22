import { Button } from "helpers/Button"
import React from "react"
import ReCAPTCHA from "react-google-recaptcha"

const ContactForm = (): JSX.Element => {
  const inputStyles =
    "border-1 border-ada-blue mb-4 p-4 text-ada-blue w-full text-center hover:shadow-xl"

  return (
    <div className="flex flex-col items-center bg-mails">
      <form
        className="flex flex-col items-center px-10 pb-[40px] lg:pb-[120px]"
        method="POST"
        data-netlify="true"
        name="contact-page"
        data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
        aria-label="Formularz kontaktowy"
      >
        <input type="hidden" name="bot-field" aria-hidden="true" />
        <input
          type="hidden"
          name="form-name"
          value="contact-page"
          aria-hidden="true"
        />
        <div className="flex flex-col md:flex-row w-full md:gap-[40px]">
          <label htmlFor="name" className="sr-only">
            Imię
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Imię"
            className={inputStyles}
          />
          <label htmlFor="surname" className="sr-only">
            Nazwisko
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Nazwisko"
            className={inputStyles}
          />
        </div>
        <label htmlFor="email" className="sr-only">
          E-mail
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          className={inputStyles}
        />
        <label htmlFor="message" className="sr-only">
          Twoja wiadomość
        </label>
        <textarea
          required
          name="message"
          id="message"
          rows={8}
          placeholder="Twoja wiadomość"
          className={inputStyles}
        />
        <div className="flex items-start">
          <input
            required
            type="checkbox"
            id="consent"
            name="consent"
            className="transition duration-500 ease-out flex-none mt-2"
          />
          <label htmlFor="consent" className="ml-2 w-full max-w-[600px]">
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
            ustawą o ochronie danych osobowych w celu (np. wysyłania informacji
            handlowych). Podanie danych osobowych jest dobrowolne. Zostałem
            poinformowany, że przysługuje mi prawo dostępu do swoich danych,
            możliwości ich poprawiania, zadania zaprzestania ich przetwarzania.
            Administratorem danych jest GetBold Agency z siedzibą w 41-500
            Chorzów ul. Żołnierzy Września 79/6.
          </label>
        </div>
        {/* <ReCAPTCHA
          sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY || ""}
          className="my-4"
          aria-label="ReCAPTCHA"
        /> */}
        <Button
          type="submit"
          url=""
          textSize="lg:text-[18px]"
          btnStyle="md:w-[372px] mt-[20px] h-[50px]"
          text="Wyślij wiadomość!"
          border
        />
      </form>
    </div>
  )
}

export default ContactForm
