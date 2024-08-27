import type { Meta, StoryObj } from "@storybook/react";
import LocationSelector from "../ui/LocationSelector";

const meta = {
  title: "features/LocationSelector",
  component: LocationSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LocationSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
