export const getTitlePath = (title: string): string =>
  title.replace(/\s+/g, "-").toLowerCase()
