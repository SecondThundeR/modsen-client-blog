import type { Meta, StoryObj } from "@storybook/react";

import { Body, Display } from "@/components/ui";

import Header from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  argTypes: {
    gap: {
      description: "Controls size of gap between elements",
      options: ["regular", "large", "extralarge"],
      control: { type: "radio" },
      defaultValue: "regular",
    },
    children: {
      description: "Header items",
      options: ["Single", "Multiple", "None"],
      control: { type: "radio" },
      mapping: {
        Single: <Display>Display text</Display>,
        Multiple: (
          <>
            <Display>Display text</Display>
            <Body>Body text</Body>
          </>
        ),
        None: null,
      },
    },
  },
  args: {
    gap: "regular",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    children: "Single",
  },
};

export const Multiple: Story = {
  args: {
    children: "Multiple",
  },
};

export const None: Story = {
  args: {
    children: "None",
  },
};
