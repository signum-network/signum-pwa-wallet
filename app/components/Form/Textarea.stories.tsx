import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Textarea } from "./Textarea";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export default {
  title: "Form/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Field label",
};
