import React from "react";
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  text: string;
}

export const FeatureBox: React.FC<Props> = ({ text, 
}) => {
  return (
    <div className="flex flex-col items-center pt-[-30px]">
      <StaticImage src={"../../images/flower-white.svg"} alt="Blue Flower Ada Promis" placeholder="none" width={150} height={150} />
      <p className="lg:text-adaBase max-w-[230px] text-center pt-[-10px] leading-snug">{text}</p>
    </div>
  );
};
