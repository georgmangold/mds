// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";
import { Meta, StoryFn } from "@storybook/react-webpack5";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

import TestIcon from "../../utils/TestIcon";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Forms/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Button {...args} onClick={() => alert("You clicked me!")} />
    <br />
    <Button {...args}>With Children</Button>
  </StoryThemeProvider>
);

export const Default = {
  render: Template,

  args: {
    disabled: false,
    label: "Test Button",
    variant: "regular",
  },
};

export const CallToAction = {
  render: Template,

  args: {
    disabled: false,
    label: "Call to Action",
    variant: "callAction",
  },
};

export const Secondary = {
  render: Template,

  args: {
    disabled: false,
    label: "Secondary",
    variant: "secondary",
  },
};

export const Text = {
  render: Template,

  args: {
    disabled: false,
    label: "Text Button",
    variant: "text",
  },
};

export const SubAction = {
  render: Template,

  args: {
    disabled: false,
    label: "Text Button",
    variant: "subAction",
  },
};

export const DefaultIcon = {
  render: Template,

  args: {
    disabled: false,
    label: "Test Button",
    variant: "regular",
    icon: <TestIcon />,
  },
};

export const CallToActionIcon = {
  render: Template,

  args: {
    disabled: false,
    label: "Call to Action",
    variant: "callAction",
    icon: <TestIcon />,
  },
};

export const SecondaryIcon = {
  render: Template,

  args: {
    disabled: false,
    label: "Secondary",
    variant: "secondary",
    icon: <TestIcon />,
  },
};

export const FullWidth = {
  render: Template,

  args: {
    disabled: false,
    label: "Test Button",
    variant: "regular",
    fullWidth: true,
    icon: <TestIcon />,
  },
};

export const IconOnly = {
  render: Template,

  args: {
    disabled: false,
    variant: "regular",
    icon: <TestIcon />,
  },
};
