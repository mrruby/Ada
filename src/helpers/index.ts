export const isFutureDate = (value: string): boolean => {
  const d_now = new Date()
  const d_inp = new Date(value)
  return d_now.getTime() <= d_inp.getTime()
}

export const siteName = "https://adrianna.com.pl"
