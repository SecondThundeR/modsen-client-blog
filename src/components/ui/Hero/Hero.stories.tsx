import type { Meta, StoryObj } from "@storybook/react";

import { Body, Display } from "@/components/ui";

import Hero from "./Hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
  argTypes: {
    children: {
      description: "Hero items",
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
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

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
