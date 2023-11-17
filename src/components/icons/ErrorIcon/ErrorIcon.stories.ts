import type { Meta, StoryObj } from "@storybook/react";

import ErrorIcon from ".";

const meta = {
  title: "Icons/ErrorIcon",
  component: ErrorIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};
