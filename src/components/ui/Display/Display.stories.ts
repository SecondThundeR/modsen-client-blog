import type { Meta, StoryObj } from "@storybook/react";

import Display from "./Display";

const meta = {
  title: "Components/Display",
  component: Display,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Display",
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
