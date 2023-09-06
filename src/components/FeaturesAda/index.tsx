import React from "react";
import { FeatureBox } from "helpers/FeatureBox";

const FeaturesAda = (): JSX.Element => {
  const featuresData = [
    {
      text: "ODKRYWCZOŚĆ",
    },
    {
      text: "STRATEG",
    },
    {
      text: "INDYWIDUALIZACJA",
    },
    {
      text: "ZBIERANIE",
    },
    {
      text: "NAPRAWIANIE",
    },
  ];

  return (
    <div className=" text-ada-blue flex gap-[80px] flex-col md:flex-row items-center justify-center pb-[24px]">
    {featuresData.map((feature, index) => (
          <FeatureBox key={index} text={feature.text}  />
        ))}
    </div>
  );
};

export default FeaturesAda;
