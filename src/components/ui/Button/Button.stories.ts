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
    disabled: {
      description: "Button disabled state",
      defaultValue: "false",
      type: "boolean",
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
    disabled: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const Regular: Story = {
  args: {
    variant: "regular",
  },
};

export const RegularDisabled: Story = {
  args: {
    variant: "regular",
    disabled: true,
  },
};
