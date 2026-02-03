/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")

const fontStylesheets = [
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800&display=swap",
  "https://fonts.googleapis.com/css2?family=Lemon&display=swap",
  "https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  "https://fonts.googleapis.com/css2?family=Anton&display=swap",
  "https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap",
  "https://fonts.googleapis.com/css2?family=Eagle+Lake&display=swap",
]

const buildFontNoscript = () =>
  fontStylesheets
    .map((href) => `<link rel="stylesheet" href="${href}">`)
    .join("")

const fontLoaderScript = `
(function() {
  var links = ${JSON.stringify(fontStylesheets)};
  var load = function() {
    links.forEach(function(href) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });
  };
  if ('requestIdleCallback' in window) {
    requestIdleCallback(load);
  } else {
    setTimeout(load, 0);
  }
})();
`

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({
    lang: "pl-PL",
  })

  const headComponents = [
    React.createElement("link", {
      key: "preconnect-googleapis",
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    }),
    React.createElement("link", {
      key: "preconnect-gstatic",
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    }),
    ...fontStylesheets.map((href, index) =>
      React.createElement("link", {
        key: `font-preload-${index}`,
        rel: "preload",
        as: "style",
        href,
      })
    ),
    React.createElement("script", {
      key: "font-loader",
      dangerouslySetInnerHTML: { __html: fontLoaderScript },
    }),
    React.createElement("noscript", {
      key: "font-noscript",
      dangerouslySetInnerHTML: { __html: buildFontNoscript() },
    }),
  ]

  setHeadComponents(headComponents)
}
