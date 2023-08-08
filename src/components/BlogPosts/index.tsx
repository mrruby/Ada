import React from "react";
import ContentSection from "helpers/ContentSection";

const BlogPosts = (): JSX.Element => {
  const postsData = [
    {
      title: "Slow marketing",
      description: (
        <>
        Pokażę Ci, jak świadomie sprzedawać i tworzyć relacje z klientami.
        Dowiesz się, jak połączyć różne podejścia w systemie reklamowym Meta Ads.
        </>
      ),
      url: '#'
    },
    {
      title: "Lejek sprzedażowy",
      description: (
        <>
       Zrozumiesz, dlaczego ten kuchenny przyrząd jest ważny w marketingu.
      Zobaczysz, jakie są etapy tworzenia relacji z klientami i dlaczego to podejście działa.
        </>
      ),
      url: '#'
    },
    {
      title: "Kampanie reklamowe",
      description: (
        <>
        Poznasz podstawy planowania strategicznych kampanii reklamowych.
        Przekonasz się, że nie musisz się bać Managera Reklam — trzeba go zrozumieć!
        </>
      ),
      url: 'aaa'
    },
  ];

  return (
    <ContentSection
      title="Sprawdź mojego bloga"
      heading="Czego się dowiesz u mnie?"
      data={postsData}
      actionButtonBoxes={true}
    />
  );
};

export default BlogPosts;
