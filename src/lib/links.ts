/** True for links that must render as a plain anchor to another origin. */
export const isExternal = (href: string): boolean => /^https?:\/\//.test(href)

/** Props for anchors that open in a new tab safely. */
export const newTabProps = { target: "_blank", rel: "noopener noreferrer" } as const
