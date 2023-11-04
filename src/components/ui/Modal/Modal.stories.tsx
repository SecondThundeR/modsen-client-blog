import type { Meta, StoryObj } from "@storybook/react";

import { Body, Modal } from "@/components/ui";

const meta = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    children: {
      description: "Modal items",
      options: ["Has", "None"],
      control: { type: "radio" },
      mapping: {
        Has: <Body>Display text</Body>,
        None: null,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    children: "Has",
  },
};
