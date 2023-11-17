import type { Meta, StoryObj } from "@storybook/react";

import Heading from ".";

const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "Heading text",
      type: "string",
    },
    level: {
      description: "Heading size level",
      type: "number",
      defaultValue: 1,
    },
    font: {
      description: "The font family",
      type: "string",
      defaultValue: "sen",
      options: ["sen", "inter"],
      control: { type: "radio" },
    },
  },
  args: {
    level: 1,
    font: "sen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: "Heading H1",
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

export const HeadingWithInter: Story = {
  args: {
    children: "Heading H1",
    font: "inter",
  },
};
