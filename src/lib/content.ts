import type { ImageMetadata } from "astro"

/**
 * Shared content shapes for data-driven sections. Rich text fields are
 * trusted HTML strings (authored in src/data), rendered with `set:html`.
 */
export type RichText = string

export type FaqItem = {
  question: string
  answer: RichText
}

export type ImageItem = {
  src: ImageMetadata
  alt: string
}

export type VideoItem = {
  provider?: "vimeo" | "youtube"
  id: string
  title: string
  /** Optimized local image or a remote URL; defaults to the provider thumbnail. */
  poster?: ImageMetadata | string
}

export type LinkItem = {
  label: string
  href: string
}

/** A person shown in a team section (bio copy differs per page). */
export type TeamMember = {
  /** Full name, e.g. "Adrianna Promis-Urbas". */
  name: string
  role?: string
  bio?: RichText
  photo: ImageMetadata
  /** Defaults to `name`. */
  alt?: string
}
