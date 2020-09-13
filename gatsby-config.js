const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Adrianna Promis Blog`,
    description: `Social Media i podcast Phrasówka`,
    author: `Adrianna Promis`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/podcast`,
        name: `podcast`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `32647039885`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-podcast-feed-mdx`,
    //   options: {
    //     title: `Phrasówka`,
    //     description: `Nazywam się Ada, a to jest mój podcast, w którym mówię o rzeczach najróżniejszych - często o marketingu, nieco o podróżach i trochę o pracy zdalnej. Jeśli chcesz poznać mój punkt widzenia, dowiedzieć się kilku ciekawostek albo po prostu posłuchać czegoś do kawusi - zapraszam!`,
    //     podcastType: `episodic`,
    //     siteUrl: `https://adrianna.getbold.agency/`,
    //     imageUrl: `https://podcastada.s3.eu-central-1.amazonaws.com/pic.png`,
    //     feedUrl: `https://adrianna.getbold.agency/pocast-rss-feed.xml`,
    //     language: `pl`,
    //     copyright: `Phrasówka`,
    //     authorName: `Adrianna Promis`,
    //     ownerName: `Adrianna Promis`,
    //     ownerEmail: `adrianna@getbold.agency`,
    //     managingEditor: `dawid@getbold.agency`,
    //     webMaster: `dawid@getbold.agency`,
    //     explicit: `no`,
    //     publicationDate: `Jun 25, 2020 10:00:00 GMT`,
    //     category1: `Business`,
    //     subCategory1: `Books`,
    //     category2: `Marketing`,
    //     timeToLive: `60`,
    //     outputPath: `/podcast-rss-feed.xml`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
