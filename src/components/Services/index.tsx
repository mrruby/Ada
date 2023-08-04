import React from "react";
import { ServiceBox } from "helpers/ServiceBox";

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
    <div className=" text-ada-blue flex flex-col items-center py-6 lg:pt-[68px] lg:pb-[150px]">
      <div className="px-6 flex flex-col items-center text-center">
        <h3 className="text-adaTitle lg:text-adaBig text-ada-grey font-bold lg:h-[58px]">W czym mogę Ci pomóc?</h3>
        <h2 className="text-adaTitle font-bold">Moje usługi</h2>
        <p className="text-adaBase py-8">Nie widzisz usługi dla siebie? Napisz do mnie!</p>
      </div>
      <div className="flex gap-4 lg:gap-[58px] flex-col md:flex-row">
    {servicesData.map((service, index) => (
          <ServiceBox key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;
