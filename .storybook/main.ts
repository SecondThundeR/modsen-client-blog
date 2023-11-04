import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  previewHead: (head) => `
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Roboto+Serif:opsz,wght@8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800&family=Sen:wght@700&display=swap" rel="stylesheet">
    <style>
      :root {
        --sen-font: Sen, sans-serif;
        --inter-font: Inter, serif;
      }

      html, body {
        font-family: Sen, Inter, sans-serif;
      }
    </style>
  `,
};
export default config;
