await import("./src/env.mjs");
import path from "node:path";

import NextBundleAnalyzer from "@next/bundle-analyzer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import("next").NextConfig} */
const config = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/styles/variable.scss";\n@import "@/styles/keyframes.scss";`,
  },
};

export default withBundleAnalyzer(config);
