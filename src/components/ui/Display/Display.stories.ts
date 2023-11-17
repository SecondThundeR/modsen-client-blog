import type { Meta, StoryObj } from "@storybook/react";

import Display from ".";

const meta = {
  title: "Components/Display",
  component: Display,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "Display text",
      type: "string",
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
    children: "Display",
    font: "sen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Display>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryWithInter: Story = {
  args: {
    font: "inter",
  },
};
