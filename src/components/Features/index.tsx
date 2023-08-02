import React from "react";
import { FeatureBox } from "helpers/FeatureBox";

const Features = (): JSX.Element => {
  const featuresData = [
    {
      text: "Lorem ipsum dolor sit amet",
    },
    {
      text: "Lorem ipsum dolor sit amet",
    },
    {
      text: "Lorem ipsum dolor sit amet",
    },
    {
      text: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <div className=" text-ada-blue flex gap-[48px] flex-col lg:flex-row items-center justify-center pb-[32px]">
    {featuresData.map((feature, index) => (
          <FeatureBox key={index} text={feature.text}  />
        ))}
    </div>
  );
};

export default Features;
