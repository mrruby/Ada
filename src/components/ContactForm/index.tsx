import { Button } from "helpers/Button";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { StaticImage } from "gatsby-plugin-image"

const ContactForm = (): JSX.Element => {
  const inputStyles = "border-t-0 border-r-0 border-l-0 border-b-2 border-ada-blue mb-4 p-4 w-full max-w-[640px] text-ada-blue";

  return (
    <div className="flex flex-col items-center">
    <h1 className="px-4 text-adaTitle font-bold pb-8 {titleStyle}">Kontakt</h1>
      <div className="flex flex-col md:flex-row pb-5 md:pb-0">
        <div>
          <StaticImage src={"../../images/contact.webp"} alt="Ada Promis - kontakt" width={650}  height={770}/>
        </div>
       <form
      className="flex flex-col items-center px-10"
      method="POST"
      data-netlify="true"
      name="contact-page"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      aria-label="Formularz kontaktowy"
    >
      <input type="hidden" name="bot-field" aria-hidden="true" />
      <input type="hidden" name="form-name" value="contact-page" aria-hidden="true" />
      <label htmlFor="name" className="sr-only">
        Imię i nazwisko
      </label>
      <input
        required
        type="text"
        name="name"
        id="name"
        placeholder="Imię i nazwisko"
        className={inputStyles}
      />
      <label htmlFor="email" className="sr-only">
        Adres e-mail
      </label>
      <input
        required
        type="email"
        name="email"
        id="email"
        placeholder="Adres E-mail"
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
          Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych w celu (np. wysyłania informacji handlowych). Podanie danych osobowych jest dobrowolne. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, zadania zaprzestania ich przetwarzania. Administratorem danych jest GetBold Agency z siedzibą w 41-500 Chorzów ul. Żołnierzy Września 79/6.
        </label>
      </div>
      <ReCAPTCHA
        sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY || ""}
        className="my-4"
        aria-label="ReCAPTCHA"
      />
      <Button type="submit" url="#" textSize="lg:text-[25px]" text="Wyślij wiadomość!" border/>
    </form>
    </div>
    </div>
  );
};

export default ContactForm;
