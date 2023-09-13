import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  title: string;
  description: string;
  markdown: string;
};

const PodcastPostLayout = ({ title, description, markdown }: Props): JSX.Element => {
  const components = {
    h2: ({ ...props }) => (
      <h2 className="font-bold md:text-adaSubtitle py-3" {...props} />
    ),
    h3: ({ ...props }) => <h3 className="font-bold py-3" {...props} />,
    h4: ({ ...props }) => <h4 className="font-bold py-3" {...props} />,
    ul: ({ ...props }) => <ul className="list-disc pl-6 pb-4" {...props} />,
    ol: ({ ...props }) => <ol className="list-decimal pl-6 pb-4" {...props} />,
    p: ({ ...props }) => <p className="pb-4" {...props} />,
  }

  return (
    <div className="pt-4  pb-10">
      <h1 className="font-bold text-adaSubtitle md:text-adaSubtitleSecondary pb-4 pt-6">
        {title}
      </h1>
      <p className="font-bold py-4">{description}</p>
      <h2 className="font-bold py-3 md:text-adaSubtitle">Transkrypcja: </h2>
      <ReactMarkdown components={components} children={markdown}></ReactMarkdown>  
    </div>
  );
};

export default PodcastPostLayout;
