import React from "react";
import ContentSection from "helpers/ContentSection";

const BlogPosts = (): JSX.Element => {
  const postsData = [
    {
      title: "Slow marketing",
      description: "Jak marketing, który ma generować zyski, może być slow? Przekonaj się, że możesz prowadzić działania marketingowe w zgodzie ze sobą, bez nachalnej sprzedaży i na tym zarabiać.",
      url: '#',
      btnText: "Czytaj dalej"
    },
    {
      title: "Lejek sprzedażowy",
      description: "Czy kuchenny przyrząd ma coś wspólnego z marketingiem? Dowiedz się, jak podzielić działania marketingowe na etapy i zyskać zaufanie swoich odbiorców.",
      url: '#',
      btnText: "Czytaj dalej"
    },
    {
      title: "Kampanie reklamowe",
      description: "Jak ustawić kampanię reklamową Facebook Ads i osiągnąć fajne wyniki? Przeczytaj moje porady o kampaniach reklamowych. Chciałabym to wiedzieć, gdy zaczynałam działać w branży.",
      url: 'aaa',
      btnText: "Czytaj dalej"
    },
  ];

  return (
    <ContentSection
      title="Sprawdź darmowe materiały"
      heading="Kampanie reklamowe w duchu slow?"
      data={postsData}
      actionButtonBoxes={true}
      headingTextStyle= "text-adaTitle lg:text-[60px] text-ada-white40"
    />
  );
};

export default BlogPosts;
