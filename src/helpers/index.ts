export const getTitlePath = (title: string): string =>
  title
    .trim()
    .replace(/-/gi, "")
    .replace(/\s+/g, "-")
    .replace(/[`~!@#$%^&*()_|+=?;:'",.<>{}[\]\\/]/gi, "")
    .toLowerCase()

export const isFutureDate = (value: string): boolean => {
  const d_now = new Date()
  const d_inp = new Date(value)
  return d_now.getTime() <= d_inp.getTime()
}
