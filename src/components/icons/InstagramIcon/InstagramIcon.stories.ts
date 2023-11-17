import type { Meta, StoryObj } from "@storybook/react";

import InstagramIcon from ".";

const meta = {
  title: "Icons/InstagramIcon",
  component: InstagramIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InstagramIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};
