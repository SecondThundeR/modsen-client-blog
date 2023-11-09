import type { Meta, StoryObj } from "@storybook/react";
import testImage from "public/assets/authors/dianne-russel.png";

import Avatar from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    width: {
      description: "Width of avatar",
      type: "number",
    },
    height: {
      description: "Height of avatar",
      type: "number",
    },
    src: {
      description: "Path to image or static import",
    },
    alt: {
      description: "Alternative description",
      type: "string",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    width: 48,
    height: 48,
    src: testImage,
    alt: "Test alt",
  },
};
