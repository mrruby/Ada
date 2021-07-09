const path = require("path")

module.exports = {
  siteMetadata: {
    title: `adrianna.com.pl`,
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
        username: `wypadaniewypada`,
        access_token: `EAAW5FFpOFsgBAH2L10L5bC1o8be85hgjCNDgEjk4jTiURB6kE565ZB4RjBfeAyfsPZAIScHERcONBUebcxoo9bRhV27SGCrwWOKu3IHrGaeQtJZCaRQCTZCAMtMTaO2uk6IXIBnTxczmDrRHhN1W0aZBrjULFK9JYI9CIDpM61SbmZCtZCPJvkW7wJXDfsZCRdoZD`,
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
