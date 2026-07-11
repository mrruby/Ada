export class PageSpecNotFoundError extends Error {
  constructor(path: string) {
    super(`No PageSpec is registered for ${path}`)
    this.name = "PageSpecNotFoundError"
  }
}
