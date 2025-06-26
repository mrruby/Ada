/// <reference types="react" />
/// <reference types="gatsby-plugin-image" />

// This file provides global type declarations to assist the TypeScript
// language service / ESLint in workspaces where the automatic type
// resolution sometimes fails (e.g. in editors).
// It does **not** change the runtime bundle in any way.

// -- fallback stubs -----------------------------------------------------------
// These declarations are only here to satisfy the editor/ESLint in the rare
// case when their own type resolution fails. They are *not* used by the real
// TypeScript compiler during `gatsby build`, because the proper typings exist
// in `node_modules`.  Keeping them minimal avoids any conflicts.

declare module "react" {
  import * as React from 'react'
  // Re-export everything to global namespace as well
  export = React
  export as namespace React

  // Add minimal commonly-used component / element / FC typings
  export type FC<P = Record<string, unknown>> = React.FunctionComponent<P>

  export namespace JSX {
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

declare module "gatsby-plugin-image" {
    // Minimal shape – just enough for TS / ESLint to accept JSX usage in the
  // code-base. If you need stronger typing, import the official types instead.
  export interface StaticImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    placeholder?: "blurred" | "dominantColor" | "tracedSVG" | "none"
    formats?: Array<"auto" | "webp" | "avif">
    quality?: number
  }
  export const StaticImage: React.FC<StaticImageProps>
  export const GatsbyImage: React.FC<any>
}