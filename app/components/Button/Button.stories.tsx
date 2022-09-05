import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  Icon: HiOutlineArrowSmRight,
  variant: "secondary",
  label: "Secondary",
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  label: "Default",
};
