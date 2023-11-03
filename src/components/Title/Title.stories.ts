import type { Meta, StoryObj } from "@storybook/react";

import Title from "./Title";

const meta = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: "Heading H1",
    headingLevel: 1,
  },
};

export const Heading2: Story = {
  args: {
    children: "Heading H2",
    headingLevel: 2,
  },
};

export const Heading3: Story = {
  args: {
    children: "Heading H3",
    headingLevel: 3,
  },
};

export const Heading4: Story = {
  args: {
    children: "Heading H4",
    headingLevel: 4,
  },
};

export const Heading5: Story = {
  args: {
    children: "Heading H5",
    headingLevel: 5,
  },
};

export const Heading6: Story = {
  args: {
    children: "Heading H6",
    headingLevel: 6,
  },
};
