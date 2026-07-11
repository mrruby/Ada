Object.assign(process.env, {
  NODE_ENV: "test",
  NETLIFY_BLOBS_SITE_ID: "offline-test-site",
  NETLIFY_BLOBS_TOKEN: "offline-test-token",
  OTO_COOKIE_SECRET: "offline-cookie-secret",
  OTO_TOKEN_SECRET: "offline-token-secret",
  OTO_WYZWANIE_EASY_CHECKOUT_URL:
    "https://checkout.example.test/oto?source=campaign",
  OTO_WYZWANIE_REGULAR_CHECKOUT_URL: "https://checkout.example.test/regular",
  STRIPE_SECRET_KEY: "sk_test_offline",
  STRIPE_WYZWANIE_OTO_COUPON_ID: "coupon_offline",
})
