import type { Meta, StoryObj } from "@storybook/react";

import LinkedInIcon from ".";

const meta = {
  title: "Icons/LinkedInIcon",
  component: LinkedInIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LinkedInIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};
