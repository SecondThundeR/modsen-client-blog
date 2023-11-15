import type { Meta, StoryObj } from "@storybook/react";

import { Display } from "@/components/ui";

import ArticleWrapper from "./ArticleWrapper";

const meta = {
  title: "Components/ArticleWrapper",
  component: ArticleWrapper,
  argTypes: {
    isNarrow: {
      description: "Controls width of wrapper",
      type: "boolean",
      defaultValue: false,
    },
    children: {
      description: "Article wrapper items",
      options: ["Single", "None"],
      control: { type: "radio" },
      mapping: {
        Single: <Display>Display text</Display>,
        None: null,
      },
    },
  },
  args: {
    isNarrow: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    children: "Single",
  },
};

export const None: Story = {
  args: {
    children: "None",
  },
};
