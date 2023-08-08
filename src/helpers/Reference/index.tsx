import React from "react"

type IReference = {
  reference: string;
  name: string;
  company: string;
}

const Reference = ({ reference, name, company }: IReference): JSX.Element => {
  return (
    <div className="flex flex-col mt-10 mb-14 text-center px-8 max-w-[1000px] m-auto bg-ada-light-pink">
      <p className="lg:text-adaSubtitle italic pt-[50px]">Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla {reference} </p>
      <h3 className="lg:text-adaSubtitle font-bold py-[20px]">{name}, {company} </h3>
    </div>
  );
};

export default Reference;
