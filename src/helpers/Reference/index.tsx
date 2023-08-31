import React from "react"

type IReference = {
  reference: string;
  name: string;
  company?: string;
}

const Reference = ({ reference, name, company }: IReference): JSX.Element => {
  return (
    <div className="flex flex-col mt-2 mb-14 text-center px-[24px] m-auto justify-center">
      <p className="lg:text-adaBase pt-[50px]">{reference} </p>
      <h3 className="lg:text-adaSubtitle max-w-[1080px] mx-auto font-bold my-[20px] border-b-[25px] border-ada-light-pink h-[38px]">{name} <span className="font-medium">{company}</span> </h3>
    </div>
  );
};

export default Reference;
