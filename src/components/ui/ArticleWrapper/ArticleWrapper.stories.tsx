import type { Meta, StoryObj } from "@storybook/react";

import { Display } from "@/components/ui";

import ArticleWrapper from "./ArticleWrapper";

const meta = {
  title: "Components/ArticleWrapper",
  component: ArticleWrapper,
  argTypes: {
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
