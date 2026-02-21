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

import CommentBox from "./CommentBox";
import { CommentBoxProps } from "./CommentBox.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormLayout from "../FormLayout/FormLayout";

export default {
  title: "MDS/Forms/CommentBox",
  component: CommentBox,
  argTypes: {},
} as Meta<typeof CommentBox>;

const Template: StoryFn<CommentBoxProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <FormLayout>
      <CommentBox {...args} />
    </FormLayout>
  </StoryThemeProvider>
);

export const Default = {
  render: Template,

  args: {
    label: "A Comment Box",
    required: true,
    placeholder: "A Placeholder",
  },
};

export const DisabledInput = {
  render: Template,

  args: {
    label: "A Comment Box",
    required: true,
    disabled: true,
    value: "Demo Text",
  },
};

export const ErrorInput = {
  render: Template,

  args: {
    label: "Input with Error",
    required: true,
    error: "This is an error message",
  },
};

export const WithTooltip = {
  render: Template,

  args: {
    label: "A Comment Box",
    required: true,
    tooltip: "Tooltip text",
  },
};
