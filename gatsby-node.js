/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

function isPodcastOrBlog(name) {
  if (name.includes("podcast")) {
    return true
  }
  if (name.includes("blog")) {
    return false
  }
  throw Error()
}

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

  const podcastTemplate = path.resolve(`src/templates/podcast.tsx`)
  const blogTemplate = path.resolve(`src/templates/blog.tsx`)

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
