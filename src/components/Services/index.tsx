import React from "react";
import ContentSection from "helpers/ContentSection";

const Services = (): JSX.Element => {
  const servicesData = [
    {
      title: "Meta Ads",
      description: (
        <>
          Zajmuję się strategią marketingową, mediami społecznościowymi i płatnymi reklamami. Podpowiem Ci, jak prowadzić <span className="font-bold italic">świadomy, kreatywny marketing </span> dla Twojego biznesu.
        </>
      ),
    },
    {
      title: "Konsultacje",
      description: (
        <>
          Zajmuję się strategią marketingową, mediami społecznościowymi i płatnymi reklamami. Podpowiem Ci, jak prowadzić <span className="font-bold italic">świadomy, kreatywny marketing </span>dla Twojego biznesu.
        </>
      ),
    },
    {
      title: "Inne",
      description: (
        <>
          Zajmuję się strategią marketingową, mediami społecznościowymi i płatnymi reklamami. Podpowiem Ci, jak prowadzić <span className="font-bold italic">świadomy, kreatywny marketing </span> dla Twojego biznesu.
        </>
      ),
    },
  ];

  return (
    <ContentSection
      title="Moje usługi"
      heading="W czym mogę Ci pomóc?"
      description="Nie widzisz usługi dla siebie? Napisz do mnie!"
      data={servicesData}
      actionButtonBoxes={false}
    />
  );
};

export default Services;
