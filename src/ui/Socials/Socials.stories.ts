import type { Meta, StoryObj } from "@storybook/react";

import Socials from ".";

const meta = {
  title: "Components/Socials",
  component: Socials,
  argTypes: {
    customLinks: {
      description:
        "Custom links for socials elements (Should has exactly the same key, usually lowercase version of social name, so it can override link destination)",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Socials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};

export const CustomFacebook: Story = {
  args: {
    customLinks: {
      facebook: "https://vk.com",
    },
  },
};
