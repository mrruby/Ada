declare namespace JSX {
  // Allow any intrinsic element so TSX doesn't complain about unknown tags
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

declare module "react" {
  // Minimal React typings required for the project to compile without @types/react
  const React: any
  export default React
  export type ReactNode = any
}

declare module "gatsby-plugin-image" {
  export const StaticImage: any
  export const GatsbyImage: any
}