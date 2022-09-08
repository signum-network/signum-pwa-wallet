import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoBox } from "./InfoBox";

export default {
  title: "Components/InfoBox",
  component: InfoBox,
} as ComponentMeta<typeof InfoBox>;

const Template: ComponentStory<typeof InfoBox> = (args) => (
  <InfoBox {...args}>
    Please store this passphrase in a secure place. This passphrase is needed in
    order to access your Signum account.
  </InfoBox>
);

export const Default = Template.bind({});

Default.args = {};
