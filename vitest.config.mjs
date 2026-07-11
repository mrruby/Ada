import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "node",
    setupFiles: ["./src/server/oto/__tests__/setup.ts"],
  },
})
