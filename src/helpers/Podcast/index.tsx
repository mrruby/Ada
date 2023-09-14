import React from "react";
import { Button } from "helpers/Button";
import { Link } from "gatsby";

type PodcastProps = {
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
  isReversed?: boolean;
}

export const Podcast: React.FC<PodcastProps> = ({ title, description,thumbnail, slug, isReversed = false
}) => {

  const flexDirectionClass = isReversed ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <div className="mx-6 flex flex-col items-center justify-between relative mt-[24px] pt-[30px] lg:pb-[20px]" >
      <div className={`flex flex-col md:flex-row text-center gap-6 ${flexDirectionClass}`}>
        <div className="lg:w-[600px] flex flex-col max-h-[500px] justify-center">
          <h3 className="font-semibold text-adaSubtitle
          pb-[24px]">{title}</h3>
          <p className="md:text-adaBase pb-6 px-2">{description}</p>
          <Button type="button" text="Posłuchaj..." url={slug} border={true} textSize="lg:text-adaBase" />
        </div>
        <Link to={slug}>
        <div className="flex max-h-[320px] max-w-[240px] md:max-h-[500px] md:max-w-[500px] mx-auto mb-[16px] md:mb-[32px] transition-transform duration-500 ease-in-out transform hover:scale-110">
        <img
          src={thumbnail}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        </div>
        </Link>
      </div>
    </div>
  );
};
