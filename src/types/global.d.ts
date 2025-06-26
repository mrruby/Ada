/// <reference types="react" />

// Minimal module declarations to satisfy the TypeScript compiler and ESLint

declare module "gatsby-plugin-image" {
  import * as React from "react"

  export interface StaticImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    placeholder?: "blurred" | "tracedSVG" | "dominantColor" | "none"
    width?: number
    height?: number
    formats?: ("auto" | "webp" | "avif" | string)[]
    quality?: number
    loading?: "eager" | "lazy"
  }

  export const StaticImage: React.FC<StaticImageProps>
}

// Fallback JSX IntrinsicElements declaration (helps when using custom SVG imports, etc.)
declare namespace JSX {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  interface IntrinsicElements {
    [elemName: string]: any
  }
}