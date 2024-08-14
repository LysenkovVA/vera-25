import type { Meta, StoryObj } from "@storybook/react";
import BlankItem from "@/entities/Blank/ui/BlankItem/BlankItem";
import { fn } from "@storybook/test";

const meta = {
  title: "entities/Blank/BlankItem",
  component: BlankItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof BlankItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    blank: {
      id: "id",
      name: "This is cool blank",
    },
    onClick: fn(),
  },
};
