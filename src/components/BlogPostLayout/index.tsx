import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  title: string;
  markdown: string;
  date: string;
  tags: string[];
};

const BlogPostLayout = ({ title, markdown, date, tags }: Props): JSX.Element => {
  const formattedDate = new Date(date)
    .toLocaleDateString("en-UK", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .toUpperCase()
    .replace(/\//g, ".");

    const components = {
      h2: ({ children }: { children: any }) => (
        <h2 className="font-bold md:text-adaSubtitle py-3">{children}</h2>
      ),
      h3: ({ children }: { children: any }) => (
        <h3 className="font-bold py-3 ">{children}</h3>
      ),
      h4: ({ children }: { children: any }) => (
        <h4 className="font-bold py-3 ">{children}</h4>
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
    <div className="w-6xl max-w-[920px] mx-auto px-3 lg:px-5 pb-10">
      <h1 className="font-bold text-adaSubtitle md:text-adaSubtitleSecondary pb-4 pt-6">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="font-bold text-adaNav text-ada-dark-pink pb-4">
          {tags.map((tag) => `#${tag} `).join("")}
        </p>
        <p className="font-bold text-adaNav pb-[24px]">{formattedDate}</p>
      </div>
      <ReactMarkdown components={components} children={markdown}></ReactMarkdown>  
    </div>
  );
};

export default BlogPostLayout;
