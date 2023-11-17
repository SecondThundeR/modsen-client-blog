import type { Meta, StoryObj } from "@storybook/react";

import Input from ".";

const meta = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    fullPadding: {
      description: "Defines if input has equalent padding",
      defaultValue: false,
      type: "boolean",
    },
    errorMessage: {
      description: "Displays error message under input",
      type: "string",
      defaultValue: undefined,
    },
  },
  args: {
    fullPadding: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};

export const RegularFullPadding: Story = {
  args: {
    fullPadding: true,
  },
};

export const RegularWithErrorMessage: Story = {
  args: {
    errorMessage: "Test message",
  },
};
