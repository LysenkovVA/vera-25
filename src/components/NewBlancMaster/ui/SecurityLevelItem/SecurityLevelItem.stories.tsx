import type { Meta, StoryObj } from "@storybook/react";
import SecurityLevelItem from "@/components/NewBlancMaster/ui/SecurityLevelItem/SecurityLevelItem";

const meta = {
  title: "components/NewBlancMaster/SecurityLevelItem",
  component: SecurityLevelItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: {},
} satisfies Meta<typeof SecurityLevelItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    id: 1,
    name: "А",
  },
};
