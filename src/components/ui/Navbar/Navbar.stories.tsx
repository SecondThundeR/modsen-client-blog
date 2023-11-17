import type { Meta, StoryObj } from "@storybook/react";

import { Body, Button } from "@/components/ui";

import Navbar from ".";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    titleSlot: {
      description: "Navbar title slot",
      options: ["Regular", "None"],
      control: { type: "radio" },
      mapping: {
        Regular: <Body>Title slot</Body>,
        None: null,
      },
    },
    linksSlot: {
      description: "Navbar links slot",
      options: ["Regular", "None"],
      control: { type: "radio" },
      mapping: {
        Regular: <Body>Links slot</Body>,
        None: null,
      },
    },
    controlsSlot: {
      description: "Navbar controls slot",
      options: ["Regular", "None"],
      control: { type: "radio" },
      mapping: {
        Regular: <Button>Controls slot</Button>,
        None: null,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    titleSlot: "Regular",
    linksSlot: "Regular",
    controlsSlot: "Regular",
  },
};
