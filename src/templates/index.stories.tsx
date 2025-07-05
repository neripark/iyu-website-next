import type { Meta, StoryObj } from "@storybook/nextjs";
import { Template } from "./index";

const meta: Meta<typeof Template> = {
  title: "Templates/Template",
  component: Template,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
