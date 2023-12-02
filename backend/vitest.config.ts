import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // setupFiles: "tests/vitest.setup.ts",
    outputFile: "reports/rspec.xml",
    reporters: [process.env.CI ? "junit" : "default"],
    coverage: {
      reporter: ["text", "cobertura"],
    },
  },
});
