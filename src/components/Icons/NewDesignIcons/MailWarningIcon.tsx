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

const MailWarningIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.22894 2.56222C1.61026 2.1809 2.12745 1.96667 2.66672 1.96667H13.3334C13.8727 1.96667 14.3898 2.1809 14.7712 2.56222C15.1525 2.94355 15.3667 3.46073 15.3667 4.00001V4.65489C15.3668 4.66231 15.3668 4.66973 15.3667 4.67714V7.00001C15.3667 7.38661 15.0533 7.70001 14.6667 7.70001C14.2801 7.70001 13.9667 7.38661 13.9667 7.00001V5.94087L9.05838 9.05988C8.74116 9.25862 8.37439 9.36402 8.00006 9.36402C7.62572 9.36402 7.25896 9.25861 6.94174 9.05987L6.93795 9.05749L2.03339 5.94087V12C2.03339 12.3467 2.31999 12.6333 2.66672 12.6333H11.0001C11.3867 12.6333 11.7001 12.9467 11.7001 13.3333C11.7001 13.7199 11.3867 14.0333 11.0001 14.0333H2.66672C1.54679 14.0333 0.63339 13.1199 0.63339 12V4.67717C0.633271 4.66974 0.633271 4.6623 0.63339 4.65486V4.00001C0.63339 3.46073 0.847615 2.94355 1.22894 2.56222ZM2.03339 4.28212L7.68656 7.87443C7.78063 7.93298 7.88923 7.96402 8.00006 7.96402C8.11088 7.96402 8.21948 7.93298 8.31355 7.87443C8.31406 7.87412 8.31457 7.8738 8.31507 7.87348L13.9667 4.28212V4.00001C13.9667 3.83204 13.9 3.67095 13.7812 3.55217C13.6624 3.4334 13.5014 3.36667 13.3334 3.36667H2.66672C2.49875 3.36667 2.33766 3.4334 2.21889 3.55217C2.10012 3.67095 2.03339 3.83204 2.03339 4.00001V4.28212ZM13.3334 8.63334C13.72 8.63334 14.0334 8.94674 14.0334 9.33334V12C14.0334 12.3866 13.72 12.7 13.3334 12.7C12.9468 12.7 12.6334 12.3866 12.6334 12V9.33334C12.6334 8.94674 12.9468 8.63334 13.3334 8.63334ZM13.3334 13.9667C13.72 13.9667 14.0334 14.2801 14.0334 14.6667V14.6733C14.0334 15.0599 13.72 15.3733 13.3334 15.3733C12.9468 15.3733 12.6334 15.0599 12.6334 14.6733V14.6667C12.6334 14.2801 12.9468 13.9667 13.3334 13.9667Z"
      fill="currentColor"
    />
  </svg>
);
export default MailWarningIcon;