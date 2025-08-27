import { Link } from "gatsby"
import { KnowledgeBox } from "helpers/KnowledgeBox"
import React from "react"

interface KnowledgeData {
  text: React.JSX.Element
  btnText: string | React.JSX.Element
  url: string
  type: "variant1" | "variant2"
}

const Knowledge = () => {
  const knowledgeData: KnowledgeData[] = [
    {
      text: (
        <>
          Zapisz się po <span className="font-bold">checklistę</span> <br />{" "}
          „Przed przygotowaniem Twojej pierwszej kampanii Facebook Ads” i
          dowiedz się, jak ogarnąć technikalia przed startem kampanii.
        </>
      ),
      btnText: <span className="font-bold">Zapisuję się! </span>,
      url: "https://checklistafb.adrianna.com.pl/",
      type: "variant1",
    },
    {
      text: (
        <>
          Przeczytaj najnowszy wpis na <span className="font-bold">blogu.</span>
        </>
      ),
      btnText: <span className="font-bold">Czytam! </span>,
      url: "/blog",
      type: "variant2",
    },
    {
      text: (
        <>
          Odsłuchaj najnowszy <span className="font-bold">podcast.</span>
        </>
      ),
      btnText: <span className="font-bold">Słucham ciekawych rzeczy! </span>,
      url: "/podcast",
      type: "variant2",
    },
    {
      text: (
        <>
          Chcesz poczytać o slow marketingu w kampaniach reklamowych jeszcze
          więcej? Zobacz e-booka „Slow Marketing a reklama na Facebooku i
          Instagramie”.
        </>
      ),
      btnText: <span className="font-bold">Patrzę! </span>,
      url: "https://sklep.adrianna.com.pl/product/e-book-slow-marketing-a-reklamy-na-facebooku-i-instagramie",
      type: "variant1",
    },
    {
      text: (
        <>
          Pobierz mini e-booka „10 grup, do których możesz skierować kampanie,
          aby zwiększyć wyniki” i docieraj ze swoją ofertą do odpowiednich
          osób.{" "}
        </>
      ),
      btnText: <span className="font-bold">Pobieram! </span>,
      url: "https://subscribepage.io/miniebook10",
      type: "variant1",
    },
    {
      text: (
        <>
          Obserwuj mojego Instagrama{" "}
          <Link
            to="https://www.instagram.com/adapromis/"
            className="font-bold hover:text-ada-pink"
          >
            @adapromis{" "}
          </Link>
          i bądź na bieżąco ze zmianami w kampaniach reklamowych!
        </>
      ),
      btnText: <span className="font-bold">Obserwuję! </span>,
      url: "https://www.instagram.com/adapromis/",
      type: "variant2",
    },
    {
      text: (
        <>
          Bardziej niż kampanie kręci Cię slow marketing? Śledź naszego
          agencyjnego Instagrama{" "}
          <Link
            to="https://www.instagram.com/slowm.arketing/"
            className="font-bold hover:text-ada-pink"
          >
            @slowm.arketing
          </Link>{" "}
          i naucz się, jak robić marketing w zgodzie ze sobą!
        </>
      ),
      btnText: <span className="font-bold">Obserwuję! </span>,
      url: "https://www.instagram.com/slowm.arketing/",
      type: "variant2",
    },
    {
      text: (
        <>
          Chcesz ze mną współpracować 1:1? Sprawdź ofertę konsultacji
          indywidualnych
        </>
      ),
      btnText: <span className="font-bold">Sprawdzam! </span>,
      url: "https://sklep.adrianna.com.pl/search?q=konsultacja",
      type: "variant2",
    },
    {
      text: (
        <>
          Wolisz grupowe zdobywanie wiedzy? Sprawdź program mentoringowy{" "}
          <span className="font-extrabold">„Ogarnij swoje Adsy!”</span>.
        </>
      ),
      btnText: <span className="font-bold">Chcę wiedzieć więcej! </span>,
      url: "/ogarnij-swoje-adsy",
      type: "variant2",
    },
  ]

  return (
    <div
      className="text-ada-blue flex gap-[80px] flex-wrap items-center justify-center pb-[24px]"
      id="knowledge"
    >
      {knowledgeData.map((knowledge, index) => (
        <KnowledgeBox key={index} {...knowledge} />
      ))}
    </div>
  )
}

export default Knowledge
