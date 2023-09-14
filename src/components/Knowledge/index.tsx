import React from "react";
import { KnowledgeBox } from "helpers/KnowledgeBox";

interface KnowledgeData {
  text: JSX.Element;
  btnText: string;
  url: string;
  type: 'variant1' | 'variant2';
}

const Knowledge = (): JSX.Element => {
  const knowledgeData: KnowledgeData[] = [
    {
      text: <>
      Zapisz się po <span className="font-bold">checklistę</span> <br/> „Przed przygotowaniem Twojej pierwszej kampanii Facebook Ads” i dowiedz się, jak ogarnąć technikalia przed startem kampanii.</>,
      btnText: "Zapisuję się!",
      url: "/contact",
      type: "variant1"
    },
    {
      text: <>Przeczytaj najnowszy wpis na <span className="font-bold">blogu.</span></>,
      btnText: "Czytam!",
      url: "/blog",
      type: "variant2"
    },
    {
      text: <>Odsłuchaj najnowszy <span className="font-bold">podcast.</span></>,
      btnText: "Słucham ciekawych rzeczy!",
      url: "/podcast",
      type: "variant2"
    },
    {
      text: <>Chcesz poczytać o slow marketingu w kampaniach reklamowych jeszcze więcej? Zobacz e-booka „Slow Marketing a reklama na Facebooku i Instagramie”. </>,
      btnText: "Patrzę!",
      url: "/ebook",
      type: "variant1"
    },
    {
      text: <>Pobierz mini e-booka „10 grup, do których możesz skierować kampanie, aby zwiększyć wyniki” i docieraj ze swoją ofertą do odpowiednich osób. </>,
      btnText: "Pobieram!",
      url: "/",
      type: "variant1"
    },
    {
      text: <>Obserwuj mojego Instagrama @adapromis i bądź na bieżąco ze zmianami w kampaniach reklamowych!</>,
      btnText: "Obserwuję!",
      url: "https://www.instagram.com/adapromis/",
      type: "variant2"
    },
    {
      text: <>Bardziej niż kampanie kręci Cię slow marketing? Śledź naszego agencyjnego Instagrama @slowm.arketing i naucz się, jak robić marketing w zgodzie ze sobą!</>,
      btnText: "Obserwuję!",
      url: "https://www.instagram.com/slowm.arketing/",
      type: "variant2"
    },
    {
      text: <>Chcesz ze mną współpracować 1:1? Sprawdź ofertę konsultacji indywidualnych</>,
      btnText: "Sprawdzam!",
      url: "https://sklep.adrianna.com.pl/search?q=konsultacjae",
      type: "variant2"
    },
    {
      text: <>Wolisz grupowe zdobywanie wiedzy? Sprawdź mastermind „Ogarnij swoje Adsy!”.</>,
      btnText: "Chcę wiedzieć więcej!",
      url: "/",
      type: "variant2"
    },
  ];

  return (
    <div className="text-ada-blue flex gap-[80px] flex-wrap items-center justify-center pb-[24px]" id="knowledge">
      {knowledgeData.map((knowledge, index) => (
        <KnowledgeBox key={index} {...knowledge} />
      ))}
    </div>
  );
};

export default Knowledge;
