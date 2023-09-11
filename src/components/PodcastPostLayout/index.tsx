import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  title: string;
  description: string;
  markdown: string;
};

const PodcastPostLayout = ({ title, description, markdown }: Props): JSX.Element => {
    const components = {
      h2: ({ children }: { children: any }) => (
        <h2 className="font-bold md:text-adaSubtitle py-3">{children}</h2>
      ),
      h3: ({ children }: { children: any }) => (
        <h3 className="font-bold py-3">{children}</h3>
      ),
      h4: ({ children }: { children: any }) => (
        <h4 className="font-bold py-3">{children}</h4>
      ),
      ul: ({ children }: { children: any }) => (
        <ul className="list-disc pl-6 pb-4">{children}</ul>
      ),
      ol: ({ children }: { children: any }) => (
        <ol className="list-decimal pl-6 pb-4">{children}</ol>
      ),
      p: ({ children }: { children: any }) => (
        <p className="pb-4">{children}</p>
      ),
    };

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
