import type { Meta, StoryObj } from "@storybook/react";

import List from ".";

const meta = {
  title: "Components/List",
  component: List,
  argTypes: {
    elements: {
      description: "List elements",
    },
  },
  args: {
    elements: ["element-1", "element-2", "element-3"],
  },
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};
