/**
 * /magic-jesien A/B split (Netlify Edge Function, runs before the CDN cache).
 * Variant A passes through; variant B is a rewrite to the static
 * /magic-jesien-b/ page, so the URL, referrer and UTM parameters stay those
 * of /magic-jesien/. Assignment rules: src/lib/experiments.ts.
 */
import {
  assignVariant,
  dailySeed,
  EXPERIMENT_COOKIE_MAX_AGE_SECONDS,
  MAGIC_JESIEN_EXPERIMENT as experiment,
  seededRandom,
} from "../../src/lib/experiments.ts"

/** The part of Netlify's edge `Context` this function uses. */
export type EdgeContext = {
  ip?: string
  cookies: {
    set: (cookie: {
      name: string
      value: string
      path: string
      maxAge: number
      sameSite: "Lax"
      secure: boolean
    }) => void
    delete: (cookie: { name: string; path: string }) => void
  }
  next: () => Promise<Response>
}

export default async (request: Request, context: EdgeContext) => {
  const url = new URL(request.url)
  // One URL for both variants (B would otherwise stay on the slashless one).
  if (!url.pathname.endsWith("/")) {
    url.pathname += "/"
    return Response.redirect(url, 301)
  }

  const userAgent = request.headers.get("user-agent") ?? ""
  const { variant, cookie } = assignVariant(experiment, {
    cookieHeader: request.headers.get("cookie") ?? "",
    search: url.search,
    userAgent,
    random: context.ip
      ? await seededRandom(dailySeed(experiment, context.ip, userAgent, new Date()))
      : Math.random(),
  })

  if (cookie === "set") {
    context.cookies.set({
      name: experiment.cookie,
      value: variant,
      path: "/",
      maxAge: EXPERIMENT_COOKIE_MAX_AGE_SECONDS,
      sameSite: "Lax",
      secure: url.protocol === "https:",
    })
  }
  if (cookie === "delete") context.cookies.delete({ name: experiment.cookie, path: "/" })

  return variant === "b" ? new URL(`${experiment.pages.b}${url.search}`, url) : context.next()
}

export const config = { path: ["/magic-jesien", "/magic-jesien/"] }
