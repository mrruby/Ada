/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const fetch = require("node-fetch")
const { createFilePath } = require(`gatsby-source-filesystem`)
const RSS = require("rss")
const fs = require("fs-extra")

const pluginOptions = {
  title: `Phrasówka`,
  description: `Nazywam się Ada, a to jest mój podcast, w którym mówię o rzeczach najróżniejszych - często o marketingu, nieco o podróżach i trochę o pracy zdalnej. Jeśli chcesz poznać mój punkt widzenia, dowiedzieć się kilku ciekawostek albo po prostu posłuchać czegoś do kawusi - zapraszam!`,
  summary: `Nazywam się Ada, a to jest mój podcast, w którym mówię o rzeczach najróżniejszych - często o marketingu, nieco o podróżach i trochę o pracy zdalnej. Jeśli chcesz poznać mój punkt widzenia, dowiedzieć się kilku ciekawostek albo po prostu posłuchać czegoś do kawusi - zapraszam!`,
  podcastType: `episodic`,
  siteUrl: `https://adrianna.com.pl`,
  audioUrl: `https://podcastada.s3.eu-central-1.amazonaws.com`,
  imageUrl: `https://podcastada.s3.eu-central-1.amazonaws.com/pic.png`,
  feedUrl: `https://adrianna.getbold.agency/podcast-rss-feed.xml`,
  language: `pl`,
  copyright: `Phrasówka`,
  authorName: `Adrianna Promis`,
  ownerName: `Adrianna Promis`,
  ownerEmail: `adrianna@getbold.agency`,
  managingEditor: `dawid@getbold.agency`,
  webMaster: `dawid@getbold.agency`,
  explicit: `no`,
  publicationDate: `Jun 25, 2020 10:00:00 GMT`,
  category1: `Business`,
  subCategory1: `Marketing`,
  timeToLive: `60`,
  episodeType: `full`,
  outputPath: `/podcast-rss-feed.xml`,
}

function isPodcastOrBlog(name) {
  if (name.includes("podcast")) {
    return true
  }
  if (name.includes("blog")) {
    return false
  }
  throw Error()
}

const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: `/${
        isPodcastOrBlog(node.fileAbsolutePath) ? "podcast" : "blog"
      }${slug}`,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const podcastTemplate = path.resolve(`src/templates/podcast/podcast.tsx`)
  const blogTemplate = path.resolve(`src/templates/blog/blog.tsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: isPodcastOrBlog(node.fields.slug)
        ? podcastTemplate
        : blogTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onPostBuild = async ({ graphql }) => {
  // get the options for the podcast iteself
  const feedOptions = {
    title: pluginOptions.title,
    description: pluginOptions.description,
    site_url: pluginOptions.siteUrl,
    feed_url: pluginOptions.feedUrl,
    image_url: pluginOptions.imageUrl,
    language: pluginOptions.language,
    copyright: pluginOptions.copyright,
    docs: `https://help.apple.com/itc/podcasts_connect/#/itcb54353390`,
    author: pluginOptions.authorName,
    managingEditor: pluginOptions.managingEditor,
    webMaster: pluginOptions.webMaster,
    categories: [pluginOptions.category1, pluginOptions.category2],
    pubDate: pluginOptions.publicationDate,

    ttl: pluginOptions.timeToLive,
    generator: `https://github.com/miller-productions/gatsby-plugin-podcast-feed-mdx`,
    custom_namespaces: {
      itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
      googleplay: "http://www.google.com/schemas/play-podcasts/1.0",
    },
    custom_elements: [
      { "itunes:title": pluginOptions.title },
      { "itunes:summary": pluginOptions.summary.substring(0, 3999) },
      { "itunes:type": pluginOptions.podcastType },
      { "itunes:explicit": pluginOptions.explicit },
      { "itunes:author": pluginOptions.authorName },
      {
        "itunes:owner": [
          { "itunes:name": pluginOptions.ownerName },
          { "itunes:email": pluginOptions.ownerEmail },
        ],
      },
      {
        "itunes:image": {
          _attr: {
            href: pluginOptions.imageUrl,
          },
        },
      },
      {
        "itunes:category": [
          {
            _attr: {
              text: pluginOptions.category1,
            },
          },
          {
            "itunes:category": {
              _attr: {
                text: pluginOptions.subCategory1,
              },
            },
          },
        ],
      },
      { "googleplay:author": pluginOptions.authorName },
      { "googleplay:description": pluginOptions.summary.substring(0, 999) },
      { "googleplay:explicit": pluginOptions.explicit },
    ],
  }

  // create the rss feed
  const feed = new RSS(feedOptions)

  // get the options for the episodes
  const result = await wrapper(
    graphql(`
      query {
        allMarkdownRemark(
          filter: { fields: { slug: { regex: "/podcast/" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                season
                episodeNumber
                publicationDate
                explicit
                description
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  )
  const episodes = result.data.allMarkdownRemark.edges

  // for each episode
  for (const edge of episodes) {
    // gather the options
    const {
      fields: { slug },
    } = edge.node
    const {
      title,
      description,
      season,
      episodeNumber,
      publicationDate,
      explicit,
    } = edge.node.frontmatter

    const response = await fetch(
      pluginOptions.audioUrl + `/Podcast_${season}_${episodeNumber}.mp3`,
      { method: "head" }
    )

    const duration = response.headers.get("x-amz-meta-duration") || 0
    const size = response.headers.get("content-length")
    const type = response.headers.get("content-type")

    // add an episode item to the feed using the options
    feed.item({
      title,
      date: publicationDate,
      description,
      url: pluginOptions.siteUrl + slug,
      custom_elements: [
        { "itunes:title": title },
        season && { "itunes:season": season },
        episodeNumber && { "itunes:episode": episodeNumber },
        { "itunes:duration": duration },
        { "itunes:episodeType": pluginOptions.episodeType },
        { "itunes:explicit": explicit },
        { "itunes:summary": description },
        {
          "itunes:image": {
            _attr: {
              href: feedOptions.image_url,
            },
          },
        },
        { "googleplay:description": description },
        { "googleplay:explicit": explicit },
      ],
      enclosure: {
        url: pluginOptions.audioUrl + `/Podcast_${season}_${episodeNumber}.mp3`,
        size,
        type,
      },
    })
  }

  // write the rss out to a file
  const publicPath = `./public`
  const outputPath = path.join(publicPath, pluginOptions.outputPath)
  const outputDir = path.dirname(outputPath)
  if (!(await fs.exists(outputDir))) {
    await fs.mkdirp(outputDir)
  }
  await fs.writeFile(outputPath, feed.xml())
}
