import type { Meta, StoryObj } from "@storybook/react";

import SuccessIcon from ".";

const meta = {
  title: "Icons/SuccessIcon",
  component: SuccessIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SuccessIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};
