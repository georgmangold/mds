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

import React, { SVGProps } from "react";

const ConsoleCIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`min-icon`}
      fill={"currentcolor"}
      viewBox="0 0 30 35"
      {...props}
    >
      <path
        d="M15.6 1.8q4 0 7.3 1.7T28 8.1L25.1 10q-1.5-2.2-4-3.6t-5.5-1.3a12 12 0 0 0-8.5 3.4 11 11 0 0 0-2.5 3.9q-.9 2.3-.9 5 0 2.6.9 5a11 11 0 0 0 6.3 6.4 13 13 0 0 0 10.2-.4q2.5-1.3 4-3.6l2.8 2.1q-2 2.8-5.1 4.5a15 15 0 0 1-7.1 1.6 16 16 0 0 1-11.2-4.4A15 15 0 0 1 0 17.4q0-3.4 1.2-6.3t3.3-4.9 5-3.2a15 15 0 0 1 6.1-1.2"
        className="minioApplicationName"
      />
    </svg>
  );
};

export default ConsoleCIcon;
