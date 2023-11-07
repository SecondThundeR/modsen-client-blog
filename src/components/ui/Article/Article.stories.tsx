import type { Meta, StoryObj } from "@storybook/react";

import { Body, Display } from "@/components/ui";

import Article from "./Article";

const meta = {
  title: "Components/Article",
  component: Article,
  argTypes: {
    gapVariant: {
      description: "Gap sizing between article items",
      type: "string",
      defaultValue: "regular",
      options: ["small", "regular", "large"],
      control: { type: "radio" },
    },
    children: {
      description: "Article wrapper items",
      options: ["Multiple", "None"],
      control: { type: "radio" },
      mapping: {
        Multiple: (
          <>
            <Display>Display text</Display>
            <Body>Body text</Body>
          </>
        ),
        None: null,
      },
    },
  },
  args: {
    children: "Multiple",
    gapVariant: "regular",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
  args: {
    children: "Multiple",
  },
};

export const None: Story = {
  args: {
    children: "None",
  },
};

export const GapSmall: Story = {
  args: {
    children: "Multiple",
    gapVariant: "small",
  },
};

export const GapLarge: Story = {
  args: {
    children: "Multiple",
    gapVariant: "large",
  },
};
