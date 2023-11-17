import type { Meta, StoryObj } from "@storybook/react";

import Body from ".";

const meta = {
  title: "Components/Body",
  component: Body,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "Body text",
      type: "string",
    },
    level: {
      description: "Body size level",
      type: "number",
      defaultValue: 1,
    },
    color: {
      description: "Body color",
      type: "string",
      defaultValue: "inherit",
      options: ["inherit", "mediumGray", "darkGray"],
      control: { type: "radio" },
    },
    font: {
      description: "The font family",
      type: "string",
      defaultValue: "inter",
      options: ["sen", "inter"],
      control: { type: "radio" },
    },
    isSecondary: {
      description: "Body secondary style",
      type: "boolean",
      defaultValue: false,
    },
  },
  args: {
    level: 1,
    font: "inter",
    color: "inherit",
    isSecondary: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Body>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body1: Story = {
  args: {
    children: "Body 01",
  },
};

export const Body2: Story = {
  args: {
    children: "Body 02",
    level: 2,
  },
};

export const BodyWithSen: Story = {
  args: {
    children: "Sen body",
    font: "sen",
  },
};

export const MediumGrayBody: Story = {
  args: {
    children: "Medium gray body",
    color: "mediumGray",
  },
};

export const DarkGrayBody: Story = {
  args: {
    children: "Dark gray body",
    color: "darkGray",
  },
};

export const SecondaryBody: Story = {
  args: {
    children: "Secondary body",
    isSecondary: true,
  },
};
