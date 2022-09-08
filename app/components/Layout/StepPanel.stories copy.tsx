import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StepPanel } from "./StepPanel";

export default {
  title: "Components/StepPanel",
  component: StepPanel,
} as ComponentMeta<typeof StepPanel>;

const Template: ComponentStory<typeof StepPanel> = (args) => (
  <div className="bg-gray-100 w-full h-screen flex justify-center items-center px-5 py-5">
    <StepPanel {...args}>Test</StepPanel>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  number: 1,
  title: "First step",
  subtitle: "Something here",
};
