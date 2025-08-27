// Minimal stub for Minimatch library types to satisfy TypeScript

declare module "minimatch" {
  export function Minimatch(pattern: string, options?: any): any
  export function match(
    list: string[],
    pattern: string | string[],
    options?: any
  ): string[]
  export function filter(
    pattern: string,
    options?: any
  ): (element: string) => boolean
  export function makeRe(pattern: string, options?: any): RegExp | false
}
