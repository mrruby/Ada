import React from "react"
import { Button } from "helpers/Button"


const NewsletterBanner = (): JSX.Element => {
  return (
    <div className="flex items-center flex-col pt-10 pb-14 text-center">
      <h2 className="text-[22px] lg:text-adaTitle font-bold lg:mb-2 border-b-[14px] lg:border-b-[34px]	border-ada-light-pink h-[30px] lg:h-[60px]">Chcesz wiedzieć więcej o slow </h2>
      <h2 className="text-[22px] lg:text-adaTitle font-bold lg:mb-2 border-b-[14px] lg:border-b-[34px]	border-ada-light-pink  h-[30px] lg:h-[60px]">marketingu i reklamach?</h2>
      <h3 className="lg:text-adaSubtitle mt-[30px]">Zapisz się do newslettera i odbieraj maile z wiedzą.</h3>
      <div className="mt-[28px]">
        <Button type="button" text="Zapisuję się, zanim wyjdzie kolejny mail!" border={true} url="https://metanewsletter.adrianna.com.pl"/>
      </div>
    </div>
  );
};

export default NewsletterBanner;
