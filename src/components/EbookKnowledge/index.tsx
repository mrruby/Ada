import React from "react";
import ContentSection from "helpers/ContentSection";

const EbookKnowledge = (): JSX.Element => {
  const ebookKnowledgeData = [
    {
      title: "Slow marketing",
      description: "Pokażę Ci, jak świadomie sprzedawać i tworzyć relacje z klientami. Dowiesz się, jak połączyć różne podejścia w systemie reklamowym Meta Ads.",
      url: "",
      btnText: "",
    },
    {
      title: "Lejek sprzedażowy",
      description: "Zrozumiesz, dlaczego ten kuchenny przyrząd jest ważny w marketingu. Zobaczysz, jakie są etapy tworzenia relacji z klientami i dlaczego to podejście działa.",
      url: "",
      btnText: "",    
    },
    {
      title: "Kampanie reklamowe",
      description: "Poznasz podstawy planowania strategicznych kampanii reklamowych. Przekonasz się, że nie musisz się bać Managera Reklam — trzeba go zrozumieć!",
      url: "",
      btnText: "",    
    },
  ];

  return (
    <ContentSection
      title="Mnóstwo wiedzy na temat:"
      data={ebookKnowledgeData}
      actionButtonBoxes={false}
    />
  );
};

export default EbookKnowledge;
