import type { Meta, StoryObj } from "@storybook/react";

import { Body, Display } from "@/components/ui";

import Alert from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: {
      description: "Alert variant",
      options: ["success", "error"],
      control: { type: "radio" },
    },
    children: {
      description: "Alert items",
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
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessSingle: Story = {
  args: {
    children: "Single",
    variant: "success",
  },
};

export const SuccessMultiple: Story = {
  args: {
    children: "Multiple",
    variant: "success",
  },
};

export const SuccessNone: Story = {
  args: {
    children: "None",
    variant: "success",
  },
};

export const ErrorSingle: Story = {
  args: {
    children: "Single",
    variant: "error",
  },
};

export const ErrorMultiple: Story = {
  args: {
    children: "Multiple",
    variant: "error",
  },
};

export const ErrorNone: Story = {
  args: {
    children: "None",
    variant: "error",
  },
};
