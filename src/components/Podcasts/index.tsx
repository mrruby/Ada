import { Podcast } from "helpers/Podcast";
import React from "react";

type Podcast = {
  node: {
    frontmatter: {
      title: string
      description: string
      date: string
      thumbnail: string
      episodeNumber: number
      tags: string[]
    }
    fields: {
      slug: string
    }
  }
}

const Podcasts = ({ postsData }: { postsData: Podcast[] }): JSX.Element => {
  const formattedPostsData = postsData?.map((edge, index) => ({
    title: edge.node.frontmatter.title,
    description: edge.node.frontmatter.description,
    thumbnail: edge.node.frontmatter.thumbnail,
    slug: edge.node.fields.slug,
    isReversed: index % 2 === 0,
  }));

  return (
<div className="flex flex-col items-center pt-[70px]">
    <h1 className="px-4 text-adaTitle font-bold pb-8 {titleStyle}">Lista moich podcastów</h1>
      <div className="flex flex-col pb-5 md:pb-0">
         {formattedPostsData.map((item, index) => (
          <Podcast
            key={index}
            title={item.title}
            description={item.description}
            thumbnail={item.thumbnail}
            slug={item.slug}
            isReversed={item.isReversed}
          />
        ))}
    
    </div>
    </div>
  );
};

export default Podcasts;
