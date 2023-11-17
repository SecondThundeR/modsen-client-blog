import type { Meta, StoryObj } from "@storybook/react";

import Spinner from ".";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      description: "Spinner color",
      type: "string",
      defaultValue: "white",
      options: ["white", "black"],
      control: { type: "radio" },
    },
  },
  args: {
    color: "white",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    backgrounds: { default: "black" },
  },
};

export const PrimaryBlack: Story = {
  args: {
    color: "black",
  },
};
