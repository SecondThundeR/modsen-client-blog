import type { Meta, StoryObj } from "@storybook/react";

import LeftArrowIcon from ".";

const meta = {
  title: "Icons/LeftArrowIcon",
  component: LeftArrowIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LeftArrowIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};
