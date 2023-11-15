import type { Meta, StoryObj } from "@storybook/react";

import { Display } from "@/components/ui";

import ModalWrapper from "./ModalWrapper";

const meta = {
  title: "Components/ModalWrapper",
  component: ModalWrapper,
  argTypes: {
    children: {
      description: "Modal wrapper items",
      options: ["Single", "None"],
      control: { type: "radio" },
      mapping: {
        Single: <Display>Display text</Display>,
        None: null,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ModalWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    children: "Single",
  },
};

export const None: Story = {
  args: {
    children: "None",
  },
};
