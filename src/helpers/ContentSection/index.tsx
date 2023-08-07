import React from "react";
import { ContentBox } from "helpers/ContentBox";

type ContentBoxProps = {
  title: string;
  description: JSX.Element;
  url?: string;
  actionButton?: boolean
}

type ContentSectionProps = {
  title: string;
  heading: string;
  description?: string;
  data: ContentBoxProps[];
  actionButtonBoxes: boolean;
};

const ContentSection: React.FC<ContentSectionProps> = ({ title, heading, description, data, actionButtonBoxes  }) => {
  return (
    <div className=" text-ada-blue flex flex-col items-center py-6 lg:pt-[68px] lg:pb-[150px]">
      <div className="px-6 flex flex-col items-center text-center">
        <h3 className="text-adaTitle lg:text-adaBig text-ada-grey font-bold lg:h-[58px]">{heading}</h3>
        <h2 className="text-adaTitle font-bold">{title}</h2>
        {description && <p className="text-adaBase py-8">{description}</p>}
      </div>
      <div className="flex gap-4 lg:gap-[58px] flex-col md:flex-row">
      {actionButtonBoxes ? 
            data.map((item, index) => (
              <ContentBox
                key={index}
                title={item.title}
                description={item.description}
                url={item.url}
                actionButton={true}
              />
            ))
          : 
            data.map((item, index) => (
              <ContentBox
                key={index}
                title={item.title}
                description={item.description}
                actionButton={false}
              />
            ))}
      </div>
    </div>
  );
};

export default ContentSection;
