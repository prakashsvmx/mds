// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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

import * as React from "react";
import { SVGProps } from "react";

const ClipboardPenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.03333 2.03333V3.3H9.96667V2.03333H6.03333ZM11.3663 1.96666C11.3486 1.22728 10.7436 0.633331 10 0.633331H6C5.25635 0.633331 4.65143 1.22728 4.63373 1.96666H4C3.46073 1.96666 2.94354 2.18089 2.56222 2.56221C2.18089 2.94354 1.96667 3.46072 1.96667 4V9C1.96667 9.3866 2.28007 9.7 2.66667 9.7C3.05327 9.7 3.36667 9.3866 3.36667 9V4C3.36667 3.83203 3.43339 3.67094 3.55217 3.55216C3.67094 3.43339 3.83203 3.36666 4 3.36666H4.63373C4.65143 4.10605 5.25635 4.7 6 4.7H10C10.7436 4.7 11.3486 4.10605 11.3663 3.36666H12C12.168 3.36666 12.3291 3.43339 12.4478 3.55216C12.5666 3.67094 12.6333 3.83203 12.6333 4V13.3333C12.6333 13.5013 12.5666 13.6624 12.4478 13.7812C12.3291 13.8999 12.168 13.9667 12 13.9667H8.33333C7.94673 13.9667 7.63333 14.2801 7.63333 14.6667C7.63333 15.0533 7.94673 15.3667 8.33333 15.3667H12C12.5393 15.3667 13.0565 15.1524 13.4378 14.7711C13.8191 14.3898 14.0333 13.8726 14.0333 13.3333V4C14.0333 3.46072 13.8191 2.94354 13.4378 2.56221C13.0565 2.18089 12.5393 1.96666 12 1.96666H11.3663ZM7.93333 8.68578C7.74391 8.68578 7.56225 8.76103 7.42831 8.89497L3.96541 12.3579L3.62872 13.7046L4.97546 13.3679L8.43836 9.90502C8.5723 9.77108 8.64755 9.58942 8.64755 9.4C8.64755 9.21058 8.5723 9.02891 8.43836 8.89497C8.30442 8.76103 8.12275 8.68578 7.93333 8.68578ZM6.43836 7.90502C6.83485 7.50853 7.37261 7.28578 7.93333 7.28578C8.49406 7.28578 9.03182 7.50853 9.42831 7.90502C9.8248 8.30151 10.0475 8.83927 10.0475 9.4C10.0475 9.96072 9.8248 10.4985 9.42831 10.895L5.82831 14.495C5.7386 14.5847 5.62619 14.6483 5.50311 14.6791L2.83644 15.3458C2.5979 15.4054 2.34556 15.3355 2.17169 15.1616C1.99783 14.9878 1.92793 14.7354 1.98757 14.4969L2.65423 11.8302C2.685 11.7071 2.74865 11.5947 2.83836 11.505L6.43836 7.90502Z"
      fill="currentColor"
    />
  </svg>
);
export default ClipboardPenIcon;