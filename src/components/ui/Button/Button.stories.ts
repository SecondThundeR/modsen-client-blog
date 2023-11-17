import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

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
    unstyled: {
      description: "Removes styles for button, except cursor styles",
      type: "boolean",
      defaultValue: false,
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
    size: {
      description: "Button size variant",
      defaultValue: "regular",
      type: "string",
      options: ["regular", "large"],
      control: { type: "radio" },
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "regular",
    disabled: false,
    unstyled: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryUnstyled: Story = {
  args: {
    unstyled: true,
  },
};

export const PrimaryLarge: Story = {
  args: {
    size: "large",
  },
};

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

export const RegularLarge: Story = {
  args: {
    variant: "regular",
    size: "large",
  },
};

export const RegularDisabled: Story = {
  args: {
    variant: "regular",
    disabled: true,
  },
};
