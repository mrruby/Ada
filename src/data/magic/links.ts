/** Anchor of the offer/sign-up section every Magic CTA scrolls to. */
export const MAGIC_PACKAGE_ID = "magic-package"
export const MAGIC_PACKAGE_HREF = `#${MAGIC_PACKAGE_ID}`

export const magicLinks = {
  /** easy.tools checkout for the monthly package on /magic. */
  clubCheckout: "https://cart.easy.tools/checkout/81632369/klub-magic?lang=pl",
  /** easy.tools subscription checkout (/magic-special plans, results CTA). */
  subscriptionCheckout: "https://cart.easy.tools/checkout/81632369/magic-subskrypcja",
  /** Free 30-minute call with Nicola (Google Calendar booking page). */
  nicolaCalendar:
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2R36p86iZGPSsdhYrFdXIzDLsNY1t1QDgYSXS4aHyeqhQTgNOzE_gqZTnzjq0eaNVYtOMgNwpS",
  instagramClub: "https://www.instagram.com/klub.magic/",
  instagramAda: "https://www.instagram.com/adapromis/",
} as const

/** Deadline of the waiting-list offer shown in the /magic sticky bar. */
export const MAGIC_OFFER_DEADLINE = "2026-09-17T18:00:00+02:00"
