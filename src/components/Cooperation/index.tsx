import React from "react"
import ContentSection from "helpers/ContentSection"
import CooperationSection from "helpers/CooperationSection"

const Cooperation = (): JSX.Element => {
  const servicesData = [
    {
      title: "Produkty",
      description:
        "Skorzystaj z produktów o reklamach i samodzielnie prowadź kampanie.",
      url: "/contact",
      btnText: "Korzystam!",
    },
    {
      title: "Kampanie",
      description:
        "Zleć mi prowadzenie kampanii i skup się na pracy, którą lubisz najbardziej.",
      url: "https://sklep.adrianna.com.pl/search?q=konsultacja",
      btnText: "Sprawdzam!",
    },
    {
      title: "Szkolenia",
      description:
        "Szukasz ekspertki od Meta Ads? Prowadzę szkolenia indywidualne i grupowe.",
      url: "https://sklep.adrianna.com.pl/",
      btnText: "Chcę szkolenie!",
    },
  ]

  return (
    <>
      <ContentSection
        title="samych falach?"
        heading="Czujesz, że nadajemy na tych"
        description="Zobacz, w jaki sposób możemy współpracować."
        data={servicesData}
        actionButtonBoxes={true}
        headingTextStyle="text-adaTitle lg:text-adaTitle2 text-ada-grey"
      />
      <CooperationSection />
    </>
  )
}

export default Cooperation
