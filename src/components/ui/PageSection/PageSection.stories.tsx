import type { Meta, StoryObj } from "@storybook/react";

import { Display } from "@/components/ui";

import PageSection from "./PageSection";

const meta = {
  title: "Components/PageSection",
  component: PageSection,
  argTypes: {
    children: {
      description: "Page section items",
      options: ["Single", "None"],
      control: { type: "radio" },
      mapping: {
        Single: <Display>Display text</Display>,
        None: null,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageSection>;

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
