import type { Meta, StoryObj } from "@storybook/react";

import { Body, Button } from "@/components/ui";

import Header from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  argTypes: {
    titleSlot: {
      description: "Header title slot",
      options: ["Regular", "None"],
      control: { type: "radio" },
      mapping: {
        Regular: <Body>Title slot</Body>,
        None: null,
      },
    },
    linksSlot: {
      description: "Header links slot",
      options: ["Regular", "None"],
      control: { type: "radio" },
      mapping: {
        Regular: <Body>Links slot</Body>,
        None: null,
      },
    },
    controlsSlot: {
      description: "Header controls slot",
      options: ["Regular", "None"],
      control: { type: "radio" },
      mapping: {
        Regular: <Button>Controls slot</Button>,
        None: null,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    titleSlot: "Regular",
    linksSlot: "Regular",
    controlsSlot: "Regular",
  },
};
