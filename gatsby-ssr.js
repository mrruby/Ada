/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")

exports.onRenderBody = ({ pathname, setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({
    lang: "pl-PL",
  })

  // Add crossorigin preconnect for font files (required for CORS font requests)
  const headComponents = [
    React.createElement("link", {
      key: "preconnect-gstatic",
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    }),
  ]

  if (pathname === "/magic" || pathname === "/magic/") {
    headComponents.push(
      React.createElement("link", {
        key: "preconnect-googleapis",
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      })
    )
  }

  setHeadComponents(headComponents)
}
