import React from "react";
import { BlogPost } from "helpers/BlogPost";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type Blog = {
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

const BlogPosts = ({ postsData }: { postsData: Blog[] }): JSX.Element => {
  const formattedPostsData = postsData?.map((edge) => ({
    title: edge.node.frontmatter.title,
    tags: edge.node.frontmatter.tags,
    date: edge.node.frontmatter.date,
    thumbnail: edge.node.frontmatter.thumbnail,
    slug: edge.node.fields.slug,
  }));

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 3 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const CustomDot = ({ onClick, ...rest }:any) => {
    const { index, active } = rest;

    return (
      <button
      className={`custom-dot ${
        active ? "active text-ada-pink" : "inactive"
      } py-[2px] font-bold bg-ada-light-pink top-[200px] hidden md:block px-[20px]
      }`}
        onClick={() => onClick()}
      >
        {index + 1}
      </button>
    );
  };
  
  return (
    <div className="py-6 lg:pt-[68px] lg:pb-[40px]" id="posts" >
      <div className="text-ada-blue flex flex-col items-center " >
      <div className="flex flex-col items-center text-center">
        <p className="font-bold lg:h-[58px] text-adaTitle lg:text-adaBig text-ada-grey">Co nowego</p>
        <h2 className="px-6 text-adaTitle font-bold">na blogu?</h2>
        <p className="text-adaBase py-8">bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
      </div>
    </div>
    <Carousel
          responsive={responsive}
          infinite={false}
          ssr={true}
          showDots={true}
          containerClass={"max-w-[1100px] mx-auto"}
          customDot={<CustomDot />}
        >
        {formattedPostsData.map((item, index) => (
          <BlogPost
            key={index}
            title={item.title}
            tags={item.tags}
            date={item.date}
            thumbnail={item.thumbnail}
            slug={item.slug}
          />
        ))}
    </Carousel>    
    </div>
  );
};

export default BlogPosts;
