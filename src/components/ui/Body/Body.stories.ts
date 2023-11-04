import type { Meta, StoryObj } from "@storybook/react";

import Body from "./Body";

const meta = {
  title: "Components/Body",
  component: Body,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "Body text",
      type: "string",
    },
    level: {
      description: "Body size level",
      type: "number",
      defaultValue: 1,
    },
    font: {
      description: "The font family",
      type: "string",
      defaultValue: "inter",
      options: ["sen", "inter"],
      control: { type: "radio" },
    },
  },
  args: {
    level: 1,
    font: "inter",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Body>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body1: Story = {
  args: {
    children: "Body 01",
  },
};

export const Body2: Story = {
  args: {
    children: "Body 02",
    level: 2,
  },
};

export const BodyWithSen: Story = {
  args: {
    children: "Sen body",
    font: "sen",
  },
};
