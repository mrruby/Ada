import React from "react";
import ContentSection from "helpers/ContentSection";

const Services = (): JSX.Element => {
  const servicesData = [
    {
      title: "Meta Ads",
      description: "Kampanie reklamowe na Facebooku i Instagramie, dzięki którym zobaczysz stały napływ klientów do Twojego biznesu. Poprowadzę je dla Ciebie!",
      url: '/contact',
      btnText: "Chcę ofertę"
    },
    {
      title: "Konsultacje",
      description: "Mentoring dotyczący Twoich kampanii reklamowych. Zdradzę Ci moje tipy i zaoszczędzę dobre kilka lat samodzielnego klikania w menedżerze reklam." ,
      url: 'https://sklep.adrianna.com.pl/search?q=konsultacja',
      btnText: "Umawiam się"
    },
    {
      title: "Sklep",
      description:"Sprawdź moje produkty. Poznaj strategię prowadzenia kampanii reklamowych w duchu slow i wdrażaj ją u siebie od zaraz.",
      url: 'https://sklep.adrianna.com.pl/',
      btnText: "Sprawdzam"
    },
  ];

  return (
    <ContentSection
      title="Moje usługi"
      heading="W czym mogę Ci pomóc?"
      description="Szukasz czegoś innego? Napisz , czego potrzebujesz i wspólnie zobaczymy, co możemy zrobić!"
      data={servicesData}
      actionButtonBoxes={true}    
      />
  );
};

export default Services;
