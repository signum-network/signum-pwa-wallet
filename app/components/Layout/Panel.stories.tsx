import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Panel } from "./Panel";

export default {
  title: "Components/Panel",
  component: Panel,
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => (
  <div className="bg-gray-100 w-full h-screen flex justify-center items-center px-5 py-5">
    <Panel {...args}>Test</Panel>
  </div>
);

export const Default = Template.bind({});

Default.args = {};
