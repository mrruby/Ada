import React, { useState } from "react"
type AccordionProps = {
  question: string
  answer: string | React.JSX.Element
}

export const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className="xl:w-[550px]">
      <button
        className="flex cursor-pointer lg:text-adaBase font-bold p-4 items-center justify-between w-full text-center mx-auto shadow-lg"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <h2 className="text-left">{question}</h2>
        <svg
          className="fill-ada-blue shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden mt-2 mb-8 lg:text-adaDesc px-2 transition-all duration-300 ease-in-out ${
          accordionOpen ? "opacity-100" : "opacity-0 h-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}
