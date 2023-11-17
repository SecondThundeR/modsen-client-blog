import type { Meta, StoryObj } from "@storybook/react";

import Cap from ".";

const meta = {
  title: "Components/Cap",
  component: Cap,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "Cap text",
      type: "string",
    },
    weight: {
      description: "Cap weight level",
      type: "string",
      defaultValue: "regular",
      options: ["regular", "semibold", "bold", "black"],
      control: { type: "radio" },
    },
  },
  args: {
    weight: "regular",
    children: "Cap",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Cap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CapRegular: Story = {
  args: {
    children: "Cap Regular",
  },
};

export const CapSemibold: Story = {
  args: {
    children: "Cap Semibold",
    weight: "semibold",
  },
};

export const CapBold: Story = {
  args: {
    children: "Cap Bold",
    weight: "bold",
  },
};

export const CapBlack: Story = {
  args: {
    children: "Cap Black",
    weight: "black",
  },
};
