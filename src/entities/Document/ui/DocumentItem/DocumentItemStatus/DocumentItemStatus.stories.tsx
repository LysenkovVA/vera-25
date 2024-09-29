import type { Meta, StoryObj } from "@storybook/react";
import DocumentItemStatus from "@/entities/Document/ui/DocumentItem/DocumentItemStatus/DocumentItemStatus";

const meta = {
  title: "entities/Document/DocumentItem/DocumentItemStatus",
  component: DocumentItemStatus,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DocumentItemStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoDates: Story = {
  args: {
    document: {
      id: "1",
      name: "Document Item",
      isNoEndDate: false,
    },
  },
};

export const StartDateInFutureNoEndDateAndNoUnlimited: Story = {
  args: {
    document: {
      id: "1",
      name: "Document Item",
      startDate: new Date("2100-05-01T00:00:00.000Z"),
      isNoEndDate: false,
    },
  },
};

export const StartDateInPastNoEndDateAndNoUnlimited: Story = {
  args: {
    document: {
      id: "1",
      name: "Document Item",
      startDate: new Date("2020-05-01T00:00:00.000Z"),
      isNoEndDate: false,
    },
  },
};

export const StartDateInPastAndUnlimited: Story = {
  args: {
    document: {
      id: "1",
      name: "Document Item",
      startDate: new Date("2000-05-01T00:00:00.000Z"),
      isNoEndDate: true,
    },
  },
};

export const StartDateInFutureAndUnlimited: Story = {
  args: {
    document: {
      id: "1",
      name: "Document Item",
      startDate: new Date("2100-05-01T00:00:00.000Z"),
      isNoEndDate: true,
    },
  },
};

export const StartDateInPastAndEndDateInFuture: Story = {
  args: {
    document: {
      id: "1",
      name: "Document Item",
      startDate: new Date("2000-05-01T00:00:00.000Z"),
      endDate: new Date("2100-05-01T00:00:00.000Z"),
    },
  },
};

export const StartDateInFutureAndEndDateInFuture: Story = {
  args: {
    document: {
      id: "1",
      name: "Document Item",
      startDate: new Date("2099-05-01T00:00:00.000Z"),
      endDate: new Date("2100-05-01T00:00:00.000Z"),
    },
  },
};

export const StartDateInPastAndEndDateInPast: Story = {
  args: {
    document: {
      id: "1",
      name: "Document Item",
      startDate: new Date("2000-05-01T00:00:00.000Z"),
      endDate: new Date("2001-05-01T00:00:00.000Z"),
    },
  },
};
