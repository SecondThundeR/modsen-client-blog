import type { Meta, StoryObj } from "@storybook/react";

import AuthorLink from ".";

const meta = {
  title: "Components/AuthorLink",
  component: AuthorLink,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    id: {
      description: "Author ID",
      type: "string",
    },
    name: {
      description: "Author name",
      type: "string",
    },
    locale: {
      description: "Author link locale",
      type: "string",
      options: ["ru", "en"],
      control: { type: "radio" },
    },
    bodyString: {
      description: "Author link prefix",
      type: "string",
    },
    color: {
      description: "Author link color",
      type: "string",
      defaultValue: "regular",
      options: ["regular", "purple"],
      control: { type: "radio" },
    },
  },
  args: {
    id: "author-id",
    name: "Author",
    locale: "ru",
    bodyString: "Автор:",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AuthorLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Purple: Story = {
  args: {
    color: "purple",
  },
};
