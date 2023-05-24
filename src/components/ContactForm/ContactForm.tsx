import React from "react"
import {
  Form,
  Input,
  TextArea,
  CheckBox,
  SubmitButton,
  SmallParagraph,
  Column,
} from "./ContactForm.styled"
import ReCAPTCHA from "react-google-recaptcha"

const ContactForm = (): JSX.Element => {
  return (
    <Form
      method="POST"
      data-netlify="true"
      name="contact-page"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
    >
      <Input type="hidden" name="bot-field" />
      <Input type="hidden" name="form-name" value="contact-page" />
      <Input required type="text" name="name" placeholder="Imię i nazwisko" />
      <Input required type="text" name="e-mail" placeholder="Adres E-mail" />
      <TextArea
        required
        name="message"
        rows={8}
        placeholder="Twoja wiadomość"
      />
      <Column>
        <CheckBox required />
        <SmallParagraph>
          Wyrazam zgode na przetwarzanie moich danych osobowych zgodnie z ustawą
          o ochronie danych osobowych w celu (np wysyłania informacji
          handlowei). Podanie danych osobowych jest dobrowolne. Zostałem
          poinformowany, ze przysługuje mi prawo dostepu do swoich danych,
          mozliwosci ich poprawiania, zadania zaprzestania ich przetwarzania.
          Administratorem danych jest GetBold Agency z siedzibą w 41-500 Chorzów
          ul. Żołnierzy Września 79/6.
        </SmallParagraph>
      </Column>
      <ReCAPTCHA sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY || ""} />

      <SubmitButton type="submit">Wyślij wiadomość!</SubmitButton>
    </Form>
  )
}

export default ContactForm
