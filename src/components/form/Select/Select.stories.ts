import type { Meta, StoryObj } from "@storybook/react";

import Select from ".";

const DEFAULT_OPTIONS = [
  {
    id: "test",
    name: "test",
    value: "test",
  },
];
const meta = {
  title: "Form/Select",
  component: Select,
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
    options: DEFAULT_OPTIONS,
    fullPadding: false,
  },
} satisfies Meta<typeof Select>;

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
