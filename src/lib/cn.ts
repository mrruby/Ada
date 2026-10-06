import { extendTailwindMerge } from "tailwind-merge"

type ClassValue = string | false | null | undefined | 0 | ClassValue[]

const twMerge = extendTailwindMerge({
  extend: {
    // Decorative `bg-art-*` utilities (styles/decor.css) set background
    // images, so they must not override a background color next to them.
    classGroups: {
      "bg-image": [{ "bg-art": [() => true] }],
    },
  },
  override: {
    // Tailwind 4 font sizes respect an explicit `leading-*`, so a later
    // `text-*` must not drop it (tailwind-merge assumes v3 behavior).
    conflictingClassGroups: { "font-size": [] },
  },
})

const flatten = (values: ClassValue[]): string[] =>
  values.flatMap((value) => (Array.isArray(value) ? flatten(value) : value ? [value] : []))

/**
 * Join class names and resolve Tailwind conflicts (later classes win), so
 * components can expose a `class` prop that safely overrides their defaults.
 */
export const cn = (...values: ClassValue[]): string => twMerge(flatten(values).join(" "))
