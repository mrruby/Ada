import * as React from "react"

declare global {
  namespace JSX {
    // The Element type is used in many component return annotations
    // Map it to React's ReactElement for compatibility.
    export type Element = React.ReactElement<any, any>
  }
}

export { }
