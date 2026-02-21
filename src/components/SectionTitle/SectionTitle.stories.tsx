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

import React, { Fragment } from "react";
import { Meta, StoryFn } from "@storybook/react-webpack5";

import SectionTitle from "./SectionTitle";
import { SectionTitleProps } from "./SectionTitle.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/SectionTitle",
  component: SectionTitle,
  argTypes: {},
} as Meta<typeof SectionTitle>;

const Template: StoryFn<SectionTitleProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <SectionTitle {...args} />
  </StoryThemeProvider>
);

export const Default = {
  render: Template,

  args: {
    icon: <TestIcon />,
    actions: (
      <Fragment>
        <Button id={"test1"}>An Action</Button>
      </Fragment>
    ),
    separator: true,
    children: "Some Title",
  },
};

export const JustTitle = {
  render: Template,

  args: {
    separator: true,
    children: "Some Title",
  },
};

export const NoActions = {
  render: Template,

  args: {
    icon: <TestIcon />,
    separator: true,
    children: "Some Title",
  },
};

export const NoSeparator = {
  render: Template,

  args: {
    icon: <TestIcon />,
    separator: false,
    children: "Some Title",
  },
};

export const TitleWithCustomStyles = {
  render: Template,

  args: {
    children: "Just a Title with custom styles",
    icon: <TestIcon />,
    separator: true,
    sx: {
      color: "#f09",
    },
  },
};
