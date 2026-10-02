/** Site-wide settings shared by layouts, SEO and navigation. */
export const site = {
  url: "https://adrianna.com.pl",
  name: "Adrianna Promis Urbas - zbuduj ze mną dochodowe kampanie reklamowe",
  description:
    "Pracuję z biznesami, które dbają o dobrostan psychiczny i fizyczny: praktykuję slow marketing, przemyślany, wartościowy, zbudowany na relacjach",
  author: "Adrianna Promis",
  locale: "pl-PL",
  themeColor: "#EEDCF6",
  defaultOgImage: "/img/og_mastermind.webp",
  facebookDomainVerification: "lghw23ob63nz7oal7ll1jo6ys8txt3",
} as const

/** Shared OG image used by most Magic / campaign pages. */
export const OG_ADA_PURPLE = "/img/ada_purple.webp"

export type NavItem = {
  label: string
  href?: string
  children?: { label: string; href: string }[]
}

export const shopUrl = "https://sklep.adrianna.com.pl/"

export const mainNav: NavItem[] = [
  { label: "sklep", href: shopUrl },
  {
    label: "mentoring",
    children: [
      { label: "dla specjalistek", href: "/meta-ads-mentoring" },
      { label: "dla biznesu", href: "/ogarnij-swoje-adsy/" },
    ],
  },
  { label: "o mnie", href: "/about" },
  { label: "kontakt", href: "/contact" },
]

export const footerNav: NavItem[] = [
  { label: "sklep", href: shopUrl },
  { label: "o mnie", href: "/about" },
  { label: "kontakt", href: "/contact" },
]

export const social = {
  instagram: "https://www.instagram.com/adapromis/",
  facebook: "https://www.facebook.com/WypadaNieWypada",
} as const

/**
 * Tracking IDs. Scripts load only after the visitor consents (see
 * components/site/CookieConsent.astro). Cookie names are kept from the
 * previous site so existing consent choices remain valid.
 */
export const analytics = {
  googleAnalytics: {
    id: "G-8LX78J4XMN",
    consentCookie: "gatsby-gdpr-google-analytics",
  },
  googleTagManager: {
    id: "GTM-TC7CLB2",
    consentCookie: "gatsby-gdpr-google-tagmanager",
    dataLayerName: "dataLayer",
  },
  facebookPixel: {
    id: "187660469934129",
    consentCookie: "gatsby-gdpr-facebook-pixel",
  },
} as const
