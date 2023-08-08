import React from "react"
import { Button } from "helpers/Button"


const NewsletterBanner = (): JSX.Element => {
  return (
    <div className="flex items-center flex-col pt-10 pb-14 text-center">
      <h2 className="text-adaSubtitle lg:text-adaTitle font-bold lg:mb-2 border-b-[20px] lg:border-b-[34px]	border-ada-light-pink h-[40px] lg:h-[60px]">Chcesz wiedzieć więcej?</h2>
      <h3 className="text-adaSubtitle lg:text-adaSubtitleSecondary font-bold text-ada-light-pink">Zapisz się na newsletter</h3>
      <div className="mt-[28px]">
        <Button type="button" text="Zapisuję się" border={true} url="https://metanewsletter.adrianna.com.pl"/>
      </div>
    </div>
  );
};

export default NewsletterBanner;
