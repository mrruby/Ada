/**
 * Runtime environment for the server-side OTO modules (read from
 * `process.env` at call time). Tests override single values with
 * `vi.stubEnv`, which vitest resets after each test.
 */
const env = {
  OTO_TOKEN_SECRET: "test-token-secret",
  OTO_COOKIE_SECRET: "test-cookie-secret",
  STRIPE_SECRET_KEY: "sk_test_123",
  STRIPE_WYZWANIE_OTO_COUPON_ID: "coupon_test",
  OTO_WYZWANIE_EASY_CHECKOUT_URL: "https://checkout.example/easy",
  OTO_WYZWANIE_REGULAR_CHECKOUT_URL: "https://checkout.example/regular",
}

Object.assign(process.env, env)
// Never talk to a real blob store from unit tests.
delete process.env.NETLIFY_BLOBS_SITE_ID
delete process.env.NETLIFY_BLOBS_TOKEN
delete process.env.SITE_ID
delete process.env.NETLIFY_AUTH_TOKEN
