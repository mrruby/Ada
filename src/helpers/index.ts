export const getTitlePath = (title: string): string =>
  title.trim().replace("#", "").replace(/\s+/g, "-").toLowerCase()
