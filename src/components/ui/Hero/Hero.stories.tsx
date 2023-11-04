import type { Meta, StoryObj } from "@storybook/react";

import Display from "../Display/Display";
import Hero from "./Hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
  args: {
    children: "Hero",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <Display>Hello world!</Display>,
  },
};
