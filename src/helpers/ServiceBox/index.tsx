import React from "react";
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  title: string;
  description: JSX.Element;
}

export const ServiceBox: React.FC<Props> = ({ title, description, 
}) => {
  return (
    <div className="bg-white max-w-[270px] flex flex-col items-center relative mt-[132px] pt-[58px]">
      <div className="absolute top-[-90px]">
      <StaticImage src={"../../images/flower-blue.svg"} alt="Blue Flower Ada Promis" placeholder="none" width={150} height={150} />
      </div>
      <div className="text-center">
      <h3 className="font-semibold text-adaSubtitle">{title}</h3>
      <p className="text-adaBase">{description}</p>
      </div>
    </div>
  );
};
