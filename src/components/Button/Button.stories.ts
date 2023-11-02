import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["primary", "regular"],
      control: { type: "radio" },
    },
  },
  args: {
    text: "Button",
    variant: "primary",
    onClick: () => console.log("Clicked"),
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
