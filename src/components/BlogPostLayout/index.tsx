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
      h2: ({ ...props }) => (
        <h2 className="font-bold md:text-adaSubtitle py-3" {...props} />
      ),
      h3: ({ ...props }) => <h3 className="font-bold py-3" {...props} />,
      h4: ({ ...props }) => <h4 className="font-bold py-3" {...props} />,
      ul: ({ ...props }) => <ul className="list-disc pl-6 pb-4" {...props} />,
      ol: ({ ...props }) => <ol className="list-decimal pl-6 pb-4" {...props} />,
      p: ({ ...props }) => <p className="pb-4" {...props} />,
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
