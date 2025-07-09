/// <reference types="react" />
/// <reference types="react-dom" />

// This file ensures the global JSX namespace is picked up by the TypeScript compiler.
// Without it, some editors / linters may show “JSX element implicitly has type 'any'…”
// errors even though the project already depends on @types/react.
//
// It re-exports the existing React JSX definitions so we don’t loosen the type safety.
// No runtime code is generated – this file is used purely for type information.

import type * as React from "react";

declare global {
  // Extend the global JSX namespace with React’s own definitions
  // so that <div />, <p /> and other intrinsic elements are properly typed.
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Element extends React.JSX.Element {}
  }
}