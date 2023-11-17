import type { Meta, StoryObj } from "@storybook/react";

import Label from ".";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "Label text",
      type: "string",
    },
    font: {
      description: "The font family",
      type: "string",
      defaultValue: "inter",
      options: ["sen", "inter"],
      control: { type: "radio" },
    },
  },
  args: {
    children: "Label",
    font: "inter",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryWithSen: Story = {
  args: {
    font: "sen",
  },
};
