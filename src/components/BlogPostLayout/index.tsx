import React from "react";
import ReactHtmlParser, { Transform } from "react-html-parser";
type Props = {
  title: string;
  html: string;
  date: string;
  tags: string[];
};
const BlogPostLayout = ({ title, html, date, tags }: Props): JSX.Element => {
  const transform: Transform = (node, index) => {
    if (node.type === 'tag') {
      switch (node.name) {
        case 'h2':
          return <h2 key={index} className="font-bold md:text-adaSubtitle py-3">{node.children[0].data}</h2>;
      case 'h3':
          return <h3 key={index} className="font-bold py-3 ">{node.children[0].data}</h3>;
      case 'h4':
          return <h4 key={index} className="font-bold py-3 ">{node.children[0].data}</h4>; 
      // case 'p':
      //       return <p key={index} className="py-2">{node.children[0].data}</p>;     
      // case 'img':
      //       return <img key={index} className="pb-[20px] w-fullh-full" src={node.children[0].data}></img>;      
      // case 'ol':
      //       return (
      //         <ol key={index} className="list-decimal pl-6 pb-4">
      //           {node.children.map((child, childIndex) => (
      //             <li key={childIndex}>{ReactHtmlParser(child.data)}</li>
      //           ))}
      //         </ol>
      //       );
      // case 'ul':
      //       return (
      //         <ol key={index} className="list-disc pl-6 pb-4">
      //           {node.children.map((child, childIndex) => (
      //             <ul key={childIndex}>{ReactHtmlParser(child.data)}</ul>
      //           ))}
      //         </ol>
      //       );      
      default:
          return;
      }
    }
  };

  const transformedHtml = ReactHtmlParser(html, { transform });
  const formattedDate = new Date(date)
    .toLocaleDateString("en-UK", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .toUpperCase()
    .replace(/\//g, ".");
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-5 pb-10">
      <h1 className="font-bold text-adaSubtitle md:text-adaSubtitleSecondary pb-4 pt-6">{title}</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="font-bold text-adaNav text-ada-dark-pink pb-4">{tags.map((tag) => `#${tag} `).join("")}</p>
        <p className="font-bold text-adaNav pb-[24px]">{formattedDate}</p>
      </div>
      <div>{transformedHtml}</div>
    </div>
  );
};
export default BlogPostLayout;
