import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["html", "text"],
      provider: "v8",
    },
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
    setupFiles: "./setup.ts",
    include: ["**/?(*.){test,spec}.?(c|m)[jt]s?(x)"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
