import type { Meta, StoryObj } from "@storybook/react";

import Body from "./Body";

const meta = {
  title: "Components/Body",
  component: Body,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Body>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body1: Story = {
  args: {
    children: "Body 01",
    level: 1,
  },
};

export const Body2: Story = {
  args: {
    children: "Body 02",
    level: 2,
  },
};
