export const getTitlePath = (title: string): string =>
  title
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, "")
    .toLowerCase()
