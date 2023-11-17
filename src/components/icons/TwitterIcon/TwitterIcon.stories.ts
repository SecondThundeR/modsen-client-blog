import type { Meta, StoryObj } from "@storybook/react";

import TwitterIcon from ".";

const meta = {
  title: "Icons/TwitterIcon",
  component: TwitterIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TwitterIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};
