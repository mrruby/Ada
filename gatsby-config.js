const path = require("path")

module.exports = {
  siteMetadata: {
    title: `adrianna.com.pl`,
    description: `Social Media i podcast Phrasówka`,
    author: `Adrianna Promis`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "187660469934129'",
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `adrianna-1`,
      },
    },
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
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-scroll-reveal`,
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
        icon: `src/images/logo.webp`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `wypadaniewypada`,
        access_token: `EAAW5FFpOFsgBALsWhcjnvnZBosg2XevH0i0FEfHWJKLXnBJXDZCzSLZA7KdWldfJryIqg8Y0ZA4Ln5WAsDIiO84LD4oRubLf26Ikclqj6DHYCGP3j2oPiPeYZCw38f3o8FZCykYkC6t0eHZB1kWJ7BdnjVSOXkxta1I2SHcvxoRIFwv6TmAqtPOiZCf5dIUTBkSHZCF3ZBUORTBQZDZD`,
        instagram_id: `17841441545804570`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-8LX78J4XMN"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
