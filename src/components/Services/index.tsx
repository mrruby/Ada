import React from "react";
import ContentSection from "helpers/ContentSection";

const Services = (): JSX.Element => {
  const servicesData = [
    {
      title: "Meta Ads",
      description: "Kampanie reklamowe na Facebooku i Instagramie, dzięki którym zobaczysz stały napływ klientów do Twojego biznesu. Poprowadzę je dla Ciebie!"
    },
    {
      title: "Konsultacje",
      description: "Mentoring dotyczący Twoich kampanii reklamowych. Zdradzę Ci moje tipy i zaoszczędzę dobre kilka lat samodzielnego klikania w menedżerze reklam." 
    },
    {
      title: "E-book",
      description:"Strategia prowadzenia kampanii reklamowych, którą możesz wdrożyć u siebie od zaraz. 6 lat tworzenia reklam w duchu slow marketingu na 100 stronach."
    },
  ];

  return (
    <ContentSection
      title="Moje usługi"
      heading="W czym mogę Ci pomóc?"
      description="Szukasz czegoś innego? Napisz , czego potrzebujesz i wspólnie zobaczymy, co możemy zrobić!"
      data={servicesData}
      actionButtonBoxes={false}    
      />
  );
};

export default Services;
