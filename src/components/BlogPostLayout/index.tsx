import React from "react";

type Props = {
  title: string;
  html: string;
  date: string;
  tags: string[];
}

const BlogPostLayout = ({ title, html, date, tags }: Props): JSX.Element => {
  const addStylesToElements = (htmlString: string) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString;

    const h2Elements = div.querySelectorAll("h2");
    const h3Elements = div.querySelectorAll("h3");
    const h4Elements = div.querySelectorAll("h4");
    const pElements = div.querySelectorAll("p");
    const listElements = div.querySelectorAll("ul, ol");
    const imgElements = div.querySelectorAll("img");

    h2Elements.forEach((h2) => {
      h2.classList.add("font-bold", "md:text-adaSubtitle", "py-3"); 
    });

    h3Elements.forEach((h3) => {
      h3.classList.add("font-bold", "py-3"); 
    });

    h4Elements.forEach((h4) => {
      h4.classList.add("font-bold", "py-3"); 
    });

    pElements.forEach((p) => {
      p.classList.add("py-2"); 
    });

    listElements.forEach((list) => {
      list.classList.add("list-disc", "pl-6", "pb-4"); 
    });

    imgElements.forEach((img) => {
      img.classList.add("pb-[20px]", "w-full", "h-full",  ); 
    });

    return div.innerHTML;
  };

  const sanitizedHtml = addStylesToElements(html);

  function formatDate(date:string) {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const dateObject = new Date(date);
    const formattedDate = dateObject.toLocaleDateString('en-UK', options).toUpperCase();
    return formattedDate.replace(/\//g, '.');
  }
  const formattedDate = formatDate(date)

  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-5 pb-10">
      <h1 className="font-bold text-adaSubtitle md:text-adaSubtitleSecondary pb-4 pt-6">{title}</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="font-bold text-adaNav text-ada-dark-pink pb-4">{tags.map((tag) => `#${tag} `).join("")}</p>       
        <p className="font-bold text-adaNav pb-[24px]">{formattedDate}</p>  
      </div>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </div>
  );
};

export default BlogPostLayout;
