import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: "Heading H1",
    level: 1,
  },
};

export const Heading2: Story = {
  args: {
    children: "Heading H2",
    level: 2,
  },
};

export const Heading3: Story = {
  args: {
    children: "Heading H3",
    level: 3,
  },
};

export const Heading4: Story = {
  args: {
    children: "Heading H4",
    level: 4,
  },
};

export const Heading5: Story = {
  args: {
    children: "Heading H5",
    level: 5,
  },
};

export const Heading6: Story = {
  args: {
    children: "Heading H6",
    level: 6,
  },
};
