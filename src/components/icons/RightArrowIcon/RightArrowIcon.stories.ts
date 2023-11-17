import type { Meta, StoryObj } from "@storybook/react";

import RightArrowIcon from ".";

const meta = {
  title: "Icons/RightArrowIcon",
  component: RightArrowIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RightArrowIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};
