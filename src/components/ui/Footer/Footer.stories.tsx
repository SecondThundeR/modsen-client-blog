import type { Meta, StoryObj } from "@storybook/react";

import { Body } from "@/components/ui";

import Footer from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    titleSlot: {
      description: "Footer title slot",
      options: ["Regular", "None"],
      control: { type: "radio" },
      mapping: {
        Regular: <Body>Title slot</Body>,
        None: null,
      },
    },
    linksSlot: {
      description: "Footer links slot",
      options: ["Regular", "None"],
      control: { type: "radio" },
      mapping: {
        Regular: <Body>Links slot</Body>,
        None: null,
      },
    },
    ctaSlot: {
      description: "Footer CTA block slot",
      options: ["Regular", "None"],
      control: { type: "radio" },
      mapping: {
        Regular: <Body>CTA block slot</Body>,
        None: null,
      },
    },
    contactInfoSlot: {
      description: "Footer contact info slot",
      options: ["Regular", "None"],
      control: { type: "radio" },
      mapping: {
        Regular: <Body>Contact info slot</Body>,
        None: null,
      },
    },
    socialButtonsSlot: {
      description: "Footer social buttons slot",
      options: ["Regular", "None"],
      control: { type: "radio" },
      mapping: {
        Regular: <Body>Social buttons slot</Body>,
        None: null,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    titleSlot: "Regular",
    linksSlot: "Regular",
    ctaSlot: "Regular",
    contactInfoSlot: "Regular",
    socialButtonsSlot: "Regular",
  },
};
