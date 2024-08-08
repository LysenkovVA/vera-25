import type { Meta, StoryObj } from "@storybook/react";
import RequirementCard from "@/components/RequirementsChecker/ui/RequirementCard/RequirementCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/RequirementCard",
  component: RequirementCard,
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
} satisfies Meta<typeof RequirementCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    groupName: "Требования к выходным данным ЗПП",
    requirement: {
      name: "Наименование полиграфического предприятия соответствует учредительным документам",
      notes:
        "Допускается не указывать организационно-правовую форму полиграфического предприятия. При указании наименования полиграфического предприятия может быть указано полное или сокращенное (при наличии) наименование филиала полиграфического предприятия",
    },
  },
};
