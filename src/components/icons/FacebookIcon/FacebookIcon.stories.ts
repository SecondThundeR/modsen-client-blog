import type { Meta, StoryObj } from "@storybook/react";

import FacebookIcon from ".";

const meta = {
  title: "Icons/FacebookIcon",
  component: FacebookIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FacebookIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};
