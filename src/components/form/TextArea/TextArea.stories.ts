import type { Meta, StoryObj } from "@storybook/react";

import TextArea from ".";

const meta = {
  title: "Form/TextArea",
  component: TextArea,
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
} satisfies Meta<typeof TextArea>;

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
