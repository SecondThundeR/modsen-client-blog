import type { Meta, StoryObj } from "@storybook/react";

import { Body, Display } from "@/components/ui";

import PageSection from ".";

const meta = {
  title: "Components/PageSection",
  component: PageSection,
  argTypes: {
    fullWidth: {
      description: "Setting that controls wrapper width",
      type: "boolean",
      defaultValue: false,
    },
    align: {
      description: "Controls elements alignment",
      options: ["start", "center", "end"],
      defaultValue: "center",
      control: { type: "radio" },
    },
    sidePaddings: {
      description:
        "Controls size of side paddings (Works only, when full width is enabled)",
      options: ["regular", "large"],
      defaultValue: "regular",
      control: { type: "radio" },
    },
    gap: {
      description: "Controls size of flexbox gap",
      options: ["small", "regular"],
      defaultValue: "regular",
      control: { type: "radio" },
    },
    children: {
      description: "Page section items",
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
    fullWidth: false,
    align: "center",
    sidePaddings: "regular",
    gap: "regular",
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
