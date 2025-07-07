declare namespace JSX {
  // Allows all intrinsic elements and attributes to have any type.
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  interface IntrinsicAttributes {
    [attrName: string]: any;
  }
  type Element = any;
  interface ElementClass {
    render?: any;
  }
  interface ElementChildrenAttribute {
    children: any;
  }
}

// Minimal stub for React types to satisfy TS compiler when @types/react is unavailable.
declare module "react" {
  export interface FC<P = {}> {
    (props: P): ReactElement | null;
  }
  export interface ReactElement<P = any, T = any> {
    type: T;
    props: P;
    key: string | number | null;
  }
  export type ComponentType<P = {}> = (props: P) => ReactElement | null;
  export const Fragment: ComponentType<{ children?: any }>
  export const createElement: <P>(
    type: ComponentType<P> | string,
    props?: P | null,
    ...children: any[]
  ) => ReactElement<P>;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Component<P = {}, S = {}> {}
  const React: {
    createElement: typeof createElement
    Fragment: typeof Fragment
  }
  export default React;
}

// Minimal stub for gatsby-plugin-image StaticImage component.
declare module "gatsby-plugin-image" {
  import { ComponentType } from "react";

  export interface StaticImageProps {
    src: string
    alt: string
    width?: number | string
    height?: number | string
    placeholder?: "blurred" | "dominantColor" | "tracedSVG" | "none"
    quality?: number
    formats?: Array<"auto" | "webp" | "avif">
    style?: any
    className?: string
  }

  export const StaticImage: ComponentType<StaticImageProps>
}