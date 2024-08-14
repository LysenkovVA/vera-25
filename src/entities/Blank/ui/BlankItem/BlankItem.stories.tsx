import type { Meta, StoryObj } from "@storybook/react";
import BlankItem from "@/entities/Blank/ui/BlankItem/BlankItem";
import { fn } from "@storybook/test";
import { blankStorybook } from "@/shared/storybook/blank";

const meta = {
  title: "entities/Blank/BlankItem",
  component: BlankItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BlankItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    blank: blankStorybook,
    onClick: fn(),
  },
};
