import type { Meta, StoryObj } from "@storybook/react";
import { BlanksList } from "@/features/Blanks/BlanksList";

const meta = {
  title: "entities/Blank/BlanksList",
  component: BlanksList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BlanksList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
