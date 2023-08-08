import React from "react";
import { Button } from "helpers/Button";

type ContentBoxProps = {
  title: string;
  image?: JSX.Element;
  buttonText: string;
  url: string;
}

export const ProductBox: React.FC<ContentBoxProps> = ({ title, image, buttonText, url
}) => {
  return (
    <div className="bg-white w-full lg:min-w-[582px] flex flex-col items-start relative pt-[80px] pb-10 px-4 lg:px-[74px] z-10">
     <div className="lg:absolute top-[-50px] right-0 max-w-[340px] z-0">
      {image}
     </div>
      <div className="flex flex-col gap-8">
        <h3 className="font-semibold text-adaSubtitleSecondary italic max-w-[315px] leading-tight">{title}</h3>
        <Button type="button" text={buttonText} url={url} border={true}/>
      </div>
    </div>
  );
};
