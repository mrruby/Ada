export const getTitlePath = (title: string): string =>
  title
    .trim()
    .replace(/-/gi, "")
    .replace(/\s+/g, "-")
    .replace(/[`~!@#$%^&*()_|+=?;:'",.<>{}[\]\\/]/gi, "")
    .toLowerCase()
