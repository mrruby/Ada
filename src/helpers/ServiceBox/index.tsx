import React from "react";
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  title: string;
  description: JSX.Element;
}

export const ServiceBox: React.FC<Props> = ({ title, description, 
}) => {
  return (
    <div className="bg-white max-w-[270px] flex flex-col items-center relative mt-[100px] pt-[58px] px-4">
      <div className="absolute top-[-90px]">
      <StaticImage src={"../../images/flower-blue.svg"} alt="Blue Flower Ada Promis" placeholder="none" width={150} height={150} />
      </div>
      <div className="text-center">
      <h3 className="font-semibold text-adaSubtitle border-b-[25px]	border-ada-light-pink h-[33px]">{title}</h3>
      <p className="text-adaBase pt-9 pb-[30px] leading-tight">{description}</p>
      </div>
    </div>
  );
};
