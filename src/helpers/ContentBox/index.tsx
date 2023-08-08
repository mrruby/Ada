import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button";

type ContentBoxProps = {
  title: string;
  description: JSX.Element;
  actionButton?: boolean;
  url?: string;
}

export const ContentBox: React.FC<ContentBoxProps> = ({ title, description, actionButton = false, url
}) => {
  return (
    <div className="bg-white mx-6 lg:max-w-[270px] flex flex-col items-center relative mt-[100px] pt-[58px] px-3">
      <div className="absolute top-[-90px]">
      <StaticImage src={"../../images/flower-blue.svg"} alt="Blue Flower Ada Promis" placeholder="none" width={150} height={150} />
      </div>
      <div className="text-center">
      <h3 className="font-semibold text-adaSubtitle border-b-[25px]	border-ada-light-pink h-[33px]">{title}</h3>
      <p className="text-adaBase pt-9 pb-[30px] leading-tight">{description}</p>
      </div>
      {actionButton && url  &&<Button type="button" text="Czytaj dalej..." url={url} border={true} textSize="lg:text-adaBase" />}
    </div>
  );
};
