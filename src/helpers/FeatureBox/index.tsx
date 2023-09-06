import React from "react";
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  text: string;
}

export const FeatureBox: React.FC<Props> = ({ text, 
}) => {
  return (
    <div className="flex flex-col items-center pt-[-30px]">
      <div className="animate-spin-slow mb-[-10px]">
      <StaticImage src={"../../images/flower-white-pink.svg"} alt="Blue Flower Ada Promis" placeholder="none" width={150} height={150} />
      </div>
      <p className="lg:text-adaDesc max-w-[240px] text-center pt-[-10px] leading-snug font-bold">{text}</p>
    </div>
  );
};
