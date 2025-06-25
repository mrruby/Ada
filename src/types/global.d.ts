// Global stub declarations to silence missing type errors during build times.

// React is provided via @types/react, but to ensure IDE picks it up even if node_modules are missing
declare module "react" {
  const React: any
  export = React
}

// Basic stub for gatsby-plugin-image when package types are unavailable
declare module "gatsby-plugin-image" {
    export interface StaticImageProps {
    src: string
    alt: string
    placeholder?: "blurred" | "dominantColor" | "tracedSVG" | "none"
    width?: number
    height?: number
    formats?: Array<"auto" | "webp" | "avif" | "png" | "jpg">
    quality?: number
    loading?: "eager" | "lazy"
  }
  export const StaticImage: React.ComponentType<StaticImageProps>
}

// Fallback for any custom JSX elements to avoid IntrinsicElements errors.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}