/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: require.resolve("html-loader"),
          options: {
            minimize: false,
          },
        },
      ],
    },
  })

  const config = getConfig()
  const miniCssExtractPlugin = config.plugins.find(
    (plugin) =>
      plugin && plugin.constructor && plugin.constructor.name === "MiniCssExtractPlugin"
  )

  if (miniCssExtractPlugin) {
    miniCssExtractPlugin.options.ignoreOrder = true
  }

  actions.replaceWebpackConfig(config)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: `/legal${slug}`,
    })
  }
}
