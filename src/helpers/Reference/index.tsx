import React from "react"

type IReference = {
  reference: string;
  name: string;
  company?: string;
}

const Reference = ({ reference, name, company }: IReference): JSX.Element => {
  return (
    <div className="flex flex-col mt-10 mb-14 text-center max-w-[1080px] m-auto justify-center">
      <p className="lg:text-adaSubtitle pt-[50px]">{reference} </p>
      <h3 className="lg:text-adaSubtitle max-w-[760px] px-8 mx-auto font-bold my-[20px] border-b-[25px] border-ada-light-pink h-[38px]">{name} <span className="font-medium">{company}</span> </h3>
    </div>
  );
};

export default Reference;
