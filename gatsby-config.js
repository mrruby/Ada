const path = require("path")
const adapter = require("gatsby-adapter-netlify").default

module.exports = {
  siteMetadata: {
    title: `Adrianna Promis Urbas - zbuduj ze mną dochodowe kampanie reklamowe`,
    description: `Pracuję z biznesami, które dbają o dobrostan psychiczny i fizyczny: praktykuję slow marketing, przemyślany, wartościowy, zbudowany na relacjach`,
    author: `Adrianna Promis`,
  },
  adapter: adapter(),
  plugins: [
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `legal`,
        path: `${__dirname}/src/values/legal`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
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

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ada Promis`,
        icon: `src/images/logo.webp`,
        short_name: `Zajmuję się strategią marketingową.`,
        start_url: `/`,
        background_color: "#FFFFFF",
        theme_color: "#EEDCF6",
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-8LX78J4XMN",
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true,
        },
        googleTagManager: {
          trackingId: "GTM-TC7CLB2",
          cookieName: "gatsby-gdpr-google-tagmanager",
          dataLayerName: "dataLayer",
        },
        facebookPixel: {
          pixelId: "187660469934129",
          cookieName: "gatsby-gdpr-facebook-pixel",
        },
        environments: ["production", "development"],
      },
    },
  ],
}
