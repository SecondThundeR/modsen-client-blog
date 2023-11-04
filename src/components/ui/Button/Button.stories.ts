import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "Button text",
      type: "string",
    },
    variant: {
      description: "Button style variant",
      defaultValue: "primary",
      type: "string",
      options: ["primary", "regular"],
      control: { type: "radio" },
    },
  },
  args: {
    children: "Button",
    variant: "primary",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Regular: Story = {
  args: {
    variant: "regular",
  },
};
