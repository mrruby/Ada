/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({
    lang: "pl-PL",
  })

  setHeadComponents([
    // Preconnect hints for faster resource loading
    React.createElement("link", {
      key: "preconnect-google-fonts",
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    }),
    React.createElement("link", {
      key: "preconnect-gstatic",
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    }),
    // Font stylesheets (display=swap handles FOUT)
    React.createElement("link", {
      key: "font-montserrat",
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800&display=swap",
    }),
    React.createElement("link", {
      key: "font-lemon",
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lemon&display=swap",
    }),
    React.createElement("link", {
      key: "font-courier-prime",
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    }),
    React.createElement("link", {
      key: "font-anton",
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Anton&display=swap",
    }),
    React.createElement("link", {
      key: "font-annie",
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap",
    }),
    React.createElement("link", {
      key: "font-eagle-lake",
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Eagle+Lake&display=swap",
    }),
  ])
}
