// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";

export default {
  title: "MDS/Information/ProgressBar",
  component: ProgressBar,
  argTypes: {},
} as Meta<typeof ProgressBar>;

const Template: StoryFn<ProgressBarProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ProgressBar {...args} />
  </StoryThemeProvider>
);

export const Default = {
  render: Template,

  args: {
    value: 30,
    variant: "determinate",
  },
};

export const WithProgressLabel = {
  render: Template,

  args: {
    value: 30,
    variant: "determinate",
    progressLabel: true,
  },
};

export const NotificationLabel = {
  render: Template,

  args: {
    value: 30,
    variant: "determinate",
    progressLabel: true,
    notificationLabel:
      "This notification label will change it's color depending on the color state",
  },
};

export const Indeterminate = {
  render: Template,

  args: {
    variant: "indeterminate",
  },
};

export const CustomHeight = {
  render: Template,

  args: {
    variant: "indeterminate",
    barHeight: 3,
  },
};

export const TransparentBackground = {
  render: Template,

  args: {
    variant: "indeterminate",
    barHeight: 5,
    transparentBG: true,
  },
};
